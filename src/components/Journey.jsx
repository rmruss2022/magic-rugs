import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Journey() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="services" ref={ref} className="bg-paper relative overflow-hidden">
      {/* BG LAYER 1 — kilim pattern (different motif: hooked-cross, like a Persian gul) */}
      <div className="absolute inset-0 opacity-[0.09] pointer-events-none text-claret">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-kilim" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M32 12 L52 32 L32 52 L12 32 Z M32 22 L42 32 L32 42 L22 32 Z"
                    fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M32 0 L32 12 M32 52 L32 64 M0 32 L12 32 M52 32 L64 32"
                    stroke="currentColor" strokeWidth="0.8" />
              <path d="M8 8 L16 16 M48 48 L56 56 M48 16 L56 8 M16 48 L8 56"
                    stroke="currentColor" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-kilim)" />
        </svg>
      </div>

      {/* BG LAYER 2 — grain */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
           }} />

      {/* BG LAYER 3 — top edge wash, sits BELOW the torn cap so the kilim runs continuously */}
      <div className="absolute left-0 right-0 top-0 h-[10%] bg-gradient-to-b from-claret-light/10 to-transparent pointer-events-none" />

      {/* TORN CAP — paints the previous (indigo) section's color over the top edge so the
          kilim+grain layers extend continuously up to the tear line */}
      <svg
        className="absolute top-0 left-0 right-0 block w-full text-indigo-deep -scale-y-100 z-20 pointer-events-none"
        viewBox="0 0 1440 28"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 28 L0 12 L52 18 L108 8 L162 16 L218 6 L272 14 L328 8 L388 18 L444 10 L500 4 L556 14 L612 8 L672 18 L728 10 L784 6 L844 14 L898 8 L958 18 L1014 10 L1070 4 L1126 14 L1184 8 L1240 18 L1296 10 L1356 4 L1410 14 L1440 10 L1440 28 Z"
              fill="currentColor" />
      </svg>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-24 md:pb-32">

        {/* MASSIVE Arabic watermark — bottom-right (different position from Loom's top-right) */}
        <span
          aria-hidden="true"
          className="hidden md:block absolute font-arabic leading-none select-none pointer-events-none"
          style={{
            fontSize: 'clamp(18rem, 32vw, 30rem)',
            bottom: '-2rem',
            right: '-3rem',
            color: 'rgba(194, 85, 79, 0.10)',
            transform: 'rotate(6deg)',
          }}
        >
          ورشة
        </span>

        {/* INTRO */}
        <div className="relative grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7 relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-12 h-px bg-claret-light" />
              <span className="dateline text-claret-light tracking-tracked-wide">§ 05 — Services</span>
              <span className="font-arabic text-[1.2rem] text-ink-muted">الخدمات</span>
            </div>

            <h2 className="font-display text-[2.6rem] md:text-[3.4rem] leading-[0.95] text-ink tracking-tightest-ish"
                style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 410" }}>
              We make,
              <span className="block"> we mend,</span>
              <span className="block italic font-editorial font-normal text-ink-soft mt-1">
                we hunt things down.
              </span>
            </h2>

            <p className="font-editorial italic text-ink-soft text-[1.2rem] mt-6 leading-snug max-w-md">
              Three things we do besides selling what's already on the wall.
            </p>

            <p className="text-ink-soft leading-relaxed mt-5 max-w-lg text-[1.02rem]">
              Walk in, email, or call. Quotes come back the same day for repairs and small
              jobs; commissions take a week of sketching back and forth before we agree on
              a price. No deposit until you sign the form.
            </p>
          </motion.div>

          {/* Workshop seal — circular hand-stamped graphic, top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: -6 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-4 md:col-start-9 md:pt-2 flex justify-center md:justify-end"
          >
            <WorkshopSeal />
          </motion.div>
        </div>

        {/* ─────────── CORKBOARD: three different document types ─────────── */}
        <div className="relative md:min-h-[760px]">
          {/* Hairline pin marks scattered (decorative) */}
          <span className="hidden md:block absolute top-2 left-[18%] w-1.5 h-1.5 rounded-full bg-ink/30" />
          <span className="hidden md:block absolute top-[55%] left-[42%] w-1.5 h-1.5 rounded-full bg-ink/25" />
          <span className="hidden md:block absolute top-[8%] right-[8%] w-1.5 h-1.5 rounded-full bg-ink/30" />

          {/* ── DOCUMENT 1: COMMISSION ORDER FORM (left, big, prominent) ── */}
          <motion.article
            initial={{ opacity: 0, y: 36, rotate: -3 }}
            animate={inView ? { opacity: 1, y: 0, rotate: -1.6 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:absolute md:top-0 md:left-0 md:w-[27rem] bg-paper text-ink relative z-20 mb-10 md:mb-0"
            style={{
              boxShadow: '0 30px 50px -28px rgba(26, 21, 17, 0.55), 0 6px 14px -4px rgba(26, 21, 17, 0.18)',
            }}
          >
            {/* Tape strip */}
            <div className="absolute -top-3 left-12 w-20 h-6 bg-paper-darker/85 border border-ink/10"
                 style={{ transform: 'rotate(-7deg)', boxShadow: '0 4px 8px -4px rgba(0,0,0,0.25)' }} />

            {/* Form header bar */}
            <div className="bg-ink text-paper px-5 py-3 border-b-2 border-claret-light flex items-center justify-between">
              <div className="flex items-baseline gap-3">
                <span className="dateline text-claret-light tracking-tracked-wide">Commission Order</span>
                <span className="font-mono text-[0.7rem] text-paper/60">FORM C-024</span>
              </div>
            </div>

            {/* Form body */}
            <div className="p-5 pt-6 relative">
              {/* QUOTED stamp */}
              <span className="absolute top-4 right-4 dateline text-claret-light border-2 border-claret-light px-3 py-1.5 text-[0.7rem] tracking-tracked-wide bg-paper/90"
                    style={{ transform: 'rotate(-12deg)', boxShadow: '0 0 0 1px rgba(194,85,79,0.3)' }}>
                Quoted
              </span>

              <h3 className="font-display text-[1.4rem] leading-tight text-ink mb-1"
                  style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 430" }}>
                Custom Commission
              </h3>
              <p className="font-editorial italic text-ink-soft text-[1rem] mb-5">
                a rug made for your room.
              </p>

              {/* Form fields */}
              <dl className="space-y-3 font-mono text-[0.78rem] mb-5">
                <FormField k="Client"   v="Greenpoint, brownstone" />
                <FormField k="Size"     v="8 × 10 ft" />
                <FormField k="Pattern"  v="Tabriz medallion" />
                <FormField k="Palette"  v="cream · claret · indigo" />
                <FormField k="Pile"     v="hand-knotted, ~80k/sq.m" />
              </dl>

              <div className="grid grid-cols-2 gap-3 border-t border-ink/15 pt-4 mb-5">
                <div>
                  <div className="dateline text-ink-muted">Estimate</div>
                  <div className="font-display text-[1.1rem] text-ink mt-1 tabular"
                       style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 440" }}>
                    4 months
                  </div>
                </div>
                <div className="text-right">
                  <div className="dateline text-ink-muted">Quote</div>
                  <div className="font-display text-[1.4rem] text-claret-light mt-0.5 tabular"
                       style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 440" }}>
                    $4,200
                  </div>
                </div>
              </div>

              <a href="#visit"
                 className="dateline text-paper bg-ink hover:bg-claret-light transition-colors px-4 py-3 inline-flex items-center gap-2 group w-full justify-center">
                Start a commission
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </a>
              <p className="dateline text-ink-muted mt-3 text-center text-[0.62rem]">
                From $1,800 · 3 – 6 mo · Sketch &amp; sample first
              </p>
            </div>
          </motion.article>

          {/* ── DOCUMENT 2: REPAIR TAG (top-right, hangs from string) ── */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -8 }}
            animate={inView ? { opacity: 1, y: 0, rotate: -4 } : {}}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:absolute md:top-4 md:right-0 md:w-[19rem] relative z-10 mb-10 md:mb-0"
          >
            {/* String SVG hanging down from a "nail" */}
            <svg className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 w-2 h-12" viewBox="0 0 8 48" aria-hidden="true">
              <line x1="4" y1="0" x2="4" y2="48" stroke="#3D342B" strokeWidth="1" strokeDasharray="2 1" />
              <circle cx="4" cy="2" r="2" fill="#1A1511" />
            </svg>

            <article
              className="relative bg-paper-deep text-ink"
              style={{
                clipPath: 'polygon(50% 0%, 100% 6%, 100% 100%, 0% 100%, 0% 6%)',
                boxShadow: '0 26px 44px -22px rgba(26, 21, 17, 0.6), 0 4px 10px -3px rgba(26, 21, 17, 0.2)',
              }}
            >
              {/* Hole punch */}
              <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-paper-deep border border-ink/25"
                   style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.25)' }}>
                <div className="w-full h-full rounded-full bg-ink-soft/30" />
              </div>

              <div className="px-5 pt-10 pb-5">
                <div className="flex items-center justify-between border-b border-ink/20 pb-2 mb-4">
                  <span className="dateline text-claret-light tracking-tracked-wide">Repair Tag</span>
                  <span className="font-mono text-[0.7rem] text-ink-muted">No. R-118</span>
                </div>

                <h3 className="font-display text-[1.35rem] leading-tight text-ink"
                    style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 430" }}>
                  Re-fringe + dye match
                </h3>
                <p className="font-editorial italic text-ink-soft text-[0.95rem] mt-1 mb-4">
                  one corner, mid-century kilim.
                </p>

                <ul className="space-y-1.5 text-[0.78rem] font-mono mb-4">
                  <li className="flex justify-between text-ink-soft">
                    <span className="text-ink-muted">Owner</span>
                    <span className="text-ink">walk-in, Sat</span>
                  </li>
                  <li className="flex justify-between text-ink-soft">
                    <span className="text-ink-muted">Damage</span>
                    <span className="text-ink">~6" along edge</span>
                  </li>
                  <li className="flex justify-between text-ink-soft">
                    <span className="text-ink-muted">Method</span>
                    <span className="text-ink">hand re-knot</span>
                  </li>
                </ul>

                <div className="flex items-baseline justify-between border-t border-dashed border-ink/30 pt-3">
                  <span className="dateline text-ink-muted">Quote</span>
                  <span className="font-display text-[1.25rem] text-claret-light tabular"
                        style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 440" }}>
                    $340
                  </span>
                </div>

                <p className="dateline text-ink-muted mt-3 text-[0.62rem] leading-snug">
                  Quotes back same day. Drop-off Tue – Sun.
                </p>
              </div>
            </article>

            <a href="#visit" className="dateline text-ink/70 hover:text-claret-light transition-colors mt-4 inline-flex items-center gap-2 underline-offset-4 hover:underline">
              Bring one in →
            </a>
          </motion.div>

          {/* ── DOCUMENT 3: SOURCING SLIP (bottom-right, narrow receipt) ── */}
          <motion.article
            initial={{ opacity: 0, y: 28, rotate: 4 }}
            animate={inView ? { opacity: 1, y: 0, rotate: 2.4 } : {}}
            transition={{ duration: 1.0, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="md:absolute md:bottom-0 md:right-[16%] md:w-[18rem] bg-paper text-ink relative z-10"
            style={{
              boxShadow: '0 24px 40px -22px rgba(26, 21, 17, 0.55), 0 4px 10px -3px rgba(26, 21, 17, 0.18)',
            }}
          >
            {/* Tape strip — different angle */}
            <div className="absolute -top-3 right-8 w-16 h-5 bg-paper-darker/85 border border-ink/10"
                 style={{ transform: 'rotate(8deg)', boxShadow: '0 4px 8px -4px rgba(0,0,0,0.25)' }} />

            {/* Receipt header */}
            <div className="text-center border-b border-dashed border-ink/30 px-4 pt-5 pb-3">
              <div className="dateline text-claret-light tracking-tracked-wide">Sourcing Request</div>
              <div className="font-mono text-[0.65rem] text-ink-muted mt-1">SLIP S-052 · 2026-05-04</div>
            </div>

            <div className="px-4 py-5 font-mono text-[0.78rem] space-y-3">
              <ReceiptLine k="LOOKING FOR" v="Tabriz medallion" />
              <ReceiptLine k="SIZE" v="9 × 12 ft" />
              <ReceiptLine k="ERA" v="60 – 100 yrs" />
              <ReceiptLine k="PALETTE" v="warm, no pink" />
              <ReceiptLine k="BUDGET" v="up to $9,000" />

              <div className="border-t border-dashed border-ink/30 pt-3">
                <div className="dateline text-ink-muted mb-1.5">Feelers out in</div>
                <div className="text-ink leading-relaxed">
                  Türkiye · Iran · TX estate sales
                </div>
              </div>
            </div>

            {/* Stamped "OPEN" */}
            <div className="px-4 pb-4 flex items-center justify-between border-t border-ink/10 pt-3">
              <span className="font-mono text-[0.65rem] text-ink-muted">Trade-in credit available</span>
              <span className="dateline text-paper bg-claret-light px-2 py-0.5 text-[0.6rem] tracking-tracked-wide"
                    style={{ transform: 'rotate(-2deg)' }}>
                Open
              </span>
            </div>

            {/* Perforated tear edge bottom */}
            <svg className="block w-full text-paper" viewBox="0 0 280 8" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 0 L0 4 L10 0 L20 4 L30 0 L40 4 L50 0 L60 4 L70 0 L80 4 L90 0 L100 4 L110 0 L120 4 L130 0 L140 4 L150 0 L160 4 L170 0 L180 4 L190 0 L200 4 L210 0 L220 4 L230 0 L240 4 L250 0 L260 4 L270 0 L280 4 L280 0 Z"
                    fill="currentColor" />
            </svg>
          </motion.article>
        </div>

        {/* Footer call line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.9 }}
          className="relative mt-16 md:mt-20 flex flex-wrap items-baseline gap-3 md:gap-5 border-t border-ink/15 pt-8"
        >
          <span className="dateline text-claret-light tracking-tracked-wide">Talk to us</span>
          <span className="hidden md:block w-6 h-px bg-ink/30" />
          <a href="mailto:hello@creative-minds.com"
             className="font-display text-[1.3rem] md:text-[1.5rem] text-ink hover:text-claret-light transition-colors"
             style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
            hello@creative-minds.com
          </a>
          <span className="hidden md:block w-6 h-px bg-ink/30" />
          <a href="tel:+17185550100" className="font-display text-[1.3rem] md:text-[1.5rem] text-ink hover:text-claret-light transition-colors"
             style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
            (718) 555 · 0100
          </a>
          <span className="ml-auto dateline text-ink-muted">Quotes back same day · No deposit until signed</span>
        </motion.div>
      </div>

    </section>
  )
}

function FormField({ k, v }) {
  return (
    <div className="flex items-baseline gap-3 border-b border-ink/15 pb-1">
      <dt className="text-ink-muted uppercase tracking-wider w-20 shrink-0">{k}</dt>
      <dd className="text-ink italic">{v}</dd>
    </div>
  )
}

function ReceiptLine({ k, v }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-ink-muted uppercase tracking-wider">{k}</span>
      <span className="text-ink text-right">{v}</span>
    </div>
  )
}

function WorkshopSeal() {
  return (
    <svg viewBox="0 0 200 200" className="w-44 md:w-52 text-claret-light" aria-hidden="true">
      <defs>
        <path id="seal-circle-top" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0" />
        <path id="seal-circle-bottom" d="M 100,100 m 78,0 a 78,78 0 1,1 -156,0" />
      </defs>

      {/* Outer ring */}
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />

      {/* Top arc text */}
      <text fill="currentColor" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="3">
        <textPath href="#seal-circle-top" startOffset="50%" textAnchor="middle">
          CREATIVE MINDS · WORKSHOP
        </textPath>
      </text>
      {/* Bottom arc text */}
      <text fill="currentColor" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="3">
        <textPath href="#seal-circle-bottom" startOffset="50%" textAnchor="middle">
          BROOKLYN · EST. ALEPPO
        </textPath>
      </text>

      {/* Center motif — small kilim diamond */}
      <g transform="translate(100,100)">
        <path d="M0 -22 L22 0 L0 22 L-22 0 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M0 -12 L12 0 L0 12 L-12 0 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle r="2" fill="currentColor" />
      </g>

      {/* Bottom date marker */}
      <text x="100" y="174" textAnchor="middle" fill="currentColor"
            fontFamily="'Fraunces', serif" fontSize="14" fontStyle="italic">
        2026
      </text>
    </svg>
  )
}
