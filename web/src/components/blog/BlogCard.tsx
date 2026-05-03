import Image from "next/image"
import { CATEGORIA_LABELS } from "@/lib/blog/blog-types"
import type { BlogPost } from "@/lib/blog/blog-types"
import { cn } from "@/lib/utils"

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

interface BlogCardProps {
  post: BlogPost
  variant?: "hero" | "regular"
}

export function BlogCard({ post, variant = "regular" }: BlogCardProps) {
  if (variant === "hero") {
    return (
      <a
        href={`/blog/${post.slug}`}
        className={cn(
          "group relative flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden",
          "border border-neutral-200 bg-white",
          "hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] transition-shadow duration-300",
          "mb-8"
        )}
      >
        {/* Imagen hero */}
        <div className="relative w-full lg:w-3/5 aspect-[16/9] lg:aspect-auto lg:min-h-[360px] bg-neutral-100 shrink-0">
          <Image
            src={post.imagen}
            alt={post.imagenAlt}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10" />
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-center p-8 lg:p-10 lg:w-2/5">
          <span className="inline-block self-start text-xs font-sans font-semibold tracking-wider text-brand-green uppercase bg-brand-green/10 px-3 py-1 rounded-full mb-4">
            {CATEGORIA_LABELS[post.categoria]}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-brand-black leading-tight mb-3 group-hover:text-brand-green transition-colors duration-200">
            {post.titulo}
          </h2>
          <p className="font-sans text-neutral-600 leading-relaxed mb-6 line-clamp-3">
            {post.descripcion}
          </p>
          <div className="flex items-center gap-3 text-sm text-neutral-500 font-sans">
            <span>{post.autor.nombre}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span>{formatDate(post.fecha)}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span>{post.tiempoLectura} min de lectura</span>
          </div>
          <span className="mt-6 text-sm font-sans font-semibold text-brand-green group-hover:underline">
            Leer artículo →
          </span>
        </div>
      </a>
    )
  }

  return (
    <a
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col rounded-xl overflow-hidden",
        "border border-neutral-200 bg-white",
        "hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300"
      )}
    >
      {/* Imagen */}
      <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
        <Image
          src={post.imagen}
          alt={post.imagenAlt}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-6">
        <span className="inline-block self-start text-xs font-sans font-semibold tracking-wider text-brand-green uppercase bg-brand-green/10 px-2.5 py-1 rounded-full mb-3">
          {CATEGORIA_LABELS[post.categoria]}
        </span>
        <h3 className="font-display text-xl text-brand-black leading-snug mb-2 group-hover:text-brand-green transition-colors duration-200 line-clamp-2">
          {post.titulo}
        </h3>
        <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-2 flex-1">
          {post.descripcion}
        </p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 font-sans pt-4 border-t border-neutral-100">
          <span>{post.autor.nombre}</span>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <span>{formatDate(post.fecha)}</span>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <span>{post.tiempoLectura} min</span>
        </div>
      </div>
    </a>
  )
}
