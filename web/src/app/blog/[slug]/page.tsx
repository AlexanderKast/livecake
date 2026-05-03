import { notFound } from "next/navigation"
import { createMetadata } from "@/lib/seo/metadata"
import { PageShell } from "@/components/PageShell"
import { BlogArticleHeader } from "@/components/blog/BlogArticleHeader"
import { BlogArticleBody } from "@/components/blog/BlogArticleBody"
import { BlogSidebar } from "@/components/blog/BlogSidebar"
import { BlogCTAFinal } from "@/components/blog/BlogCTAFinal"
import { getPostBySlug, getAllSlugs, extractH2Headings } from "@/lib/blog/get-post-by-slug"
import { getRelatedPosts } from "@/lib/blog/get-posts"
import { CATEGORIA_LABELS } from "@/lib/blog/blog-types"
import { SITE_URL, BRAND } from "@/lib/tracking/constants"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return createMetadata({
    title: `${post.titulo} · Blog LiveCake`,
    description: post.descripcion,
    path: `/blog/${slug}`,
    ogImage: post.imagen,
    ogType: "article",
    keywords: post.tags,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post || !post.contenido) notFound()

  const headings = extractH2Headings(post.contenido)
  const related = getRelatedPosts(slug)

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.titulo,
      description: post.descripcion,
      image: `${SITE_URL}${post.imagen}`,
      datePublished: post.fecha,
      dateModified: post.fechaActualizacion ?? post.fecha,
      author: {
        "@type": "Person",
        name: post.autor.nombre,
      },
      publisher: {
        "@type": "Organization",
        name: BRAND.name,
        url: BRAND.url,
        logo: BRAND.logo,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blog/${slug}`,
      },
    },
  ]

  return (
    <PageShell
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: CATEGORIA_LABELS[post.categoria], href: `/blog/categoria/${post.categoria}` },
        { label: post.titulo, href: `/blog/${slug}` },
      ]}
      jsonLd={jsonLd}
    >
      <div className="bg-white">
        <BlogArticleHeader post={post} />

        {/* Layout: cuerpo + sidebar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex gap-12 items-start">
          <div className="min-w-0 flex-1 max-w-[680px] mx-auto xl:mx-0">
            <BlogArticleBody content={post.contenido} />
          </div>
          <BlogSidebar headings={headings} relatedPosts={related} />
        </div>

        <BlogCTAFinal />
      </div>
    </PageShell>
  )
}
