import { NextResponse } from "next/server"

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

    // --- Resend integration ---
    // Activate by setting RESEND_API_KEY and CONTACT_EMAIL in .env.local
    const resendKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL

    if (resendKey && contactEmail) {
      const { Resend } = await import("resend")
      const resend = new Resend(resendKey)

      await resend.emails.send({
        from: "Greenhouse Labs <noreply@greenhouselabs.com>",
        to: [contactEmail],
        reply_to: email,
        subject: `New project inquiry from ${name}`,
        html: `
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${body.company || "N/A"}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${body.budget || "N/A"}</p>
          <p><strong>Timeline:</strong> ${body.timeline || "N/A"}</p>
          <hr />
          <p><strong>Description:</strong></p>
          <p>${description.replace(/\n/g, "<br />")}</p>
        `,
      })
    } else {
      // No API key — log to console for development
      console.log("Contact form submission (Resend not configured):", {
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
