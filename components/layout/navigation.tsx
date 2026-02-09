"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { MobileNav } from "./mobile-nav"

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 glass-morphism">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-400 to-teal-300 transition-transform group-hover:scale-105" />
          <span className="font-semibold tracking-tight">Greenhouse Labs</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-sm text-neutral-400 transition-colors hover:text-white",
                pathname === item.href && "text-white"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-emerald-400" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-emerald-400 sm:inline-flex"
          >
            Start Growing
          </Link>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}
