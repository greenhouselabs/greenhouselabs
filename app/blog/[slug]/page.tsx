import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Badge } from "@/components/ui/badge"
import { getPostBySlug, getPostSlugs } from "@/lib/content"
import { formatDate } from "@/lib/utils"

interface BlogPostPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      {/* Back link */}
      <Link
        href="/blog"
        className="text-sm text-neutral-400 hover:text-emerald-300 transition-colors"
      >
        &larr; Back to Blog
      </Link>

      {/* Header */}
      <header className="mt-8 mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.frontmatter.categories.map((cat) => (
            <Badge
              key={cat}
              variant="outline"
              className="border-emerald-500/30 text-emerald-400"
            >
              {cat}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {post.frontmatter.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-neutral-400">
          <span>{post.frontmatter.author}</span>
          <span>&middot;</span>
          <span>{formatDate(post.frontmatter.date)}</span>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      {/* MDX Content */}
      <article className="prose prose-invert prose-emerald max-w-none prose-headings:font-semibold prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-emerald-300 prose-code:before:content-none prose-code:after:content-none">
        <MDXRemote source={post.content} />
      </article>

      {/* Footer CTA */}
      <div className="mt-16 rounded-2xl border border-white/10 bg-neutral-900/40 p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">
          Enjoyed this post?
        </h3>
        <p className="text-neutral-400 mb-4">
          Check out our projects or get in touch to collaborate.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href="/projects"
            className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-emerald-400 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-white/10 px-5 py-2.5 text-sm hover:bg-white/5 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
