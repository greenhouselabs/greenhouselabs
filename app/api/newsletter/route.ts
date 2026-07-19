import { NextResponse } from "next/server"

const SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL
const MAX_BODY_SIZE = 10_000
const BUTTONDOWN_TIMEOUT_MS = 8_000
const SHEETS_WEBHOOK_TIMEOUT_MS = 8_000
const DEFAULT_TAG = "greenhouse-updates"
const NEWSLETTER_SHEET = "Email Capture"

function cleanString(value: unknown, maxLength = 254) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

function cleanTags(value: unknown) {
  if (!Array.isArray(value)) return []

  return Array.from(
    new Set(
      value
        .map((tag) => cleanString(tag, 48).toLowerCase())
        .filter((tag) => /^[a-z0-9][a-z0-9-_]*$/.test(tag))
    )
  ).slice(0, 8)
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0)
    if (contentLength > MAX_BODY_SIZE) {
      return NextResponse.json(
        { error: "Submission is too large." },
        { status: 413 }
      )
    }

    const body = await request.json()
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid submission." },
        { status: 400 }
      )
    }

    const email = cleanString(body.email)
    const source = cleanString(body.source, 120) || "website"
    const tags = Array.from(new Set([DEFAULT_TAG, ...cleanTags(body.tags)]))

    // Honeypot: real users never see this field.
    if (cleanString(body.website)) {
      return NextResponse.json({
        message: "You're in! Check your inbox for a confirmation.",
      })
    }

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    if (SHEETS_WEBHOOK_URL) {
      const controller = new AbortController()
      const timeout = setTimeout(
        () => controller.abort(),
        SHEETS_WEBHOOK_TIMEOUT_MS
      )

      try {
        const response = await fetch(SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({
            submissionType: "newsletter",
            sheet: NEWSLETTER_SHEET,
            email,
            source,
            tags,
          }),
          redirect: "follow",
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Sheets webhook failed: ${response.status}`)
        }
      } finally {
        clearTimeout(timeout)
      }
    } else {
      console.log("Newsletter signup (Sheets not configured):", {
        email,
        source,
        tags,
      })
    }

    // --- Buttondown integration ---
    // Activate by setting BUTTONDOWN_API_KEY in .env.local
    const buttondownKey = process.env.BUTTONDOWN_API_KEY

    if (buttondownKey) {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), BUTTONDOWN_TIMEOUT_MS)
      let response: Response

      try {
        response = await fetch(
          "https://api.buttondown.email/v1/subscribers",
          {
            method: "POST",
            headers: {
              Authorization: `Token ${buttondownKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, tags }),
            signal: controller.signal,
          }
        )
      } finally {
        clearTimeout(timeout)
      }

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        // Buttondown returns 400 if already subscribed
        if (response.status === 400 && "email" in data) {
          return NextResponse.json({
            message: "You're already subscribed! Check your inbox.",
          })
        }
        throw new Error(`Buttondown error: ${response.status}`)
      }
    } else {
      console.log(
        "Newsletter signup (Buttondown not configured):",
        email,
        source,
        tags
      )
    }

    return NextResponse.json({
      message:
        "You're on the Greenhouse Labs updates list! Check your inbox for a confirmation.",
    })
  } catch (error) {
    console.error("Newsletter error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
