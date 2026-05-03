import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import type { BlogPost, BlogCategoria } from "./blog-types"

const CONTENT_DIR = path.join(process.cwd(), "content/blog")

export interface BlogHeading {
  id: string
  text: string
}

function githubSlugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[¿¡]/g, "")
    .replace(/[^\wÀ-ɏ- ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function extractH2Headings(content: string): BlogHeading[] {
  const matches = [...content.matchAll(/^## (.+)$/gm)]
  return matches.map((m) => {
    const text = m[1].replace(/[*_`[\]]/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim()
    return { text, id: githubSlugify(text) }
  })
}

export function splitContentAtH2(content: string, afterNth = 3): [string, string] {
  const lines = content.split("\n")
  let count = 0
  let idx = -1
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s/.test(lines[i])) {
      count++
      if (count === afterNth) {
        idx = i
        break
      }
    }
  }
  if (idx === -1) return [content, ""]
  return [lines.slice(0, idx).join("\n"), lines.slice(idx).join("\n")]
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  if (!data.publicado) return null

  const mins = readingTime(content).minutes

  return {
    slug,
    titulo: data.titulo as string,
    descripcion: data.descripcion as string,
    fecha: data.fecha as string,
    fechaActualizacion: data.fechaActualizacion as string | undefined,
    autor: data.autor as BlogPost["autor"],
    categoria: data.categoria as BlogCategoria,
    tags: (data.tags as string[]) ?? [],
    imagen: data.imagen as string,
    imagenAlt: data.imagenAlt as string,
    tiempoLectura: Math.ceil(mins),
    destacado: (data.destacado as boolean) ?? false,
    publicado: (data.publicado as boolean) ?? false,
    contenido: content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""))
}
