/**
 * Publication automatique d'articles Markdown.
 *
 * Plateformes supportées :
 *   - blogger  → Google Blogger API v3 (API key)
 *   - devto    → Dev.to API (API key)
 *
 * Note Medium : l'API Medium ne délivre plus de nouveaux tokens.
 * Workflow manuel recommandé : publier sur Blogger → importer l'URL dans Medium
 * via https://medium.com/p/import
 *
 * Usage :
 *   pnpm publish:blog                        # publie tous les drafts status=publish
 *   pnpm publish:blog --file <chemin.md>     # un fichier spécifique
 *   pnpm publish:blog --dry-run              # aperçu sans publier
 *   pnpm publish:blog --list                 # liste les drafts
 *
 * Variables dans .env.local :
 *   BLOGGER_CLIENT_ID=...
 *   BLOGGER_CLIENT_SECRET=...
 *   BLOGGER_REFRESH_TOKEN=...   (généré par pnpm auth:blogger)
 *   BLOGGER_BLOG_ID=...
 *   DEVTO_API_KEY=...
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { google } from "googleapis";

const DRAFTS_DIR = path.resolve("blog/drafts");
const PUBLISHED_DIR = path.resolve("blog/published");

// ─── Env ──────────────────────────────────────────────────────────────────────

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

// ─── Blogger ──────────────────────────────────────────────────────────────────

function mdToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/^\- (.+)$/gm, "<li>$1</li>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/\n\n/g, "</p><p>");
}

async function publishToBlogger(
  clientId: string,
  clientSecret: string,
  refreshToken: string,
  blogId: string,
  title: string,
  content: string,
  tags: string[],
  dryRun: boolean
): Promise<string> {
  if (dryRun) {
    console.log(`  [dry-run] Blogger: "${title}"`);
    return "dry-run";
  }

  const oauth2 = new google.auth.OAuth2(clientId, clientSecret);
  oauth2.setCredentials({ refresh_token: refreshToken });

  const blogger = google.blogger({ version: "v3", auth: oauth2 });
  const res = await blogger.posts.insert({
    blogId,
    requestBody: {
      title,
      content: mdToHtml(content),
      labels: tags,
    },
  });

  return res.data.url ?? "";
}

// ─── Dev.to ───────────────────────────────────────────────────────────────────

async function publishToDevto(
  apiKey: string,
  title: string,
  content: string,
  tags: string[],
  canonicalUrl: string,
  dryRun: boolean
): Promise<string> {
  if (dryRun) {
    console.log(`  [dry-run] Dev.to: "${title}"`);
    console.log(`  Canonical: ${canonicalUrl}`);
    return "dry-run";
  }

  // Dev.to accepte max 4 tags, alphanum uniquement
  const devtoTags = tags
    .slice(0, 4)
    .map((t) => t.toLowerCase().replace(/[^a-z0-9]/g, ""));

  const res = await fetch("https://dev.to/api/articles", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      article: {
        title,
        body_markdown: content,
        published: false, // publier en draft d'abord, relire avant de rendre public
        tags: devtoTags,
        canonical_url: canonicalUrl,
      },
    }),
  });

  if (!res.ok) throw new Error(`Dev.to ${res.status}: ${await res.text()}`);
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

  if (publishTo.includes("blogger")) {
    const clientId = process.env.BLOGGER_CLIENT_ID;
    const clientSecret = process.env.BLOGGER_CLIENT_SECRET;
    const refreshToken = process.env.BLOGGER_REFRESH_TOKEN;
    const blogId = process.env.BLOGGER_BLOG_ID;
    if (!clientId || !clientSecret || !refreshToken || !blogId) {
      console.warn("  ⚠  Variables Blogger manquantes. Lance d'abord : pnpm auth:blogger");
    } else {
      const url = await publishToBlogger(clientId, clientSecret, refreshToken, blogId, title, content, tags, dryRun);
      console.log(`  ✅ Blogger: ${url}`);
      if (!dryRun) console.log(`  💡 Medium: importer sur medium.com/p/import`);
    }
  }

  if (publishTo.includes("devto")) {
    const apiKey = process.env.DEVTO_API_KEY;
    if (!apiKey) {
      console.warn("  ⚠  DEVTO_API_KEY manquant dans .env.local");
    } else {
      const url = await publishToDevto(apiKey, title, content, tags, canonicalUrl, dryRun);
      console.log(`  ✅ Dev.to (draft): ${url}`);
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
  const fileArg =
    args.find((a) => a.startsWith("--file="))?.split("=")[1] ??
    (fileArgIdx !== -1 ? args[fileArgIdx + 1] : null);

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
