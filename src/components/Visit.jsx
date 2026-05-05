import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const HOURS = [
  { day: 'Wed – Fri', time: '11 a — 7 p' },
  { day: 'Saturday',  time: '10 a — 8 p' },
  { day: 'Sunday',    time: '11 a — 6 p' },
  { day: 'Mon – Tue', time: 'By appt.', muted: true },
]

export default function Visit() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (email.trim().length < 3) return
    setSubmitted(true)
  }

  return (
    <section id="visit" ref={ref} className="bg-paper-deep relative overflow-hidden">
      {/* BG LAYER 1 — kilim pattern (different motif: zigzag star) */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none text-claret">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="visit-kilim" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M32 4 L40 24 L60 24 L44 36 L52 56 L32 44 L12 56 L20 36 L4 24 L24 24 Z"
                    fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="32" cy="32" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#visit-kilim)" />
        </svg>
      </div>

      {/* BG LAYER 2 — grain */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
           }} />

      {/* BG LAYER 3 — top edge claret-light wash */}
      <div className="absolute left-0 right-0 top-0 h-[10%] bg-gradient-to-b from-claret-light/10 to-transparent pointer-events-none" />

      {/* TORN CAP — paints Classes' ink color over the top edge */}
      <svg
        className="absolute top-0 left-0 right-0 block w-full text-ink -scale-y-100 z-20 pointer-events-none"
        viewBox="0 0 1440 28"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 28 L0 14 L48 6 L102 16 L160 8 L218 18 L274 10 L330 4 L388 14 L444 8 L500 18 L558 10 L614 4 L676 14 L732 8 L790 16 L848 6 L908 14 L966 8 L1022 18 L1080 10 L1138 4 L1194 14 L1252 8 L1308 18 L1366 10 L1410 4 L1440 12 L1440 28 Z"
              fill="currentColor" />
      </svg>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 md:pb-32">

        {/* MASSIVE Arabic watermark — bottom-left */}
        <span
          aria-hidden="true"
          className="hidden md:block absolute font-arabic leading-none select-none pointer-events-none"
          style={{
            fontSize: 'clamp(18rem, 32vw, 30rem)',
            bottom: '-3rem',
            left: '-3rem',
            color: 'rgba(194, 85, 79, 0.10)',
            transform: 'rotate(-5deg)',
          }}
        >
          زيارة
        </span>

        {/* INTRO */}
        <div className="relative grid grid-cols-12 gap-6 md:gap-12 mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7 relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-12 h-px bg-claret-light" />
              <span className="dateline text-claret-light tracking-tracked-wide">§ 08 — Come See</span>
              <span className="font-arabic text-[1.2rem] text-ink-muted">زيارة</span>
            </div>

            <h2 className="font-display text-[2.6rem] md:text-[3.4rem] leading-[0.95] text-ink tracking-tightest-ish"
                style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 410" }}>
              The shop is
              <span className="block italic font-editorial font-normal text-ink-soft mt-1">
                on Metropolitan.
              </span>
            </h2>

            <p className="font-editorial italic text-ink-soft text-[1.2rem] mt-6 leading-snug max-w-md">
              Drop in any open hour. The kettle is on.
            </p>

            <p className="text-ink-soft leading-relaxed mt-5 max-w-lg text-[1.02rem]">
              Nothing is locked behind glass. Touch the rugs, watch the loom move, ask
              anything. No appointment needed for the floor — just for private lessons and
              after-hours commission consults.
            </p>
          </motion.div>

          {/* Right column: an addressed envelope card */}
          <motion.div
            initial={{ opacity: 0, x: 24, rotate: 4 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 2 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-4 md:col-start-9 md:pt-2"
          >
            <Envelope />
          </motion.div>
        </div>

        {/* ─────────── TWO-COLUMN: STOREFRONT CARD + VISUAL STACK ─────────── */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">

          {/* LEFT: STOREFRONT CARD — big printed shop card */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7 relative bg-paper text-ink"
            style={{
              boxShadow: '0 36px 60px -32px rgba(26, 21, 17, 0.55), 0 6px 14px -4px rgba(26, 21, 17, 0.18)',
              transform: 'rotate(-0.5deg)',
            }}
          >
            {/* Tape corners */}
            <div className="absolute -top-3 left-12 w-16 h-5 bg-paper-darker/85 border border-ink/10"
                 style={{ transform: 'rotate(-5deg)' }} />
            <div className="absolute -top-3 right-12 w-16 h-5 bg-paper-darker/85 border border-ink/10"
                 style={{ transform: 'rotate(7deg)' }} />

            {/* Top header bar */}
            <div className="bg-ink text-paper px-6 md:px-8 py-3 border-b-2 border-claret-light flex items-center justify-between">
              <span className="dateline text-claret-light tracking-tracked-wide">Storefront</span>
              <span className="font-mono text-[0.7rem] text-paper/55">CARD V-001</span>
            </div>

            {/* Address as the centerpiece */}
            <div className="px-6 md:px-10 pt-9 pb-6 text-center md:text-left">
              <div className="dateline text-ink-muted mb-3">Address</div>
              <div className="font-display text-[2.2rem] md:text-[2.6rem] leading-[0.98] text-ink tracking-tightest-ish"
                   style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 430" }}>
                247 Metropolitan Ave
              </div>
              <div className="font-editorial italic text-ink-soft text-[1.3rem] mt-1">
                Williamsburg, Brooklyn 11211
              </div>
            </div>

            {/* Hours table — vintage timetable */}
            <div className="px-6 md:px-10 pb-8 border-t border-dashed border-ink/25 pt-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="dateline text-claret-light tracking-tracked-wide">Hours</span>
                <span className="font-arabic text-[1rem] text-ink-muted">ساعات</span>
              </div>
              <ul>
                {HOURS.map((h, i) => (
                  <li key={i} className={`grid grid-cols-12 gap-3 py-2 border-b border-dashed border-ink/15 ${
                    h.muted ? 'opacity-55' : ''
                  }`}>
                    <span className="col-span-6 font-display text-[1.1rem] text-ink leading-none"
                          style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
                      {h.day}
                    </span>
                    <span className="col-span-6 text-right font-mono text-[0.85rem] text-ink-soft tabular self-center">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact row */}
            <div className="px-6 md:px-10 pb-6 border-t border-dashed border-ink/25 pt-5 grid grid-cols-12 gap-3">
              <div className="col-span-12 md:col-span-6">
                <div className="dateline text-ink-muted mb-1.5">Email</div>
                <a href="mailto:hello@creative-minds.com" className="font-display text-[1.1rem] text-ink hover:text-claret-light transition-colors leading-tight"
                   style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
                  hello@creative-minds.com
                </a>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="dateline text-ink-muted mb-1.5">Phone</div>
                <a href="tel:+17185550100" className="font-display text-[1.1rem] text-ink hover:text-claret-light transition-colors tabular leading-tight"
                   style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
                  (718) 555 · 0100
                </a>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="dateline text-ink-muted mb-1.5">Instagram</div>
                <a href="https://instagram.com/creative_minds" className="font-display text-[1.1rem] text-ink hover:text-claret-light transition-colors leading-tight"
                   style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
                  @creative_minds
                </a>
              </div>
            </div>

            {/* Footer note */}
            <div className="bg-paper-deep px-6 md:px-10 py-3 border-t border-ink/15 flex items-center justify-between flex-wrap gap-2">
              <span className="dateline text-ink-muted">Tea on the burner.</span>
              <span className="dateline text-claret-light">Open today · 11 a — 7 p</span>
            </div>
          </motion.article>

          {/* RIGHT: visual stack — map illustration + neighborhood polaroid */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-6">

            {/* Hand-drawn block map */}
            <motion.div
              initial={{ opacity: 0, y: 28, rotate: 3 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 1.5 } : {}}
              transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-paper text-ink p-5"
              style={{
                boxShadow: '0 28px 50px -28px rgba(26, 21, 17, 0.55)',
              }}
            >
              <div className="absolute -top-3 right-10 w-14 h-5 bg-paper-darker/85 border border-ink/10"
                   style={{ transform: 'rotate(-6deg)' }} />

              <div className="flex items-baseline justify-between mb-3 pb-2 border-b border-dashed border-ink/25">
                <span className="dateline text-claret-light tracking-tracked-wide">Block Sketch</span>
                <span className="font-mono text-[0.65rem] text-ink-muted">Williamsburg, BK</span>
              </div>

              <BlockMap />

              <div className="mt-3 pt-3 border-t border-dashed border-ink/25">
                <p className="font-editorial italic text-ink-soft text-[0.95rem] leading-snug">
                  Corner of Met &amp; Roebling.
                  <span className="block text-ink-muted not-italic font-mono text-[0.7rem] mt-1.5 tracking-wider uppercase">
                    L → Bedford · G → Met / Lorimer
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Newsletter notice — pinned smaller */}
            <motion.form
              initial={{ opacity: 0, y: 28, rotate: -2.5 }}
              animate={inView ? { opacity: 1, y: 0, rotate: -1.2 } : {}}
              transition={{ duration: 1.0, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              onSubmit={submit}
              className="relative bg-ink text-paper p-6"
              style={{
                boxShadow: '0 28px 50px -28px rgba(0, 0, 0, 0.7)',
              }}
            >
              <div className="absolute -top-3 left-10 w-14 h-5 bg-paper-darker/85 border border-ink/10"
                   style={{ transform: 'rotate(5deg)' }} />

              <div className="flex items-baseline justify-between mb-3">
                <span className="dateline text-claret-light tracking-tracked-wide">Studio Dispatch</span>
                <span className="font-mono text-[0.65rem] text-paper/55">No. 09</span>
              </div>
              <h3 className="font-display text-[1.4rem] leading-tight text-paper mb-2"
                  style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
                One email a month.
              </h3>
              <p className="font-editorial italic text-paper/75 text-[1rem] mb-5 leading-snug">
                New arrivals, open class seats, the occasional sale.
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="flex-grow bg-transparent border border-paper/30 focus:border-claret-light text-paper placeholder:text-paper/40 px-3 py-2.5 outline-none transition-colors text-sm font-mono"
                />
                <button
                  type="submit"
                  className="dateline text-ink bg-paper hover:bg-claret-light hover:text-paper transition-colors px-4 py-2.5 whitespace-nowrap"
                >
                  {submitted ? 'Welcome ✓' : 'Sign me up →'}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────── Envelope-style address tag (intro right column) ─────────── */
function Envelope() {
  return (
    <div className="relative bg-paper text-ink p-5"
         style={{
           boxShadow: '0 24px 44px -24px rgba(26, 21, 17, 0.55)',
         }}>
      {/* "AIR MAIL" style red+ink hatched border */}
      <div className="absolute inset-0 pointer-events-none border-2 border-ink/15"
           style={{
             backgroundImage:
               'repeating-linear-gradient(45deg, transparent 0 8px, rgba(194,85,79,0.12) 8px 12px, transparent 12px 18px, rgba(26,21,17,0.12) 18px 22px)',
             backgroundSize: '40px 40px',
             backgroundPosition: 'top left',
             backgroundRepeat: 'no-repeat repeat-y',
             backgroundClip: 'padding-box',
           }} />

      <div className="relative">
        <div className="dateline text-ink-muted mb-3 tracking-tracked-wide">To:</div>
        <div className="font-display text-[1.05rem] leading-snug text-ink mb-3"
             style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 430" }}>
          You.
        </div>
        <div className="font-editorial italic text-ink-soft text-[1rem] leading-snug mb-5">
          (and whoever you bring.)
        </div>
        <div className="dateline text-ink-muted mb-2 tracking-tracked-wide">From:</div>
        <div className="font-display text-[0.95rem] leading-snug text-ink"
             style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
          247 Met. Ave
          <span className="block font-editorial italic font-normal text-ink-soft text-[0.95rem]">
            Williamsburg, BK
          </span>
        </div>

        {/* Stamp corner */}
        <div className="absolute -top-1 -right-1 dateline text-paper bg-claret-light px-2 py-1 text-[0.6rem] tracking-tracked-wide"
             style={{ transform: 'rotate(4deg)' }}>
          Open
        </div>
      </div>
    </div>
  )
}

/* ─────────── Hand-drawn block map SVG ─────────── */
function BlockMap() {
  return (
    <svg viewBox="0 0 280 180" className="w-full text-ink" aria-hidden="true">
      {/* Streets — Metropolitan (horizontal) and Roebling (vertical) */}
      <g stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.55">
        <line x1="0" y1="92" x2="280" y2="92" />
        <line x1="160" y1="0" x2="160" y2="180" />
      </g>
      {/* Street labels */}
      <g fontFamily="'IBM Plex Mono', monospace" fontSize="8" fill="currentColor" letterSpacing="2" opacity="0.55">
        <text x="6" y="86">METROPOLITAN AVE</text>
        <text x="166" y="14" transform="rotate(0 166 14)">ROEBLING ST</text>
      </g>

      {/* Building blocks (rough rectangles) */}
      <g stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.06">
        <rect x="20" y="30" width="120" height="50" />
        <rect x="180" y="30" width="80" height="50" />
        <rect x="20" y="104" width="120" height="60" />
        <rect x="180" y="104" width="80" height="60" />
      </g>

      {/* The shop — marked with claret block + label */}
      <g>
        <rect x="78" y="42" width="44" height="32" fill="#C2554F" stroke="#C2554F" strokeWidth="1.4" />
        <line x1="100" y1="42" x2="100" y2="20" stroke="#C2554F" strokeWidth="1.2" strokeDasharray="2 2" />
        <circle cx="100" cy="18" r="2.5" fill="#C2554F" />
      </g>

      {/* "247" label */}
      <text x="100" y="62" textAnchor="middle" fill="#EFE7D4"
            fontFamily="'Fraunces', serif" fontSize="14" fontWeight="500">
        247
      </text>

      {/* "YOU ARE INVITED" hand-italic note */}
      <text x="100" y="14" textAnchor="middle" fill="#C2554F"
            fontFamily="'Instrument Serif', serif" fontSize="11" fontStyle="italic">
        you are here
      </text>

      {/* Subway markers */}
      <g>
        {/* L Bedford */}
        <circle cx="240" cy="64" r="8" fill="#1A1511" />
        <text x="240" y="68" textAnchor="middle" fill="#EFE7D4"
              fontFamily="'Fraunces', serif" fontSize="10" fontWeight="700">L</text>
        <text x="252" y="68" fill="currentColor"
              fontFamily="'IBM Plex Mono', monospace" fontSize="6" letterSpacing="1" opacity="0.6">BEDFORD</text>

        {/* G Lorimer */}
        <circle cx="40" cy="124" r="8" fill="#1A1511" />
        <text x="40" y="128" textAnchor="middle" fill="#EFE7D4"
              fontFamily="'Fraunces', serif" fontSize="10" fontWeight="700">G</text>
        <text x="6" y="142" fill="currentColor"
              fontFamily="'IBM Plex Mono', monospace" fontSize="6" letterSpacing="1" opacity="0.6">LORIMER</text>
      </g>

      {/* Compass rose corner */}
      <g transform="translate(258,158)" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5">
        <circle r="9" />
        <line x1="0" y1="-9" x2="0" y2="9" />
        <line x1="-9" y1="0" x2="9" y2="0" />
        <text x="0" y="-12" textAnchor="middle" fill="currentColor"
              fontFamily="'IBM Plex Mono', monospace" fontSize="6" stroke="none" opacity="0.7">N</text>
      </g>
    </svg>
  )
}
