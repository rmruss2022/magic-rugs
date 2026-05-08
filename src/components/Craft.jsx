import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SPECIMENS = [
  {
    n: '04',
    src: './images/08-rug-detail.jpg',
    alt: 'Tight crop on a hand-knotted Persian medallion in cream and crimson',
    caption: 'medallion in cream & crimson',
    note: 'Tabriz · ~70 yrs',
    aspect: 'aspect-[4/3]',
    span: 'md:col-span-7',
    offset: '',
    rot: -1.6,
    tape: { side: 'left-12', angle: -8 },
  },
  {
    n: '05',
    src: './images/05-textures.jpg',
    alt: 'Wall of finished kilim edges and tied yarn ends',
    caption: 'yarn library, 2026.',
    note: 'specimen wall · back room',
    aspect: 'aspect-[5/4]',
    span: 'md:col-span-4 md:col-start-9',
    offset: 'md:mt-16',
    rot: 2.4,
    tape: { side: 'right-8', angle: 7 },
  },
  {
    n: '06',
    src: './images/03-cat-threads.jpg',
    alt: 'Hands tying knots on a working loom mid-row',
    caption: 'a knot, mid-tension.',
    note: 'photographed at 4 pm',
    aspect: 'aspect-[4/5]',
    span: 'md:col-span-4 md:col-start-2',
    offset: 'md:-mt-4',
    rot: -2.6,
    tape: { side: 'left-10', angle: -6 },
  },
  {
    n: '07',
    src: './images/12-customer.jpg',
    alt: 'Wall of hung kilims on the shop floor, multiple patterns side by side',
    caption: 'the wall, every Tuesday.',
    note: 'shop floor, looking east',
    aspect: 'aspect-[16/10]',
    span: 'md:col-span-7',
    offset: 'md:mt-10',
    rot: 1.4,
    tape: { side: 'right-16', angle: 5 },
  },
]

export default function Craft() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="craft" ref={ref} className="bg-paper relative overflow-hidden">
      {/* BG LAYER 1 — kilim runs full-bleed; pattern overlaps with Services through the seam */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none text-claret">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="craft-kilim" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 6 L48 18 L48 42 L30 54 L12 42 L12 18 Z"
                    fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M30 16 L40 24 L40 36 L30 44 L20 36 L20 24 Z"
                    fill="none" stroke="currentColor" strokeWidth="0.8" />
              <path d="M30 0 L30 6 M30 54 L30 60 M0 30 L12 30 M48 30 L60 30"
                    stroke="currentColor" strokeWidth="0.6" />
              <circle cx="30" cy="30" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#craft-kilim)" />
        </svg>
      </div>

      {/* BG LAYER 2 — grain runs full-bleed too */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
           }} />

      {/* TORN ZIGZAG — paper-deep tone so the torn edge reads against the paper bg,
          with a soft shadow underneath. Kilims on both sides run up to it continuously. */}
      <svg
        className="absolute top-0 left-0 right-0 block w-full text-paper-deep -scale-y-100 z-20 pointer-events-none"
        viewBox="0 0 1440 28"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ filter: 'drop-shadow(0 3px 4px rgba(26, 21, 17, 0.18))' }}
      >
        <path d="M0 28 L0 14 L46 6 L102 16 L160 8 L218 18 L274 10 L330 4 L388 14 L444 8 L500 18 L558 10 L614 4 L676 14 L732 8 L790 16 L848 6 L908 14 L966 8 L1022 18 L1080 10 L1138 4 L1194 14 L1252 8 L1308 16 L1366 6 L1410 14 L1440 10 L1440 28 Z"
              fill="currentColor" />
      </svg>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-24 md:pb-32">

        {/* MASSIVE Arabic watermark — bottom-left, off the type so it can't overlap content */}
        <span
          aria-hidden="true"
          className="hidden md:block absolute font-arabic leading-none select-none pointer-events-none"
          style={{
            fontSize: 'clamp(16rem, 28vw, 26rem)',
            bottom: '-3rem',
            left: '-3rem',
            color: 'rgba(194, 85, 79, 0.10)',
            transform: 'rotate(-4deg)',
          }}
        >
          نسج
        </span>

        {/* INTRO — type left, knot diagram right */}
        <div className="relative grid grid-cols-12 gap-6 md:gap-12 mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7 relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-12 h-px bg-claret-light" />
              <span className="dateline text-claret-light tracking-tracked-wide">§ 06 — The Work</span>
              <span className="font-arabic text-[1.2rem] text-ink-muted">النسج</span>
            </div>

            <h2 className="font-display text-[2.6rem] md:text-[3.4rem] leading-[0.95] text-ink tracking-tightest-ish"
                style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 410" }}>
              Every knot is
              <span className="block italic font-editorial font-normal text-ink-soft mt-1">
                a small decision.
              </span>
            </h2>

            <p className="font-editorial italic text-ink-soft text-[1.2rem] mt-6 leading-snug max-w-md">
              And none of them are reversible.
            </p>

            <p className="text-ink-soft leading-relaxed mt-5 max-w-lg text-[1.02rem]">
              A medium rug holds something like eighty thousand hand-tied knots. Each one is a
              small choice — color, tension, position. Stack those choices for three to six
              months and you get a piece of work that's still here in fifty years.
            </p>

            <div className="flex items-baseline gap-3 mt-7">
              <span className="font-arabic text-[2rem] text-claret-light leading-none">عقدة</span>
              <span className="dateline text-ink-muted">ʿuqda · the knot</span>
            </div>
          </motion.div>

          {/* Knot anatomy diagram — annotated illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5 md:pt-2"
          >
            <div className="bg-paper border border-ink/15 p-6 relative"
                 style={{
                   boxShadow: '0 24px 40px -24px rgba(26, 21, 17, 0.45)',
                   transform: 'rotate(-0.6deg)',
                 }}>
              <div className="absolute -top-3 left-10 w-16 h-5 bg-paper-darker/80 border border-ink/10"
                   style={{ transform: 'rotate(-5deg)' }} />

              <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-dashed border-ink/25">
                <span className="dateline text-claret-light tracking-tracked-wide">Plate I — Anatomy</span>
                <span className="font-mono text-[0.7rem] text-ink-muted">2× scale</span>
              </div>

              <KnotDiagram />

              <div className="mt-4 pt-3 border-t border-dashed border-ink/25">
                <p className="font-editorial italic text-ink-soft text-[0.95rem] leading-snug">
                  Persian (asymmetric) knot, shown.
                  <span className="block text-ink-muted not-italic font-mono text-[0.7rem] mt-1.5 tracking-wider uppercase">
                    Wool on cotton warp · ~80 knots / sq.in
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─────────── GALLERY WALL ─────────── */}
        <div className="relative">
          <div className="flex items-baseline gap-3 mb-10 md:mb-12">
            <span className="dateline text-claret-light tracking-tracked-wide">Specimen Wall</span>
            <span className="block flex-grow h-px bg-ink/20" />
            <span className="font-mono text-[0.7rem] text-ink-muted">04 – 07 · 2026</span>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
            {SPECIMENS.map((s, i) => (
              <Specimen key={s.n} s={s} i={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* ─────────── PULL-QUOTE BAND on dark ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-24 md:mt-32 bg-ink text-paper px-6 md:px-12 py-12 md:py-16"
          style={{
            boxShadow: '0 36px 60px -36px rgba(26, 21, 17, 0.7)',
            transform: 'rotate(0.25deg)',
          }}
        >
          {/* tape corners */}
          <div className="absolute -top-3 left-12 w-16 h-5 bg-paper-darker/85 border border-ink/10"
               style={{ transform: 'rotate(-5deg)' }} />
          <div className="absolute -top-3 right-12 w-16 h-5 bg-paper-darker/85 border border-ink/10"
               style={{ transform: 'rotate(7deg)' }} />

          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-9">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-arabic text-[1.4rem] text-claret-light">«</span>
                <span className="dateline text-claret-light tracking-tracked-wide">From the back room</span>
              </div>
              <blockquote className="font-display text-[1.8rem] md:text-[2.4rem] leading-[1.1] text-paper tracking-tightest-ish"
                          style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 380" }}>
                A rug is just patience,
                <span className="block italic font-editorial font-normal text-paper/85 mt-1">
                  ten thousand times in a row.
                </span>
              </blockquote>
            </div>
            <div className="col-span-12 md:col-span-3 md:text-right">
              <div className="dateline text-paper/55 tracking-tracked-wide">— A working note,</div>
              <div className="font-editorial italic text-paper/75 text-[1.05rem] mt-1">pinned by the loom.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────── Specimen polaroid card ─────────── */
function Specimen({ s, i, inView }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 36, rotate: s.rot * 1.6 }}
      animate={inView ? { opacity: 1, y: 0, rotate: s.rot } : {}}
      transition={{ duration: 1.0, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`col-span-12 ${s.span} ${s.offset} bg-paper p-3 pb-9 relative`}
      style={{
        boxShadow:
          '0 28px 46px -26px rgba(26, 21, 17, 0.55), 0 4px 10px -4px rgba(26, 21, 17, 0.18)',
      }}
    >
      <div className="relative">
        <img src={s.src} alt={s.alt}
             className={`w-full ${s.aspect} object-cover`}
             loading="lazy" />
        <div className="absolute inset-0 bg-claret-dark/12 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Tape strip */}
      <div
        className={`absolute -top-3 ${s.tape.side} w-16 h-5 bg-paper-darker/80 border border-ink/10`}
        style={{ transform: `rotate(${s.tape.angle}deg)`, boxShadow: '0 4px 8px -4px rgba(0,0,0,0.25)' }}
      />

      {/* Specimen ID strip */}
      <figcaption className="absolute bottom-1 left-3 right-3 flex items-baseline justify-between">
        <span className="font-editorial italic text-ink-soft text-[1rem] leading-tight">
          {s.caption}
        </span>
        <span className="font-mono text-[0.62rem] text-ink-muted tracking-wider uppercase ml-3 whitespace-nowrap">
          Spec. {s.n}
        </span>
      </figcaption>

      {/* Note margin (only on first specimen — varies the cluster) */}
      {i === 0 && (
        <span className="hidden md:block absolute -bottom-7 left-3 dateline text-ink-muted">
          {s.note}
        </span>
      )}
    </motion.figure>
  )
}

/* ─────────── Hand-drawn knot anatomy SVG ─────────── */
function KnotDiagram() {
  return (
    <svg viewBox="0 0 280 200" className="w-full text-ink" aria-hidden="true">
      {/* Warp threads (vertical) */}
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.5">
        <line x1="80" y1="40" x2="80" y2="180" />
        <line x1="100" y1="40" x2="100" y2="180" />
        <line x1="120" y1="40" x2="120" y2="180" />
        <line x1="140" y1="40" x2="140" y2="180" />
        <line x1="160" y1="40" x2="160" y2="180" />
      </g>

      {/* Weft threads (horizontal) */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.35">
        <line x1="70" y1="60" x2="170" y2="60" />
        <line x1="70" y1="160" x2="170" y2="160" />
      </g>

      {/* Knot loops — Persian asymmetric knot */}
      <g fill="none" stroke="#C2554F" strokeWidth="2.4" strokeLinecap="round">
        {/* Three knot rows */}
        <path d="M 88 90 C 88 80, 112 80, 112 90 C 112 100, 96 100, 96 110" />
        <path d="M 128 90 C 128 80, 152 80, 152 90 C 152 100, 136 100, 136 110" />
        <path d="M 88 130 C 88 120, 112 120, 112 130 C 112 140, 96 140, 96 150" />
        <path d="M 128 130 C 128 120, 152 120, 152 130 C 152 140, 136 140, 136 150" />
      </g>

      {/* Pile tufts (cut ends) */}
      <g stroke="#C2554F" strokeWidth="2" strokeLinecap="round">
        <line x1="92" y1="113" x2="92" y2="122" />
        <line x1="100" y1="113" x2="100" y2="122" />
        <line x1="132" y1="113" x2="132" y2="122" />
        <line x1="140" y1="113" x2="140" y2="122" />
        <line x1="92" y1="153" x2="92" y2="162" />
        <line x1="100" y1="153" x2="100" y2="162" />
        <line x1="132" y1="153" x2="132" y2="162" />
        <line x1="140" y1="153" x2="140" y2="162" />
      </g>

      {/* Annotations */}
      <g fontFamily="'IBM Plex Mono', monospace" fontSize="9" fill="currentColor" letterSpacing="1">
        {/* Warp label */}
        <line x1="190" y1="50" x2="165" y2="60" stroke="currentColor" strokeWidth="0.6" />
        <text x="195" y="52" fill="currentColor">WARP</text>
        <text x="195" y="63" fill="currentColor" opacity="0.5" fontSize="7">vertical thread</text>

        {/* Weft label */}
        <line x1="190" y1="100" x2="165" y2="60" stroke="currentColor" strokeWidth="0.6" />
        <text x="195" y="102" fill="currentColor">WEFT</text>
        <text x="195" y="113" fill="currentColor" opacity="0.5" fontSize="7">runs across</text>

        {/* Knot label */}
        <line x1="60" y1="90" x2="78" y2="92" stroke="currentColor" strokeWidth="0.6" />
        <text x="10" y="93" fill="#C2554F">KNOT</text>
        <text x="10" y="104" fill="currentColor" opacity="0.5" fontSize="7">tied yarn</text>

        {/* Pile label */}
        <line x1="60" y1="155" x2="80" y2="160" stroke="currentColor" strokeWidth="0.6" />
        <text x="10" y="158" fill="#C2554F">PILE</text>
        <text x="10" y="169" fill="currentColor" opacity="0.5" fontSize="7">cut surface</text>
      </g>
    </svg>
  )
}
