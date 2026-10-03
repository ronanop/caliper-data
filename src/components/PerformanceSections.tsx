import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Building2,
  Cloud,
  Code2,
  Database,
  Gauge,
  Landmark,
  Layers,
  LifeBuoy,
  Lock,
  Quote,
  RefreshCw,
  Scale,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Zap,
} from 'lucide-react'
import { capabilityGroups, capabilityIcons } from '../lib/capabilities'
import { Highlight, Reveal, Section, SectionHeading, card, cardHover, iconTile } from './ui'

export function Problem() {
  return (
    <Section id="problem" tone="canvas" className="overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="The problem"
            title={
              <>
                Cloud got bigger. <Highlight>So did the complexity around it.</Highlight>
              </>
            }
          />
          <p className="mt-6 text-[17px] leading-[1.75] text-body">
            Your cloud estate is no longer just infrastructure running workloads. It is an interconnected environment
            where architecture affects cost, engineering decisions affect velocity, modernization affects resilience,
            and security and governance influence how the entire estate operates.
          </p>
          <p className="mt-4 text-[17px] leading-[1.75] text-body">
            Yet the way these environments are often managed remains fragmented—different teams, different tools,
            different metrics, and different decisions.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative isolate rounded-[32px] border border-line/70 bg-white p-8 shadow-[0_30px_70px_-40px_rgba(18,32,51,0.35)] md:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 -z-10 size-48 rounded-full bg-[radial-gradient(closest-side,rgba(74,143,214,0.25),transparent)] blur-xl"
            />
            <span className="grid size-12 place-items-center rounded-2xl bg-navy text-white">
              <Quote size={22} />
            </span>
            <blockquote className="mt-6 text-[1.6rem] font-bold leading-[1.3] tracking-[-0.02em] text-ink">
              The result isn't necessarily a lack of data. <Highlight>It's a lack of context.</Highlight>
            </blockquote>
            <div className="my-7 h-px bg-line/80" />
            <p className="text-[16px] leading-7 text-body">
              Calipers approaches cloud as a performance system rather than a collection of individual metrics or
              services. We help enterprises measure what matters, understand how the signals connect, and make decisions
              based on evidence rather than assumptions.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy/[0.07] px-4 py-2 text-[14px] font-semibold text-navy">
              <Gauge size={16} />
              Cloud, measured for performance.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

const signals = [
  { name: 'Cost', body: "can tell you what you're spending.", icon: Wallet },
  { name: 'Architecture', body: "can tell you how you're built.", icon: Layers },
  { name: 'Operations', body: "can tell you how you're running.", icon: Activity },
  { name: 'Engineering', body: 'can tell you how quickly you can move.', icon: Code2 },
]

const chain = [
  'A change in architecture can alter cost.',
  'An engineering decision can create operational friction.',
  'Modernization can change resilience.',
  'Security requirements can influence velocity.',
]

const dimensions = [
  { name: 'Economics', q: "What are you getting from the cloud investment you're making?", icon: Wallet },
  { name: 'Engineering', q: 'How quickly can your teams turn decisions into working outcomes?', icon: Code2 },
  { name: 'Architecture', q: 'Is the estate evolving in a way that supports the business?', icon: Layers },
  { name: 'Operations', q: 'Can you run it reliably as complexity grows?', icon: Activity },
  { name: 'Resilience', q: "What happens when something doesn't go according to plan?", icon: LifeBuoy },
  { name: 'Security', q: 'Can the estate remain protected without becoming a constraint on progress?', icon: Lock },
  { name: 'Data', q: 'Can your environment turn information into something the business can act on?', icon: Database },
  { name: 'AI Readiness', q: 'Is the estate prepared for the workloads and decisions AI will introduce?', icon: Brain },
  { name: 'Governance', q: 'Can the organization make consistent decisions without slowing everything down?', icon: Landmark },
  { name: 'Business', q: 'Ultimately, is the technology estate improving how the business performs?', icon: Building2 },
]

export function Categories() {
  return (
    <Section id="performance">
      <Reveal>
        <SectionHeading
          eyebrow="The categories"
          title={
            <>
              Cloud performance is <Highlight>bigger than any single metric.</Highlight>
            </>
          }
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <ul className="grid gap-3">
            {signals.map(({ name, body, icon: Icon }) => (
              <li key={name} className={`${card} flex items-center gap-4 px-5 py-4`}>
                <span className={iconTile}>
                  <Icon size={20} aria-hidden="true" />
                </span>
                <p className="text-[16px] leading-6 text-body">
                  <span className="font-bold text-ink">{name}</span> {body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-[32px] border border-navy/10 bg-[linear-gradient(160deg,#eef4fb_0%,#ffffff_70%)] p-7 md:p-9">
            <p className="text-[1.3rem] font-bold tracking-[-0.02em] text-ink">But none of these signals exists in isolation.</p>
            <ol className="relative mt-6 space-y-4 before:absolute before:bottom-4 before:left-[15px] before:top-4 before:w-px before:bg-navy/15">
              {chain.map((line, i) => (
                <li key={line} className="relative flex items-start gap-4 text-[16px] leading-7 text-body">
                  <span className="z-10 grid size-8 shrink-0 place-items-center rounded-full border border-navy/15 bg-white text-[12px] font-bold text-navy">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{line}</span>
                </li>
              ))}
            </ol>
            <p className="mt-7 rounded-2xl bg-white/80 p-4 text-[15.5px] font-semibold leading-7 text-navy ring-1 ring-navy/10">
              Calipers connects these signals to understand what is actually driving performance across the estate.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-24 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <h3 className="text-[1.75rem] font-extrabold tracking-[-0.025em] text-ink">What does performance mean to you?</h3>
        <p className="text-[15px] text-body">Ten signals. One estate.</p>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {dimensions.map(({ name, q, icon: Icon }, i) => (
          <Reveal key={name} delay={(i % 5) * 0.05} className="h-full">
            <article className={`${card} ${cardHover} group h-full p-6`}>
              <span className={`${iconTile} group-hover:bg-navy group-hover:text-white`}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <h4 className="mt-5 text-[16px] font-bold text-ink">{name}</h4>
              <p className="mt-2 text-[14.5px] leading-6 text-body">{q}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mx-auto mt-14 max-w-3xl text-center text-[1.35rem] font-bold leading-[1.45] tracking-[-0.02em] text-ink">
          Performance isn't defined by one of these signals. <Highlight>It's defined by how they work together.</Highlight>
        </p>
      </Reveal>
    </Section>
  )
}

const modelNodes = ['Architecture', 'Cost', 'Engineering', 'Operations', 'Modernization', 'Resilience']

export function PerformanceModel() {
  return (
    <section id="performance-model" className="bg-[linear-gradient(180deg,#ffffff_50%,#f5f7fa_50%)] px-3 sm:px-5">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-navy/10 bg-[linear-gradient(135deg,#eaf2fb_0%,#ffffff_55%,#eef4fb_100%)]">
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="The performance model"
              title={
                <>
                  A cloud estate <Highlight>doesn't perform in isolation.</Highlight>
                </>
              }
            />
            <ul className="mt-8 space-y-3">
              {[
                'A change in architecture can change cost.',
                'A modernization decision can change resilience.',
                'An engineering shortcut can create operational friction.',
              ].map((line) => (
                <li key={line} className="flex items-center gap-3 text-[16.5px] text-ink">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-navy shadow-sm ring-1 ring-navy/10">
                    <ArrowRight size={14} />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[17px] leading-[1.75] text-body">
              The signals are connected. Performance is in the relationship between them.
            </p>
            <p className="mt-2 text-[17px] font-bold text-navy">Calipers brings those relationships into view.</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
              <div className="absolute inset-[12%] rounded-full border border-dashed border-navy/15" />
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
                {modelNodes.map((_, i) => {
                  const a = (i / modelNodes.length) * Math.PI * 2 - Math.PI / 2
                  return modelNodes.map((__, j) => {
                    if (j <= i) return null
                    const b = (j / modelNodes.length) * Math.PI * 2 - Math.PI / 2
                    return (
                      <line
                        key={`${i}-${j}`}
                        x1={200 + Math.cos(a) * 150}
                        y1={200 + Math.sin(a) * 150}
                        x2={200 + Math.cos(b) * 150}
                        y2={200 + Math.sin(b) * 150}
                        stroke="#0e3a6d"
                        strokeWidth="1"
                        opacity="0.16"
                      />
                    )
                  })
                })}
              </svg>
              {modelNodes.map((node, i) => {
                const a = (i / modelNodes.length) * Math.PI * 2 - Math.PI / 2
                return (
                  <span
                    key={node}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-white px-3.5 py-2 text-[13px] font-semibold text-ink shadow-[0_10px_24px_-10px_rgba(18,32,51,0.35)]"
                    style={{ left: `${50 + Math.cos(a) * 37.5}%`, top: `${50 + Math.sin(a) * 37.5}%` }}
                  >
                    {node}
                  </span>
                )
              })}
              <span className="model-pulse absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy/15" />
              <span className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[linear-gradient(140deg,#0e3a6d,#2f6fb5)] text-center text-[14px] font-bold text-white shadow-[0_20px_40px_-12px_rgba(14,58,109,0.6)]">
                Performance
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const outcomes = [
  { name: 'Clarity', body: "See what's happening across the estate—and why.", icon: Gauge },
  { name: 'Control', body: 'Bring technology, economics, and operations into better alignment.', icon: Scale },
  { name: 'Velocity', body: 'Reduce friction between decisions and execution.', icon: Zap },
  { name: 'Resilience', body: 'Build an estate that can adapt without compromising what matters.', icon: ShieldCheck },
  { name: 'Efficiency', body: 'Make better use of the technology and investment already in place.', icon: TrendingUp },
  { name: 'Progress', body: 'Create a continuous cycle of measurement and improvement.', icon: RefreshCw },
]

const stats = [
  { value: 'XX+', label: 'Enterprise cloud environments' },
  { value: 'XX+', label: 'Workloads assessed / optimized' },
  { value: 'XX%', label: 'Improvement in [verified metric]' },
  { value: 'XX%', label: 'Reduction in [verified metric]' },
]

export function Outcomes() {
  return (
    <Section id="outcomes">
      <Reveal>
        <SectionHeading
          eyebrow="Outcomes"
          title={
            <>
              Performance is only useful <Highlight>when it changes something.</Highlight>
            </>
          }
        />
      </Reveal>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {outcomes.map(({ name, body, icon: Icon }, i) => (
          <Reveal key={name} delay={(i % 3) * 0.06} className="h-full">
            <article className={`${card} ${cardHover} group relative h-full overflow-hidden p-7`}>
              <span className="absolute right-6 top-6 text-[13px] font-bold tabular-nums text-navy/25">0{i + 1}</span>
              <span className={`${iconTile} group-hover:bg-navy group-hover:text-white`}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-[1.15rem] font-bold text-ink">{name}</h3>
              <p className="mt-2 text-[15.5px] leading-7 text-body">{body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <dl className="mt-10 grid overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0e3a6d,#1f5596)] p-2 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-2 rounded-3xl p-6 text-white">
              <dt className="text-[14px] leading-6 text-white/75">{stat.label}</dt>
              <dd className="text-[2.6rem] font-extrabold leading-none tracking-[-0.03em]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}

export function Capabilities() {
  return (
    <Section id="capabilities">
      <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="What we do"
          title="Capabilities"
          lead="Data and AI, cloud, cybersecurity, and GPU on-demand — delivered against the same performance baseline."
        />
        <a
          href="#contact"
          className="group inline-flex h-12 shrink-0 cursor-pointer items-center gap-2 self-start rounded-full border border-line bg-white px-5 text-[14.5px] font-semibold text-ink transition-colors hover:border-ink/20 hover:bg-canvas lg:self-auto"
        >
          Talk to an advisor
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </Reveal>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilityGroups.map((group, i) => {
          const Icon = capabilityIcons[group.title] ?? Cloud
          const items = group.items.length
            ? group.items
            : [{ label: 'Talk to us about cybersecurity', href: '#contact' }]
          return (
            <Reveal key={group.title} delay={i * 0.06} className="h-full">
              <article className={`${card} ${cardHover} h-full p-3`}>
                <div className="rounded-[20px] bg-canvas p-5">
                  <span className="grid size-11 place-items-center rounded-2xl bg-navy text-white">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-[1.1rem] font-bold text-ink">{group.title}</h3>
                </div>
                <ul className="mt-2 px-2 pb-2">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="group flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-[14.5px] font-medium text-ink transition-colors hover:bg-canvas hover:text-navy"
                      >
                        {item.label}
                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-navy opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}