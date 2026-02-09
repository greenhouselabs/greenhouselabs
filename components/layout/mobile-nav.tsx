"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 rounded-lg p-2 text-neutral-400 transition-colors hover:text-white"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Slide-out panel */}
      <div
        className={cn(
          "fixed right-0 top-0 z-40 h-full w-72 border-l border-white/5 bg-neutral-950 p-6 pt-20 transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "rounded-lg px-4 py-3 text-lg transition-colors hover:bg-white/5",
                pathname === item.href
                  ? "text-emerald-400 font-medium"
                  : "text-neutral-300"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <Link
            href="/contact"
            className="block w-full rounded-xl bg-emerald-500 px-4 py-3 text-center font-semibold text-neutral-900 transition-colors hover:bg-emerald-400"
          >
            Start Growing
          </Link>
        </div>
      </div>
    </div>
  )
}
