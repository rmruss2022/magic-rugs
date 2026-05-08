import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const GOODS = [
  {
    n: '01',
    name: 'Hand-Knotted Persians',
    arabic: 'معقود',
    region: 'Tabriz · Kashan · Isfahan',
    price: '$1,200 – $9,000',
    note: 'Knotted in our family workshop, or sourced from weavers we trust.',
  },
  {
    n: '02',
    name: 'Anatolian Kilims',
    arabic: 'كليم',
    region: 'Türkiye · Syria',
    price: '$280 – $2,400',
    note: 'Flat-weave, geometric, sturdy. Hallway, couch, or wall.',
  },
  {
    n: '03',
    name: 'Vintage & Antique',
    arabic: 'عتيق',
    region: '50 – 120 yrs old',
    price: '$600 – $14,000',
    note: 'Pieces with a history we can tell you. Each comes with a card.',
  },
  {
    n: '04',
    name: 'Small & Decorative',
    arabic: 'صغير',
    region: 'New from the loom',
    price: '$45 – $320',
    note: 'Mug rugs, runners, framed weavings. Easy to take home today.',
  },
]

export default function Story() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="shop" ref={ref} className="bg-paper relative overflow-hidden">
      {/* BACKGROUND LAYER 1 — kilim runs full-bleed; pattern overlaps with Dateline at the seam */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none text-claret">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="shop-kilim" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M36 6 L66 36 L36 66 L6 36 Z"
                    fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M36 18 L54 36 L36 54 L18 36 Z"
                    fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="36" cy="36" r="2" fill="currentColor" />
              <path d="M0 36 L12 36 M60 36 L72 36 M36 0 L36 12 M36 60 L36 72"
                    stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#shop-kilim)" />
        </svg>
      </div>

      {/* BACKGROUND LAYER 2 — grain runs full-bleed too */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-multiply"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
           }} />

      {/* TORN ZIGZAG — paper-deep tone so the torn edge reads against the paper bg,
          with a soft shadow underneath for that lifted-torn-paper feel. Kilims on
          both sides run continuously up to it. */}
      <svg
        className="absolute top-0 left-0 right-0 block w-full text-paper-deep -scale-y-100 z-20 pointer-events-none"
        viewBox="0 0 1440 28"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ filter: 'drop-shadow(0 3px 4px rgba(26, 21, 17, 0.18))' }}
      >
        <path d="M0 28 L0 12 L40 16 L80 8 L130 14 L180 6 L230 18 L290 10 L340 16 L400 4 L460 14 L520 8 L580 18 L640 10 L700 4 L760 14 L820 8 L880 16 L940 6 L1000 14 L1060 8 L1120 18 L1180 10 L1240 4 L1300 14 L1360 8 L1400 16 L1440 10 L1440 28 Z"
              fill="currentColor" />
      </svg>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-24 md:pb-32">

        {/* MASSIVE Arabic watermark — bottom-left this time so the rhythm varies from Dateline */}
        <span
          aria-hidden="true"
          className="hidden md:block absolute font-arabic leading-none select-none pointer-events-none"
          style={{
            fontSize: 'clamp(18rem, 34vw, 32rem)',
            bottom: '-3rem',
            left: '-2rem',
            color: 'rgba(194, 85, 79, 0.09)',
            transform: 'rotate(4deg)',
          }}
        >
          السوق
        </span>

        {/* INTRO ROW — type RIGHT, photo cluster LEFT (mirror of Dateline so they read as a spread) */}
        <div className="relative grid grid-cols-12 gap-6 md:gap-10 mb-24 md:mb-32">

          {/* PHOTO CLUSTER — left, cols 1-6 */}
          <div className="col-span-12 md:col-span-6 relative">
            {/* Big polaroid: warehouse / brass / antiques — tilted right */}
            <motion.figure
              initial={{ opacity: 0, y: 28, rotate: 4 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 2.4 } : {}}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-paper p-3 pb-10 inline-block"
              style={{
                boxShadow:
                  '0 30px 50px -28px rgba(26, 21, 17, 0.55), 0 4px 10px -4px rgba(26, 21, 17, 0.18)',
                maxWidth: '100%',
              }}
            >
              <img
                src="./images/09-antiques.jpg"
                alt="Inside the back room — stacks of hand-knotted rugs and a brass Persian vessel"
                className="w-full md:w-[32rem] aspect-[3/2] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-3 bg-claret-dark/12 mix-blend-multiply pointer-events-none"
                   style={{ height: 'calc(100% - 3.25rem)' }} />
              <figcaption className="font-editorial italic text-ink-soft text-[1.05rem] absolute bottom-2 left-4 right-4">
                the back room, where everything starts.
              </figcaption>
              {/* Tape strip — opposite corner from Dateline */}
              <div
                className="absolute -top-3 right-12 w-20 h-6 bg-paper-darker/80 border border-ink/10"
                style={{
                  transform: 'rotate(7deg)',
                  boxShadow: '0 4px 8px -4px rgba(0,0,0,0.25)',
                }}
              />
            </motion.figure>

            {/* Smaller polaroid — fringe wall, hangs into right column */}
            <motion.figure
              initial={{ opacity: 0, y: 32, rotate: -6 }}
              animate={inView ? { opacity: 1, y: 0, rotate: -4 } : {}}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute z-10 bg-paper p-2 pb-8 hidden md:block"
              style={{
                bottom: '-3.5rem',
                right: '-3rem',
                width: '17rem',
                boxShadow:
                  '0 24px 40px -20px rgba(26, 21, 17, 0.6), 0 4px 8px -3px rgba(26, 21, 17, 0.2)',
              }}
            >
              <img
                src="./images/05-textures.jpg"
                alt="A wall of finished kilim edges in mixed colors"
                className="w-full aspect-[5/4] object-cover"
                loading="lazy"
              />
              <figcaption className="font-mono text-[0.62rem] tracking-wider text-ink-muted uppercase absolute bottom-1.5 left-2 right-2">
                Fig. 03 — finished edges, all one family.
              </figcaption>
            </motion.figure>

            {/* Margin handwritten note — Arabic + tiny English */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.5 }}
              className="hidden md:flex items-baseline gap-3 mt-24 pl-2"
            >
              <span className="font-arabic text-[2.2rem] text-claret-light leading-none">القطع</span>
              <span className="dateline text-ink-muted">al-qiṭaʿ · the pieces</span>
            </motion.div>
          </div>

          {/* TYPE STACK — right, cols 7-12 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-6 md:pt-4 relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-12 h-px bg-claret-light" />
              <span className="dateline text-claret-light tracking-tracked-wide">§ 03 — The Goods</span>
              <span className="font-arabic text-[1.15rem] text-ink-muted">السوق</span>
            </div>

            <h2 className="font-display text-[2.6rem] md:text-[3.4rem] leading-[0.95] text-ink tracking-tightest-ish"
                style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 410" }}>
              Roughly 200 rugs,
              <span className="block italic font-editorial font-normal text-ink-soft mt-1">
                all under one roof.
              </span>
            </h2>

            <p className="font-editorial italic text-ink-soft text-[1.2rem] mt-6 leading-snug max-w-md">
              Pulled from the wall and unrolled on the floor on request.
            </p>

            <p className="text-ink-soft leading-relaxed mt-6 max-w-md text-[1.02rem]">
              Hand-knotted Persians we made ourselves, kilims sourced from weavers we know in
              Türkiye and Syria, and a rotating drift of vintage finds from Round Top, Canton
              Market, and a few estate sales we won't name. Every piece has a card.
            </p>

            {/* Hand-stamped credentials line */}
            <div className="flex items-center gap-3 mt-7 pl-1">
              <span className="block w-8 h-px bg-ink/40" />
              <p className="dateline text-ink-muted">Prices on every piece. No haggling theater.</p>
            </div>
          </motion.div>
        </div>

        {/* ─────────── BROADSHEET PRICE LIST ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-ink text-paper p-6 md:p-10 pb-8 md:pb-12"
          style={{
            transform: 'rotate(-0.3deg)',
            boxShadow: '0 36px 60px -36px rgba(26, 21, 17, 0.7)',
          }}
        >
          {/* tape corners */}
          <div className="absolute -top-3 left-10 md:left-16 w-16 h-5 bg-paper-darker/80 border border-ink/10"
               style={{ transform: 'rotate(-5deg)' }} />
          <div className="absolute -top-3 right-10 md:right-16 w-16 h-5 bg-paper-darker/80 border border-ink/10"
               style={{ transform: 'rotate(7deg)' }} />

          {/* Broadsheet header */}
          <div className="flex items-center justify-between mb-6 md:mb-8 pb-5 border-b border-paper/20 flex-wrap gap-3">
            <div className="flex items-baseline gap-4">
              <span className="dateline text-claret-light tracking-tracked-wide">Today On The Floor</span>
              <span className="font-arabic text-[1rem] text-paper/55 not-italic">القائمة</span>
            </div>
            <span className="dateline text-paper/55">Last updated · 2026-05-04</span>
          </div>

          {/* Hand-stamped subhead */}
          <p className="font-editorial italic text-paper/80 text-[1.4rem] md:text-[1.6rem] leading-snug mb-7 max-w-2xl">
            Four shelves. Pull anything down — we'll roll it out.
          </p>

          {/* The list */}
          <ul>
            {GOODS.map((g) => (
              <GoodsRow key={g.n} g={g} />
            ))}
          </ul>

          {/* Broadsheet footer + CTAs */}
          <div className="mt-8 pt-6 border-t border-paper/20 grid grid-cols-12 gap-4 md:gap-6 items-center">
            <div className="col-span-12 md:col-span-7">
              <p className="dateline text-paper/55 leading-relaxed">
                All prices firm. Receipts kept thirty days.<br />
                Cards, wires, cash — whatever's easiest.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 flex flex-wrap items-center gap-3 md:justify-end">
              <a href="#visit"
                 className="dateline text-ink bg-paper hover:bg-claret-light hover:text-paper transition-colors px-5 py-3 inline-flex items-center gap-2 group">
                Visit the floor
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </a>
              <a href="https://creative-minds.com"
                 className="dateline text-paper/85 hover:text-claret-light transition-colors underline-offset-4 hover:underline">
                or shop online
              </a>
            </div>
          </div>
        </motion.div>

        {/* Side footnote — like a printer's mark in the margin */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.7 }}
          className="mt-10 flex items-center gap-3"
        >
          <span className="block w-10 h-px bg-ink/30" />
          <span className="dateline text-ink-muted">Floor inventory is rotated weekly. New finds first on @creative_minds.</span>
        </motion.div>
      </div>

    </section>
  )
}

function GoodsRow({ g }) {
  return (
    <li>
      <div className="grid grid-cols-12 gap-3 md:gap-6 py-5 md:py-6 border-b border-dashed border-paper/20 items-baseline">
        <span className="col-span-2 md:col-span-1 font-display text-[1.2rem] text-claret-light tabular leading-none"
              style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 440" }}>
          {g.n}
        </span>
        <div className="col-span-10 md:col-span-6">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-[1.45rem] md:text-[1.7rem] text-paper leading-none"
                  style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
              {g.name}
            </span>
            <span className="font-arabic text-[1.05rem] md:text-[1.15rem] text-paper/55 leading-none">{g.arabic}</span>
          </div>
          <p className="text-paper/70 text-[0.95rem] mt-2 leading-relaxed max-w-md">{g.note}</p>
        </div>
        <span className="col-span-6 md:col-span-2 dateline text-paper/55">{g.region}</span>
        <span className="col-span-6 md:col-span-3 md:text-right font-display text-[1.1rem] md:text-[1.2rem] text-paper tabular"
              style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 440" }}>
          {g.price}
        </span>
      </div>
    </li>
  )
}
