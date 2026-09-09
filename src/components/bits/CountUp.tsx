import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type CountUpProps = {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export function CountUp({ value, prefix = '', suffix = '', decimals = 0, className }: CountUpProps) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(reduced ? value : 0)

  useEffect(() => {
    if (reduced) {
      setShown(value)
      return
    }

    const node = ref.current
    if (!node) return

    let frame = 0
    let start = 0
    const duration = 1400

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const tick = (now: number) => {
          if (!start) start = now
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setShown(value * eased)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }

        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [reduced, value])

  const formatted = shown.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
