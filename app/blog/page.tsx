import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { getAllPosts } from "@/lib/content"
import { formatDate } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Build notes, research, and ideas from Greenhouse Labs to help your own projects grow.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-4">
          From the Lab Journal
        </h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          Build notes, research, and ideas to help your own projects grow.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.frontmatter.slug}
            href={`/blog/${post.frontmatter.slug}`}
            className="group block"
          >
            <article className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5 hover:bg-neutral-900/60 transition-colors h-full flex flex-col">
              <div className="aspect-[16/10] rounded-xl border border-white/10 bg-gradient-to-br from-emerald-400/15 to-teal-300/10 group-hover:from-emerald-400/25 group-hover:to-teal-300/20 transition-all" />
              <h2 className="mt-4 text-lg font-semibold group-hover:text-emerald-300 transition-colors">
                {post.frontmatter.title}
              </h2>
              <p className="mt-1 text-sm text-neutral-400 line-clamp-2 flex-1">
                {post.frontmatter.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.frontmatter.categories.slice(0, 3).map((cat) => (
                  <Badge
                    key={cat}
                    variant="outline"
                    className="border-white/10 text-neutral-400 text-xs"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-neutral-500">
                  {formatDate(post.frontmatter.date)} &middot; {post.readingTime}
                </span>
                <span className="text-emerald-300 font-medium group-hover:underline">
                  Read &rarr;
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
