import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, ShoppingBag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RegenerativeText } from "@/components/effects/regenerative-text"
import { getAllProjects } from "@/lib/content"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ready-made Greenhouse Labs apps, tools, and productized software available to try, license, or purchase.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products | Greenhouse Labs",
    description:
      "Ready-made Greenhouse Labs apps, tools, and productized software available to try, license, or purchase.",
    url: "/products",
    images: [
      {
        url: "/images/og/products.jpg",
        width: 1200,
        height: 630,
        alt: "Greenhouse Labs products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Greenhouse Labs",
    description:
      "Ready-made Greenhouse Labs apps, tools, and productized software available to try, license, or purchase.",
    images: ["/images/og/products.jpg"],
  },
}

const productHeroPhrases = ["tools", "AI utilities", "products"]

function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

function ProductCta({
  href,
  label,
}: {
  href: string
  label: string
}) {
  const className =
    "inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-neutral-950 transition-colors hover:bg-emerald-400"

  if (isExternalUrl(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
        <ExternalLink className="h-4 w-4" />
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}

export default function ProductsPage() {
  const products = getAllProjects().filter(
    (project) => project.frontmatter.offer?.type === "product"
  )

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <section className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Ready-made{" "}
          <RegenerativeText
            phrases={productHeroPhrases}
            className="gradient-text shimmer-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300"
            startDelay={850}
            typeDelay={64}
            deleteDelay={36}
            holdDelay={880}
            repeatDelay={8800}
          />{" "}
          from the lab
        </h1>
        <p className="mt-4 text-lg text-neutral-300">
          Buy, try, or license Greenhouse Labs apps as they reach harvest. Some
          tools are live today, while others are available by demo or custom
          licensing.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {products.map((project) => {
          const { frontmatter } = project
          const offer = frontmatter.offer
          const href = offer?.href || frontmatter.links?.purchase || frontmatter.links?.live
          const detailHref =
            offer?.href && offer.href.startsWith("/products/")
              ? offer.href
              : `/projects/${frontmatter.slug}`

          return (
            <article
              key={frontmatter.slug}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-neutral-900/40"
            >
              <Link href={detailHref} className="group block">
                <div className="relative aspect-video border-b border-white/10 bg-neutral-900">
                  {frontmatter.hero_image ? (
                    <Image
                      src={frontmatter.hero_image}
                      alt={frontmatter.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <ShoppingBag className="h-10 w-10 text-emerald-300" />
                    </div>
                  )}
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <Link
                      href={detailHref}
                      className="text-lg font-semibold transition-colors hover:text-emerald-300"
                    >
                      {frontmatter.title}
                    </Link>
                    <p className="mt-1 text-sm text-neutral-400">
                      {frontmatter.category}
                    </p>
                  </div>
                  {offer?.status && (
                    <Badge
                      variant="outline"
                      className="shrink-0 border-emerald-500/30 text-emerald-300"
                    >
                      {offer.status}
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-neutral-300">{frontmatter.blurb}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {frontmatter.tags.slice(0, 4).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-white/10 text-neutral-500"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  {href && offer?.cta ? (
                    <ProductCta href={href} label={offer.cta} />
                  ) : (
                    <ProductCta
                      href={`/contact?interest=${frontmatter.slug}`}
                      label="Request Access"
                    />
                  )}
                  <Link
                    href={detailHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
                  >
                    Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <section className="mt-14 rounded-lg border border-emerald-500/20 bg-emerald-950/20 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <h2 className="text-xl font-semibold">Need something custom?</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-300">
            Greenhouse Labs also builds custom AI apps, internal workflow tools,
            and productized software for teams that need a tailored launch.
          </p>
        </div>
        <Button
          className="mt-5 rounded-lg bg-emerald-500 text-neutral-950 hover:bg-emerald-400 sm:mt-0"
          asChild
        >
          <Link href="/services">
            View Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
