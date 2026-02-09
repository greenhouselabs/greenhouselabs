import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Mail, MessageSquare, Zap, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Greenhouse Labs. Tell us about your project and we'll help you grow.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-4">
          Let&apos;s Grow Something Together
        </h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          Ready to turn your AI idea into reality? Tell us about your project
          and we&apos;ll help you navigate from seedling to harvest.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form — 2/3 */}
        <div className="lg:col-span-2">
          <Card className="rounded-2xl border-white/10 bg-neutral-900/40">
            <CardHeader>
              <CardTitle className="text-2xl">Start Your Project</CardTitle>
              <p className="text-neutral-400">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-xl border-white/10 bg-neutral-900/40">
            <CardHeader>
              <CardTitle className="text-lg">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-neutral-400">
                    hello@greenhouselabs.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-emerald-400" />
                <div>
                  <div className="font-medium">Discord</div>
                  <div className="text-sm text-neutral-400">
                    Join our community
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-white/10 bg-neutral-900/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-emerald-400" />
                <div className="font-medium">Response Time</div>
              </div>
              <p className="text-sm text-neutral-300">
                We typically respond within 24 hours with a detailed proposal
                and next steps.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-white/10 bg-neutral-900/40">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-emerald-400" />
                Our Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                {[
                  {
                    step: "1",
                    title: "Discovery Call",
                    desc: "We'll discuss your vision and requirements",
                  },
                  {
                    step: "2",
                    title: "Proposal",
                    desc: "Detailed scope, timeline, and pricing",
                  },
                  {
                    step: "3",
                    title: "Development",
                    desc: "Weekly updates and iterative feedback",
                  },
                  {
                    step: "4",
                    title: "Launch",
                    desc: "Deployment and ongoing support",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-semibold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-neutral-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
