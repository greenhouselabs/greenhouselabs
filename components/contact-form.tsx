"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("success:" + data.message)
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          description: "",
        })
      } else {
        setMessage("error:" + (data.error || "Failed to submit. Please try again."))
      }
    } catch {
      setMessage(
        "error:Network error. Please try again or email us directly at hello@greenhouselabs.com"
      )
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const isSuccess = message.startsWith("success:")
  const displayMessage = message.replace(/^(success|error):/, "")

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name *
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
            required
            className="rounded-xl border-white/10 bg-neutral-900/60"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            required
            className="rounded-xl border-white/10 bg-neutral-900/60"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company / Organization
        </label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          disabled={loading}
          className="rounded-xl border-white/10 bg-neutral-900/60"
          placeholder="Acme Corp"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium mb-2">
          Project Type *
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          disabled={loading}
          required
          className="w-full rounded-xl border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm"
        >
          <option value="">Select project type</option>
          <option value="custom-ai-app">Custom AI Application</option>
          <option value="browser-extension">Browser Extension</option>
          <option value="automation-tool">Automation Tool</option>
          <option value="content-pipeline">Content Pipeline</option>
          <option value="analysis-tool">Analysis / Research Tool</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            disabled={loading}
            className="w-full rounded-xl border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm"
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 - $15,000</option>
            <option value="15k-50k">$15,000 - $50,000</option>
            <option value="50k-plus">$50,000+</option>
            <option value="discuss">Let&apos;s discuss</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium mb-2">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            disabled={loading}
            className="w-full rounded-xl border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm"
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-month">Within 1 month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Project Description *
        </label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          disabled={loading}
          required
          rows={6}
          className="rounded-xl border-white/10 bg-neutral-900/60 resize-none"
          placeholder="Tell us about your project. What problem are you trying to solve?"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-emerald-500 text-neutral-900 hover:bg-emerald-400 font-semibold py-3 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Project Brief"}
      </Button>

      {displayMessage && (
        <div
          className={`mt-4 p-4 rounded-xl ${
            isSuccess
              ? "bg-emerald-900/20 border border-emerald-500/20 text-emerald-300"
              : "bg-red-900/20 border border-red-500/20 text-red-300"
          }`}
        >
          {displayMessage}
        </div>
      )}
    </form>
  )
}
