import Image from "next/image"
import { CATEGORIA_LABELS } from "@/lib/blog/blog-types"
import type { BlogPost } from "@/lib/blog/blog-types"

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

interface BlogArticleHeaderProps {
  post: BlogPost
}

export function BlogArticleHeader({ post }: BlogArticleHeaderProps) {
  return (
    <header className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-neutral-500 mb-8 flex-wrap">
        <a href="/" className="hover:text-brand-green transition-colors">Inicio</a>
        <span>/</span>
        <a href="/blog" className="hover:text-brand-green transition-colors">Blog</a>
        <span>/</span>
        <a href={`/blog/categoria/${post.categoria}`} className="hover:text-brand-green transition-colors capitalize">
          {CATEGORIA_LABELS[post.categoria]}
        </a>
        <span>/</span>
        <span className="text-neutral-400 truncate max-w-[200px]">{post.titulo}</span>
      </nav>

      {/* Badge de categoría */}
      <span className="inline-block text-xs font-sans font-semibold tracking-wider text-brand-green uppercase bg-brand-green/10 px-3 py-1 rounded-full mb-4">
        {CATEGORIA_LABELS[post.categoria]}
      </span>

      {/* Título */}
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-black leading-tight mb-4">
        {post.titulo}
      </h1>

      {/* Descripción */}
      <p className="font-sans text-lg text-neutral-600 leading-relaxed mb-8">
        {post.descripcion}
      </p>

      {/* Autor + Meta */}
      <div className="flex items-center gap-4 pb-8 border-b border-neutral-200">
        {post.autor.imagen && (
          <Image
            src={post.autor.imagen}
            alt={post.autor.nombre}
            width={48}
            height={48}
            className="rounded-full object-cover w-12 h-12 shrink-0"
          />
        )}
        {!post.autor.imagen && (
          <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0">
            <span className="text-brand-green font-semibold text-sm">
              {post.autor.nombre.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-sans font-semibold text-brand-black text-sm">{post.autor.nombre}</p>
          <p className="font-sans text-xs text-neutral-500">{post.autor.rol}</p>
        </div>
        <div className="ml-auto flex items-center gap-3 text-xs text-neutral-500 font-sans flex-wrap justify-end">
          <time dateTime={post.fecha}>{formatDate(post.fecha)}</time>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <span>{post.tiempoLectura} min de lectura</span>
        </div>
      </div>

      {/* Imagen principal */}
      <div className="relative mt-8 aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
        <Image
          src={post.imagen}
          alt={post.imagenAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>
    </header>
  )
}
