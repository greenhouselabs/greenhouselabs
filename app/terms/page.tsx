import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing your use of Greenhouse Labs services.",
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-4">
          Terms of Service
        </h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          The terms and conditions governing your use of Greenhouse Labs services.
        </p>
        <p className="text-sm text-neutral-400 mt-4">Last updated: February 2026</p>
      </div>

      <div className="prose prose-invert prose-emerald max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-neutral-300 mb-6">
            By accessing or using Greenhouse Labs&apos; website, services, or any of our AI development tools and incubator projects, you agree to be bound by these Terms of Service. If you do not agree to these Terms, you may not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
          <p className="text-neutral-300 mb-4">Greenhouse Labs provides:</p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li><strong>Custom AI Development:</strong> Bespoke artificial intelligence applications, tools, and integrations</li>
            <li><strong>Project Incubator:</strong> A platform showcasing projects in various stages: Seedling, Blooming, and Harvest</li>
            <li><strong>Content &amp; Resources:</strong> Blog posts, research notes, and educational content about AI development</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. Custom Development Services</h2>
          <h3 className="text-lg font-medium text-emerald-300 mb-3">Service Engagement</h3>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li><strong>Project Scope:</strong> All custom development projects require a detailed scope of work and signed agreement</li>
            <li><strong>Timeline:</strong> Project timelines are estimates and may vary based on complexity and feedback cycles</li>
            <li><strong>Revisions:</strong> Scope changes may result in additional costs and timeline adjustments</li>
          </ul>
          <h3 className="text-lg font-medium text-emerald-300 mb-3">Deliverables and Ownership</h3>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li><strong>Code Ownership:</strong> Upon full payment, clients receive ownership of custom code developed for their project</li>
            <li><strong>Third-Party Components:</strong> Open-source libraries remain under their respective licenses</li>
            <li><strong>Greenhouse Labs IP:</strong> We retain rights to general methodologies, frameworks, and knowledge gained</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li>All website content, including text, graphics, logos, and software, is owned by Greenhouse Labs</li>
            <li>You may not copy, distribute, or create derivative works without written permission</li>
            <li>You retain ownership of content you submit (feedback, project descriptions)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">5. Acceptable Use</h2>
          <p className="text-neutral-300 mb-4">You agree not to use our services for:</p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li>Any illegal purpose or in violation of applicable laws</li>
            <li>Creating, distributing, or promoting harmful content</li>
            <li>Attempting to hack, reverse engineer, or compromise our systems</li>
            <li>Sending unsolicited communications or overloading our systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">6. Privacy</h2>
          <p className="text-neutral-300 mb-6">
            Your privacy is important to us. Our data practices are governed by our{" "}
            <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300">Privacy Policy</Link>,
            which is incorporated into these Terms by reference.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">7. Disclaimers and Limitations</h2>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li>Services are provided &quot;as-is&quot; without warranties of any kind</li>
            <li>AI technologies may produce unexpected or inaccurate results</li>
            <li>We do not guarantee uninterrupted service availability</li>
          </ul>
          <p className="text-neutral-300 mb-6">
            To the maximum extent permitted by law, Greenhouse Labs shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li>You may stop using our services at any time</li>
            <li>We may suspend or terminate access for violations of these Terms</li>
            <li>Termination does not affect completed custom development projects</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">9. Governing Law</h2>
          <p className="text-neutral-300 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">10. Contact</h2>
          <div className="bg-neutral-900/40 border border-white/10 rounded-xl p-6">
            <p className="text-neutral-300 mb-2"><strong>Email:</strong> <a href="mailto:legal@greenhouselabs.com" className="text-emerald-400 hover:text-emerald-300">legal@greenhouselabs.com</a></p>
            <p className="text-neutral-300"><strong>Website:</strong> <a href="https://greenhouselabs.com" className="text-emerald-400 hover:text-emerald-300">greenhouselabs.com</a></p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors">
          &larr; Back to Home
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
