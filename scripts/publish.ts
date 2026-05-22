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
 *   MEDIUM_TOKEN=votre_token_medium
 *   BLOGGER_API_KEY=votre_clé_api_google    (optionnel)
 *   BLOGGER_BLOG_ID=id_de_votre_blog        (optionnel)
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ─── Config ──────────────────────────────────────────────────────────────────

const DRAFTS_DIR = path.resolve("blog/drafts");
const PUBLISHED_DIR = path.resolve("blog/published");
const MEDIUM_API = "https://api.medium.com/v1";

function loadEnv() {
  const envPath = path.resolve(".env.local");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const [key, ...rest] = line.split("=");
    if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
  }
}

// ─── Medium API ───────────────────────────────────────────────────────────────

async function getMediumUserId(token: string): Promise<string> {
  const res = await fetch(`${MEDIUM_API}/me`, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`Medium /me failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { data: { id: string; name: string } };
  console.log(`  Medium user: ${data.data.name} (${data.data.id})`);
  return data.data.id;
}

async function publishToMedium(
  token: string,
  authorId: string,
  title: string,
  content: string,
  tags: string[],
  canonicalUrl: string,
  dryRun: boolean
): Promise<string> {
  if (dryRun) {
    console.log(`  [dry-run] Would publish to Medium: "${title}"`);
    console.log(`  Tags: ${tags.join(", ")}`);
    console.log(`  Canonical: ${canonicalUrl}`);
    return "dry-run";
  }

  const body = {
    title,
    contentFormat: "markdown",
    content,
    tags: tags.slice(0, 5),
    canonicalUrl,
    publishStatus: "draft", // "draft" ou "public"
  };

  const res = await fetch(`${MEDIUM_API}/users/${authorId}/posts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`Medium publish failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { data: { url: string } };
  return data.data.url;
}

// ─── Blogger API ──────────────────────────────────────────────────────────────

async function publishToBlogger(
  apiKey: string,
  blogId: string,
  title: string,
  content: string,
  dryRun: boolean
): Promise<string> {
  if (dryRun) {
    console.log(`  [dry-run] Would publish to Blogger: "${title}"`);
    return "dry-run";
  }

  // Convertit Markdown en HTML simple (titres, gras, listes, code)
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

  const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kind: "blogger#post", title, content: html }),
  });

  if (!res.ok) throw new Error(`Blogger publish failed: ${res.status} ${await res.text()}`);
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
  console.log(`   Title: ${title}`);

  const mediumToken = process.env.MEDIUM_TOKEN;
  const bloggerApiKey = process.env.BLOGGER_API_KEY;
  const bloggerBlogId = process.env.BLOGGER_BLOG_ID;

  if (publishTo.includes("medium")) {
    if (!mediumToken) {
      console.warn("  ⚠ MEDIUM_TOKEN manquant dans .env.local — skipping Medium");
    } else {
      const authorId = await getMediumUserId(mediumToken);
      const url = await publishToMedium(mediumToken, authorId, title, content, tags, canonicalUrl, dryRun);
      console.log(`  ✅ Medium: ${url}`);
    }
  }

  if (publishTo.includes("blogger")) {
    if (!bloggerApiKey || !bloggerBlogId) {
      console.warn("  ⚠ BLOGGER_API_KEY / BLOGGER_BLOG_ID manquant — skipping Blogger");
    } else {
      const url = await publishToBlogger(bloggerApiKey, bloggerBlogId, title, content, dryRun);
      console.log(`  ✅ Blogger: ${url}`);
    }
  }

  if (!dryRun && status === "publish") {
    const dest = path.join(PUBLISHED_DIR, path.basename(filePath));
    fs.renameSync(filePath, dest);
    console.log(`  📦 Déplacé vers blog/published/`);
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  loadEnv();

  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const listOnly = args.includes("--list");
  const fileArg = args.find((a) => a.startsWith("--file="))?.split("=")[1]
    ?? (args.indexOf("--file") !== -1 ? args[args.indexOf("--file") + 1] : null);

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
      const status = fm.status ?? "draft";
      const icon = status === "publish" ? "🟢" : "🟡";
      console.log(`  ${icon} [${status}] ${path.basename(f)}`);
      console.log(`     → ${fm.title}`);
      console.log(`     → Plateformes: ${(fm.publishTo ?? []).join(", ") || "aucune"}\n`);
    }
    return;
  }

  if (dryRun) console.log("🔍 Mode dry-run — aucune publication réelle\n");

  const targets = fileArg ? [path.resolve(fileArg)] : files;

  for (const file of targets) {
    await processFile(file, dryRun);
  }

  console.log("\n✓ Terminé");
}

main().catch((err) => {
  console.error("❌", err.message);
  process.exit(1);
});
