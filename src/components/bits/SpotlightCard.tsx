import { useRef, type ReactNode } from 'react'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  spotlightColor?: string
}

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(214, 177, 122, 0.2)',
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const move = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
    node.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
    node.style.setProperty('--spotlight-color', spotlightColor)
  }

  return (
    <div ref={ref} onMouseMove={move} className={`card-spotlight ${className}`}>
      <div className="relative z-[2] h-full">{children}</div>
    </div>
  )
}
