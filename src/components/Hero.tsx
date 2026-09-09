import { ArrowRight } from 'lucide-react'
import { images } from '../lib/images'

const clouds = [
  { name: 'AWS', src: '/logos/aws.svg', className: 'h-8' },
  { name: 'Microsoft Azure', src: '/logos/azure.svg', className: 'h-8' },
  { name: 'Google Cloud', src: '/logos/google-cloud.svg', className: 'h-6' },
  { name: 'Vyuha', src: '/logos/vyuha.png', className: 'h-7' },
]

export function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">AI · FinOps · AIOps</p>
          <h1 className="mt-4 text-[2.35rem] font-semibold leading-[1.15] text-ink sm:text-5xl">
            AI that reaches production, with the economics to prove it.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-body">
            Calipers puts enterprise AI into production on AWS, Azure, Google Cloud, and Vyuha. We then make the
            cost of that AI and cloud estate visible, governed, and controllable.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#ai"
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md bg-navy px-5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              Put AI into production
              <ArrowRight size={18} />
            </a>
            <a
              href="#finops"
              className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-md border border-navy px-5 text-[15px] font-semibold text-navy transition-colors hover:bg-[#eef3f8]"
            >
              Control cloud and AI spend
            </a>
          </div>
        </div>

        <figure className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
          <img
            src={images.hero}
            alt="Consulting team reviewing a delivery plan around a conference table"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="border-t border-line px-5 py-4 text-sm text-body">
            Production AI and a measured estate — not a cloud brochure.
          </figcaption>
        </figure>
      </div>

      <div className="border-y border-line bg-canvas">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4 md:px-8">
          <p className="text-sm font-semibold text-ink">AI expertise on</p>
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
    </section>
  )
}
