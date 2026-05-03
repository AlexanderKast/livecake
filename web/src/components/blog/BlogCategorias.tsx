"use client"

import { CATEGORIA_LABELS, TODAS_CATEGORIAS } from "@/lib/blog/blog-types"
import type { BlogCategoria } from "@/lib/blog/blog-types"
import { cn } from "@/lib/utils"

interface BlogCategoriasProps {
  selected: BlogCategoria | "todos"
  onChange: (cat: BlogCategoria | "todos") => void
  counts: Record<string, number>
}

export function BlogCategorias({ selected, onChange, counts }: BlogCategoriasProps) {
  const items: Array<{ value: BlogCategoria | "todos"; label: string }> = [
    { value: "todos", label: "Todos" },
    ...TODAS_CATEGORIAS.map((c) => ({ value: c, label: CATEGORIA_LABELS[c] })),
  ]

  return (
    <nav aria-label="Filtrar por categoría" className="mb-10">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {items.map(({ value, label }) => {
          const isActive = selected === value
          const count = value === "todos" ? counts.__total__ : (counts[value] ?? 0)
          if (value !== "todos" && count === 0) return null
          return (
            <button
              key={value}
              onClick={() => onChange(value)}
              aria-pressed={isActive}
              className={cn(
                "flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-sans font-medium transition-all duration-150 whitespace-nowrap",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green",
                isActive
                  ? "bg-brand-green text-white shadow-sm"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:border-brand-green hover:text-brand-green"
              )}
            >
              {label}
              {count > 0 && (
                <span
                  className={cn(
                    "text-xs font-semibold px-1.5 py-0.5 rounded-full",
                    isActive ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500"
                  )}
                >
                  {count}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
