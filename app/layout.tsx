import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Spotlight } from "@/components/effects/spotlight"
import { GrainOverlay } from "@/components/effects/grain-overlay"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    default: "Greenhouse Labs — AI-Powered Software Incubator",
    template: "%s | Greenhouse Labs",
  },
  description:
    "We grow ideas from seedling to harvest. AI tools, broadcast software, and Web3 projects built with care.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-300/40 selection:text-neutral-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background decor — subtle dot grid only */}
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(255,255,255,0.02)_1px)] [background-size:24px_24px]" />
          </div>

          <Spotlight />
          <GrainOverlay />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
