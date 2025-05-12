"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

interface CountUpNumberProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  className?: string
  suffix?: string
  prefix?: string
}

export function CountUpNumber({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  className = "",
  suffix = "",
  prefix = "",
}: CountUpNumberProps) {
  const [count, setCount] = useState(start)
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3, rootMargin: "0px" })
  const countRef = useRef(start)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView || hasAnimated) return

    let startTime: number
    let animationFrameId: number

    const handleCountUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const elapsedTime = Math.min(progress, duration)
      const percentage = elapsedTime / duration

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(percentage)

      const currentCount = Math.floor(start + (end - start) * easedProgress)

      countRef.current = currentCount
      setCount(currentCount)

      if (elapsedTime < duration) {
        animationFrameId = requestAnimationFrame(handleCountUp)
      } else {
        setCount(end)
        setHasAnimated(true)
      }
    }

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(handleCountUp)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isInView, end, start, duration, delay, hasAnimated])

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
