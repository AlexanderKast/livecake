import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import type { BlogPost, BlogCategoria } from "./blog-types"

const CONTENT_DIR = path.join(process.cwd(), "content/blog")

function parsePost(slug: string, raw: string): BlogPost {
  const { data, content } = matter(raw)
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
  }
}

function readAllFiles(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "")
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8")
      return parsePost(slug, raw)
    })
    .filter((p) => p.publicado)
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
}

export function getAllPosts(): BlogPost[] {
  return readAllFiles()
}

export function getFeaturedPosts(): BlogPost[] {
  return readAllFiles().filter((p) => p.destacado)
}

export function getPostsByCategoria(categoria: BlogCategoria): BlogPost[] {
  return readAllFiles().filter((p) => p.categoria === categoria)
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const all = readAllFiles()
  const current = all.find((p) => p.slug === slug)
  if (!current) return []
  return all.filter((p) => p.slug !== slug && p.categoria === current.categoria).slice(0, limit)
}
