import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Greenhouse Labs collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          How we collect, use, and protect your information at Greenhouse Labs.
        </p>
        <p className="text-sm text-neutral-400 mt-4">Last updated: February 2026</p>
      </div>

      <div className="prose prose-invert prose-emerald max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
          <h3 className="text-lg font-medium text-emerald-300 mb-3">Information You Provide</h3>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li><strong>Contact Information:</strong> Name, email address, company name when you submit contact forms or newsletter signups</li>
            <li><strong>Project Details:</strong> Project descriptions, budget ranges, timelines, and technical requirements when requesting services</li>
            <li><strong>Communications:</strong> Messages, feedback, and correspondence you send to us</li>
          </ul>

          <h3 className="text-lg font-medium text-emerald-300 mb-3">Information Automatically Collected</h3>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li><strong>Technical Information:</strong> IP address, browser type, device information, operating system, and referral URLs</li>
            <li><strong>Cookies:</strong> Session cookies for functionality and preference cookies for theme settings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li><strong>Service Delivery:</strong> To respond to project inquiries and deliver requested content</li>
            <li><strong>Communication:</strong> To send project updates, newsletters, and respond to your questions</li>
            <li><strong>Improvement:</strong> To improve our website, services, and user experience</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws and protect our rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
          <p className="text-neutral-300 mb-4">We do not sell your personal information. We may share information with:</p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li><strong>Service Providers:</strong> Trusted third-party services that help us operate (Vercel for hosting, Resend for email delivery)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li><strong>Encryption:</strong> Data is encrypted in transit (HTTPS/TLS)</li>
            <li><strong>Access Controls:</strong> Only authorized personnel have access to personal information</li>
            <li><strong>Regular Updates:</strong> We maintain current security patches and monitor for vulnerabilities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
          </ul>
          <p className="text-neutral-300 mb-6">
            To exercise these rights, contact us at{" "}
            <a href="mailto:admin@greenhouselabs.io" className="text-emerald-400 hover:text-emerald-300">
              admin@greenhouselabs.io
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">6. Children&apos;s Privacy</h2>
          <p className="text-neutral-300 mb-6">
            Our services are not directed at children under 13. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
          <p className="text-neutral-300 mb-6">
            We may update this privacy policy from time to time. We will notify you of material changes by posting the new policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">8. Contact</h2>
          <div className="bg-neutral-900/40 border border-white/10 rounded-xl p-6">
            <p className="text-neutral-300 mb-2"><strong>Email:</strong> <a href="mailto:admin@greenhouselabs.io" className="text-emerald-400 hover:text-emerald-300">admin@greenhouselabs.io</a></p>
            <p className="text-neutral-300"><strong>Website:</strong> <a href="https://greenhouselabs.io" className="text-emerald-400 hover:text-emerald-300">greenhouselabs.io</a></p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors">
          &larr; Back to Home
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
