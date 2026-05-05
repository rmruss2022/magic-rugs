import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CLASSES = [
  {
    id: 'intro',
    day: 'SAT',
    date: 'May 16',
    time: '2:00 pm',
    duration: '3 hrs',
    name: 'Introduction to the Loom',
    italic: 'start here.',
    tag: 'Beginner',
    instructor: 'A studio teacher',
    price: 120,
    seats: 4,
    remaining: 2,
  },
  {
    id: 'persian-turkish',
    day: 'SUN',
    date: 'May 17',
    time: '2:00 pm',
    duration: '4 hrs',
    name: 'Persian & Turkish Knots',
    italic: 'two families of knots.',
    tag: 'Intermediate',
    instructor: 'A studio teacher',
    price: 180,
    seats: 4,
    remaining: 3,
  },
  {
    id: 'private',
    day: 'BY',
    date: 'request',
    time: '—',
    duration: '2 hrs',
    name: 'Private with the Master Weaver',
    italic: 'one-on-one in the back.',
    tag: 'By request',
    instructor: 'Master weaver',
    price: 240,
    seats: 1,
    remaining: 1,
  },
]

export default function Classes() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="classes" ref={ref} className="bg-ink text-paper relative overflow-hidden">
      {/* BG LAYER 1 — kilim pattern, paper-tone on dark */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none text-paper">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="classes-kilim" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M28 4 L52 28 L28 52 L4 28 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M28 14 L42 28 L28 42 L14 28 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="28" cy="28" r="1.5" fill="currentColor" />
              <path d="M0 0 L8 8 M48 48 L56 56 M48 0 L56 8 M0 56 L8 48" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#classes-kilim)" />
        </svg>
      </div>

      {/* BG LAYER 2 — grain */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none mix-blend-overlay"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
           }} />

      {/* BG LAYER 3 — top edge claret-dark wash */}
      <div className="absolute left-0 right-0 top-0 h-[12%] bg-gradient-to-b from-claret-dark/35 to-transparent pointer-events-none" />

      {/* TORN CAP — paints Craft's paper-deep over the top edge */}
      <svg
        className="absolute top-0 left-0 right-0 block w-full text-paper-deep -scale-y-100 z-20 pointer-events-none"
        viewBox="0 0 1440 28"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 28 L0 14 L46 6 L102 16 L160 8 L218 18 L274 10 L330 4 L388 14 L444 8 L500 18 L558 10 L614 4 L676 14 L732 8 L790 16 L848 6 L908 14 L966 8 L1022 18 L1080 10 L1138 4 L1194 14 L1252 8 L1308 16 L1366 6 L1410 14 L1440 10 L1440 28 Z"
              fill="currentColor" />
      </svg>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 md:pb-32">

        {/* MASSIVE Arabic watermark — top-right (different position again) */}
        <span
          aria-hidden="true"
          className="hidden md:block absolute font-arabic leading-none select-none pointer-events-none"
          style={{
            fontSize: 'clamp(18rem, 32vw, 30rem)',
            top: '4rem',
            right: '-3rem',
            color: 'rgba(194, 85, 79, 0.12)',
            transform: 'rotate(-3deg)',
          }}
        >
          مدرسة
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
              <span className="dateline text-claret-light tracking-tracked-wide">§ 07 — Classes</span>
              <span className="font-arabic text-[1.2rem] text-paper/55">مدرسة</span>
            </div>

            <h2 className="font-display text-[2.6rem] md:text-[3.4rem] leading-[0.95] text-paper tracking-tightest-ish"
                style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 410" }}>
              Sit at the loom.
              <span className="block italic font-editorial font-normal text-paper/85 mt-1">
                We'll teach you to knot.
              </span>
            </h2>

            <p className="font-editorial italic text-paper/80 text-[1.2rem] mt-6 leading-snug max-w-md">
              Four looms. Small classes. Tea on the burner.
            </p>

            <p className="text-paper/75 leading-relaxed mt-5 max-w-lg text-[1.02rem]">
              Usually four people, never more than six. Bring friends, a date, or yourself.
              Every class leaves with a piece of something they started, and the lap loom
              they started it on. No experience needed.
            </p>
          </motion.div>

          {/* School crest — circular emblem on the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: -4 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-4 md:col-start-9 md:pt-2 flex justify-center md:justify-end"
          >
            <SchoolCrest />
          </motion.div>
        </div>

        {/* ─────────── SCHEDULE BROADSHEET — paper schedule pinned to the dark wall ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-paper text-ink"
          style={{
            transform: 'rotate(-0.4deg)',
            boxShadow: '0 36px 60px -36px rgba(0, 0, 0, 0.7)',
          }}
        >
          {/* Tape corners */}
          <div className="absolute -top-3 left-12 md:left-20 w-16 h-5 bg-paper-darker/85 border border-ink/10"
               style={{ transform: 'rotate(-5deg)' }} />
          <div className="absolute -top-3 right-12 md:right-20 w-16 h-5 bg-paper-darker/85 border border-ink/10"
               style={{ transform: 'rotate(7deg)' }} />

          {/* Header bar */}
          <div className="bg-ink text-paper px-6 md:px-10 py-4 border-b-2 border-claret-light flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-baseline gap-4">
              <span className="dateline text-claret-light tracking-tracked-wide">May 2026 Schedule</span>
              <span className="font-arabic text-[1rem] text-paper/55">جدول</span>
            </div>
            <span className="dateline text-paper/55">Updated · 2026-05-04</span>
          </div>

          {/* Italic subhead */}
          <p className="font-editorial italic text-ink-soft text-[1.4rem] md:text-[1.6rem] leading-snug px-6 md:px-10 pt-7 pb-2 max-w-2xl">
            Four classes a week, week after week.
          </p>

          {/* Class rows */}
          <ul className="px-6 md:px-10 pt-3 pb-2">
            {CLASSES.map((c) => (
              <ClassRow key={c.id} c={c} />
            ))}
          </ul>

          {/* Footer */}
          <div className="px-6 md:px-10 pt-5 pb-6 border-t border-ink/15 grid grid-cols-12 gap-4 items-baseline">
            <p className="col-span-12 md:col-span-7 dateline text-ink-muted leading-relaxed">
              All classes meet at 2 pm. Tea included.<br />
              Cancel up to 24 h before — no fee.
            </p>
            <div className="col-span-12 md:col-span-5 md:text-right flex flex-wrap items-center gap-3 md:justify-end">
              <span className="dateline text-ink-muted">Looking for something else?</span>
              <a href="#visit" className="dateline text-ink hover:text-claret-light transition-colors underline-offset-4 hover:underline">
                Email us →
              </a>
            </div>
          </div>
        </motion.div>

        {/* ─────────── SECONDARY NOTICES — two smaller pinned cards on the dark wall ─────────── */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 mt-20 md:mt-24">
          <Notice
            n="01"
            tag="Group bookings"
            arabic="جماعة"
            title="Book the whole studio."
            italic="four looms, all yours."
            body="Birthdays, bachelorettes, team offsites, or a weird Tuesday with friends. We close the floor for the night and put a teacher at every loom."
            cta="Inquire about a group"
            href="#visit"
            rotation={-1.4}
            offset=""
          />
          <Notice
            n="02"
            tag="Gift a class"
            arabic="هدية"
            title="A class is a great present."
            italic="for someone who makes things."
            body="Send a friend who keeps saying they wish they made things with their hands. Digital gift cards, any amount, redeemable any class."
            cta="Send a gift card"
            href="#visit"
            rotation={1.6}
            offset="md:mt-8"
          />
        </div>
      </div>
    </section>
  )
}

/* ─────────── Schedule row ─────────── */
function ClassRow({ c }) {
  const low = c.remaining <= 2
  return (
    <li className="grid grid-cols-12 gap-3 md:gap-5 py-5 md:py-6 border-b border-dashed border-ink/20 items-baseline">
      {/* Day/Date stamp */}
      <div className="col-span-3 md:col-span-2">
        <div className="font-display text-[1.5rem] md:text-[1.85rem] leading-none text-claret-light tabular tracking-tracked-wide"
             style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 440" }}>
          {c.day}
        </div>
        <div className="dateline text-ink-muted mt-1 text-[0.62rem]">
          {c.date}
        </div>
      </div>

      {/* Class name + italic */}
      <div className="col-span-9 md:col-span-5">
        <div className="font-display text-[1.3rem] md:text-[1.5rem] leading-tight text-ink"
             style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
          {c.name}
        </div>
        <div className="font-editorial italic text-ink-soft text-[1.02rem] mt-0.5">{c.italic}</div>
        <div className="dateline text-ink-muted mt-2 text-[0.62rem]">
          {c.duration} · with {c.instructor}
        </div>
      </div>

      {/* Price */}
      <div className="col-span-4 md:col-span-2 md:text-right">
        <div className="font-display text-[1.3rem] md:text-[1.5rem] text-ink tabular leading-none"
             style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 440" }}>
          ${c.price}
        </div>
        <div className="dateline text-ink-muted mt-1 text-[0.62rem]">w/ supplies</div>
      </div>

      {/* Seats badge */}
      <div className="col-span-4 md:col-span-2 md:text-right">
        <span className={`dateline tracking-tracked-wide text-[0.62rem] inline-block px-2 py-1 ${
          low
            ? 'bg-claret-light text-paper'
            : 'border border-ink/30 text-ink-soft'
        }`}>
          {c.remaining} of {c.seats} seats
        </span>
      </div>

      {/* Book button */}
      <div className="col-span-4 md:col-span-1 md:text-right">
        <button
          type="button"
          className="dateline text-paper bg-ink hover:bg-claret-light transition-colors px-3 py-2 inline-flex items-center gap-1 group"
        >
          Book
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </li>
  )
}

/* ─────────── Secondary notice card ─────────── */
function Notice({ n, tag, arabic, title, italic, body, cta, href, rotation, offset }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 24, rotate: rotation * 1.4 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`col-span-12 md:col-span-6 group relative bg-paper text-ink p-7 md:p-8 ${offset}`}
      style={{
        boxShadow: '0 28px 48px -28px rgba(0, 0, 0, 0.65), 0 4px 10px -4px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Tape strip */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-paper-darker/85 border border-ink/10"
           style={{ transform: 'translateX(-50%) rotate(-3deg)' }} />

      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-[1.05rem] text-claret-light tabular leading-none"
                style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 440" }}>
            {n}
          </span>
          <span className="dateline text-claret-light tracking-tracked-wide">{tag}</span>
        </div>
        <span className="font-arabic text-[1rem] text-ink-muted">{arabic}</span>
      </div>

      <h3 className="font-display text-[1.65rem] md:text-[1.85rem] leading-tight text-ink"
          style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
        {title}
      </h3>
      <p className="font-editorial italic text-ink-soft text-[1.05rem] mt-1 mb-4">{italic}</p>

      <p className="text-ink-soft leading-relaxed text-[0.95rem] mb-5">{body}</p>

      <span className="dateline text-ink inline-flex items-center gap-2 border-b border-ink/40 pb-1 group-hover:border-claret-light group-hover:text-claret-light transition-colors">
        {cta} <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </motion.a>
  )
}

/* ─────────── School crest emblem ─────────── */
function SchoolCrest() {
  return (
    <svg viewBox="0 0 200 200" className="w-44 md:w-52 text-claret-light" aria-hidden="true">
      <defs>
        <path id="crest-top" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0" />
        <path id="crest-bottom" d="M 100,100 m 78,0 a 78,78 0 1,1 -156,0" />
      </defs>

      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />

      <text fill="currentColor" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="3">
        <textPath href="#crest-top" startOffset="50%" textAnchor="middle">
          CREATIVE MINDS · SCHOOL
        </textPath>
      </text>
      <text fill="currentColor" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="3">
        <textPath href="#crest-bottom" startOffset="50%" textAnchor="middle">
          FOUR LOOMS · BROOKLYN
        </textPath>
      </text>

      {/* Center: stylized loom — two vertical posts with horizontal threads */}
      <g transform="translate(100,100)">
        <line x1="-22" y1="-26" x2="-22" y2="26" stroke="currentColor" strokeWidth="2" />
        <line x1="22" y1="-26" x2="22" y2="26" stroke="currentColor" strokeWidth="2" />
        <g stroke="currentColor" strokeWidth="0.9">
          <line x1="-22" y1="-18" x2="22" y2="-18" />
          <line x1="-22" y1="-9" x2="22" y2="-9" />
          <line x1="-22" y1="0" x2="22" y2="0" />
          <line x1="-22" y1="9" x2="22" y2="9" />
          <line x1="-22" y1="18" x2="22" y2="18" />
        </g>
        <circle cx="0" cy="0" r="3.5" fill="currentColor" />
      </g>

      <text x="100" y="174" textAnchor="middle" fill="currentColor"
            fontFamily="'Fraunces', serif" fontSize="14" fontStyle="italic">
        anyone.
      </text>
    </svg>
  )
}
