import { ArrowRight, ArrowUp, ChevronDown, Cloud, Mail, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { capabilityGroups, capabilityIcons } from '../lib/capabilities'

const links = [
  { href: '#performance', label: 'Performance' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#ai', label: 'AI' },
  { href: '#finops', label: 'FinOps & AIOps' },
  { href: '#platforms', label: 'Platforms' },
  { href: '#company', label: 'Company' },
]

const footerLinks = [
  ...links,
  { href: '#capabilities', label: 'What we do' },
  { href: '#outcomes', label: 'Outcomes' },
  { href: '#services', label: 'Services' },
]

function CapabilityColumns({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {capabilityGroups.map((group) => {
        const Icon = capabilityIcons[group.title] ?? Cloud
        return (
          <div key={group.title} className="rounded-2xl p-3">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-xl bg-navy/[0.07] text-navy">
                <Icon size={16} strokeWidth={2} />
              </span>
              <p className="text-[13px] font-semibold text-ink">{group.title}</p>
            </div>
            <ul className="mt-3 space-y-0.5">
              {(group.items.length ? group.items : [{ label: 'Talk to us', href: '#contact' }]).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={onNavigate}
                    className="block cursor-pointer rounded-lg px-2 py-1.5 text-[14px] leading-snug text-body transition-colors hover:bg-canvas hover:text-navy"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileWhatOpen, setMobileWhatOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onPointer = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-40 -mb-[76px] h-[76px] px-3 pt-3 font-display sm:px-5">
      <div
        className={`relative mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border pl-4 pr-2 transition-[background-color,border-color,box-shadow] duration-300 sm:pl-5 ${
          scrolled || open
            ? 'border-line/80 bg-white/85 shadow-[0_12px_40px_-12px_rgba(18,32,51,0.18)] backdrop-blur-xl'
            : 'border-white/80 bg-white/60 shadow-[0_1px_2px_rgba(18,32,51,0.04)] backdrop-blur-md'
        }`}
      >
        <a href="#top" className="flex shrink-0 cursor-pointer items-center" aria-label="Calipers home">
          <img src="/logo.png" alt="Calipers Consulting" className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          <div
            ref={menuRef}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="what-we-do-menu"
              onClick={(event) => setMenuOpen((value) => (event.detail === 0 ? !value : true))}
              className={`flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                menuOpen ? 'bg-ink/[0.05] text-ink' : 'text-body hover:bg-ink/[0.05] hover:text-ink'
              }`}
            >
              What we do
              <ChevronDown size={15} className={`transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`} />
            </button>
            {menuOpen ? (
              <div id="what-we-do-menu" className="absolute inset-x-0 top-full flex justify-center pt-3">
                <div className="menu-in w-full max-w-[880px] rounded-[28px] border border-line/80 bg-white p-3 shadow-[0_30px_80px_-24px_rgba(18,32,51,0.28)]">
                  <div className="grid grid-cols-4 gap-1">
                    <CapabilityColumns onNavigate={() => setMenuOpen(false)} />
                  </div>
                  <div className="mt-2 flex items-center justify-between rounded-2xl bg-canvas px-5 py-3.5">
                    <p className="text-[14px] text-body">
                      Not sure where to start? <span className="font-semibold text-ink">Map your cloud estate with us.</span>
                    </p>
                    <a
                      href="#contact"
                      onClick={() => setMenuOpen(false)}
                      className="group inline-flex cursor-pointer items-center gap-1.5 text-[14px] font-semibold text-navy"
                    >
                      Talk to an advisor
                      <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer rounded-full px-3.5 py-2 text-[14px] font-medium text-body transition-colors hover:bg-ink/[0.05] hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href="#contact"
            className="group hidden h-12 cursor-pointer items-center gap-2.5 rounded-full bg-navy pl-5 pr-1.5 text-[14px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(14,58,109,0.7)] transition-colors hover:bg-navy-dark sm:inline-flex"
          >
            Talk to an advisor
            <span className="grid size-9 place-items-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight size={16} />
            </span>
          </a>
          <button
            type="button"
            className="grid size-12 cursor-pointer place-items-center rounded-full text-ink transition-colors hover:bg-ink/[0.05] xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            className="menu-in absolute inset-x-0 top-full mt-2 max-h-[calc(100vh-96px)] overflow-y-auto rounded-[28px] border border-line/80 bg-white p-3 shadow-[0_30px_80px_-24px_rgba(18,32,51,0.3)] xl:hidden"
            aria-label="Mobile"
          >
            <button
              type="button"
              aria-expanded={mobileWhatOpen}
              onClick={() => setMobileWhatOpen((value) => !value)}
              className="flex min-h-12 w-full cursor-pointer items-center justify-between rounded-2xl px-4 text-[16px] font-semibold text-ink transition-colors hover:bg-canvas"
            >
              What we do
              <ChevronDown size={18} className={`transition-transform duration-200 ${mobileWhatOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileWhatOpen ? (
              <div className="mb-2 grid gap-1 rounded-2xl bg-canvas/70 p-1 sm:grid-cols-2">
                <CapabilityColumns onNavigate={() => setOpen(false)} />
              </div>
            ) : null}
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 cursor-pointer items-center rounded-2xl px-4 text-[16px] font-medium text-ink transition-colors hover:bg-canvas"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-navy text-[15px] font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              Talk to an advisor
              <ArrowRight size={16} />
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-canvas px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-line/70 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-[1.1fr_1fr] md:px-8 md:py-16">
          <div>
            <img src="/logo.png" alt="Calipers Consulting" className="h-12 w-auto" />
            <p className="mt-6 max-w-sm text-[1.35rem] font-bold leading-snug tracking-[-0.02em] text-ink">
              Cloud, <span className="hero-highlight">measured for performance.</span>
            </p>
            <p className="mt-3 max-w-sm text-[15px] leading-7 text-body">
              Enterprise AI on AWS, Azure, Google Cloud, and Vyuha. FinOps and AIOps through Curate and Zolix.
            </p>
            <a
              href="mailto:hello@calipers.ai"
              className="mt-6 inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-line bg-canvas py-2 pl-2 pr-4 text-[14px] font-semibold text-ink transition-colors hover:border-navy/25"
            >
              <span className="grid size-8 place-items-center rounded-full bg-navy text-white">
                <Mail size={15} />
              </span>
              hello@calipers.ai
            </a>
          </div>
          <nav aria-label="Footer">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-body">Explore</p>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="cursor-pointer text-[15px] font-medium text-ink transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="cursor-pointer text-[15px] font-medium text-ink transition-colors hover:text-navy"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-line/70 px-5 py-6 sm:flex-row sm:items-center md:px-8">
          <p className="text-[13.5px] text-body">© {new Date().getFullYear()} Calipers Consulting. All rights reserved.</p>
          <a
            href="#top"
            className="group inline-flex cursor-pointer items-center gap-2 text-[13.5px] font-semibold text-ink transition-colors hover:text-navy"
          >
            Back to top
            <span className="grid size-8 place-items-center rounded-full border border-line transition-transform duration-200 group-hover:-translate-y-0.5">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
