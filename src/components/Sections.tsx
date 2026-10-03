import {
  Activity,
  ArrowLeftRight,
  ArrowRight,
  Brain,
  Briefcase,
  Check,
  Code2,
  Plus,
  Receipt,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { images } from '../lib/images'
import { Eyebrow, Highlight, Reveal, Section, SectionHeading, card, cardHover, iconTile } from './ui'

const faqs = [
  {
    q: 'What does Calipers mean by cloud performance?',
    a: "Performance is more than infrastructure, spending, or uptime. It is how economics, engineering, architecture, operations, resilience, security, data, AI readiness, governance, and business outcomes work together. Calipers measures those signals as one system, so decisions are based on evidence rather than assumptions.",
  },
  {
    q: 'Why not a typical cloud consulting partner?',
    a: 'Most firms lead with cloud consulting, then add AI as a practice. Calipers starts with two jobs: put AI into production, and make the economics of that AI and cloud estate clear. AWS, Azure, and Google Cloud are where the work runs. They are not the headline.',
  },
  {
    q: 'What is Vyuha for?',
    a: 'Vyuha is the sovereign, agentic path. Use it when AI has to run inside your perimeter — private cloud, VPC, or air-gapped — with human control still in place. Hyperscalers remain the path when that is the right estate.',
  },
  {
    q: 'What do Curate and Zolix do?',
    a: 'They are the data platforms behind the control plane. Curate is the datalake layer that makes usage attributable. Zolix is the FinOps platform that turns cloud and AI cost into actions finance and engineering can share.',
  },
  {
    q: 'When does cloud billing management start?',
    a: 'After the estate is instrumented. Billing management is how the baseline becomes a bill people can explain — allocation, commitments, and a single view of cloud and AI spend. It follows FinOps. It does not replace it.',
  },
  {
    q: 'When is migration the right move?',
    a: 'When the baseline says a workload should move — for AI readiness, cost, or operating model. Migration is a result of the measurement, not the opening offer.',
  },
]

const anchors = [
  {
    id: 'ai',
    kicker: 'Build AI',
    title: 'Production systems, not a permanent pilot.',
    body: 'We land AI on AWS, Azure, Google Cloud, and Vyuha. Models, agents, and the data they depend on — running where the business can depend on them.',
    points: [
      'AI on AWS, Azure, and Google Cloud',
      'Sovereign and agentic AI on Vyuha',
      'From first workload to something operations can own',
    ],
    cta: { label: 'Put AI into production', href: '#contact' },
    image: images.ai,
    alt: 'Technology leader presenting an AI delivery plan to a client team',
  },
  {
    id: 'finops',
    kicker: 'Control it',
    title: 'FinOps and AIOps on one baseline.',
    body: 'Finance and engineering share one reading of cloud spend, token cost, and waste. Curate and Zolix are the data platforms that make that reading reliable.',
    points: ['Cloud and AI cost in one view', 'AIOps that keep the estate honest', 'Curate and Zolix as the system of record'],
    cta: { label: 'Get control of spend', href: '#contact' },
    image: images.finops,
    alt: 'Analyst reviewing cloud and product cost dashboards on a laptop',
  },
]

export function Anchors() {
  return (
    <Section tone="canvas">
      <Reveal>
        <SectionHeading
          eyebrow="What we are hired for"
          title={
            <>
              Two anchors. <Highlight>Everything else follows.</Highlight>
            </>
          }
          lead="AI that reaches production, with the economics to prove it. Calipers puts enterprise AI into production on AWS, Azure, Google Cloud, and Vyuha. We then make the cost of that AI and cloud estate visible, governed, and controllable."
        />
      </Reveal>

      <div className="mt-14 grid gap-6">
        {anchors.map((anchor, i) => (
          <Reveal key={anchor.id}>
            <article
              id={anchor.id}
              className="grid scroll-mt-28 gap-2 rounded-[32px] border border-line/70 bg-white p-2 shadow-[0_30px_70px_-45px_rgba(18,32,51,0.35)] md:grid-cols-2"
            >
              <div className={`relative overflow-hidden rounded-[26px] ${i % 2 ? 'md:order-2' : ''}`}>
                <img src={anchor.image} alt={anchor.alt} className="h-64 w-full object-cover md:h-full" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-bold text-navy backdrop-blur">
                  0{i + 1}
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                <Eyebrow>{anchor.kicker}</Eyebrow>
                <h3 className="mt-5 text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.025em] text-ink">
                  {anchor.title}
                </h3>
                <p className="mt-4 text-[16px] leading-7 text-body">{anchor.body}</p>
                <ul className="mt-6 space-y-3">
                  {anchor.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15.5px] font-medium text-ink">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-navy text-white">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={anchor.cta.href}
                  className="group mt-8 inline-flex h-12 cursor-pointer items-center gap-3 self-start rounded-full bg-navy pl-5 pr-1.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-navy-dark"
                >
                  {anchor.cta.label}
                  <span className="grid size-9 place-items-center rounded-full bg-white text-navy transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

const downstream: { title: string; body: string; image: string; alt: string; icon: LucideIcon }[] = [
  {
    title: 'Cloud billing management',
    body: 'Allocation, commitments, and a bill finance can audit — because the spend is already visible.',
    image: images.billing,
    alt: 'Consultant reviewing cost documents and a laptop on a desk',
    icon: Receipt,
  },
  {
    title: 'Migration',
    body: 'Move what the baseline says should move. Leave what should stay. No migration for its own sake.',
    image: images.migration,
    alt: 'Delivery team planning a technology migration together',
    icon: ArrowLeftRight,
  },
  {
    title: 'Ongoing operations',
    body: 'AIOps as the operating model: the same control plane, after go-live.',
    image: images.operations,
    alt: 'Operations team collaborating at a shared workspace',
    icon: Activity,
  },
]

export function Downstream() {
  return (
    <Section id="services" tone="canvas">
      <Reveal>
        <SectionHeading
          eyebrow="Services that follow"
          title={
            <>
              Billing, migration, and operations <Highlight>come after the measurement.</Highlight>
            </>
          }
          lead="These are not peer offerings beside AI and FinOps. They are what the work produces once the estate is understood."
        />
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {downstream.map(({ title, body, image, alt, icon: Icon }, i) => (
          <Reveal key={title} delay={i * 0.08} className="h-full">
            <article className={`${card} ${cardHover} group h-full p-2`}>
              <div className="relative overflow-hidden rounded-[20px]">
                <img
                  src={image}
                  alt={alt}
                  className="h-48 w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-3 left-3 grid size-11 place-items-center rounded-2xl bg-white text-navy shadow-md">
                  <Icon size={20} aria-hidden="true" />
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-[1.2rem] font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[15.5px] leading-7 text-body">{body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

const steps = [
  {
    n: '01',
    title: 'Assess',
    lead: 'Establish the baseline',
    body: 'Understand the estate as it exists today—its architecture, economics, operations, dependencies, and performance signals.',
    detail: 'Measure the AI workload and the estate before anything is moved or built.',
  },
  {
    n: '02',
    title: 'Diagnose',
    lead: 'Find what is actually driving performance',
    body: 'Connect the signals to identify friction, risk, inefficiency, and opportunity.',
    detail: 'Use Curate and Zolix so usage, tokens, and cloud cost are attributable.',
  },
  {
    n: '03',
    title: 'Transform',
    lead: 'Move what matters',
    body: 'Prioritize the changes that can materially improve the estate rather than changing things for the sake of change.',
    detail: 'Place the work on AWS, Azure, Google Cloud, or Vyuha when sovereignty is required.',
  },
  {
    n: '04',
    title: 'Operate',
    lead: 'Keep performance in motion',
    body: 'Run the environment with the visibility and discipline required as workloads, teams, and priorities evolve.',
    detail: 'Run AIOps and FinOps on the same control plane, after go-live.',
  },
  {
    n: '05',
    title: 'Optimize',
    lead: 'Measure again. Improve again',
    body: "Because the cloud estate doesn't stand still—and neither should its performance.",
    detail: 'Scale what the numbers support.',
  },
]

export function Method() {
  const listRef = useRef<HTMLOListElement>(null)
  const reduced = usePrefersReducedMotion()
  const [revealed, setRevealed] = useState(-1)
  const active = reduced ? steps.length - 1 : revealed

  useEffect(() => {
    if (reduced) return
    const node = listRef.current
    if (!node) return

    let timer = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        let step = 0
        setRevealed(0)
        timer = window.setInterval(() => {
          step += 1
          setRevealed(step)
          if (step >= steps.length - 1) window.clearInterval(timer)
        }, 420)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      window.clearInterval(timer)
    }
  }, [reduced])

  return (
    <Section id="how-it-works" tone="canvas">
      <Reveal>
        <SectionHeading
          eyebrow="How Calipers works"
          title={
            <>
              Understand. Then act. <Highlight>Then keep improving.</Highlight>
            </>
          }
          lead="A clear sequence, not a service menu."
        />
      </Reveal>
      <ol ref={listRef} className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => {
          const on = active >= index
          return (
            <li
              key={step.n}
              className={`method-card flex flex-col rounded-3xl border bg-white p-6 ${on ? 'is-active' : ''}`}
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <span className="method-bar" aria-hidden="true" />
              <div className="flex items-center justify-between">
                <span
                  className={`grid size-10 place-items-center rounded-full text-[13px] font-bold transition-colors duration-300 ${
                    on ? 'bg-navy text-white' : 'bg-canvas text-navy'
                  }`}
                >
                  {step.n}
                </span>
                {index < steps.length - 1 ? (
                  <ArrowRight size={16} className="hidden text-navy/30 lg:block" aria-hidden="true" />
                ) : null}
              </div>
              <h3 className="mt-5 text-[1.2rem] font-extrabold tracking-[-0.01em] text-ink">{step.title}</h3>
              <p className="mt-1.5 text-[14.5px] font-semibold leading-6 text-navy">{step.lead}</p>
              <p className="mt-3 flex-1 text-[14.5px] leading-6 text-body">{step.body}</p>
              <p className="mt-4 rounded-2xl bg-canvas p-3 text-[13.5px] leading-6 text-body">{step.detail}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

const platforms = [
  {
    name: 'Vyuha',
    kicker: 'Sovereign agentic AI',
    body: 'The fourth place AI lands, beside AWS, Azure, and Google, when the work cannot leave the estate.',
    image: images.vyuha,
    alt: 'Quiet modern office used for a private, controlled working environment',
  },
  {
    name: 'Curate',
    kicker: 'Datalake platform',
    body: 'The record underneath the estate. Usage becomes attributable, so decisions are based on data, not a monthly export.',
    image: images.curate,
    alt: 'Data dashboard on a workstation used to review usage and cost',
  },
  {
    name: 'Zolix',
    kicker: 'AI and cloud FinOps',
    body: 'Cost to action. Cloud spend and AI infrastructure, read so engineering and finance can move on the same recommendation.',
    image: images.zolix,
    alt: 'Open-plan technology office where finance and engineering teams work together',
  },
]

export function Platforms() {
  return (
    <Section id="platforms">
      <Reveal>
        <SectionHeading
          eyebrow="Platforms"
          title={
            <>
              Named platforms, <Highlight>not a vendor wall.</Highlight>
            </>
          }
        />
      </Reveal>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {platforms.map((platform, i) => (
          <Reveal key={platform.name} delay={i * 0.08} className="h-full">
            <article className="group relative isolate flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[32px] p-2">
              <img
                src={platform.image}
                alt={platform.alt}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,32,51,0)_30%,rgba(18,32,51,0.55)_100%)]"
              />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-navy backdrop-blur">
                {platform.kicker}
              </span>
              <div className="rounded-[26px] bg-white/95 p-6 backdrop-blur-xl">
                <h3 className="text-[1.6rem] font-extrabold tracking-[-0.025em] text-ink">{platform.name}</h3>
                <p className="mt-2 text-[15px] leading-7 text-body">{platform.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

const roles: { who: string; body: string; icon: LucideIcon }[] = [
  { who: 'AI owner', body: 'Token cost, inference waste, and whether a model earns its keep.', icon: Brain },
  { who: 'FinOps', body: 'Variance, allocation, and commitments — cloud and AI in the same language.', icon: Wallet },
  { who: 'Engineering', body: 'Rightsizing and AIOps that do not slow the release they are meant to protect.', icon: Code2 },
  { who: 'Leadership', body: 'Unit economics and a decision, not another dashboard to interpret.', icon: Briefcase },
]

export function Roles() {
  return (
    <Section tone="canvas">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Who it is for"
            title={
              <>
                Different owners. <Highlight>One reading.</Highlight>
              </>
            }
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {roles.map(({ who, body, icon: Icon }, i) => (
            <Reveal key={who} delay={(i % 2) * 0.08} className="h-full">
              <article className={`${card} ${cardHover} group h-full p-7`}>
                <span className={`${iconTile} group-hover:bg-navy group-hover:text-white`}>
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-[1.2rem] font-bold text-ink">{who}</h3>
                <p className="mt-2 text-[15.5px] leading-7 text-body">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function Company() {
  return (
    <Section id="company">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="rounded-[32px] border border-line/70 bg-white p-2 shadow-[0_40px_90px_-45px_rgba(18,32,51,0.45)]">
            <img
              src={images.office}
              alt="Bright corporate workspace with meeting rooms and open desks"
              className="h-80 w-full rounded-[26px] object-cover md:h-[420px]"
            />
          </div>
          <div className="absolute -bottom-6 right-4 hidden items-center gap-2 rounded-full border border-white bg-white/95 px-4 py-2.5 text-[13px] font-semibold text-ink shadow-[0_20px_40px_-20px_rgba(18,32,51,0.45)] backdrop-blur sm:flex">
            <span className="size-2 rounded-full bg-navy" aria-hidden="true" />
            AI · FinOps · AIOps
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Company"
            title={
              <>
                This is <Highlight>not a cloud brochure.</Highlight>
              </>
            }
            lead="Calipers is anchored on AI expertise and on FinOps and AIOps. Billing, migration, and operations are what those two anchors produce."
          />
          <figure className={`${card} mt-8 p-6`}>
            <blockquote className="text-[17px] font-semibold leading-8 tracking-[-0.01em] text-ink">
              “Start with whether the AI is in production, and whether anyone can explain the cost. The cloud
              conversation comes after that.”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-line/70 pt-5">
              <img src={images.advisor} alt="Professional advisor" className="size-11 rounded-full object-cover" />
              <span className="text-[14px] font-semibold text-body">Engagement principle · Calipers</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <Section tone="canvas">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Questions"
            title={
              <>
                Asked before <Highlight>the first call.</Highlight>
              </>
            }
          />
          <div className={`${card} mt-8 p-6`}>
            <p className="text-[16px] font-bold text-ink">Still have a question?</p>
            <p className="mt-1.5 text-[14.5px] leading-6 text-body">Tell us where the estate is today. We will start from there.</p>
            <a
              href="#contact"
              className="group mt-5 inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-navy px-5 text-[14px] font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              Talk to an advisor
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index
            const panelId = `faq-panel-${index}`
            return (
              <div
                key={item.q}
                className={`rounded-3xl border transition-[background-color,box-shadow,border-color] duration-300 ${
                  isOpen
                    ? 'border-line/70 bg-white shadow-[0_24px_50px_-30px_rgba(18,32,51,0.3)]'
                    : 'border-transparent bg-white/60 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left text-[16.5px] font-bold text-ink"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  {item.q}
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full transition-[background-color,color,transform] duration-300 ${
                      isOpen ? 'rotate-45 bg-navy text-white' : 'bg-canvas text-navy'
                    }`}
                  >
                    <Plus size={18} aria-hidden="true" />
                  </span>
                </button>
                <div
                  id={panelId}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15.5px] leading-7 text-body">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

const paths = [
  { label: 'Put AI into production', subject: 'Put%20AI%20into%20production' },
  { label: 'Get control of spend', subject: 'Control%20cloud%20and%20AI%20spend' },
]

export function Close() {
  return (
    <section id="contact" className="bg-canvas px-3 pb-3 pt-0 sm:px-5 sm:pb-5">
      <div className="hero-surface relative isolate mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-navy/10">
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Measure what matters</Eyebrow>
            <h2 className="mt-5 text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-[3rem]">
              Your cloud is already <Highlight>generating the signals.</Highlight>
            </h2>
            <p className="mt-5 text-[17px] leading-[1.75] text-body">
              Calipers helps you connect them, understand what they're telling you, and decide what to do next.
            </p>

            <div className={`${card} mt-8 p-6`}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-navy">Start here</p>
              <h3 className="mt-2 text-[1.3rem] font-bold tracking-[-0.02em] text-ink">Two paths. No service menu.</h3>
              <p className="mt-2 text-[15px] leading-7 text-body">
                Tell us whether you need AI in production, or control of cloud and AI spend. We will start from that,
                not from a catalog.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:hello@calipers.ai?subject=Measure%20what%20matters"
                className="group inline-flex h-14 cursor-pointer items-center justify-between gap-4 rounded-full bg-navy pl-6 pr-2 text-[15px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(14,58,109,0.75)] transition-colors hover:bg-navy-dark sm:justify-center"
              >
                Measure what matters
                <span className="grid size-10 place-items-center rounded-full bg-white text-navy transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight size={18} />
                </span>
              </a>
              {paths.map((path) => (
                <a
                  key={path.label}
                  href={`mailto:hello@calipers.ai?subject=${path.subject}`}
                  className="inline-flex h-14 cursor-pointer items-center justify-center rounded-full border border-line bg-white px-6 text-[15px] font-semibold text-ink shadow-[0_1px_2px_rgba(18,32,51,0.05)] transition-colors hover:border-ink/20 hover:bg-canvas"
                >
                  {path.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[48px] bg-[radial-gradient(closest-side,rgba(74,143,214,0.28),transparent)] blur-2xl"
            />
            <div className="rounded-[32px] border border-white/90 bg-white/70 p-2 shadow-[0_40px_90px_-35px_rgba(18,32,51,0.45)] backdrop-blur">
              <img
                src={images.close}
                alt="Two colleagues in a bright office discussing a client engagement"
                className="aspect-[4/3.6] w-full rounded-[26px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
