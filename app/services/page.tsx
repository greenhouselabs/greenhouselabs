import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Bot,
  Boxes,
  Radio,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { BuildPathPreview } from "@/components/effects/build-path-preview"
import { RegenerativeText } from "@/components/effects/regenerative-text"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom AI product development, workflow automation, media software, and GTM support from Greenhouse Labs.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Greenhouse Labs",
    description:
      "Custom AI product development, workflow automation, media software, and GTM support from Greenhouse Labs.",
    url: "/services",
    images: [
      {
        url: "/images/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "Greenhouse Labs services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Greenhouse Labs",
    description:
      "Custom AI product development, workflow automation, media software, and GTM support from Greenhouse Labs.",
    images: ["/images/og/services.jpg"],
  },
}

const serviceFocusPhrases = ["messy workflows", "media tools", "AI product launches"]

const services = [
  {
    title: "AI Product Builds",
    description:
      "Design, build, and launch AI apps with real UX, secure data flows, and production-ready infrastructure.",
    icon: Bot,
    bullets: ["SaaS and internal tools", "RAG and agent workflows", "Auth, billing, and deployment"],
  },
  {
    title: "Workflow Automation",
    description:
      "Turn messy operations into reliable tools for teams that need less manual work and better visibility.",
    icon: Workflow,
    bullets: ["Process mapping", "Dashboards and task queues", "Google, Slack, and CRM integrations"],
  },
  {
    title: "Media and Broadcast Tools",
    description:
      "Specialized software for live production, streaming, NDI, creator platforms, and event workflows.",
    icon: Radio,
    bullets: ["Streaming platforms", "NDI and audio utilities", "Creator monetization systems"],
  },
  {
    title: "Productization",
    description:
      "Package half-finished tools into sellable products with onboarding, pricing, docs, and launch paths.",
    icon: Boxes,
    bullets: ["MVP completion", "Licensing and purchase flows", "Docs and support loops"],
  },
]

const engagementModels = [
  {
    title: "Diagnostic Sprint",
    description:
      "A focused audit of an app, workflow, or product idea with a clear build plan and launch path.",
  },
  {
    title: "Build Sprint",
    description:
      "A defined feature or prototype shipped quickly, usually for validation, demos, or internal adoption.",
  },
  {
    title: "Product Build",
    description:
      "A full product engagement covering design, implementation, deployment, and launch support.",
  },
]

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <section className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Custom software for{" "}
          <RegenerativeText
            phrases={serviceFocusPhrases}
            className="gradient-text shimmer-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300"
            startDelay={800}
            typeDelay={62}
            deleteDelay={36}
            holdDelay={900}
            repeatDelay={8200}
          />
        </h1>
        <p className="mt-4 text-lg text-neutral-300">
          Hire Greenhouse Labs to finish, harden, and launch the tools your team
          needs. We specialize in practical AI products, internal automation,
          and media software that has to work outside the demo.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="rounded-lg bg-emerald-500 text-neutral-950 hover:bg-emerald-400"
            asChild
          >
            <Link href="/contact">
              Book a Build Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-lg border-white/10 hover:bg-white/10"
            asChild
          >
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </section>

      <section className="mb-14 border-y border-white/10 py-8">
        <BuildPathPreview />
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <article
              key={service.title}
              className="rounded-lg border border-white/10 bg-neutral-900/40 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-300">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </section>

      <section className="mt-14">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Ways to work together</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Pick the smallest useful engagement, then expand only when the
              work proves itself.
            </p>
          </div>
          <Rocket className="hidden h-8 w-8 text-emerald-300 sm:block" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {engagementModels.map((model) => (
            <article
              key={model.title}
              className="rounded-lg border border-white/10 bg-neutral-900/40 p-5"
            >
              <h3 className="font-semibold">{model.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">
                {model.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-lg border border-emerald-500/20 bg-emerald-950/20 p-6 text-center">
        <h2 className="text-2xl font-semibold">Have an app that is almost ready?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-neutral-300">
          Bring the repo, the product idea, or the messy workflow. We can help
          turn it into a launchable offer with the right technical and sales
          path around it.
        </p>
        <Button
          className="mt-5 rounded-lg bg-emerald-500 text-neutral-950 hover:bg-emerald-400"
          asChild
        >
          <Link href="/contact">
            Start a Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
