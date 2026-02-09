"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold gradient-text mb-4">Oops</h1>
      <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
      <p className="text-neutral-400 mb-8 max-w-md">
        A weed got into the greenhouse. Please try again.
      </p>
      <Button
        onClick={reset}
        className="rounded-xl bg-emerald-500 text-neutral-900 hover:bg-emerald-400 font-semibold"
      >
        Try Again
      </Button>
    </div>
  )
}
