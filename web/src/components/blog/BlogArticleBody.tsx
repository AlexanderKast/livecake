import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import { BlogCTAInline } from "./BlogCTAInline"

const MDX_OPTIONS = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
  },
}

function splitAtH2(content: string, afterNth = 3): [string, string] {
  const lines = content.split("\n")
  let count = 0
  let idx = -1
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s/.test(lines[i])) {
      count++
      if (count === afterNth) {
        idx = i
        break
      }
    }
  }
  if (idx === -1) return [content, ""]
  return [lines.slice(0, idx).join("\n"), lines.slice(idx).join("\n")]
}

interface BlogArticleBodyProps {
  content: string
}

export function BlogArticleBody({ content }: BlogArticleBodyProps) {
  const [before, after] = splitAtH2(content)

  return (
    <div className="markdown-body article-body">
      <MDXRemote source={before} options={MDX_OPTIONS} />
      {after && (
        <>
          <BlogCTAInline />
          <MDXRemote source={after} options={MDX_OPTIONS} />
        </>
      )}
    </div>
  )
}
