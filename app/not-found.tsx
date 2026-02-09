import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-neutral-400 mb-8 max-w-md">
        This seedling hasn&apos;t sprouted yet. The page you&apos;re looking for
        doesn&apos;t exist or has been moved.
      </p>
      <Button
        className="rounded-xl bg-emerald-500 text-neutral-900 hover:bg-emerald-400 font-semibold"
        asChild
      >
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}
