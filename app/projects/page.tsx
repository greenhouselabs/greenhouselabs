import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Flower2, Sprout, Wheat } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MagneticCard } from "@/components/effects/magnetic-card"
import { RegenerativeText } from "@/components/effects/regenerative-text"
import { getAllProjects } from "@/lib/content"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Greenhouse Labs projects — from seedling prototypes to harvest-ready products.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Greenhouse Labs",
    description:
      "Explore Greenhouse Labs projects from seedling prototypes to harvest-ready products.",
    url: "/projects",
  },
}

const projectPathPhrases = [
  "seedling prototypes",
  "active builds",
  "harvest-ready products",
]

function stageBadgeClasses(stage: string) {
  switch (stage) {
    case "Seedling":
      return "border-amber-500/50 text-amber-400"
    case "Blooming":
      return "border-emerald-500/50 text-emerald-400"
    case "Harvest":
      return "border-blue-500/50 text-blue-400"
    default:
      return ""
  }
}

function StageIcon({
  stage,
  className = "h-4 w-4",
}: {
  stage: string
  className?: string
}) {
  switch (stage) {
    case "Seedling":
      return <Sprout aria-hidden="true" className={className} />
    case "Blooming":
      return <Flower2 aria-hidden="true" className={className} />
    case "Harvest":
      return <Wheat aria-hidden="true" className={className} />
    default:
      return null
  }
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-4">
          Projects
        </h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          Explore{" "}
          <RegenerativeText
            phrases={projectPathPhrases}
            className="text-emerald-200"
            startDelay={900}
            typeDelay={56}
            deleteDelay={34}
            holdDelay={860}
            repeatDelay={9400}
          />{" "}
          growing in the greenhouse.
        </p>
      </div>

      {/* Stage legend */}
      <div className="mb-10 flex flex-wrap justify-center gap-4">
        {["Seedling", "Blooming", "Harvest"].map((stage) => (
          <div
            key={stage}
            className="flex items-center gap-2 text-sm text-neutral-400"
          >
            <StageIcon stage={stage} />
            <span>{stage}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.frontmatter.slug}
            href={`/projects/${project.frontmatter.slug}`}
            className="group block"
          >
            <MagneticCard className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5 hover:bg-neutral-900/60 transition-all h-full flex flex-col">
              <div className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-emerald-400/15 to-teal-300/10 group-hover:from-emerald-400/25 group-hover:to-teal-300/20 transition-all flex items-center justify-center overflow-hidden relative">
                {project.frontmatter.hero_image ? (
                  <Image
                    src={project.frontmatter.hero_image}
                    alt={project.frontmatter.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <StageIcon
                    stage={project.frontmatter.stage}
                    className="h-12 w-12 opacity-50"
                  />
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold group-hover:text-emerald-300 transition-colors">
                    {project.frontmatter.title}
                  </h2>
                  <p className="text-sm text-neutral-400">
                    {project.frontmatter.category}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={stageBadgeClasses(project.frontmatter.stage)}
                >
                  {project.frontmatter.stage}
                </Badge>
              </div>
              <p className="mt-2 text-sm text-neutral-400 line-clamp-2 flex-1">
                {project.frontmatter.blurb}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.frontmatter.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-white/10 text-neutral-500 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </MagneticCard>
          </Link>
        ))}
      </div>
    </div>
  )
}
