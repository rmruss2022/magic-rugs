import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#shop', label: 'Shop' },
  { href: '#services', label: 'Services' },
  { href: '#classes', label: 'Classes' },
  { href: '#visit', label: 'Visit' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-paper/88 backdrop-blur-md border-b border-ink/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-4 md:py-5 flex items-center justify-between gap-6">
        {/* Wordmark */}
        <a href="#top" className="flex items-baseline gap-3 group">
          <span
            className={`font-display text-[1.55rem] md:text-[1.75rem] leading-none tracking-tightest-ish transition-colors duration-300 ${
              scrolled ? 'text-ink' : 'text-paper'
            }`}
            style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 500" }}
          >
            Creative Minds
          </span>
          <span className={`hidden md:inline dateline transition-colors duration-300 ${scrolled ? 'text-ink-muted' : 'text-paper/70'}`}>
            <span className={`font-arabic not-italic text-[0.95rem] tracking-normal mr-2 transition-colors duration-300 ${scrolled ? 'text-ink-muted' : 'text-paper/80'}`}>حلب</span>
            Aleppo · Brooklyn
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`dateline transition-colors relative group ${
                scrolled ? 'text-ink-soft hover:text-claret-light' : 'text-paper/80 hover:text-paper'
              }`}
            >
              {l.label}
              <span className={`absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 group-hover:w-full ${
                scrolled ? 'bg-claret-light' : 'bg-paper'
              }`} />
            </a>
          ))}
          <a
            href="#classes"
            className={`dateline transition-colors px-4 py-2 ${
              scrolled
                ? 'text-paper bg-ink hover:bg-ink-soft'
                : 'text-ink bg-paper hover:bg-paper-deep'
            }`}
          >
            Book a class
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px transition-all ${scrolled ? 'bg-ink' : 'bg-paper'} ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px transition-all ${scrolled ? 'bg-ink' : 'bg-paper'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px transition-all ${scrolled ? 'bg-ink' : 'bg-paper'} ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${menuOpen ? 'max-h-96 opacity-100 border-t border-ink/10' : 'max-h-0 opacity-0'}`}>
        <nav className="px-6 py-6 flex flex-col gap-5 bg-paper">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="dateline text-ink-soft"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#classes"
            onClick={() => setMenuOpen(false)}
            className="dateline text-paper bg-ink px-4 py-3 text-center"
          >
            Book a class
          </a>
        </nav>
      </div>
    </header>
  )
}
