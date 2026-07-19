"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, X } from "lucide-react"

export function CueScopeLaunchFab() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) {
    return null
  }

  return (
    <aside className="fixed inset-x-3 bottom-3 z-40 max-w-[calc(100vw-1.5rem)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[22rem]">
      <div className="relative max-w-full rounded-lg border border-emerald-400/20 bg-neutral-950/95 shadow-2xl shadow-black/30 backdrop-blur transition hover:border-emerald-300/50 hover:bg-neutral-900">
        <Link
          href="#launch-updates"
          className="group flex min-w-0 items-center gap-3 p-3 pr-11 text-left"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
            <Mail className="h-5 w-5" />
          </span>
          <span className="min-w-0 overflow-hidden">
            <span className="block truncate text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              Available on npm
            </span>
            <span className="mt-1 block text-sm text-neutral-200 group-hover:text-white">
              Join Greenhouse Labs updates
            </span>
          </span>
        </Link>
        <button
          type="button"
          aria-label="Dismiss Greenhouse Labs signup reminder"
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md text-neutral-500 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  )
}
