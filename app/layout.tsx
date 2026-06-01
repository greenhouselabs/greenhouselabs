import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Spotlight } from "@/components/effects/spotlight"
import { GrainOverlay } from "@/components/effects/grain-overlay"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Greenhouse Labs",
  url: "https://www.greenhouselabs.io",
  logo: "https://www.greenhouselabs.io/web-app-manifest-512x512.png",
  sameAs: ["https://greenhouselabs.io"],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Greenhouse Labs",
  url: "https://www.greenhouselabs.io",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.greenhouselabs.io"),
  title: {
    default: "Greenhouse Labs - AI Products and Software Services",
    template: "%s | Greenhouse Labs",
  },
  description:
    "Buy ready-made AI and media tools, or hire Greenhouse Labs to design, build, and launch your next software product.",
  openGraph: {
    title: "Greenhouse Labs",
    description:
      "AI products, media tools, and custom software services built to launch.",
    url: "https://www.greenhouselabs.io",
    siteName: "Greenhouse Labs",
    images: [
      {
        url: "/images/projects/greenhouselabs-project.png",
        alt: "Greenhouse Labs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenhouse Labs",
    description:
      "AI products, media tools, and custom software services built to launch.",
    images: ["/images/projects/greenhouselabs-project.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} flex min-h-screen flex-col font-sans antialiased bg-neutral-950 text-neutral-100 selection:bg-emerald-300/40 selection:text-neutral-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background decor - subtle dot grid only */}
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
