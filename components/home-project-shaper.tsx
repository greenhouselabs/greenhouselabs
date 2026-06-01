"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ArrowRight,
  Bot,
  Boxes,
  CheckCircle2,
  Monitor,
  Radio,
} from "lucide-react"
import { cn } from "@/lib/utils"

const projectShapes = [
  {
    id: "ai-assistant",
    label: "AI Assistant",
    icon: Bot,
    transform: "Scattered docs -> guided assistant",
    signal: "People ask the same questions, search the same docs, or wait on the same expert.",
    build:
      "Turn trusted context into a guided answer flow with citations, handoffs, and clear boundaries.",
    proof: "Faster answers, fewer repeated requests, and a visible quality review loop.",
    outcomes: ["Knowledge map", "Guardrailed prototype", "Usage review"],
    cta: "Shape an AI Assistant",
  },
  {
    id: "workflow-tool",
    label: "Workflow Tool",
    icon: Monitor,
    transform: "Manual tracking -> operational dashboard",
    signal: "A team is moving work through spreadsheets, messages, and manual status checks.",
    build:
      "Map the operational loop, connect the source systems, and ship one reliable work surface.",
    proof: "Less manual tracking, cleaner handoffs, and a dashboard the team actually opens.",
    outcomes: ["Workflow map", "Connected prototype", "Operator dashboard"],
    cta: "Map a Workflow Tool",
  },
  {
    id: "product-mvp",
    label: "Product MVP",
    icon: Boxes,
    transform: "Half-built idea -> launchable MVP",
    signal: "There is a product idea, partial build, or prototype that needs a sharper launch path.",
    build:
      "Define the narrow first offer, build the core loop, and put it in front of real users.",
    proof: "A testable product path with clearer scope, pricing signals, and user feedback.",
    outcomes: ["Product wedge", "Core loop", "Launch checklist"],
    cta: "Scope a Product MVP",
  },
  {
    id: "media-system",
    label: "Media System",
    icon: Radio,
    transform: "Production friction -> reliable media system",
    signal: "Production work depends on brittle tools, live handoffs, or custom media workflows.",
    build:
      "Trace the signal flow, isolate the fragile steps, and build the control surface around them.",
    proof: "More predictable production, fewer manual saves, and clearer operational status.",
    outcomes: ["Signal map", "Control surface", "Reliability checks"],
    cta: "Plan a Media System",
  },
]

export function HomeProjectShaper() {
  const [activeId, setActiveId] = useState(projectShapes[0].id)
  const activeShape =
    projectShapes.find((shape) => shape.id === activeId) ?? projectShapes[0]
  const ActiveIcon = activeShape.icon

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="border-y border-white/10 py-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.35fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-emerald-300">
              First useful sprint
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Turn a rough idea into a buildable path
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base">
              Pick the closest starting point and the path sharpens around the
              first thing worth validating.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
              {projectShapes.map((shape) => {
                const Icon = shape.icon
                const isActive = shape.id === activeShape.id

                return (
                  <button
                    key={shape.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(shape.id)}
                    className={cn(
                      "flex min-h-20 flex-col items-center justify-center gap-2 rounded-lg border px-3 py-3 text-center text-xs font-semibold transition-colors",
                      isActive
                        ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-100"
                        : "border-white/10 bg-neutral-900/40 text-neutral-400 hover:border-white/20 hover:text-white"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{shape.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="rounded-lg border border-white/10 bg-neutral-900/40 p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{activeShape.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-neutral-300">
                      {activeShape.signal}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/contact?interest=${activeShape.id}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-neutral-950 transition-colors hover:bg-emerald-400"
                >
                  {activeShape.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 rounded-lg border border-white/10 bg-neutral-950/40 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Input to output
                </div>
                <div className="mt-3 text-base font-semibold text-emerald-100">
                  {activeShape.transform}
                </div>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
                <div className="rounded-lg border border-white/10 bg-neutral-950/40 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    What we would build
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-200">
                    {activeShape.build}
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-neutral-950/40 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    How we know it worked
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-200">
                    {activeShape.proof}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {activeShape.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950/40 px-3 py-1.5 text-xs font-medium text-neutral-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
