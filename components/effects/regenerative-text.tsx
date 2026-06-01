"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RegenerativeTextProps {
  phrases: string[]
  className?: string
  cursorClassName?: string
  startDelay?: number
  typeDelay?: number
  deleteDelay?: number
  holdDelay?: number
  repeatDelay?: number
}

export function RegenerativeText({
  phrases,
  className,
  cursorClassName,
  startDelay = 500,
  typeDelay = 54,
  deleteDelay = 34,
  holdDelay = 720,
  repeatDelay,
}: RegenerativeTextProps) {
  const finalText = phrases[phrases.length - 1] ?? ""
  const longestText = useMemo(
    () =>
      phrases.reduce(
        (longest, phrase) => (phrase.length > longest.length ? phrase : longest),
        finalText
      ),
    [finalText, phrases]
  )
  const [displayText, setDisplayText] = useState(finalText)
  const rootRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (phrases.length < 2) {
      setDisplayText(finalText)
      return
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotionQuery.matches) {
      setDisplayText(finalText)
      return
    }

    let cancelled = false
    let activeTimeout: number | undefined
    let observer: IntersectionObserver | undefined

    const sleep = (duration: number) =>
      new Promise<void>((resolve) => {
        activeTimeout = window.setTimeout(resolve, duration)
      })

    const editTo = async (current: string, target: string) => {
      let sharedPrefixLength = 0
      while (
        sharedPrefixLength < current.length &&
        sharedPrefixLength < target.length &&
        current[sharedPrefixLength] === target[sharedPrefixLength]
      ) {
        sharedPrefixLength += 1
      }

      while (!cancelled && current.length > sharedPrefixLength) {
        current = current.slice(0, -1)
        setDisplayText(current)
        await sleep(deleteDelay)
      }

      while (!cancelled && current.length < target.length) {
        current = target.slice(0, current.length + 1)
        setDisplayText(current)
        await sleep(typeDelay)
      }

      return current
    }

    const play = async () => {
      await sleep(startDelay)
      if (cancelled) return

      do {
        let current = ""
        setDisplayText(current)

        for (let index = 0; index < phrases.length; index += 1) {
          current = await editTo(current, phrases[index])
          if (cancelled) return

          if (index < phrases.length - 1) {
            await sleep(holdDelay)
          }
        }

        setDisplayText(finalText)
        if (!repeatDelay) return
        await sleep(repeatDelay)
      } while (!cancelled)
    }

    const node = rootRef.current
    if (!node || !("IntersectionObserver" in window)) {
      void play()
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            void play()
            observer?.disconnect()
          }
        },
        { threshold: 0.55 }
      )
      observer.observe(node)
    }

    return () => {
      cancelled = true
      observer?.disconnect()
      if (activeTimeout) {
        window.clearTimeout(activeTimeout)
      }
    }
  }, [deleteDelay, finalText, holdDelay, phrases, repeatDelay, startDelay, typeDelay])

  return (
    <span
      ref={rootRef}
      className="inline-grid overflow-visible align-baseline"
    >
      <span className="sr-only">{finalText}</span>
      <span
        aria-hidden="true"
        className={cn(
          "invisible col-start-1 row-start-1 inline-block whitespace-nowrap pb-[0.18em] leading-[1.35]",
          className
        )}
      >
        {longestText}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "col-start-1 row-start-1 inline-block whitespace-nowrap pb-[0.18em] leading-[1.35]",
          className
        )}
      >
        {displayText}
        <span
          className={cn(
            "ml-1 inline-block h-[0.9em] w-px translate-y-[0.08em] animate-pulse bg-emerald-100/80 motion-reduce:hidden",
            cursorClassName
          )}
        />
      </span>
    </span>
  )
}
