import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

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

    // --- Buttondown integration ---
    // Activate by setting BUTTONDOWN_API_KEY in .env.local
    const buttondownKey = process.env.BUTTONDOWN_API_KEY

    if (buttondownKey) {
      const response = await fetch(
        "https://api.buttondown.email/v1/subscribers",
        {
          method: "POST",
          headers: {
            Authorization: `Token ${buttondownKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, tags: ["website"] }),
        }
      )

      if (!response.ok) {
        const data = await response.json()
        // Buttondown returns 400 if already subscribed
        if (response.status === 400 && data.email) {
          return NextResponse.json({
            message: "You're already subscribed! Check your inbox.",
          })
        }
        throw new Error(`Buttondown error: ${response.status}`)
      }
    } else {
      console.log(
        "Newsletter signup (Buttondown not configured):",
        email
      )
    }

    return NextResponse.json({
      message: "You're in! Check your inbox for a confirmation.",
    })
  } catch (error) {
    console.error("Newsletter error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
