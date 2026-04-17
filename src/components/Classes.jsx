import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const CLASSES = [
  {
    id: 'intro',
    name: 'Introduction to the Loom',
    tag: 'Beginner',
    length: '3 hrs',
    price: 120,
    instructor: 'Alyssa',
    nextDate: 'Sat · Apr 26 · 2:00 pm',
    seats: 4,
    remaining: 2,
    description:
      'Start here. Warp, weft, and the first row of knots on a small lap loom. You leave with the loom, the yarn, and a good beginning.',
  },
  {
    id: 'persian-turkish',
    name: 'Persian & Turkish Knots',
    tag: 'Intermediate',
    length: '4 hrs',
    price: 180,
    instructor: 'Mahmoud',
    nextDate: 'Sun · Apr 27 · 2:00 pm',
    seats: 4,
    remaining: 3,
    description:
      'The two knot families that built every rug in this room. Learn the tension, the pace, and how to tell whose hands made a rug at a glance.',
  },
  {
    id: 'private',
    name: 'Private Lesson with Mahmoud',
    tag: 'By request',
    length: '2 hrs',
    price: 240,
    instructor: 'Mahmoud',
    nextDate: 'Scheduled by request',
    seats: 1,
    remaining: 1,
    description:
      "One-on-one, at his loom. Bring a pattern you've always wanted to make. Or come without one and see what emerges. Tea included.",
  },
]

export default function Classes() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="classes" ref={ref} className="py-28 md:py-40 bg-ink text-paper relative overflow-hidden">
      {/* Subtle warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-claret-dark/70 pointer-events-none" />
      {/* Faint kilim band top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/50 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <span className="dateline text-saffron">§ 06 · Classes</span>
          <h2 className="mt-4 font-display text-display-lg text-paper"
              style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 144, 'wght' 400" }}>
            Sit at the loom.
            <br />
            <span className="italic font-editorial font-normal text-saffron">We'll teach you.</span>
          </h2>
          <p className="mt-6 text-paper/80 leading-relaxed max-w-reading">
            Four looms. Small classes. Tea. Whatever music is on the speaker that day.
            Bring friends. Bring a date. Bring yourself. Every class leaves with a
            piece of something they started.
          </p>
        </div>

        {/* Class cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {CLASSES.map((c, i) => (
            <ClassCard key={c.id} c={c} delay={0.1 * i} inView={inView} />
          ))}
        </motion.div>

        {/* Below: secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="mt-16 md:mt-20 grid grid-cols-12 gap-6 md:gap-10 border-t border-paper/15 pt-12"
        >
          <div className="col-span-12 md:col-span-6">
            <div className="dateline text-saffron mb-3">Group bookings</div>
            <h3 className="font-display text-[1.6rem] md:text-[2rem] text-paper mb-3"
                style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 400" }}>
              Book the whole studio.
            </h3>
            <p className="text-paper/75 leading-relaxed max-w-md">
              Birthdays, bachelorettes, team offsites, or a weird Tuesday night with friends.
              Four looms, a teacher at each.
            </p>
            <a href="#visit" className="dateline text-paper inline-flex items-center gap-2 mt-5 border-b border-paper/30 pb-1 hover:border-saffron hover:text-saffron transition">
              Inquire
              <span>→</span>
            </a>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="dateline text-saffron mb-3">Gift a class</div>
            <h3 className="font-display text-[1.6rem] md:text-[2rem] text-paper mb-3"
                style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 400" }}>
              A class is a great present.
            </h3>
            <p className="text-paper/75 leading-relaxed max-w-md">
              Send a friend who keeps saying they wish they made things with their hands.
              Digital gift cards, any amount.
            </p>
            <a href="#visit" className="dateline text-paper inline-flex items-center gap-2 mt-5 border-b border-paper/30 pb-1 hover:border-saffron hover:text-saffron transition">
              Send a gift
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ClassCard({ c, delay, inView }) {
  const [hover, setHover] = useState(false)
  const low = c.remaining <= 2

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative bg-paper text-ink flex flex-col card-lift"
    >
      {/* Top meta bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-ink/10">
        <span className="dateline text-claret">{c.tag}</span>
        <span className="dateline text-ink-muted">{c.length}</span>
      </div>

      {/* Title + body */}
      <div className="px-5 md:px-6 pt-7 pb-6 flex-grow flex flex-col">
        <h3 className="font-display text-[1.7rem] md:text-[1.9rem] leading-[1.05] text-ink"
            style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
          {c.name}
        </h3>
        <p className="mt-4 text-ink-soft leading-relaxed text-[0.95rem] flex-grow">
          {c.description}
        </p>

        <div className="mt-6 flex items-baseline justify-between">
          <span className="dateline text-ink-muted">
            With {c.instructor}
          </span>
          <span className="font-display text-[1.4rem] text-ink tabular"
                style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 430" }}>
            ${c.price}
          </span>
        </div>
      </div>

      {/* Bottom CTA row */}
      <div className="px-5 md:px-6 py-4 bg-paper-deep flex items-center justify-between border-t border-ink/10">
        <div>
          <div className="dateline text-ink-soft leading-tight">{c.nextDate}</div>
          <div className={`dateline text-[0.62rem] mt-1 ${low ? 'text-claret' : 'text-ink-muted'}`}>
            {c.remaining} of {c.seats} seats left
          </div>
        </div>
        <button
          type="button"
          className="dateline text-paper bg-claret hover:bg-ink transition-colors px-4 py-2.5"
        >
          Book
        </button>
      </div>

      {/* Thread detail — animated ribbon on hover */}
      <div
        className={`absolute -top-px left-0 h-px bg-gradient-to-r from-saffron to-claret transition-all duration-700 ${
          hover ? 'w-full' : 'w-0'
        }`}
      />
    </motion.article>
  )
}
