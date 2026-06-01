"use client"

import { useState } from "react"
import {
  ArrowRight,
  Bot,
  Monitor,
  Radio,
  Rocket,
  Workflow,
} from "lucide-react"
import { cn } from "@/lib/utils"

const paths = [
  {
    id: "internal-tool",
    label: "Internal Tool",
    icon: Monitor,
    draft: "Manual process",
    outcome: "Operational system",
    steps: ["Map the workflow", "Connect the systems", "Ship the dashboard"],
  },
  {
    id: "ai-assistant",
    label: "AI Assistant",
    icon: Bot,
    draft: "Scattered knowledge",
    outcome: "Guided assistant",
    steps: ["Collect the context", "Design guardrails", "Deploy the workflow"],
  },
  {
    id: "media-workflow",
    label: "Media Workflow",
    icon: Radio,
    draft: "Production friction",
    outcome: "Reliable pipeline",
    steps: ["Trace the handoffs", "Automate the busywork", "Monitor delivery"],
  },
  {
    id: "product-mvp",
    label: "Product MVP",
    icon: Rocket,
    draft: "Half-built idea",
    outcome: "Launchable offer",
    steps: ["Scope the wedge", "Build the core loop", "Launch and learn"],
  },
]

export function BuildPathPreview() {
  const [activePathId, setActivePathId] = useState(paths[0].id)
  const activePath = paths.find((path) => path.id === activePathId) ?? paths[0]
  const ActiveIcon = activePath.icon

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.4fr] lg:items-center">
      <div>
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
          <Workflow className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Idea to system path
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-300">
          A clear build path turns the first rough brief into something useful
          enough to test, ship, and improve.
        </p>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {paths.map((path) => {
            const Icon = path.icon
            const isActive = path.id === activePath.id

            return (
              <button
                key={path.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActivePathId(path.id)}
                className={cn(
                  "flex min-h-20 flex-col items-center justify-center gap-2 rounded-lg border px-3 py-3 text-center text-xs font-semibold transition-colors",
                  isActive
                    ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-200"
                    : "border-white/10 bg-neutral-900/40 text-neutral-400 hover:border-white/20 hover:text-white"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{path.label}</span>
              </button>
            )
          })}
        </div>

        <div className="rounded-lg border border-white/10 bg-neutral-900/40 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
                <ActiveIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-neutral-400">Draft input</div>
                <div className="font-semibold">{activePath.draft}</div>
              </div>
            </div>
            <ArrowRight className="hidden h-5 w-5 text-emerald-300 sm:block" />
            <div className="sm:text-right">
              <div className="text-sm text-neutral-400">Launch target</div>
              <div className="font-semibold text-emerald-200">
                {activePath.outcome}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {activePath.steps.map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-white/10 bg-neutral-950/40 p-4"
              >
                <div className="text-xs font-semibold text-emerald-300">
                  0{index + 1}
                </div>
                <div className="mt-2 text-sm font-medium">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
