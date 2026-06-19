import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Code2,
  Eye,
  FileSearch,
  Github,
  GitBranch,
  Headphones,
  HeartHandshake,
  Lock,
  Monitor,
  Package,
  Radio,
  ShieldCheck,
  TerminalSquare,
  Wrench,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter-form"
import { CueScopeInstallSection } from "@/components/cuescope-install-section"
import { CueScopeLaunchFab } from "@/components/cuescope-launch-fab"

const cueScopeScreenshot = "/images/products/cuescope-review-mode-dashboard.png"
const cueScopeSupportUrl = "https://buy.stripe.com/cNi00j7xK5ZzaWS4s19sk01"
const cueScopeNpmUrl =
  "https://www.npmjs.com/package/@greenhouselabs/cuescope-mcp"
const cueScopeGithubUrl = "https://github.com/greenhouselabs/cuescope-mcp"
const cueScopeReleaseUrl =
  "https://github.com/greenhouselabs/cuescope-mcp/releases/tag/v1.0.2"

export const metadata: Metadata = {
  title: "CueScope MCP",
  description:
    "CueScope is a read-first MCP server for workflows compatible with vMix, available now on npm as @greenhouselabs/cuescope-mcp.",
  alternates: {
    canonical: "/products/cuescope-mcp",
  },
  openGraph: {
    title: "CueScope MCP | Greenhouse Labs",
    description:
      "Read-first production intelligence for workflows compatible with vMix. Public npm launch is live with v1.0.2.",
    url: "/products/cuescope-mcp",
    images: [
      {
        url: cueScopeScreenshot,
        width: 1920,
        height: 1080,
        alt: "CueScope in Review Mode reading vMix state inside an MCP client.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CueScope MCP | Greenhouse Labs",
    description:
      "Read-first production intelligence for workflows compatible with vMix. Public npm launch is live with v1.0.2.",
    images: [cueScopeScreenshot],
  },
}

const capabilities = [
  {
    title: "Inspect Live Show State",
    description:
      "Read live show state, inputs, active and preview paths, overlays, tally, title fields, and production relationships before making recommendations.",
    icon: FileSearch,
  },
  {
    title: "Explain Inputs And Titles",
    description:
      "Translate inputs, title fields, countdown metadata, and data-source bindings into operator language with clear assumptions.",
    icon: Monitor,
  },
  {
    title: "Diagnose Audio And Routing",
    description:
      "Review buses, mutes, solo state, vMix Call patterns, route choices, output readiness, and mix-minus risks.",
    icon: Headphones,
  },
  {
    title: "Review Saved .vmix Presets",
    description:
      "Inspect saved presets for scripts, triggers, audio evidence, redacted metadata, and differences from the running show.",
    icon: GitBranch,
  },
  {
    title: "Generate Reviewable Plans",
    description:
      "Produce script reviews, targeted trigger summaries, and ordered API plans using actual references without executing them in Review Mode.",
    icon: Code2,
  },
]

const releaseHighlights = [
  {
    title: "Live-first input inspection",
    body: "Prioritizes the running show so producers, technical directors, and operators can inspect real inputs before leaning on saved preset assumptions.",
  },
  {
    title: "Saved GT/title countdown metadata parsing",
    body: "Surfaces saved graphics and title countdown metadata so review notes can include timing behavior operators need to verify.",
  },
  {
    title: "Title data-source binding detection",
    body: "Detects title field bindings to data sources, helping teams trace where on-air text may be populated from before showtime.",
  },
  {
    title: "Targeted trigger/script reference summaries",
    body: "Summarizes nearby trigger and script references for the requested input so automation risks are easier to review before control is enabled.",
  },
]

const safetyModes = [
  {
    mode: "Review Mode",
    status: "Default",
    description:
      "Exposes 18 review-only tools to read state, explain setup, diagnose risks, validate scripts, and produce checklists or automation plans. It does not mutate vMix.",
    icon: Eye,
  },
  {
    mode: "Control Mode",
    status: "Explicit opt-in",
    description:
      "Unlocks gated control tools only when the operator sets VMIX_CONTROL_MODE=true in the MCP client environment.",
    icon: Wrench,
  },
  {
    mode: "High-Impact Control",
    status: "Second gate",
    description:
      "Requires VMIX_CONTROL_MODE=true and VMIX_HIGH_IMPACT=true for scripts, batch commands, recording, streaming, presets, output routing, destructive input changes, show-building, and replay recording.",
    icon: Lock,
  },
]

const workflows = [
  {
    title: "Pre-show review",
    body: "Ask CueScope to explain the current preset, identify active and preview paths, summarize graphics and audio state, and call out anything worth checking before rehearsal.",
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
    label: "Package",
    value: "@greenhouselabs/cuescope-mcp@1.0.2",
    detail: "Published on npm for MCP client setup.",
  },
  {
    label: "Status",
    value: "Public launch live",
    detail: "CueScope is available now from the public npm registry.",
  },
  {
    label: "GitHub repository",
    value: "Public",
    detail: "The source-available repository is public for review, setup guidance, and issue tracking.",
  },
  {
    label: "Release",
    value: "v1.0.2",
    detail: "Latest release includes richer live inspection and preset metadata review.",
  },
]

const installStatus = [
  "Published on npm as @greenhouselabs/cuescope-mcp@1.0.2.",
  "Global install command: npm install -g @greenhouselabs/cuescope-mcp.",
  "The source-available GitHub repository is public for review, setup guidance, and issue tracking.",
  "GitHub release v1.0.2 is available for launch review.",
  "Review Mode is the recommended first-run experience with 18 review-only tools.",
  "The server has 135 known tools, with control and high-impact tools hidden behind explicit gates.",
]

const faqs = [
  {
    question: "Is CueScope open source?",
    answer:
      "No. CueScope is source-available under the CueScope Source-Available License. Greenhouse Ventures LLC is the legal owner and licensor, and Greenhouse Labs is the public brand.",
  },
  {
    question: "Does it control vMix?",
    answer:
      "Not by default. Review Mode is the default and does not mutate vMix. Direct control requires VMIX_CONTROL_MODE=true, and high-impact actions require VMIX_HIGH_IMPACT=true as a second gate.",
  },
  {
    question: "Does it expose secrets?",
    answer:
      "CueScope is designed to redact sensitive values from preset and log-derived output, including stream keys, tokens, passwords, and vMix Call secrets. Operators should still avoid exposing vMix Web Controller to the public internet and should review any shared logs or presets carefully.",
  },
  {
    question: "Is this affiliated with vMix?",
    answer:
      "No. CueScope is independent software from Greenhouse Labs and Greenhouse Ventures LLC. It is not affiliated with, endorsed by, or sponsored by vMix or StudioCoast Pty Ltd.",
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

function CueScopeProductScreenshot() {
  return (
    <figure className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-neutral-950/80 text-left shadow-2xl shadow-emerald-950/20">
      <Image
        src={cueScopeScreenshot}
        alt="CueScope in Review Mode reading vMix server status and state summary inside an MCP client."
        width={1920}
        height={1080}
        priority
        className="h-auto w-full"
      />
      <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-neutral-400">
        CueScope reading live vMix state in Review Mode before any control
        tools are enabled.
      </figcaption>
    </figure>
  )
}

export default function CueScopeProductPage() {
  return (
    <div>
      <CueScopeLaunchFab />
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 sm:py-24 lg:py-28">
        <ProductBackdrop />
        <div className="mx-auto max-w-5xl text-center">
          <Badge
            variant="outline"
            className="mb-5 border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
          >
            Public npm launch live. Latest release v1.0.2.
          </Badge>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            CueScope MCP
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-neutral-200 sm:text-2xl">
            Read-first production intelligence for workflows compatible with
            vMix.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-neutral-300 sm:text-lg">
            CueScope helps producers, technical directors, and operators use AI
            assistants to inspect live-production state, explain inputs and
            titles, diagnose routing risks, review saved presets and scripts,
            and generate automation plans before anything changes.
            Available now on npm as{" "}
            <span className="font-mono text-emerald-200">
              @greenhouselabs/cuescope-mcp@1.0.2
            </span>
            .
          </p>
          <NewsletterForm
            buttonLabel="Join CueScope Updates"
            className="mt-8"
            formClassName="mx-auto flex max-w-xl flex-col gap-2 sm:flex-row"
            placeholder="operator@studio.com"
            source="cuescope-mcp"
            successMessage="You're on the CueScope updates list."
            tags={["cuescope-mcp", "launch-list"]}
          />
          <div className="mt-4 flex justify-center">
            <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button
                size="lg"
                className="rounded-lg bg-emerald-400 text-neutral-950 hover:bg-emerald-300"
                asChild
              >
                <a
                  href={cueScopeNpmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on npm
                  <Package className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg border-white/10 hover:bg-white/10"
                asChild
              >
                <a
                  href={cueScopeGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                  <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg border-white/10 hover:bg-white/10"
                asChild
              >
                <a
                  href={cueScopeReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View v1.0.2 Release
                  <GitBranch className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg border-white/10 hover:bg-white/10"
                asChild
              >
                <Link href="#safety-model">
                  Review Safety Model
                  <ShieldCheck className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <CueScopeProductScreenshot />
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
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
              <p className="mt-2 break-words font-mono text-sm text-neutral-200">
                @greenhouselabs/cuescope-mcp@1.0.2
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-neutral-950/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                License
              </p>
              <p className="mt-2 text-sm text-neutral-200">Source-available</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-neutral-950/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Status
              </p>
              <p className="mt-2 text-sm text-neutral-200">
                Available on npm
              </p>
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
              Available on npm
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Public npm launch is live
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base">
              CueScope is published on npm and the source-available GitHub
              repository is public for review, setup guidance, and issue
              tracking. Install the package globally or connect it directly
              from an MCP client with npx.
            </p>
            <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-neutral-950">
              <pre className="overflow-x-auto p-4 text-left text-sm leading-6 text-emerald-100">
                <code>npm install -g @greenhouselabs/cuescope-mcp</code>
              </pre>
            </div>
            <NewsletterForm
              buttonLabel="Get CueScope Updates"
              className="mt-6"
              formClassName="flex flex-col gap-2 sm:flex-row lg:flex-col"
              placeholder="you@production.team"
              source="cuescope-mcp"
              successMessage="You're on the CueScope updates list."
              tags={["cuescope-mcp", "launch-list"]}
            />
            <div className="mt-3 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                className="rounded-lg bg-emerald-400 text-neutral-950 hover:bg-emerald-300"
                asChild
              >
                <a
                  href={cueScopeNpmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open npm Package
                  <Package className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="rounded-lg border-white/10 hover:bg-white/10"
                asChild
              >
                <a
                  href={cueScopeGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open GitHub Repository
                  <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="rounded-lg border-white/10 hover:bg-white/10"
                asChild
              >
                <a
                  href={cueScopeReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open v1.0.2 Release
                  <GitBranch className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="rounded-lg border-white/10 hover:bg-white/10"
                asChild
              >
                <a
                  href={cueScopeSupportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support CueScope
                  <HeartHandshake className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {launchItems.map((item) => (
              <article
                key={item.label}
                className="rounded-lg border border-white/10 bg-neutral-900/40 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {item.label}
                </p>
                <h3 className="mt-3 break-words text-lg font-semibold text-white">
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

      <section className="border-y border-emerald-400/20 bg-emerald-950/15">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <Badge
              variant="outline"
              className="mb-4 border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
            >
              v1.0.2 update
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Sharper inspection before operators make changes
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base">
              The latest release focuses on production confidence: more useful
              live input inspection, richer saved preset metadata, and more
              targeted review of title, trigger, and script references.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {releaseHighlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-lg border border-white/10 bg-neutral-950/50 p-5"
              >
                <div className="mb-3 flex items-center gap-2 text-emerald-300">
                  <BadgeCheck className="h-4 w-4 shrink-0" />
                  <h3 className="font-semibold text-white">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-neutral-400">
                  {highlight.body}
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
              CueScope connects AI assistants to live show state and curated
              production knowledge so operators can ask better questions before
              a rehearsal, stream, recording, or client show.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
              CueScope starts in Review Mode, exposing 18 review-only tools for
              inspection, diagnosis, validation, and planning. Safer control
              tools require VMIX_CONTROL_MODE=true, and high-impact actions
              such as scripts, batch commands, recording, streaming, presets,
              output routing, destructive input changes, show-building, and
              replay recording require VMIX_HIGH_IMPACT=true as a second gate.
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

      <CueScopeInstallSection />

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
                CueScope is strongest when a user asks for inspection,
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
              CueScope is for operators and builders who already know vMix is
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
                <h3 className="font-semibold">Launch status</h3>
                <p className="text-sm text-neutral-400">
                  Setup details are live, npm install is available now, and
                  the v1.0.2 release is ready for review.
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
              The source is available for review, learning,
              verification, debugging, and private internal modification under
              the CueScope Source-Available License.
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
              CueScope is independent software for workflows compatible with
              vMix. It is not affiliated with, endorsed by, or sponsored by
              vMix or StudioCoast Pty Ltd. vMix is a trademark of its
              respective owner.
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
            Practical answers for launch
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
          <h2 className="text-2xl font-semibold tracking-tight">
            Follow the CueScope launch
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
            Join CueScope updates for release notes, setup guidance, and demo
            availability.
          </p>
          <NewsletterForm
            buttonLabel="Join CueScope Updates"
            className="mt-6"
            formClassName="mx-auto flex max-w-xl flex-col justify-center gap-2 sm:flex-row"
            placeholder="you@studio.com"
            source="cuescope-mcp"
            successMessage="You're on the CueScope updates list."
            tags={["cuescope-mcp", "launch-list"]}
          />
          <div className="mt-4 flex justify-center">
            <Button
              variant="outline"
              className="rounded-lg border-white/10 hover:bg-white/10"
              asChild
            >
              <Link href="/services">
                Build With Greenhouse Labs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
