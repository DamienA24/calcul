/**
 * Authentification Blogger OAuth 2.0 — à lancer une seule fois.
 * Sauvegarde automatiquement BLOGGER_REFRESH_TOKEN dans .env.local
 *
 * Usage : pnpm auth:blogger
 *
 * Prérequis dans .env.local :
 *   BLOGGER_CLIENT_ID=...
 *   BLOGGER_CLIENT_SECRET=...
 *   BLOGGER_BLOG_ID=...     (optionnel, pour vérifier l'accès)
 */

import fs from "fs";
import http from "http";
import path from "path";
import { google } from "googleapis";

const ENV_PATH = path.resolve(".env.local");
const REDIRECT_PORT = 3001;
const REDIRECT_URI = `http://localhost:${REDIRECT_PORT}`;
const SCOPES = ["https://www.googleapis.com/auth/blogger"];

// ─── Env helpers ─────────────────────────────────────────────────────────────

function loadEnv(): Record<string, string> {
  if (!fs.existsSync(ENV_PATH)) return {};
  const env: Record<string, string> = {};
  for (const line of fs.readFileSync(ENV_PATH, "utf-8").split("\n")) {
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    env[line.slice(0, eq).trim()] = line.slice(eq + 1).trim();
  }
  return env;
}

function saveEnvVar(key: string, value: string) {
  let content = fs.existsSync(ENV_PATH) ? fs.readFileSync(ENV_PATH, "utf-8") : "";
  const regex = new RegExp(`^${key}=.*$`, "m");
  if (regex.test(content)) {
    content = content.replace(regex, `${key}=${value}`);
  } else {
    content = content.trimEnd() + `\n${key}=${value}\n`;
  }
  fs.writeFileSync(ENV_PATH, content);
}

// ─── OAuth flow ───────────────────────────────────────────────────────────────

function waitForCode(): Promise<string> {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url ?? "/", `http://localhost:${REDIRECT_PORT}`);
      const code = url.searchParams.get("code");
      const error = url.searchParams.get("error");

      if (error) {
        res.end("<h2>Erreur : " + error + "</h2><p>Tu peux fermer cet onglet.</p>");
        server.close();
        reject(new Error(`OAuth error: ${error}`));
        return;
      }

      if (code) {
        res.end("<h2>✅ Authentification réussie !</h2><p>Tu peux fermer cet onglet.</p>");
        server.close();
        resolve(code);
      }
    });

    server.listen(REDIRECT_PORT, () => {
      console.log(`  Serveur temporaire démarré sur ${REDIRECT_URI}`);
    });

    server.on("error", reject);
  });
}

async function main() {
  const env = loadEnv();

  const clientId = env.BLOGGER_CLIENT_ID;
  const clientSecret = env.BLOGGER_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error("❌ BLOGGER_CLIENT_ID et BLOGGER_CLIENT_SECRET manquants dans .env.local");
    console.error("\nAjoute ces lignes dans .env.local :");
    console.error("  BLOGGER_CLIENT_ID=ton_client_id");
    console.error("  BLOGGER_CLIENT_SECRET=ton_client_secret");
    process.exit(1);
  }

  if (env.BLOGGER_REFRESH_TOKEN) {
    console.log("✅ BLOGGER_REFRESH_TOKEN déjà présent dans .env.local");
    console.log("   Supprime-le si tu veux en générer un nouveau.");
    return;
  }

  const oauth2 = new google.auth.OAuth2(clientId, clientSecret, REDIRECT_URI);

  const authUrl = oauth2.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
  });

  console.log("\n🔗 Ouvre cette URL dans ton navigateur pour autoriser l'accès :\n");
  console.log("  " + authUrl);
  console.log("\n  (En attente du callback sur localhost:3001...)\n");

  // Tente d'ouvrir automatiquement le navigateur
  const { execSync } = await import("child_process");
  try {
    execSync(`open "${authUrl}"`, { stdio: "ignore" });
  } catch {
    // Si ça échoue, l'utilisateur copie l'URL manuellement
  }

  const code = await waitForCode();
  console.log("  Code reçu, échange en cours...");

  const { tokens } = await oauth2.getToken(code);

  if (!tokens.refresh_token) {
    console.error("❌ Pas de refresh_token reçu. Essaie de révoquer l'accès sur myaccount.google.com/permissions et relance.");
    process.exit(1);
  }

  saveEnvVar("BLOGGER_REFRESH_TOKEN", tokens.refresh_token);
  console.log("\n✅ BLOGGER_REFRESH_TOKEN sauvegardé dans .env.local");
  console.log("   Tu peux maintenant lancer : pnpm publish:blog");
}

main().catch((err) => {
  console.error("❌", err.message);
  process.exit(1);
});
