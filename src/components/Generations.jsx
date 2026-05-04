import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Generations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="loom" ref={ref} className="bg-indigo-deep text-paper relative overflow-hidden">
      {/* BG LAYER 1 — visible woven-diagonal kilim motif (paper-tone on indigo) */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none text-paper">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="loom-weave" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M0 0 L48 48 M48 0 L0 48" stroke="currentColor" strokeWidth="0.6" />
              <path d="M24 0 L48 24 L24 48 L0 24 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="24" cy="24" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#loom-weave)" />
        </svg>
      </div>

      {/* BG LAYER 2 — grain */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none mix-blend-overlay"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
           }} />

      {/* BG LAYER 3 — top-edge claret bleed continuing the day-night transition from Shop */}
      <div className="absolute left-0 right-0 top-0 h-[15%] bg-gradient-to-b from-claret-dark/40 to-transparent pointer-events-none" />
      {/* BG LAYER 4 — vignette inward */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-24 md:pb-32">

        {/* MASSIVE Arabic watermark — top-right, the loom (النول) */}
        <span
          aria-hidden="true"
          className="hidden md:block absolute font-arabic text-claret-light/[0.10] leading-none select-none pointer-events-none"
          style={{
            fontSize: 'clamp(18rem, 32vw, 30rem)',
            top: '4rem',
            right: '-4rem',
            transform: 'rotate(-5deg)',
          }}
        >
          النول
        </span>

        <div className="relative grid grid-cols-12 gap-6 md:gap-12 items-start">

          {/* ─────────── LEFT (cols 1-6): MASSIVE 8 + lineage line ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-6 relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-12 h-px bg-claret-light" />
              <span className="dateline text-claret-light tracking-tracked-wide">§ 04 — The Loom</span>
              <span className="font-arabic text-[1.2rem] text-paper/55">النول</span>
            </div>

            {/* The 8 — same fundamental, but now framed by hairlines and a date below */}
            <div className="relative pl-1">
              <span
                className="font-display block leading-[0.78] tracking-tightest-ish text-paper"
                style={{
                  fontSize: 'clamp(11rem, 28vw, 24rem)',
                  fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 380",
                }}
              >
                8
              </span>
              {/* hairline + date underneath, like an inscription */}
              <div className="flex items-baseline gap-3 mt-2">
                <span className="block w-12 md:w-20 h-px bg-paper/30" />
                <span className="dateline text-paper/55 tracking-tracked-wide">est. 1800s</span>
              </div>
              <span className="block font-editorial italic text-paper text-[clamp(1.6rem,3vw,2.6rem)] mt-5 leading-[1.08]">
                generations on the same loom.
              </span>
            </div>

            {/* Margin handwritten note */}
            <div className="hidden md:flex items-baseline gap-3 mt-12 pl-1">
              <span className="font-arabic text-[2rem] text-claret-light leading-none">صنعة</span>
              <span className="dateline text-paper/55">ṣanʿa · the craft itself</span>
            </div>

            {/* Body — short, italic-flecked */}
            <p className="font-editorial italic text-paper/85 text-[1.25rem] mt-10 leading-snug max-w-md">
              Same knot. Same wool. Same patient hand.
            </p>
            <p className="text-paper/80 leading-relaxed mt-5 max-w-md text-[1.02rem]">
              The master weaver in the back is the eighth in his family to sit at this loom.
              Most of what we sell on the floor was made by other weavers we trust. The
              pieces that come off this loom are limited — and signed.
            </p>
          </motion.div>

          {/* ─────────── RIGHT (cols 7-12): Polaroid + WIP ticket cluster ─────────── */}
          <div className="col-span-12 md:col-span-6 relative md:pt-12">

            {/* Polaroid — hands at the loom, tilted right */}
            <motion.figure
              initial={{ opacity: 0, y: 28, rotate: 5 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 3 } : {}}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-paper p-3 pb-10 inline-block"
              style={{
                boxShadow:
                  '0 36px 60px -28px rgba(0, 0, 0, 0.7), 0 6px 14px -4px rgba(0, 0, 0, 0.35)',
                maxWidth: '100%',
              }}
            >
              <img
                src="./images/03-cat-threads.jpg"
                alt="Hands tying knots on the back-room loom, kilim pattern visible behind"
                className="w-full md:w-[30rem] aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-3 bg-claret-dark/15 mix-blend-multiply pointer-events-none"
                   style={{ height: 'calc(100% - 3.25rem)' }} />
              <figcaption className="font-editorial italic text-ink-soft text-[1.05rem] absolute bottom-2 left-4 right-4">
                mid-row, around 4 pm.
              </figcaption>
              {/* Tape strip top-left */}
              <div
                className="absolute -top-3 left-10 w-20 h-6 bg-paper-darker/80 border border-ink/10"
                style={{
                  transform: 'rotate(-9deg)',
                  boxShadow: '0 4px 8px -4px rgba(0,0,0,0.25)',
                }}
              />
            </motion.figure>

            {/* WIP TICKET — pinned to the polaroid edge, hangs out into the space */}
            <motion.aside
              initial={{ opacity: 0, y: 32, rotate: -5 }}
              animate={inView ? { opacity: 1, y: 0, rotate: -2.4 } : {}}
              transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative md:absolute z-20 mt-6 md:mt-0 bg-paper text-ink"
              style={{
                bottom: '-3.5rem',
                right: '-1.5rem',
                width: '20rem',
                boxShadow: '0 28px 50px -22px rgba(0, 0, 0, 0.7)',
              }}
            >
              {/* Header bar */}
              <div className="bg-ink text-paper px-4 py-2 flex items-center justify-between border-b-2 border-claret-light">
                <span className="dateline text-claret-light tracking-tracked-wide">On the Loom</span>
                <span className="font-mono text-[0.7rem] text-paper/70">No. 03</span>
              </div>

              <div className="px-4 pt-4 pb-5">
                {/* Job */}
                <h3 className="font-display text-[1.45rem] leading-[1.05] text-ink"
                    style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 430" }}>
                  Custom 8 × 10 ft
                </h3>
                <p className="font-editorial italic text-ink-soft text-[1rem] mt-0.5">
                  Tabriz medallion · cream &amp; claret.
                </p>

                {/* Spec rows */}
                <dl className="mt-4 space-y-1.5 border-t border-ink/15 pt-3 font-mono text-[0.75rem]">
                  <Row k="Started"   v="April 12, 2026" />
                  <Row k="Estimated" v="August 2026" />
                  <Row k="Knots"     v="~80,000 / sq.m" />
                </dl>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="dateline text-ink-muted">Progress</span>
                    <span className="font-mono text-[0.7rem] text-claret-light">22%</span>
                  </div>
                  <div className="w-full h-2 bg-ink/10 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '22%' } : {}}
                      transition={{ duration: 1.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-0 h-full bg-claret-light"
                    />
                  </div>
                </div>

                {/* Reserved badge */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 dateline text-paper bg-claret-dark px-2 py-1"
                        style={{ transform: 'rotate(-1deg)' }}>
                    <span className="block w-1.5 h-1.5 rounded-full bg-claret-light animate-pulse" />
                    Reserved
                  </span>
                  <span className="dateline text-ink-muted">by a customer in Greenpoint</span>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>

        {/* ─────────── LEDGER STRIP — full-width "page from the workbook" ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-32 md:mt-40 border-t border-paper/20 pt-10"
        >
          <div className="flex items-baseline gap-3 mb-6">
            <span className="dateline text-claret-light tracking-tracked-wide">From the workbook</span>
            <span className="block flex-grow h-px bg-paper/15" />
            <span className="font-arabic text-paper/40 text-[1rem]">دفتر</span>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <Stat n="80,000" k="Knots / sq. meter" v="What we aim for" />
            <Stat n="3 – 6" k="Months / medium rug" v="Depending on density" />
            <Stat n="6 – 8" k="Pieces in progress" v="Mostly commissions" />
            <CommissionCallout />
          </div>
        </motion.div>
      </div>

      {/* Torn-paper bottom edge — into bg-paper for the Services section */}
      <svg className="block w-full text-paper" viewBox="0 0 1440 28" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 28 L0 12 L52 18 L108 8 L162 16 L218 6 L272 14 L328 8 L388 18 L444 10 L500 4 L556 14 L612 8 L672 18 L728 10 L784 6 L844 14 L898 8 L958 18 L1014 10 L1070 4 L1126 14 L1184 8 L1240 18 L1296 10 L1356 4 L1410 14 L1440 10 L1440 28 Z"
              fill="currentColor" />
      </svg>
    </section>
  )
}

function Row({ k, v }) {
  return (
    <div className="flex items-baseline justify-between gap-3 text-ink-soft">
      <span className="text-ink-muted uppercase tracking-wider">{k}</span>
      <span className="text-ink tabular">{v}</span>
    </div>
  )
}

function Stat({ n, k, v }) {
  return (
    <div className="col-span-6 md:col-span-3">
      <div className="font-display text-[2.2rem] md:text-[2.6rem] leading-none text-paper tabular"
           style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 410" }}>
        {n}
      </div>
      <div className="dateline text-claret-light mt-2 tracking-tracked-wide">{k}</div>
      <div className="font-editorial italic text-paper/60 text-[0.95rem] mt-1.5">{v}</div>
    </div>
  )
}

function CommissionCallout() {
  return (
    <a href="#services"
       className="col-span-12 md:col-span-3 group flex flex-col justify-between border-l border-paper/15 pl-4 md:pl-6 hover:border-claret-light transition-colors">
      <span className="dateline text-paper/55 tracking-tracked-wide">Want one?</span>
      <span className="font-display text-[1.4rem] md:text-[1.55rem] leading-tight text-paper mt-2 group-hover:text-claret-light transition-colors"
            style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
        Commission
        <span className="italic font-editorial font-normal"> a piece →</span>
      </span>
    </a>
  )
}
