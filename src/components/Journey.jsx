import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const STOPS = [
  {
    city: 'Aleppo',
    country: 'Syria',
    years: '1800s – 2011',
    note: 'Eight generations at the Citadel bazaar. Mahmoud learns to knot as a child.',
    arabic: 'حلب',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    years: '2011 – 2019',
    note: 'Works with his uncle. Meets Alyssa, a weaver traveling with her mother.',
    arabic: 'دبي',
  },
  {
    city: 'Istanbul',
    country: 'Türkiye',
    years: '2019 – 2021',
    note: 'Moves to be closer to his brother. Mila Rose is still small.',
    arabic: 'إسطنبول',
  },
  {
    city: 'Houston',
    country: 'Texas',
    years: '2021 – Now',
    note: 'Magic Rugs is born. Markets, Etsy, a storage locker the size of a small shop.',
    arabic: 'هيوستن',
  },
  {
    city: 'Williamsburg',
    country: 'Brooklyn',
    years: '2026',
    note: 'A studio on Metropolitan Avenue. Working looms. Classes. Open doors.',
    arabic: 'بروكلين',
    highlight: true,
  },
]

export default function Journey() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const pathLength = useTransform(scrollYProgress, [0.1, 0.75], [0, 1])

  return (
    <section ref={ref} className="py-28 md:py-40 bg-paper relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-3xl">
          <span className="dateline text-claret">§ 03 · The Journey</span>
          <h2 className="mt-4 font-display text-display-md text-ink"
              style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 420" }}>
            A single thread,
            <br />
            <span className="italic font-editorial font-normal">five cities.</span>
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed max-w-reading">
            The loom is heavy. The wool is heavier. Still, the family moved — by choice, by
            necessity, by war. Follow the thread.
          </p>
        </div>

        {/* Journey content: thread + stops */}
        <div className="relative">
          {/* Vertical thread SVG — desktop */}
          <motion.svg
            className="hidden md:block absolute left-[8.333%] top-0 h-full w-24 -translate-x-1/2 pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 1000"
            aria-hidden="true"
          >
            <motion.path
              d="M 50 0
                 C 80 120, 20 200, 50 320
                 C 80 440, 20 520, 50 640
                 C 80 760, 20 840, 50 1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="6 8"
              className="text-claret"
              style={{ pathLength }}
            />
          </motion.svg>

          {/* Mobile thread — simple vertical */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-px border-l-2 border-dashed border-claret/50" />

          {/* Stops */}
          <ol className="relative space-y-20 md:space-y-28">
            {STOPS.map((stop, i) => (
              <Stop key={stop.city} stop={stop} index={i} inView={inView} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Stop({ stop, index, inView }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-12 gap-4 md:gap-10 items-start pl-12 md:pl-0"
    >
      {/* Knot marker */}
      <div className="absolute left-5 md:left-[8.333%] top-2 -translate-x-1/2 z-10">
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            stop.highlight
              ? 'bg-claret border-claret ring-4 ring-saffron/40'
              : 'bg-paper border-claret'
          }`}
        />
      </div>

      {/* Year + arabic label */}
      <div className="col-span-12 md:col-span-3 md:col-start-2 md:pl-4">
        <div className="dateline text-ink-muted mb-1">{stop.years}</div>
        <div className="font-arabic text-[1.45rem] text-claret/70 leading-none">{stop.arabic}</div>
      </div>

      {/* City + context */}
      <div className="col-span-12 md:col-span-7 md:col-start-5">
        <h3
          className={`font-display text-[2.25rem] md:text-[3rem] leading-[0.98] ${
            stop.highlight ? 'text-claret' : 'text-ink'
          }`}
          style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 144, 'wght' 400" }}
        >
          {stop.city}
          <span className="ml-3 font-editorial italic font-normal text-ink-muted text-[1.3rem] md:text-[1.6rem]">
            {stop.country}
          </span>
        </h3>
        <p className="mt-4 text-ink-soft leading-relaxed max-w-lg">
          {stop.note}
        </p>
        {stop.highlight && (
          <a
            href="#visit"
            className="dateline text-claret inline-flex items-center gap-2 mt-6 group"
          >
            Visit the studio
            <span className="block w-6 h-px bg-claret transition-all group-hover:w-10" />
          </a>
        )}
      </div>
    </motion.li>
  )
}
