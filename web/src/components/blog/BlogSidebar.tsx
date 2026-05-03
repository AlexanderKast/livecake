"use client"

import { useState, useEffect, useRef } from "react"
import type { BlogPost } from "@/lib/blog/blog-types"
import type { BlogHeading } from "@/lib/blog/get-post-by-slug"
import { cn } from "@/lib/utils"

const WA_NUMBER = "573001234567"
const WA_MSG = encodeURIComponent("Hola, tengo preguntas sobre live shopping para mi negocio")

interface BlogSidebarProps {
  headings: BlogHeading[]
  relatedPosts: BlogPost[]
}

export function BlogSidebar({ headings, relatedPosts }: BlogSidebarProps) {
  const [activeId, setActiveId] = useState<string>("")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (headings.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-20% 0% -60% 0%", threshold: 0 }
    )

    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[]

    els.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [headings])

  return (
    <aside className="hidden xl:block w-72 shrink-0">
      <div className="sticky top-28 space-y-6">
        {/* Tabla de contenidos */}
        {headings.length > 0 && (
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <p className="text-xs font-sans font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              En este artículo
            </p>
            <nav aria-label="Tabla de contenidos">
              <ul className="space-y-1">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className={cn(
                        "block text-sm font-sans py-1 px-2 rounded transition-colors duration-150",
                        activeId === h.id
                          ? "text-brand-green font-semibold bg-brand-green/8"
                          : "text-neutral-600 hover:text-brand-green"
                      )}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {/* Mini CTA WhatsApp */}
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <p className="font-sans font-semibold text-brand-black text-sm mb-1">
            ¿Tenés preguntas sobre live shopping?
          </p>
          <p className="font-sans text-xs text-neutral-500 leading-relaxed mb-4">
            Escribinos directamente y te respondemos.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-sans font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors duration-150"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Hablar por WhatsApp
          </a>
        </div>

        {/* Artículos relacionados */}
        {relatedPosts.length > 0 && (
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <p className="text-xs font-sans font-semibold tracking-widest text-neutral-500 uppercase mb-4">
              Artículos relacionados
            </p>
            <ul className="space-y-4">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <a
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-1 hover:text-brand-green transition-colors"
                  >
                    <span className="font-sans font-semibold text-sm text-brand-black group-hover:text-brand-green leading-snug line-clamp-2">
                      {post.titulo}
                    </span>
                    <span className="text-xs text-neutral-500 font-sans">
                      {post.tiempoLectura} min de lectura
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  )
}
