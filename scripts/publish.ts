/**
 * Publication automatique d'articles Markdown vers Medium (et optionnellement Blogger).
 *
 * Usage:
 *   pnpm publish:blog                        # publie tous les drafts dont status=publish
 *   pnpm publish:blog --file <chemin.md>     # publie un fichier spécifique
 *   pnpm publish:blog --dry-run              # aperçu sans publier
 *   pnpm publish:blog --list                 # liste les drafts disponibles
 *
 * Variables d'environnement requises (dans .env.local) :
 *   MEDIUM_TOKEN=votre_token_d_integration_medium
 *   BLOGGER_API_KEY=votre_clé_api_google    (optionnel)
 *   BLOGGER_BLOG_ID=id_de_votre_blog        (optionnel)
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MediumClient, PostContentFormat, PostPublishStatus } from "medium-sdk";

// ─── Config ──────────────────────────────────────────────────────────────────

const DRAFTS_DIR = path.resolve("blog/drafts");
const PUBLISHED_DIR = path.resolve("blog/published");

function loadEnv() {
  const envPath = path.resolve(".env.local");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    const val = line.slice(eq + 1).trim();
    if (key) process.env[key] = val;
  }
}

// ─── Medium (SDK officiel) ────────────────────────────────────────────────────

function mediumGetUser(client: InstanceType<typeof MediumClient>): Promise<{ id: string; name: string }> {
  return new Promise((resolve, reject) => {
    client.getUser((err: Error | null, user: { id: string; name: string }) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}

function mediumCreatePost(
  client: InstanceType<typeof MediumClient>,
  authorId: string,
  title: string,
  content: string,
  tags: string[],
  canonicalUrl: string
): Promise<{ url: string }> {
  return new Promise((resolve, reject) => {
    client.createPost(
      {
        userId: authorId,
        title,
        contentFormat: PostContentFormat.MARKDOWN,
        content,
        tags: tags.slice(0, 5),
        canonicalUrl,
        publishStatus: PostPublishStatus.DRAFT,
      },
      (err: Error | null, post: { url: string }) => {
        if (err) reject(err);
        else resolve(post);
      }
    );
  });
}

async function publishToMedium(
  token: string,
  title: string,
  content: string,
  tags: string[],
  canonicalUrl: string,
  dryRun: boolean
): Promise<string> {
  if (dryRun) {
    console.log(`  [dry-run] Medium: "${title}"`);
    console.log(`  Tags: ${tags.join(", ")}`);
    console.log(`  Canonical: ${canonicalUrl}`);
    return "dry-run";
  }

  const client = new MediumClient({ clientId: "", clientSecret: "" });
  client.setAccessToken(token);

  const user = await mediumGetUser(client);
  console.log(`  Medium user: ${user.name}`);

  const post = await mediumCreatePost(client, user.id, title, content, tags, canonicalUrl);
  return post.url;
}

// ─── Blogger (REST direct — l'API Google n'a pas de SDK Node officiel léger) ──

async function publishToBlogger(
  apiKey: string,
  blogId: string,
  title: string,
  content: string,
  dryRun: boolean
): Promise<string> {
  if (dryRun) {
    console.log(`  [dry-run] Blogger: "${title}"`);
    return "dry-run";
  }

  const html = content
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/^\- (.+)$/gm, "<li>$1</li>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|l|c])(.+)$/gm, "<p>$1</p>");

  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind: "blogger#post", title, content: html }),
    }
  );

  if (!res.ok) throw new Error(`Blogger: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { url: string };
  return data.url;
}

// ─── Core ─────────────────────────────────────────────────────────────────────

async function processFile(filePath: string, dryRun: boolean) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data: fm, content } = matter(raw);

  const title = fm.title as string;
  const tags = (fm.tags as string[]) ?? [];
  const canonicalUrl = (fm.canonicalUrl as string) ?? "";
  const publishTo = (fm.publishTo as string[]) ?? [];
  const status = (fm.status as string) ?? "draft";

  if (status !== "publish" && !dryRun) {
    console.log(`  ⏭  Skipped (status=${status}): ${path.basename(filePath)}`);
    return;
  }

  console.log(`\n📄 ${path.basename(filePath)}`);
  console.log(`   "${title}"`);

  if (publishTo.includes("medium")) {
    const token = process.env.MEDIUM_TOKEN;
    if (!token) {
      console.warn("  ⚠  MEDIUM_TOKEN manquant dans .env.local");
    } else {
      const url = await publishToMedium(token, title, content, tags, canonicalUrl, dryRun);
      console.log(`  ✅ Medium: ${url}`);
    }
  }

  if (publishTo.includes("blogger")) {
    const apiKey = process.env.BLOGGER_API_KEY;
    const blogId = process.env.BLOGGER_BLOG_ID;
    if (!apiKey || !blogId) {
      console.warn("  ⚠  BLOGGER_API_KEY / BLOGGER_BLOG_ID manquants dans .env.local");
    } else {
      const url = await publishToBlogger(apiKey, blogId, title, content, dryRun);
      console.log(`  ✅ Blogger: ${url}`);
    }
  }

  if (!dryRun && status === "publish") {
    const dest = path.join(PUBLISHED_DIR, path.basename(filePath));
    fs.renameSync(filePath, dest);
    console.log(`  📦 Déplacé → blog/published/`);
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  loadEnv();

  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const listOnly = args.includes("--list");
  const fileArgIdx = args.indexOf("--file");
  const fileArg = args.find((a) => a.startsWith("--file="))?.split("=")[1]
    ?? (fileArgIdx !== -1 ? args[fileArgIdx + 1] : null);

  if (!fs.existsSync(DRAFTS_DIR)) {
    console.error("❌ Dossier blog/drafts introuvable");
    process.exit(1);
  }
  fs.mkdirSync(PUBLISHED_DIR, { recursive: true });

  const files = fs
    .readdirSync(DRAFTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(DRAFTS_DIR, f));

  if (listOnly) {
    console.log("📋 Drafts disponibles:\n");
    for (const f of files) {
      const { data: fm } = matter(fs.readFileSync(f, "utf-8"));
      const icon = fm.status === "publish" ? "🟢" : "🟡";
      console.log(`  ${icon} [${fm.status ?? "draft"}] ${path.basename(f)}`);
      console.log(`     → ${fm.title}`);
      console.log(`     → Plateformes: ${(fm.publishTo ?? []).join(", ") || "aucune"}\n`);
    }
    return;
  }

  if (dryRun) console.log("🔍 Mode dry-run — aucune publication réelle\n");

  const targets = fileArg ? [path.resolve(fileArg)] : files;
  for (const file of targets) await processFile(file, dryRun);

  console.log("\n✓ Terminé");
}

main().catch((err) => {
  console.error("❌", err.message);
  process.exit(1);
});
