import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Boxes,
  Hammer,
  Leaf,
  Rocket,
  ShoppingBag,
  Sprout,
} from "lucide-react"
import { ParticleCanvas } from "@/components/effects/particle-canvas"
import { RegenerativeText } from "@/components/effects/regenerative-text"
import { MagneticCard } from "@/components/effects/magnetic-card"
import { NewsletterForm } from "@/components/newsletter-form"
import { HomeProjectShaper } from "@/components/home-project-shaper"
import { getFeaturedProjects } from "@/lib/content"

const heroProductPhrases = ["smart apps", "AI tools", "AI products"]

const stages = [
  {
    title: "Seedlings",
    description:
      "Rough ideas, workflow maps, prompt tests, and proof-of-concept builds.",
    detail: "Validate the shape",
    visual: Sprout,
  },
  {
    title: "Blooming",
    description:
      "Active builds with real users, system integrations, QA, and launch planning.",
    detail: "Harden the system",
    visual: Leaf,
  },
  {
    title: "Harvest",
    description:
      "Launched products with docs, licensing, analytics, and support loops.",
    detail: "Ship and improve",
    visual: Rocket,
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

function StageFallbackIcon({ stage }: { stage: string }) {
  const Icon =
    stage === "Seedling" ? Sprout : stage === "Blooming" ? Leaf : Rocket

  return <Icon className="h-10 w-10 text-emerald-300/60" />
}

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
            <RegenerativeText
              phrases={heroProductPhrases}
              className="gradient-text shimmer-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300"
              startDelay={900}
              typeDelay={72}
              deleteDelay={42}
              holdDelay={950}
              repeatDelay={6500}
            />{" "}
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

      <HomeProjectShaper />

      {/* SALES PATHS */}
      <section className="animate-on-scroll mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Once the path is clear, choose how you want to move
          </h2>
          <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base">
            Some teams need a finished product, some need a build partner, and
            some have an internal tool that is ready to become a sellable offer.
          </p>
        </div>
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
            A simple view of how rough opportunities become validated systems,
            production builds, and launched offers.
          </p>
        </div>
        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage, index) => {
            const Icon = stage.visual

            return (
              <Card
                key={stage.title}
                className="relative rounded-lg border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors group"
              >
                {index < stages.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-full top-10 hidden w-6 items-center justify-center text-emerald-300/40 lg:flex"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      0{index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-emerald-300 transition-colors">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-emerald-200">
                    {stage.detail}
                  </p>
                  <p className="mt-2 text-sm text-neutral-300">
                    {stage.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
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
                    <StageFallbackIcon stage={project.frontmatter.stage} />
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
            Greenhouse Labs Updates
          </h2>
          <p className="text-neutral-300 text-lg">
            Get product launches, project updates, release notes, and studio
            writing from across Greenhouse Labs.
          </p>
        </div>
        <div className="mt-6">
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
