import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Badge } from "@/components/ui/badge"
import { getProjectBySlug, getProjectSlugs } from "@/lib/content"
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  ExternalLink,
  Github,
  MonitorPlay,
  Package,
} from "lucide-react"

interface ProjectPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: "Project Not Found" }

  const isCueScope = project.frontmatter.slug === "cuescope-mcp"
  const twitterTitle = isCueScope
    ? "CueScope | Greenhouse Labs"
    : `${project.frontmatter.title} | Greenhouse Labs`
  const twitterDescription = isCueScope
    ? "Read-first production intelligence for workflows compatible with vMix. Available now on npm."
    : project.frontmatter.blurb
  const twitterImage = isCueScope
    ? "/images/products/cuescope-review-mode-dashboard.png"
    : project.frontmatter.hero_image

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.blurb,
    alternates: {
      canonical: `/projects/${project.frontmatter.slug}`,
    },
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.blurb,
      url: `/projects/${project.frontmatter.slug}`,
      type: "article",
      modifiedTime: project.frontmatter.updated_at,
      tags: project.frontmatter.tags,
      images: project.frontmatter.hero_image
        ? [
            {
              url: project.frontmatter.hero_image,
              alt: project.frontmatter.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
      images: twitterImage ? [twitterImage] : undefined,
    },
  }
}

function stageBadgeClasses(stage: string) {
  switch (stage) {
    case "Seedling":
      return "border-amber-500/50 text-amber-400 bg-amber-500/10"
    case "Blooming":
      return "border-emerald-500/50 text-emerald-400 bg-emerald-500/10"
    case "Harvest":
      return "border-blue-500/50 text-blue-400 bg-blue-500/10"
    default:
      return ""
  }
}

function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const { frontmatter, content } = project
  const links = frontmatter.links || {}
  const offer = frontmatter.offer
  const offerHref = offer?.href || links.purchase || links.demo || links.live || "/contact"
  const demoLinkLabel = links.demo?.startsWith("/products/")
    ? "Product Page"
    : "Demo"

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Back link */}
      <Link
        href="/projects"
        className="text-sm text-neutral-400 hover:text-emerald-300 transition-colors"
      >
        &larr; Back to Projects
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        {/* Main content — 2/3 */}
        <div className="lg:col-span-2">
          <header className="mb-8">
            <Badge
              variant="outline"
              className={`mb-4 ${stageBadgeClasses(frontmatter.stage)}`}
            >
              {frontmatter.stage}
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {frontmatter.title}
            </h1>
            <p className="mt-3 text-lg text-neutral-300">
              {frontmatter.blurb}
            </p>
          </header>

          {/* Hero image */}
          <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-400/15 to-teal-300/10 mb-10 flex items-center justify-center overflow-hidden relative">
            {frontmatter.hero_image ? (
              <Image
                src={frontmatter.hero_image}
                alt={frontmatter.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <span className="text-6xl opacity-30">
                {frontmatter.stage === "Seedling" && "🌱"}
                {frontmatter.stage === "Blooming" && "🌸"}
                {frontmatter.stage === "Harvest" && "🌾"}
              </span>
            )}
          </div>

          {/* MDX body */}
          <article className="prose prose-invert prose-emerald max-w-none prose-headings:font-semibold prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
            <MDXRemote source={content} />
          </article>
        </div>

        {/* Sidebar — 1/3 */}
        <aside className="space-y-6">
          {/* Links */}
          {(links.live || links.repo || links.doc || links.purchase || links.demo || links.npm || links.release) && (
            <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-5">
              <h3 className="font-semibold mb-3">Links</h3>
              <div className="space-y-2">
                {links.npm && (
                  <a
                    href={links.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-300 hover:text-emerald-300 transition-colors"
                  >
                    <Package className="h-4 w-4" />
                    npm Package
                  </a>
                )}
                {links.release && (
                  <a
                    href={links.release}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-300 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Release
                  </a>
                )}
                {links.purchase && (
                  <a
                    href={links.purchase}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-300 hover:text-emerald-300 transition-colors"
                  >
                    <CreditCard className="h-4 w-4" />
                    Purchase
                  </a>
                )}
                {links.demo && (
                  <a
                    href={links.demo}
                    target={isExternalUrl(links.demo) ? "_blank" : undefined}
                    rel={isExternalUrl(links.demo) ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-sm text-neutral-300 hover:text-emerald-300 transition-colors"
                  >
                    <MonitorPlay className="h-4 w-4" />
                    {demoLinkLabel}
                  </a>
                )}
                {links.live && (
                  <a
                    href={links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-300 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Site
                  </a>
                )}
                {links.repo && (
                  <a
                    href={links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-300 hover:text-emerald-300 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Repository
                  </a>
                )}
                {links.doc && (
                  <a
                    href={links.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-300 hover:text-emerald-300 transition-colors"
                  >
                    <BookOpen className="h-4 w-4" />
                    Documentation
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-5">
            <h3 className="font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {frontmatter.tech_stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-white/10 text-neutral-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-5">
            <h3 className="font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/5 text-neutral-400"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results */}
          {frontmatter.results && frontmatter.results.length > 0 && (
            <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-5">
              <h3 className="font-semibold mb-3">Results</h3>
              <div className="space-y-3">
                {frontmatter.results.map((r) => (
                  <div key={r.metric} className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">{r.metric}</span>
                    <span className="text-sm font-semibold text-emerald-400">
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-5 text-center">
            <p className="text-sm text-neutral-300 mb-3">
              {offer ? offer.status : "Interested in a similar project?"}
            </p>
            {isExternalUrl(offerHref) ? (
              <a
                href={offerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-emerald-400 transition-colors"
              >
                {offer?.cta || "Get in Touch"}
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <Link
                href={offerHref}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-emerald-400 transition-colors"
              >
                {offer?.cta || "Get in Touch"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
