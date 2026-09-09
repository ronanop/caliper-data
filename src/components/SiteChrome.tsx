import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '#ai', label: 'AI' },
  { href: '#finops', label: 'FinOps & AIOps' },
  { href: '#platforms', label: 'Platforms' },
  { href: '#services', label: 'Services' },
  { href: '#company', label: 'Company' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-30 border-b bg-white ${
        scrolled ? 'border-[#d9e0ea] shadow-sm' : 'border-[#d9e0ea]'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex cursor-pointer items-center" aria-label="Calipers home">
          <img src="/logo.png" alt="Calipers Consulting" className="h-12 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-[15px] font-medium text-body transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden min-h-11 cursor-pointer items-center rounded-md bg-navy px-4 text-[15px] font-semibold text-white transition-colors hover:bg-navy-dark sm:inline-flex"
          >
            Talk to an advisor
          </a>
          <button
            type="button"
            className="grid size-11 cursor-pointer place-items-center rounded-md border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-line bg-white px-5 py-3 lg:hidden" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 cursor-pointer items-center text-[17px] font-medium text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-12 cursor-pointer items-center text-[17px] font-semibold text-navy"
          >
            Talk to an advisor
          </a>
        </nav>
      ) : null}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <p className="text-[17px] font-semibold text-ink">Calipers</p>
          <p className="mt-3 max-w-sm text-[15px] leading-7 text-body">
            Enterprise AI on AWS, Azure, Google Cloud, and Vyuha. FinOps and AIOps through Curate and Zolix.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="cursor-pointer text-[15px] text-body hover:text-navy">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="cursor-pointer text-[15px] text-body hover:text-navy">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
