import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Boxes, Hammer, ShoppingBag } from "lucide-react"
import { ParticleCanvas } from "@/components/effects/particle-canvas"
import { MagneticCard } from "@/components/effects/magnetic-card"
import { NewsletterForm } from "@/components/newsletter-form"
import { getFeaturedProjects } from "@/lib/content"

const stages = [
  {
    title: "Seedlings",
    description: "Sketches, prompts, proofs-of-concept ready to sprout.",
    icon: "🌱",
  },
  {
    title: "Blooming",
    description: "Active builds with dev logs, roadmaps, and opt-in betas.",
    icon: "🌸",
  },
  {
    title: "Harvest",
    description: "Launched apps, downloadable tools, and commercial licenses.",
    icon: "🌾",
  },
]

const salesPaths = [
  {
    title: "Buy Products",
    description:
      "Try or license ready-made apps and tools as they reach harvest.",
    href: "/products",
    cta: "Browse Products",
    icon: ShoppingBag,
  },
  {
    title: "Hire the Studio",
    description:
      "Bring us an idea, workflow, or half-built app and we will help ship it.",
    href: "/services",
    cta: "View Services",
    icon: Hammer,
  },
  {
    title: "Productize a Tool",
    description:
      "Turn an internal tool into a sellable offer with docs, licensing, and GTM support.",
    href: "/contact",
    cta: "Book a Call",
    icon: Boxes,
  },
]

export default function Home() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div>
      {/* HERO */}
      <header className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:pt-24">
        {/* Particle network background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <ParticleCanvas />
        </div>
        <div className="relative mx-auto max-w-3xl text-center space-y-6">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Practical{" "}
            <span className="gradient-text shimmer-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300">
              AI products
            </span>{" "}
            and software services that ship
          </h1>
          <p className="mx-auto max-w-xl text-lg text-neutral-300 sm:text-xl">
            Buy ready-made apps and media tools, or hire Greenhouse Labs to
            design, build, and launch your next software product.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-lg bg-emerald-500 text-neutral-900 hover:bg-emerald-400 font-semibold w-full sm:w-auto"
              asChild
            >
              <Link href="/products">
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg border-white/10 hover:bg-white/10 w-full sm:w-auto"
              asChild
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* SALES PATHS */}
      <section className="animate-on-scroll mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {salesPaths.map((path) => {
            const Icon = path.icon

            return (
              <Card
                key={path.title}
                className="rounded-lg border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold">{path.title}</h2>
                  <p className="mt-2 min-h-16 text-sm leading-6 text-neutral-300">
                    {path.description}
                  </p>
                  <Link
                    href={path.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
                  >
                    {path.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* INCUBATOR STAGES */}
      <section className="animate-on-scroll mx-auto max-w-7xl px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Product Pipeline
          </h2>
          <p className="text-neutral-300 text-lg">
            From early experiments to sellable apps, every project has a clear
            path toward launch, licensing, or client proof.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <Card
              key={stage.title}
              className="rounded-lg border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors group"
            >
              <CardContent className="p-6">
                <div className="mb-3 text-3xl">{stage.icon}</div>
                <h3 className="text-xl font-semibold group-hover:text-emerald-300 transition-colors">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  {stage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="animate-on-scroll mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-neutral-300">
              A mix of live products, production systems, and custom software
              case studies.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-lg border-white/10 hover:bg-white/10 w-full sm:w-auto"
            asChild
          >
            <Link href="/projects">View all</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.frontmatter.slug}
              href={`/projects/${project.frontmatter.slug}`}
              className="group block"
            >
              <MagneticCard className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5 hover:bg-neutral-900/60 transition-all">
                <div className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-emerald-400/15 to-teal-300/10 group-hover:from-emerald-400/25 group-hover:to-teal-300/20 transition-all flex items-center justify-center overflow-hidden relative">
                  {project.frontmatter.hero_image ? (
                    <Image
                      src={project.frontmatter.hero_image}
                      alt={project.frontmatter.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-4xl opacity-50">
                      {project.frontmatter.stage === "Seedling" && "🌱"}
                      {project.frontmatter.stage === "Blooming" && "🌸"}
                      {project.frontmatter.stage === "Harvest" && "🌾"}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold group-hover:text-emerald-300 transition-colors">
                      {project.frontmatter.title}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {project.frontmatter.stage} &middot;{" "}
                      {project.frontmatter.category}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      project.frontmatter.stage === "Seedling"
                        ? "border-amber-500/50 text-amber-400"
                        : project.frontmatter.stage === "Blooming"
                          ? "border-emerald-500/50 text-emerald-400"
                          : "border-blue-500/50 text-blue-400"
                    }
                  >
                    {project.frontmatter.stage}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-neutral-400 line-clamp-2">
                  {project.frontmatter.blurb}
                </p>
              </MagneticCard>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="animate-on-scroll mx-auto max-w-4xl px-6 pb-24 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Join the Greenhouse
          </h2>
          <p className="text-neutral-300 text-lg">
            Get early builds, drop alerts, and behind-the-scenes dev logs.
          </p>
        </div>
        <div className="mt-6">
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
