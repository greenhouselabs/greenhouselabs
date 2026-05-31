import { NextResponse } from "next/server"

const SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL
const MAX_BODY_SIZE = 50_000
const WEBHOOK_TIMEOUT_MS = 8_000

function cleanString(value: unknown, maxLength = 2000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
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

    const name = cleanString(body.name, 120)
    const email = cleanString(body.email, 254)
    const description = cleanString(body.description, 5000)
    const projectType = cleanString(body.projectType, 100)
    const company = cleanString(body.company, 160)
    const budget = cleanString(body.budget, 80)
    const timeline = cleanString(body.timeline, 80)

    // Honeypot: real users never see this field.
    if (cleanString(body.website)) {
      return NextResponse.json({
        message:
          "Thanks for reaching out! We'll get back to you within 24 hours.",
      })
    }

    // Basic validation
    if (!name || !email || !description || !projectType) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      )
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    if (SHEETS_WEBHOOK_URL) {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS)

      try {
        const response = await fetch(SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({
            name,
            email,
            company,
            projectType,
            budget,
            timeline,
            description,
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
      console.log("Contact form submission (Sheets not configured):", {
        name,
        email,
        projectType,
        description: description.substring(0, 100) + "...",
      })
    }

    return NextResponse.json({
      message:
        "Thanks for reaching out! We'll get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
