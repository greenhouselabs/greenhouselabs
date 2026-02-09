import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParticleCanvas } from "@/components/effects/particle-canvas"
import { MagneticCard } from "@/components/effects/magnetic-card"
import { NewsletterForm } from "@/components/newsletter-form"
import { getAllPosts } from "@/lib/content"
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

export default function Home() {
  const featuredProjects = getFeaturedProjects()
  const recentPosts = getAllPosts().slice(0, 3)

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
            Where{" "}
            <span className="gradient-text shimmer-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300">
              Generative AI
            </span>{" "}
            projects grow
          </h1>
          <p className="mx-auto max-w-xl text-lg text-neutral-300 sm:text-xl">
            A portfolio and incubator — Greenhouse Labs is the nursery for ideas
            that bloom into real AI products, content, and tools.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-xl bg-emerald-500 text-neutral-900 hover:bg-emerald-400 font-semibold w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">Start Growing</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border-white/10 hover:bg-white/10 w-full sm:w-auto"
              asChild
            >
              <Link href="/projects">Explore Projects</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* INCUBATOR STAGES */}
      <section className="animate-on-scroll mx-auto max-w-7xl px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Incubator &amp; Nursery
          </h2>
          <p className="text-neutral-300 text-lg">
            From seed ideas to thriving releases — track growth stages and get
            early access.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <Card
              key={stage.title}
              className="rounded-2xl border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors group"
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
              A mix of research experiments and production-ready tools.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-xl border-white/10 hover:bg-white/10 w-full sm:w-auto"
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
                <div className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-emerald-400/15 to-teal-300/10 group-hover:from-emerald-400/25 group-hover:to-teal-300/20 transition-all flex items-center justify-center">
                  <span className="text-4xl opacity-50">
                    {project.frontmatter.stage === "Seedling" && "🌱"}
                    {project.frontmatter.stage === "Blooming" && "🌸"}
                    {project.frontmatter.stage === "Harvest" && "🌾"}
                  </span>
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

      {/* BLOG PREVIEW */}
      <section className="animate-on-scroll mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              From the Lab Journal
            </h2>
            <p className="mt-2 text-neutral-300">
              Build notes, research, and ideas to help your own projects grow.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-xl border-white/10 hover:bg-white/10 w-full sm:w-auto"
            asChild
          >
            <Link href="/blog">Read all</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link
              key={post.frontmatter.slug}
              href={`/blog/${post.frontmatter.slug}`}
              className="group block"
            >
              <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5 hover:bg-neutral-900/60 transition-colors">
                <div className="aspect-[16/10] rounded-xl border border-white/10 bg-gradient-to-br from-emerald-400/15 to-teal-300/10 group-hover:from-emerald-400/25 group-hover:to-teal-300/20 transition-all" />
                <h3 className="mt-4 text-lg font-semibold group-hover:text-emerald-300 transition-colors">
                  {post.frontmatter.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {post.frontmatter.excerpt}
                </p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-neutral-500">{post.readingTime}</span>
                  <span className="text-emerald-300 font-medium group-hover:underline">
                    Read &rarr;
                  </span>
                </div>
              </div>
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
