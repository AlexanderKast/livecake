#!/usr/bin/env node
// gen-avatares-casos.mjs — Genera las 3 imágenes avatar para la sección Casos de LiveCake.
// Usa Gemini 2.5 Flash Image (Nanobanana) con @google/genai del image-gen local.

import { writeFile, mkdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { readFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const IMAGE_GEN_DIR = join(REPO_ROOT, "scripts", "image-gen");
const OUTPUT_DIR = join(REPO_ROOT, "web", "public", "brand", "casos");

// Leer GEMINI_API_KEY desde web/.env.local
const envPath = join(REPO_ROOT, "web", ".env.local");
const envContent = readFileSync(envPath, "utf8");
const keyMatch = envContent.match(/GEMINI_API_KEY=["']?([^"'\n\r]+)["']?/);
if (!keyMatch) {
  console.error("No se encontró GEMINI_API_KEY en web/.env.local");
  process.exit(1);
}
const GEMINI_API_KEY = keyMatch[1].trim();

// Resolver deps desde image-gen/node_modules
const requireFromImageGen = createRequire(pathToFileURL(join(IMAGE_GEN_DIR, "package.json")).href);
async function importFromImageGen(pkg) {
  const absPath = requireFromImageGen.resolve(pkg);
  return import(pathToFileURL(absPath).href);
}

const { GoogleGenAI } = await importFromImageGen("@google/genai");
const MODEL = "gemini-3-pro-image-preview";

const AVATARES = [
  {
    id: "dropshipper",
    filename: "avatar-dropshipper.png",
    prompt:
      "Latin American male entrepreneur in his late 20s or early 30s, working at a laptop in a casual home office, confident and focused expression, warm natural lighting, ecommerce and dropshipping context, lifestyle photography, clean background, professional quality, realistic photo, no text",
    aspectRatio: "4:5",
  },
  {
    id: "infoproductora",
    filename: "avatar-infoproductora.png",
    prompt:
      "Latin American female content creator or online coach in her late 20s, professional home studio setup with ring light and microphone visible, confident and empowered expression, warm lighting, recording educational video content, lifestyle photography, realistic photo, no text",
    aspectRatio: "4:5",
  },
  {
    id: "marca",
    filename: "avatar-marca.png",
    prompt:
      "Latin American business owner in his 35 to 45 reviewing product inventory in a modern clean office or small warehouse, professional attire, determined and confident expression, commercial photography style, natural lighting, realistic photo, no text",
    aspectRatio: "4:5",
  },
];

async function generateOne(avatar, ai) {
  console.log(`\n[${avatar.id}] Generando con ${MODEL}...`);
  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: [{ role: "user", parts: [{ text: avatar.prompt }] }],
      config: {
        responseModalities: ["IMAGE"],
        imageConfig: { aspectRatio: avatar.aspectRatio },
      },
    });

    const parts = response?.candidates?.[0]?.content?.parts ?? [];
    const imagePart = parts.find((p) => p.inlineData?.data);

    if (!imagePart) {
      console.error(`  FALLO — sin imagen en la respuesta para ${avatar.id}`);
      console.error("  Respuesta:", JSON.stringify(response?.candidates?.[0], null, 2).slice(0, 500));
      return false;
    }

    const buffer = Buffer.from(imagePart.inlineData.data, "base64");
    const outPath = join(OUTPUT_DIR, avatar.filename);
    await mkdir(OUTPUT_DIR, { recursive: true });
    await writeFile(outPath, buffer);
    console.log(`  OK → ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
    return true;
  } catch (err) {
    console.error(`  Error en ${avatar.id}: ${err?.message ?? err}`);
    return false;
  }
}

async function main() {
  console.log("Nanobanana — Generando avatares para sección Casos de LiveCake");
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Modelo: ${MODEL}\n`);

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  let ok = 0;

  for (const avatar of AVATARES) {
    const success = await generateOne(avatar, ai);
    if (success) ok++;
  }

  console.log(`\n${ok}/${AVATARES.length} imágenes generadas en ${OUTPUT_DIR}`);
  if (ok > 0) {
    console.log("\nActualiza los src en Casos.tsx de .webp a .png si corresponde.");
  }
}

main().catch((err) => {
  console.error("Fatal:", err?.message ?? err);
  process.exit(1);
});
