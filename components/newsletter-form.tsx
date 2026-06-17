"use client"

import { useId, useState } from "react"
import { Button } from "@/components/ui/button"

interface NewsletterFormProps {
  buttonLabel?: string
  className?: string
  formClassName?: string
  inputClassName?: string
  placeholder?: string
  source?: string
  successMessage?: string
  tags?: string[]
}

export function NewsletterForm({
  buttonLabel = "Sign up",
  className = "",
  formClassName = "mx-auto flex max-w-md flex-col gap-2 sm:flex-row",
  inputClassName = "flex-1 rounded-xl border border-white/10 bg-neutral-900/60 px-4 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:opacity-50",
  placeholder = "you@studio.com",
  source = "website",
  successMessage,
  tags = [],
}: NewsletterFormProps) {
  const honeypotId = useId()
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, source, tags }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("success:" + (successMessage || data.message))
        setEmail("")
        setWebsite("")
      } else {
        setMessage("error:" + (data.error || "Something went wrong."))
      }
    } catch {
      setMessage("error:Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const isSuccess = message.startsWith("success:")
  const displayMessage = message.replace(/^(success|error):/, "")

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={formClassName}
      >
        <div className="hidden" aria-hidden="true">
          <label htmlFor={honeypotId}>Website</label>
          <input
            id={honeypotId}
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          disabled={loading}
          className={inputClassName}
        />
        <Button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-emerald-500 text-neutral-900 hover:bg-emerald-400 font-semibold disabled:opacity-50"
        >
          {loading ? "Signing up..." : buttonLabel}
        </Button>
      </form>
      {displayMessage && (
        <p
          className={`mt-3 text-sm text-center ${
            isSuccess ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {displayMessage}
        </p>
      )}
    </div>
  )
}
