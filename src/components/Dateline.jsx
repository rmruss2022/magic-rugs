import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Dateline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="dateline" ref={ref} className="bg-paper relative overflow-hidden">
      {/* Painted shop-sign awning — dark band continuing the hero threshold */}
      <div className="bg-ink text-paper border-b border-ink-soft/30 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center gap-3 md:gap-6 flex-wrap">
          <span className="dateline text-claret-light tracking-tracked-wide">§ 02 — What's Here</span>
          <span className="hidden md:block w-6 h-px bg-paper/30" />
          <span className="dateline text-paper/85">A weaving studio &amp; rug shop on Metropolitan</span>
          <span className="hidden md:block w-6 h-px bg-paper/30" />
          <span className="font-arabic not-italic text-claret-light/95 text-[1rem] leading-none">حلب → BK</span>
          <span className="ml-auto dateline text-paper/55">Tue – Sun · 11 – 7</span>
        </div>
      </div>

      {/* ─────────── DENSE LAYERED COMPOSITION ─────────── */}
      <div className="relative">
        {/* BACKGROUND LAYER 1 — kilim runs full-bleed; pattern continues through the seam */}
        <div className="absolute inset-0 opacity-[0.13] pointer-events-none text-claret">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dl-kilim" width="56" height="56" patternUnits="userSpaceOnUse">
                <path d="M28 0 L56 28 L28 56 L0 28 Z M28 14 L42 28 L28 42 L14 28 Z"
                      fill="none" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="28" cy="28" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dl-kilim)" />
          </svg>
        </div>

        {/* BACKGROUND LAYER 2 — grain runs full-bleed too */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply"
             style={{
               backgroundImage:
                 "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
             }} />

        {/* CONTENT — asymmetric grid */}
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32">

          {/* MASSIVE Arabic watermark — sits behind everything */}
          <span
            aria-hidden="true"
            className="hidden md:block absolute font-arabic leading-none select-none pointer-events-none"
            style={{
              fontSize: 'clamp(20rem, 38vw, 36rem)',
              top: '-2rem',
              right: '-3rem',
              color: 'rgba(194, 85, 79, 0.10)',
              transform: 'rotate(-6deg)',
            }}
          >
            حلب
          </span>

          <div className="relative grid grid-cols-12 gap-6 md:gap-8">

            {/* ─────────── LEFT COLUMN (1-7) — Photo cluster ─────────── */}
            <div className="col-span-12 md:col-span-7 relative">
              {/* Big polaroid: shop wall — tilted left */}
              <motion.figure
                initial={{ opacity: 0, y: 28, rotate: -3.5 }}
                animate={inView ? { opacity: 1, y: 0, rotate: -2.2 } : {}}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-paper p-3 pb-10 inline-block"
                style={{
                  boxShadow:
                    '0 30px 50px -28px rgba(26, 21, 17, 0.55), 0 4px 10px -4px rgba(26, 21, 17, 0.18)',
                  maxWidth: '100%',
                }}
              >
                <img
                  src="./images/12-customer.jpg"
                  alt="On the floor of the shop — kilims hung as walls, customer at the counter"
                  className="w-full md:w-[34rem] aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-3 bg-claret-dark/12 mix-blend-multiply pointer-events-none"
                     style={{ height: 'calc(100% - 3.25rem)' }} />
                {/* Handwritten caption inside polaroid border */}
                <figcaption className="font-editorial italic text-ink-soft text-[1.1rem] absolute bottom-2 left-4 right-4">
                  the wall, on a slow Tuesday.
                </figcaption>
                {/* Tape strip top-left */}
                <div
                  className="absolute -top-3 left-8 w-20 h-6 bg-paper-darker/80 border border-ink/10"
                  style={{
                    transform: 'rotate(-8deg)',
                    boxShadow: '0 4px 8px -4px rgba(0,0,0,0.25)',
                  }}
                />
              </motion.figure>

              {/* Smaller overlapping polaroid: rug detail — tilted right, hangs into right column */}
              <motion.figure
                initial={{ opacity: 0, y: 32, rotate: 5 }}
                animate={inView ? { opacity: 1, y: 0, rotate: 3.5 } : {}}
                transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-10 bg-paper p-2 pb-8 hidden md:block"
                style={{
                  bottom: '-3.5rem',
                  right: '-2rem',
                  width: '18rem',
                  boxShadow:
                    '0 24px 40px -20px rgba(26, 21, 17, 0.6), 0 4px 8px -3px rgba(26, 21, 17, 0.2)',
                }}
              >
                <img
                  src="./images/08-rug-detail.jpg"
                  alt="Detail of a hand-knotted Persian rug pattern"
                  className="w-full aspect-[5/4] object-cover"
                  loading="lazy"
                />
                <figcaption className="font-mono text-[0.62rem] tracking-wider text-ink-muted uppercase absolute bottom-1.5 left-2 right-2">
                  Fig. 02 — pattern, in close.
                </figcaption>
              </motion.figure>

              {/* Margin handwritten note — Arabic + tiny English */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.0, delay: 0.5 }}
                className="hidden md:flex items-baseline gap-3 mt-20 pl-2"
              >
                <span className="font-arabic text-[2.2rem] text-claret-light leading-none">سوق</span>
                <span className="dateline text-ink-muted">souk · the floor</span>
              </motion.div>
            </div>

            {/* ─────────── RIGHT COLUMN (8-12) — Type stack + chalkboard menu ─────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 md:col-span-5 relative"
            >
              {/* Stencil overline */}
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-12 h-px bg-claret-light" />
                <span className="dateline text-claret-light tracking-tracked-wide">Walk in off Metropolitan</span>
              </div>

              {/* Display headline — display + italic foil, tight */}
              <h2 className="font-display text-[2.4rem] md:text-[3rem] leading-[0.98] text-ink tracking-tightest-ish"
                  style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 410" }}>
                Four working looms,
                <br />
                a wall of rugs,
                <span className="block italic font-editorial font-normal text-ink-soft mt-1">
                  and tea on the burner.
                </span>
              </h2>

              {/* Tight body */}
              <p className="font-editorial italic text-ink-soft text-[1.2rem] mt-6 leading-snug max-w-md">
                Walk in. Touch the wool. Stay as long as you want.
              </p>

              {/* CHALKBOARD MENU — three offers as a printed broadsheet */}
              <div className="mt-10 bg-ink text-paper p-6 md:p-7 relative"
                   style={{
                     boxShadow: '0 24px 48px -28px rgba(26, 21, 17, 0.7)',
                     transform: 'rotate(0.4deg)',
                   }}>
                {/* tape corners */}
                <div className="absolute -top-2 left-6 w-12 h-4 bg-paper-darker/80 border border-ink/10"
                     style={{ transform: 'rotate(-4deg)' }} />
                <div className="absolute -top-2 right-6 w-12 h-4 bg-paper-darker/80 border border-ink/10"
                     style={{ transform: 'rotate(6deg)' }} />

                <div className="dateline text-claret-light mb-5 tracking-tracked-wide flex items-center justify-between">
                  <span>Today's bill of fare</span>
                  <span className="font-arabic not-italic text-paper/50 text-[0.95rem]">القائمة</span>
                </div>

                <ul className="space-y-1">
                  <MenuRow n="01" en="Browse the floor" ar="تصفّح" price="$45 – $14k" href="#shop" />
                  <MenuRow n="02" en="Sit at a loom" ar="تعلّم" price="From $120" href="#classes" />
                  <MenuRow n="03" en="Commission a piece" ar="تكليف" price="From $1,800" href="#services" />
                </ul>

                <div className="mt-5 pt-4 border-t border-paper/15 flex items-center justify-between">
                  <span className="dateline text-paper/55">Open today</span>
                  <span className="dateline text-paper">11 a — 7 p</span>
                </div>
              </div>

              {/* Sub-line under menu */}
              <div className="flex items-center gap-3 mt-6 pl-1">
                <span className="block w-8 h-px bg-ink/40" />
                <p className="dateline text-ink-muted">No appointment needed.</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

function MenuRow({ n, en, ar, price, href }) {
  return (
    <li>
      <a href={href}
         className="grid grid-cols-12 gap-2 py-2.5 border-b border-dashed border-paper/20 group items-baseline">
        <span className="col-span-1 font-display text-[1.1rem] text-claret-light tabular leading-none"
              style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 440" }}>
          {n}
        </span>
        <span className="col-span-7 font-display text-[1.15rem] md:text-[1.25rem] text-paper leading-tight group-hover:text-claret-light transition-colors"
              style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
          {en}
          <span className="font-arabic text-[0.95rem] text-paper/50 ml-2 not-italic">{ar}</span>
        </span>
        <span className="col-span-3 text-right dateline text-paper/85 tabular">{price}</span>
        <span className="col-span-1 text-right text-paper/60 group-hover:text-claret-light group-hover:translate-x-0.5 transition-all">
          →
        </span>
      </a>
    </li>
  )
}
