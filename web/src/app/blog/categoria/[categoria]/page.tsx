import { notFound } from "next/navigation"
import { createMetadata } from "@/lib/seo/metadata"
import { PageShell } from "@/components/PageShell"
import { BlogHero } from "@/components/blog/BlogHero"
import { BlogGrid } from "@/components/blog/BlogGrid"
import { getPostsByCategoria } from "@/lib/blog/get-posts"
import { CATEGORIA_LABELS, TODAS_CATEGORIAS } from "@/lib/blog/blog-types"
import type { BlogCategoria } from "@/lib/blog/blog-types"
import { SITE_URL, BRAND } from "@/lib/tracking/constants"

interface Props {
  params: Promise<{ categoria: string }>
}

export async function generateStaticParams() {
  return TODAS_CATEGORIAS.map((categoria) => ({ categoria }))
}

export async function generateMetadata({ params }: Props) {
  const { categoria } = await params
  if (!TODAS_CATEGORIAS.includes(categoria as BlogCategoria)) return {}

  const label = CATEGORIA_LABELS[categoria as BlogCategoria]
  return createMetadata({
    title: `${label} · Blog LiveCake`,
    description: `Artículos sobre ${label.toLowerCase()} para el mercado LATAM. Estrategias, casos y análisis actualizados.`,
    path: `/blog/categoria/${categoria}`,
    keywords: [label.toLowerCase(), "live shopping", "ecommerce LATAM"],
  })
}

export default async function BlogCategoriaPage({ params }: Props) {
  const { categoria } = await params

  if (!TODAS_CATEGORIAS.includes(categoria as BlogCategoria)) notFound()

  const cat = categoria as BlogCategoria
  const posts = getPostsByCategoria(cat)
  const label = CATEGORIA_LABELS[cat]

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${label} · Blog ${BRAND.name}`,
      url: `${SITE_URL}/blog/categoria/${categoria}`,
      publisher: {
        "@type": "Organization",
        name: BRAND.name,
        url: BRAND.url,
      },
    },
  ]

  return (
    <PageShell
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog" },
        { label, href: `/blog/categoria/${categoria}` },
      ]}
      jsonLd={jsonLd}
    >
      <BlogHero
        titulo={label}
        subtitulo={`Todos los artículos sobre ${label.toLowerCase()} en el mercado LATAM.`}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogGrid posts={posts} />
      </section>
    </PageShell>
  )
}
