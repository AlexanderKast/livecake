import type { BlogPost } from "@/lib/blog/blog-types"
import { BlogCard } from "./BlogCard"

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-sans text-neutral-500">No hay artículos en esta categoría todavía.</p>
      </div>
    )
  }

  const featured = posts.find((p) => p.destacado) ?? posts[0]
  const rest = posts.filter((p) => p.slug !== featured.slug)

  return (
    <div>
      <BlogCard post={featured} variant="hero" />
      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} variant="regular" />
          ))}
        </div>
      )}
    </div>
  )
}
