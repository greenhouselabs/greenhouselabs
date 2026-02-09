import Link from "next/link"

const footerLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-950/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-emerald-400 to-teal-300" />
          <span className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} Greenhouse Labs
          </span>
        </div>
        <div className="flex gap-6 text-sm text-neutral-400">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
