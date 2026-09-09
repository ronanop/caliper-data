import { useReducedMotion } from 'motion/react'
import type { ElementType } from 'react'

type BlurTextProps = {
  text: string
  as?: ElementType
  className?: string
  delay?: number
}

export function BlurText({ text, as: Tag = 'p', className = '', delay = 70 }: BlurTextProps) {
  const reduced = useReducedMotion()
  const words = text.split(' ')

  if (reduced) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="blur-word"
          style={{ animationDelay: `${index * delay}ms` }}
        >
          {word}
          {index < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  )
}
