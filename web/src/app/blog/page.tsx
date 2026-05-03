import { createMetadata } from "@/lib/seo/metadata"
import { PageShell } from "@/components/PageShell"
import { BlogHero } from "@/components/blog/BlogHero"
import { BlogListClient } from "@/components/blog/BlogListClient"
import { getAllPosts } from "@/lib/blog/get-posts"
import { SITE_URL, BRAND } from "@/lib/tracking/constants"

export const metadata = createMetadata({
  title: "Blog — Live shopping, falsos lives y ecommerce LATAM",
  description:
    "Artículos sobre live shopping, falsos lives, ecommerce, dropshipping e infoproductos para el mercado LATAM. Estrategias reales, datos actualizados.",
  path: "/blog",
  keywords: [
    "blog live shopping",
    "falsos lives Colombia",
    "ecommerce LATAM 2026",
    "live commerce Colombia",
    "Pancake live",
  ],
})

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Blog ${BRAND.name}`,
    description:
      "Artículos sobre live shopping, falsos lives y ecommerce LATAM",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
      logo: BRAND.logo,
    },
  },
]

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <PageShell
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog" },
      ]}
      jsonLd={jsonLd}
    >
      <BlogHero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogListClient posts={posts} />
      </section>
    </PageShell>
  )
}
