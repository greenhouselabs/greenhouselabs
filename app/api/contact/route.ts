import { NextResponse } from "next/server"

const SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, description, projectType } = body

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
      const response = await fetch(SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: body.company || "",
          projectType,
          budget: body.budget || "",
          timeline: body.timeline || "",
          description,
        }),
      })

      if (!response.ok) {
        throw new Error(`Sheets webhook error: ${response.status}`)
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
