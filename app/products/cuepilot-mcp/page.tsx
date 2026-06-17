import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  CircleDollarSign,
  Code2,
  Eye,
  FileSearch,
  GitBranch,
  Headphones,
  Lock,
  Monitor,
  Radio,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wrench,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter-form"
import { CuePilotInstallSection } from "@/components/cuepilot-install-section"
import { CuePilotLaunchFab } from "@/components/cuepilot-launch-fab"

const cuePilotScreenshot = "/images/products/cuepilot-review-mode-dashboard.png"

export const metadata: Metadata = {
  title: "CuePilot MCP",
  description:
    "Read-first production intelligence for vMix from Greenhouse Labs. Review Mode inspects, explains, diagnoses, and plans before anything changes in vMix.",
  alternates: {
    canonical: "/products/cuepilot-mcp",
  },
  openGraph: {
    title: "CuePilot MCP | Greenhouse Labs",
    description:
      "Read-first production intelligence for vMix. Inspect state, diagnose show risks, review scripts, and generate safer automation plans before control.",
    url: "/products/cuepilot-mcp",
    images: [
      {
        url: cuePilotScreenshot,
        width: 1920,
        height: 1080,
        alt: "CuePilot MCP in Review Mode reading vMix state inside an MCP client.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CuePilot MCP | Greenhouse Labs",
    description:
      "Read-first production intelligence for vMix. Review, diagnose, and plan before anything changes.",
    images: [cuePilotScreenshot],
  },
}

const capabilities = [
  {
    title: "Inspect vMix State",
    description:
      "Read live vMix state, inputs, overlays, title fields, audio buses, tally, and production relationships before making recommendations.",
    icon: FileSearch,
  },
  {
    title: "Explain The Show",
    description:
      "Translate a preset into operator language: program, preview, likely roles, helper inputs, graphics, and review points.",
    icon: Monitor,
  },
  {
    title: "Diagnose Risks",
    description:
      "Review audio routing, mix-minus patterns, output readiness, logs, connection issues, and saved-vs-live preset drift.",
    icon: Headphones,
  },
  {
    title: "Plan Automation",
    description:
      "Generate reviewable VB.NET scripts and ordered API plans using actual input references without executing them in Review Mode.",
    icon: Code2,
  },
]

const safetyModes = [
  {
    mode: "Review Mode",
    status: "Default",
    description:
      "Reads state, explains setup, diagnoses risks, validates scripts, and produces checklists or automation plans. It does not mutate vMix.",
    icon: Eye,
  },
  {
    mode: "Control Mode",
    status: "Explicit opt-in",
    description:
      "Exposes safer live-control tools only when the operator sets VMIX_CONTROL_MODE=true in the MCP client environment.",
    icon: Wrench,
  },
  {
    mode: "High-Impact Control",
    status: "Second gate",
    description:
      "Requires VMIX_CONTROL_MODE=true and VMIX_HIGH_IMPACT=true for scripts, batch commands, streaming, recording, presets, output routing, and destructive changes.",
    icon: Lock,
  },
]

const workflows = [
  {
    title: "Pre-show review",
    body: "Ask CuePilot to explain the current preset, identify active and preview paths, summarize graphics and audio state, and call out anything worth checking before rehearsal.",
  },
  {
    title: "Audio and mix-minus diagnosis",
    body: "Review buses, mute state, solo state, vMix Call routing, caller returns, and feedback risks before a remote guest hears the wrong mix.",
  },
  {
    title: "Output readiness",
    body: "Separate what vMix state can prove from what still needs operator verification: stream destination, recording path, audio feed, external output, and downstream hardware.",
  },
  {
    title: "Script review",
    body: "Generate or validate VB.NET scripts with stable input references, syntax checks, loop-safety warnings, assumptions, and rehearsal notes.",
  },
  {
    title: "Saved preset audit",
    body: "Review a saved .vmix file for scripts, triggers, audio evidence, and drift from the running show without writing to the preset.",
  },
  {
    title: "Automation planning",
    body: "Produce ordered vMix API plans and operator checklists before enabling any direct control surface.",
  },
]

const audiences = [
  "Live-production operators",
  "Technical directors",
  "vMix power users",
  "Streaming teams",
  "Broadcast engineers",
  "AI-assisted production builders",
]

const launchItems = [
  {
    label: "Product page",
    value: "Friday launch",
    detail: "The Greenhouse Labs launch page can go public with email capture and setup preview.",
  },
  {
    label: "GitHub repository",
    value: "Private for now",
    detail: "Visibility will change as part of the coordinated public launch.",
  },
  {
    label: "npm package",
    value: "Not published yet",
    detail: "@greenhouselabs/cuepilot-mcp will be announced when install is ready.",
  },
]

const installStatus = [
  "Inline setup is visible now as a release-preview reference.",
  "Commands become usable only after @greenhouselabs/cuepilot-mcp is published to npm.",
  "GitHub visibility and npm publication remain coordinated release steps.",
  "Review Mode will be the recommended first-run experience.",
]

const faqs = [
  {
    question: "Is CuePilot MCP open source?",
    answer:
      "No. CuePilot MCP is source-available under the CuePilot Source-Available License. Greenhouse Ventures LLC is the legal owner and licensor, and Greenhouse Labs is the public brand.",
  },
  {
    question: "Does it control vMix?",
    answer:
      "Not by default. Review Mode is the default mode and is designed to inspect, explain, diagnose, validate, and plan. Direct control requires explicit environment-variable opt-in, and high-impact control requires a second gate.",
  },
  {
    question: "Does it expose secrets?",
    answer:
      "CuePilot is designed to redact sensitive values from preset and log-derived output, including stream keys, tokens, passwords, and vMix Call secrets. Operators should still avoid exposing vMix Web Controller to the public internet and should review any shared logs or presets carefully.",
  },
  {
    question: "Is this affiliated with vMix?",
    answer:
      "No. CuePilot MCP is an independent Greenhouse Labs integration for vMix workflows. It is not affiliated with, endorsed by, or sponsored by vMix or StudioCoast Pty Ltd.",
  },
]

function ProductBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] bg-[size:46px_46px]" />
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-emerald-500/12 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
    </div>
  )
}

function CuePilotProductScreenshot() {
  return (
    <figure className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-neutral-950/80 text-left shadow-2xl shadow-emerald-950/20">
      <Image
        src={cuePilotScreenshot}
        alt="CuePilot MCP in Review Mode reading vMix server status and state summary inside an MCP client."
        width={1920}
        height={1080}
        priority
        className="h-auto w-full"
      />
      <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-neutral-400">
        CuePilot MCP reading live vMix state in Review Mode before any control
        tools are enabled.
      </figcaption>
    </figure>
  )
}

export default function CuePilotProductPage() {
  return (
    <div>
      <CuePilotLaunchFab />
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 sm:py-24 lg:py-28">
        <ProductBackdrop />
        <div className="mx-auto max-w-5xl text-center">
          <Badge
            variant="outline"
            className="mb-5 border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
          >
            Launches Friday
          </Badge>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            CuePilot MCP
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-neutral-200 sm:text-2xl">
            Read-first production intelligence for vMix.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-neutral-300 sm:text-lg">
            CuePilot MCP helps AI assistants inspect vMix state, explain live
            shows, diagnose routing and output risks, review scripts, and
            generate automation plans before anything changes in vMix.
          </p>
          <NewsletterForm
            buttonLabel="Email Me at Launch"
            className="mt-8"
            formClassName="mx-auto flex max-w-xl flex-col gap-2 sm:flex-row"
            placeholder="operator@studio.com"
            source="cuepilot-mcp"
            successMessage="You're on the CuePilot MCP launch list."
            tags={["cuepilot-mcp", "launch-list"]}
          />
          <div className="mt-4 flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="w-full rounded-lg border-white/10 hover:bg-white/10 sm:w-auto"
              asChild
            >
              <Link href="#safety-model">
                Review Safety Model
                <ShieldCheck className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <CuePilotProductScreenshot />
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-neutral-950/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Default
              </p>
              <p className="mt-2 text-sm text-neutral-200">Review Mode</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-neutral-950/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Package
              </p>
              <p className="mt-2 text-sm text-neutral-200">Coming at launch</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-neutral-950/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                License
              </p>
              <p className="mt-2 text-sm text-neutral-200">Source-available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Badge
              variant="outline"
              className="mb-4 border-cyan-400/30 text-cyan-200"
            >
              Friday launch
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Prepared before the public switch flips
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base">
              The page is being prepared first so the public launch can
              coordinate the product story, GitHub visibility, npm package, and
              support channels without implying the package is installable
              early.
            </p>
            <NewsletterForm
              buttonLabel="Get Updates"
              className="mt-6"
              formClassName="flex flex-col gap-2 sm:flex-row lg:flex-col"
              placeholder="you@production.team"
              source="cuepilot-mcp"
              successMessage="You're on the CuePilot MCP launch list."
              tags={["cuepilot-mcp", "launch-list"]}
            />
            <div className="mt-3 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                variant="outline"
                className="rounded-lg border-white/10 hover:bg-white/10"
                asChild
              >
                <Link href="/contact?interest=cuepilot-mcp-support">
                  Support Development
                  <CircleDollarSign className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {launchItems.map((item) => (
              <article
                key={item.label}
                className="rounded-lg border border-white/10 bg-neutral-900/40 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {item.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/25">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 border-emerald-400/30 text-emerald-200"
            >
              What it does
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Understand the show before changing the show
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base">
              CuePilot MCP connects AI assistants to vMix state and curated
              production knowledge so operators can ask better questions before
              a rehearsal, stream, recording, or client show.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon

              return (
                <article
                  key={capability.title}
                  className="rounded-lg border border-white/10 bg-neutral-950/50 p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{capability.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    {capability.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="safety-model" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 border-amber-400/30 text-amber-200"
            >
              Safety model
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Review first. Control only by explicit opt-in.
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base">
              CuePilot is built for safer AI-assisted production workflows.
              The default experience keeps the assistant in an advisory role
              and makes control boundaries visible.
            </p>
          </div>
          <ShieldCheck className="hidden h-10 w-10 text-emerald-300 sm:block" />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {safetyModes.map((mode) => {
            const Icon = mode.icon

            return (
              <article
                key={mode.mode}
                className="rounded-lg border border-white/10 bg-neutral-900/40 p-6"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Badge
                    variant="outline"
                    className="border-white/10 text-neutral-300"
                  >
                    {mode.status}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold">{mode.mode}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  {mode.description}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <CuePilotInstallSection />

      <section className="border-y border-white/10 bg-neutral-900/25">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-cyan-400/30 text-cyan-200"
              >
                Example workflows
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight">
                Useful before rehearsal, before go-live, and after something
                feels off
              </h2>
              <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base">
                CuePilot is strongest when a user asks for inspection,
                explanation, diagnosis, or a reviewable plan. It can help a
                team turn a messy vMix setup into a checklist the operator can
                trust.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {workflows.map((workflow) => (
                <article
                  key={workflow.title}
                  className="rounded-lg border border-white/10 bg-neutral-950/50 p-5"
                >
                  <div className="mb-3 flex items-center gap-2 text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" />
                    <h3 className="font-semibold text-white">
                      {workflow.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-neutral-400">
                    {workflow.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Badge
              variant="outline"
              className="mb-4 border-emerald-400/30 text-emerald-200"
            >
              Built for
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Production people who need clarity under pressure
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base">
              CuePilot is for operators and builders who already know vMix is
              powerful, but want an AI assistant that can read the show,
              respect the control boundary, and produce reviewable next steps.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {audiences.map((audience) => (
                <Badge
                  key={audience}
                  variant="outline"
                  className="border-white/10 bg-white/5 text-neutral-300"
                >
                  {audience}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-neutral-900/40 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-200">
                <TerminalSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Status at launch prep</h3>
                <p className="text-sm text-neutral-400">
                  Setup details are visible, but install availability is not
                  live yet.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {installStatus.map((item) => (
                <div key={item} className="flex gap-3">
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                  <p className="text-sm leading-6 text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/25">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3">
          <article className="rounded-lg border border-white/10 bg-neutral-950/50 p-6">
            <GitBranch className="mb-4 h-6 w-6 text-emerald-300" />
            <h3 className="text-lg font-semibold">Source-available</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              The source may be made available for review, learning,
              verification, debugging, and private internal modification under
              the CuePilot Source-Available License.
            </p>
          </article>
          <article className="rounded-lg border border-white/10 bg-neutral-950/50 p-6">
            <BookOpen className="mb-4 h-6 w-6 text-cyan-200" />
            <h3 className="text-lg font-semibold">Not open source</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Redistribution, public forks, competing products, hosted managed
              offerings, and broader reuse require written permission from
              Greenhouse Ventures LLC.
            </p>
          </article>
          <article className="rounded-lg border border-white/10 bg-neutral-950/50 p-6">
            <Radio className="mb-4 h-6 w-6 text-amber-200" />
            <h3 className="text-lg font-semibold">Independent integration</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              CuePilot MCP integrates with vMix workflows through documented
              local interfaces. It is not affiliated with, endorsed by, or
              sponsored by vMix or StudioCoast Pty Ltd.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center">
          <Badge
            variant="outline"
            className="mb-4 border-white/10 text-neutral-300"
          >
            FAQ
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight">
            Practical answers before launch
          </h2>
        </div>
        <div className="mt-10 divide-y divide-white/10 rounded-lg border border-white/10 bg-neutral-900/40">
          {faqs.map((faq) => (
            <article key={faq.question} className="p-6">
              <h3 className="font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="launch-updates"
        className="mx-auto max-w-4xl scroll-mt-24 px-6 pb-28 text-center sm:pb-20"
      >
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/20 p-8">
          <Sparkles className="mx-auto mb-4 h-8 w-8 text-emerald-300" />
          <h2 className="text-2xl font-semibold tracking-tight">
            Follow the CuePilot MCP launch
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
            Join the launch list for availability updates, early notes, and
            official setup details when the GitHub and npm release are ready.
          </p>
          <NewsletterForm
            buttonLabel="Join Launch List"
            className="mt-6"
            formClassName="mx-auto flex max-w-xl flex-col justify-center gap-2 sm:flex-row"
            placeholder="you@studio.com"
            source="cuepilot-mcp"
            successMessage="You're on the CuePilot MCP launch list."
            tags={["cuepilot-mcp", "launch-list"]}
          />
          <div className="mt-4 flex justify-center">
            <Button
              variant="outline"
              className="rounded-lg border-white/10 hover:bg-white/10"
              asChild
            >
              <Link href="/services">
                Build With Greenhouse Labs
                <Zap className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
