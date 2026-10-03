import { ArrowRight, Gauge, Layers } from 'lucide-react'
import { useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { images } from '../lib/images'

const clouds = [
  { name: 'AWS', src: '/logos/aws.svg', className: 'h-7' },
  { name: 'Microsoft Azure', src: '/logos/azure.svg', className: 'h-7' },
  { name: 'Google Cloud', src: '/logos/google-cloud.svg', className: 'h-5' },
  { name: 'Vyuha', src: '/logos/vyuha.png', className: 'h-6' },
]

const signals = ['Cost', 'Engineering', 'Architecture', 'Operations', 'Resilience']

const statements = [
  {
    lead: "Your cloud estate doesn't operate in silos.",
    highlight: 'Why should your decisions?',
    body: 'Calipers connects the signals across cost, engineering, architecture, operations, and resilience, so you can understand what is happening across your cloud estate, decide what matters, and act with context.',
    cta: { href: '#performance', label: 'Explore Cloud Performance' },
  },
  {
    lead: 'Cloud,',
    highlight: 'measured for performance.',
    body: 'Your cloud estate is more than infrastructure, spending, or uptime. Calipers brings the signals together to help you understand how your cloud is performing and where it needs to change.',
    cta: { href: '#how-it-works', label: 'See how it works' },
  },
  {
    lead: 'Your cloud metrics tell you what happened.',
    highlight: 'We help you understand why.',
    body: 'Calipers brings cost, engineering, architecture, operations, and business context together to measure cloud performance, not just individual metrics.',
    cta: { href: '#performance-model', label: 'See how the signals connect' },
  },
]

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const current = statements[index]
  const next = () => setIndex((value) => (value + 1) % statements.length)

  return (
    <section id="top" className="hero-surface relative isolate overflow-hidden pt-[76px] font-display">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-14 pt-12 md:px-8 md:pt-16 lg:grid-cols-[1.08fr_1fr] lg:gap-12 lg:pb-20 lg:pt-20">
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <a
            href="#finops"
            className="group inline-flex max-w-full cursor-pointer items-center gap-2.5 rounded-full border border-line/80 bg-white/80 py-1 pl-1 pr-3.5 text-[13px] font-medium text-body shadow-[0_1px_2px_rgba(18,32,51,0.05)] backdrop-blur transition-colors hover:border-navy/25 hover:text-ink"
          >
            <span className="shrink-0 rounded-full bg-navy px-2.5 py-1 text-[11.5px] font-semibold tracking-wide text-white">
              FinOps & AIOps
            </span>
            <span className="truncate">Delivered through Curate and Zolix</span>
            <ArrowRight size={14} className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          <div className="mt-7 grid" aria-live="polite">
            {statements.map((statement, i) => {
              const active = i === index
              const Heading = active ? 'h1' : 'p'
              return (
                <div
                  key={statement.lead}
                  aria-hidden={!active}
                  className={`[grid-area:1/1] ${active ? 'hero-statement' : 'invisible opacity-0'}`}
                >
                  <Heading className="text-[2.4rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink sm:text-[3.1rem] lg:text-[3.35rem]">
                    {statement.lead} <span className="hero-highlight">{statement.highlight}</span>
                  </Heading>
                  <p className="mt-6 max-w-xl text-[17px] leading-[1.75] text-body">{statement.body}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={current.cta.href}
              className="group inline-flex h-14 cursor-pointer items-center justify-between gap-4 rounded-full bg-navy pl-6 pr-2 text-[15px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(14,58,109,0.75)] transition-colors hover:bg-navy-dark sm:justify-center"
            >
              {current.cta.label}
              <span className="grid size-10 place-items-center rounded-full bg-white text-navy transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight size={18} />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex h-14 cursor-pointer items-center justify-center rounded-full border border-line bg-white px-7 text-[15px] font-semibold text-ink shadow-[0_1px_2px_rgba(18,32,51,0.05)] transition-colors hover:border-ink/20 hover:bg-canvas"
            >
              Talk to an advisor
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex items-center gap-1" role="tablist" aria-label="Hero statements">
              {statements.map((statement, i) => {
                const active = i === index
                return (
                  <button
                    key={statement.lead}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`Statement ${i + 1} of ${statements.length}`}
                    onClick={() => setIndex(i)}
                    className="group cursor-pointer py-3 pr-1"
                  >
                    <span className="relative block h-1.5 w-12 overflow-hidden rounded-full bg-ink/10 transition-colors group-hover:bg-ink/20">
                      {active ? (
                        <span
                          key={index}
                          className={`absolute inset-y-0 left-0 rounded-full bg-navy ${reduced ? 'w-full' : 'hero-progress'}`}
                          style={{ animationPlayState: paused ? 'paused' : 'running' }}
                          onAnimationEnd={next}
                        />
                      ) : null}
                    </span>
                  </button>
                )
              })}
            </div>
            <p className="text-[13px] font-semibold tabular-nums text-body">
              <span className="text-ink">0{index + 1}</span> / 0{statements.length}
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[48px] bg-[radial-gradient(closest-side,rgba(74,143,214,0.28),transparent)] blur-2xl"
          />
          <figure className="relative rounded-[32px] border border-white/90 bg-white/70 p-2 shadow-[0_40px_90px_-35px_rgba(18,32,51,0.45)] backdrop-blur">
            <img
              src={images.hero}
              alt="Consulting team reviewing a delivery plan around a conference table"
              className="aspect-[4/3.6] w-full rounded-[26px] object-cover"
            />
            <figcaption className="sr-only">
              Cost, engineering, architecture, operations, and resilience — read together, not a cloud brochure.
            </figcaption>
          </figure>

          <div className="hero-float absolute -right-3 top-6 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/90 py-3 pl-3 pr-5 shadow-[0_20px_50px_-20px_rgba(18,32,51,0.4)] backdrop-blur-xl sm:flex lg:-right-6">
            <span className="grid size-10 place-items-center rounded-xl bg-navy text-white">
              <Gauge size={20} />
            </span>
            <div>
              <p className="text-[14px] font-bold leading-tight text-ink">Cloud performance</p>
              <p className="mt-0.5 text-[12.5px] text-body">Not just individual metrics</p>
            </div>
          </div>

          <div className="hero-float-delayed absolute -bottom-8 -left-3 hidden w-[290px] rounded-3xl border border-white/80 bg-white/90 p-4 shadow-[0_24px_60px_-24px_rgba(18,32,51,0.45)] backdrop-blur-xl sm:block lg:-left-10">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-navy/[0.08] text-navy">
                <Layers size={15} />
              </span>
              <p className="text-[13px] font-bold text-ink">Signals, read together</p>
            </div>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {signals.map((signal) => (
                <li
                  key={signal}
                  className="rounded-full bg-canvas px-2.5 py-1 text-[12px] font-semibold text-body ring-1 ring-line/80"
                >
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-14 md:px-8 lg:pb-16">
        <div className="flex flex-col items-center gap-5 rounded-[28px] border border-line/70 bg-white/70 px-6 py-5 shadow-[0_1px_2px_rgba(18,32,51,0.04)] backdrop-blur sm:flex-row sm:justify-between sm:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-body">AI and cloud expertise on</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clouds.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className={`${logo.className} w-auto object-contain`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
