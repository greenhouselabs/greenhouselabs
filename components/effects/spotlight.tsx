"use client"

import { useEffect } from "react"

export function Spotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--spotlight-x", `${e.clientX}px`)
      document.documentElement.style.setProperty("--spotlight-y", `${e.clientY}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(600px circle at var(--spotlight-x, -1000px) var(--spotlight-y, -1000px), rgba(52, 211, 153, 0.04), transparent 40%)",
      }}
    />
  )
}
