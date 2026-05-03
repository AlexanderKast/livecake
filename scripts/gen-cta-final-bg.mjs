#!/usr/bin/env node
// gen-cta-final-bg.mjs — Genera la imagen de fondo para CTAFinal de LiveCake.

import { writeFile, mkdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { readFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const IMAGE_GEN_DIR = join(REPO_ROOT, "scripts", "image-gen");
const OUTPUT_DIR = join(REPO_ROOT, "web", "public", "brand", "home");

const envPath = join(REPO_ROOT, "web", ".env.local");
const envContent = readFileSync(envPath, "utf8");
const keyMatch = envContent.match(/GEMINI_API_KEY=["']?([^"'\n\r]+)["']?/);
if (!keyMatch) {
  console.error("No se encontró GEMINI_API_KEY en web/.env.local");
  process.exit(1);
}
const GEMINI_API_KEY = keyMatch[1].trim();

const requireFromImageGen = createRequire(pathToFileURL(join(IMAGE_GEN_DIR, "package.json")).href);
async function importFromImageGen(pkg) {
  const absPath = requireFromImageGen.resolve(pkg);
  return import(pathToFileURL(absPath).href);
}

const { GoogleGenAI } = await importFromImageGen("@google/genai");
const MODEL = "gemini-3-pro-image-preview";

const IMAGE = {
  filename: "cta-final-bg.png",
  prompt:
    "Abstract dark cinematic background with subtle live streaming interface elements: glowing screens with conversion metrics rising, graph lines trending up, floating UI panels with purchase buttons, soft green accent lights, moody professional tech aesthetic, deep blacks and dark grays, no text, no people, photorealistic render quality",
  aspectRatio: "16:9",
};

async function main() {
  console.log("Nanobanana Pro — Generando fondo CTAFinal de LiveCake");
  console.log(`Output: ${OUTPUT_DIR}/${IMAGE.filename}`);
  console.log(`Modelo: ${MODEL}\n`);

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  console.log(`Generando con ${MODEL}...`);
  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: [{ role: "user", parts: [{ text: IMAGE.prompt }] }],
      config: {
        responseModalities: ["IMAGE"],
        imageConfig: { aspectRatio: IMAGE.aspectRatio },
      },
    });

    const parts = response?.candidates?.[0]?.content?.parts ?? [];
    const imagePart = parts.find((p) => p.inlineData?.data);

    if (!imagePart) {
      console.error("FALLO — sin imagen en la respuesta");
      console.error(JSON.stringify(response?.candidates?.[0], null, 2).slice(0, 500));
      process.exit(1);
    }

    const buffer = Buffer.from(imagePart.inlineData.data, "base64");
    const outPath = join(OUTPUT_DIR, IMAGE.filename);
    await mkdir(OUTPUT_DIR, { recursive: true });
    await writeFile(outPath, buffer);
    console.log(`OK → ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
  } catch (err) {
    console.error(`Error: ${err?.message ?? err}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal:", err?.message ?? err);
  process.exit(1);
});
