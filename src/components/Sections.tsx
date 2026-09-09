import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { images } from '../lib/images'

const faqs = [
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

export function Anchors() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">What we are hired for</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">Two anchors. Everything else follows.</h2>

        <div className="mt-10 grid gap-8">
          <article id="ai" className="grid overflow-hidden rounded-xl border border-line bg-white md:grid-cols-2">
            <img
              src={images.ai}
              alt="Technology leader presenting an AI delivery plan to a client team"
              className="h-64 w-full object-cover md:h-full"
            />
            <div className="p-7 md:p-9">
              <p className="text-sm font-semibold text-navy">Build AI</p>
              <h3 className="mt-2 text-2xl font-semibold text-ink">Production systems, not a permanent pilot.</h3>
              <p className="mt-4 text-[16px] leading-7 text-body">
                We land AI on AWS, Azure, Google Cloud, and Vyuha. Models, agents, and the data they depend on —
                running where the business can depend on them.
              </p>
              <ul className="mt-5 space-y-2 text-[16px] text-ink">
                <li>AI on AWS, Azure, and Google Cloud</li>
                <li>Sovereign and agentic AI on Vyuha</li>
                <li>From first workload to something operations can own</li>
              </ul>
            </div>
          </article>

          <article id="finops" className="grid overflow-hidden rounded-xl border border-line bg-white md:grid-cols-2">
            <img
              src={images.finops}
              alt="Analyst reviewing cloud and product cost dashboards on a laptop"
              className="h-64 w-full object-cover md:order-2 md:h-full"
            />
            <div className="p-7 md:p-9">
              <p className="text-sm font-semibold text-navy">Control it</p>
              <h3 className="mt-2 text-2xl font-semibold text-ink">FinOps and AIOps on one baseline.</h3>
              <p className="mt-4 text-[16px] leading-7 text-body">
                Finance and engineering share one reading of cloud spend, token cost, and waste. Curate and Zolix
                are the data platforms that make that reading reliable.
              </p>
              <ul className="mt-5 space-y-2 text-[16px] text-ink">
                <li>Cloud and AI cost in one view</li>
                <li>AIOps that keep the estate honest</li>
                <li>Curate and Zolix as the system of record</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export function Downstream() {
  const items = [
    {
      title: 'Cloud billing management',
      body: 'Allocation, commitments, and a bill finance can audit — because the spend is already visible.',
      image: images.billing,
      alt: 'Consultant reviewing cost documents and a laptop on a desk',
    },
    {
      title: 'Migration',
      body: 'Move what the baseline says should move. Leave what should stay. No migration for its own sake.',
      image: images.migration,
      alt: 'Delivery team planning a technology migration together',
    },
    {
      title: 'Ongoing operations',
      body: 'AIOps as the operating model: the same control plane, after go-live.',
      image: images.operations,
      alt: 'Operations team collaborating at a shared workspace',
    },
  ]

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">Services that follow</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">
          Billing, migration, and operations come after the measurement.
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-7 text-body">
          These are not peer offerings beside AI and FinOps. They are what the work produces once the estate is
          understood.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-xl border border-line bg-white">
              <img src={item.image} alt={item.alt} className="h-44 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-[16px] leading-7 text-body">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Method() {
  const steps = [
    { n: '01', title: 'Baseline', body: 'Measure the AI workload and the estate before anything is moved or built.' },
    { n: '02', title: 'Land', body: 'Place the work on AWS, Azure, Google Cloud, or Vyuha when sovereignty is required.' },
    { n: '03', title: 'Instrument', body: 'Use Curate and Zolix so usage, tokens, and cloud cost are attributable.' },
    { n: '04', title: 'Operate', body: 'Run AIOps and FinOps, then scale what the numbers support.' },
  ]
  const listRef = useRef<HTMLOListElement>(null)
  const reduced = usePrefersReducedMotion()
  const [active, setActive] = useState(reduced ? steps.length - 1 : -1)

  useEffect(() => {
    if (reduced) {
      setActive(steps.length - 1)
      return
    }

    const node = listRef.current
    if (!node) return

    let timer = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        let step = 0
        setActive(0)
        timer = window.setInterval(() => {
          step += 1
          setActive(step)
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
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">How we work</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">A clear sequence, not a service menu.</h2>
        <ol ref={listRef} className="relative mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => {
            const on = active >= index
            return (
              <li
                key={step.n}
                className={`method-card rounded-xl border bg-white p-6 ${on ? 'is-active' : ''}`}
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <span className="method-bar" aria-hidden="true" />
                <p className="text-sm font-semibold text-navy">{step.n}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-body">{step.body}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export function Platforms() {
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

  return (
    <section id="platforms" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">Platforms</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">Named platforms, not a vendor wall.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {platforms.map((platform) => (
            <article key={platform.name} className="overflow-hidden rounded-xl border border-line bg-white">
              <img src={platform.image} alt={platform.alt} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-semibold text-navy">{platform.kicker}</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">{platform.name}</h3>
                <p className="mt-3 text-[16px] leading-7 text-body">{platform.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Roles() {
  const roles = [
    { who: 'AI owner', body: 'Token cost, inference waste, and whether a model earns its keep.' },
    { who: 'FinOps', body: 'Variance, allocation, and commitments — cloud and AI in the same language.' },
    { who: 'Engineering', body: 'Rightsizing and AIOps that do not slow the release they are meant to protect.' },
    { who: 'Leadership', body: 'Unit economics and a decision, not another dashboard to interpret.' },
  ]

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">Who it is for</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Different owners. One reading.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {roles.map((role) => (
            <article key={role.who} className="rounded-xl border border-line bg-white p-6">
              <h3 className="text-xl font-semibold text-ink">{role.who}</h3>
              <p className="mt-2 text-[16px] leading-7 text-body">{role.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Company() {
  return (
    <section id="company" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
        <img
          src={images.office}
          alt="Bright corporate workspace with meeting rooms and open desks"
          className="h-80 w-full rounded-xl object-cover"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">Company</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">This is not a cloud brochure.</h2>
          <p className="mt-4 text-[16px] leading-7 text-body">
            Calipers is anchored on AI expertise and on FinOps and AIOps. Billing, migration, and operations are
            what those two anchors produce.
          </p>
          <div className="mt-8 flex gap-4 rounded-xl border border-line bg-canvas p-5">
            <img
              src={images.advisor}
              alt="Professional advisor"
              className="size-16 shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="text-[16px] leading-7 text-ink">
                “Start with whether the AI is in production, and whether anyone can explain the cost. The cloud
                conversation comes after that.”
              </p>
              <p className="mt-2 text-sm font-semibold text-body">Engagement principle · Calipers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">Questions</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Asked before the first call.</h2>
        </div>
        <div className="divide-y divide-line rounded-xl border border-line bg-white px-5">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-[17px] font-semibold text-ink"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  {item.q}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-navy transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen ? <p className="pb-5 text-[16px] leading-7 text-body">{item.a}</p> : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Close() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">Start here</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Two paths. No service menu.</h2>
          <p className="mt-4 text-[16px] leading-7 text-body">
            Tell us whether you need AI in production, or control of cloud and AI spend. We will start from that,
            not from a catalog.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@calipers.ai?subject=Put%20AI%20into%20production"
              className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-md bg-navy px-5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              Put AI into production
            </a>
            <a
              href="mailto:hello@calipers.ai?subject=Control%20cloud%20and%20AI%20spend"
              className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-md border border-navy px-5 text-[15px] font-semibold text-navy transition-colors hover:bg-[#eef3f8]"
            >
              Get control of spend
            </a>
          </div>
        </div>
        <img
          src={images.close}
          alt="Two colleagues in a bright office discussing a client engagement"
          className="h-80 w-full rounded-xl object-cover"
        />
      </div>
    </section>
  )
}
