import type { ReactNode } from 'react'
import { FadeContent } from './bits/FadeContent'

export const Reveal = FadeContent

export const card =
  'rounded-3xl border border-line/70 bg-white shadow-[0_1px_2px_rgba(18,32,51,0.04)]'

export const cardHover =
  'transition-[transform,box-shadow,border-color] duration-300 hover:border-navy/20 hover:shadow-[0_24px_50px_-24px_rgba(18,32,51,0.28)] motion-safe:hover:-translate-y-1'

export const iconTile =
  'grid size-11 shrink-0 place-items-center rounded-2xl bg-navy/[0.07] text-navy transition-colors duration-300'

type Tone = 'white' | 'canvas'

export function Section({
  id,
  tone = 'white',
  className = '',
  children,
}: {
  id?: string
  tone?: Tone
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`${tone === 'white' ? 'bg-white' : 'bg-canvas'} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">{children}</div>
    </section>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex w-fit items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy shadow-[0_1px_2px_rgba(18,32,51,0.04)]">
      <span className="size-1.5 rounded-full bg-navy" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
        {title}
      </h2>
      {lead ? <p className="mt-5 text-[17px] leading-[1.75] text-body">{lead}</p> : null}
    </div>
  )
}

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="hero-highlight">{children}</span>
}
