"use client"

import { useState, useMemo } from "react"
import type { BlogPost, BlogCategoria } from "@/lib/blog/blog-types"
import { TODAS_CATEGORIAS } from "@/lib/blog/blog-types"
import { BlogCategorias } from "./BlogCategorias"
import { BlogGrid } from "./BlogGrid"

interface BlogListClientProps {
  posts: BlogPost[]
}

export function BlogListClient({ posts }: BlogListClientProps) {
  const [categoria, setCategoria] = useState<BlogCategoria | "todos">("todos")

  const counts = useMemo(() => {
    const map: Record<string, number> = { __total__: posts.length }
    for (const cat of TODAS_CATEGORIAS) {
      map[cat] = posts.filter((p) => p.categoria === cat).length
    }
    return map
  }, [posts])

  const filtered = useMemo(
    () => (categoria === "todos" ? posts : posts.filter((p) => p.categoria === categoria)),
    [posts, categoria]
  )

  return (
    <div>
      <BlogCategorias selected={categoria} onChange={setCategoria} counts={counts} />
      <BlogGrid posts={filtered} />
    </div>
  )
}
