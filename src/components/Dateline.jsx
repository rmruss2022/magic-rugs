import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PILLARS = [
  {
    n: '01',
    label: 'Browse',
    title: 'A wall of rugs.',
    body: 'Hand-knotted Persians, Anatolian kilims, vintage finds. Pulled from the wall and unrolled on the floor on request.',
    href: '#shop',
    cta: 'See the shop',
  },
  {
    n: '02',
    label: 'Learn',
    title: 'Sit at a loom.',
    body: 'Beginner classes weekly. Tie your first knot in three hours, leave with a small piece you started yourself.',
    href: '#classes',
    cta: 'Book a class',
  },
  {
    n: '03',
    label: 'Commission',
    title: 'Make one yours.',
    body: 'Custom sizes, dye-matched colors, repair and restoration of pieces you already love. Quotes in a day.',
    href: '#services',
    cta: 'Talk to us',
  },
]

export default function Dateline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="dateline" ref={ref} className="py-20 md:py-28 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20"
        >
          <div className="col-span-12 md:col-span-4">
            <div className="dateline text-ink-muted mb-4">§ 02 · What's here</div>
            <div className="rule mb-4" />
            <p className="dateline text-ink-soft leading-relaxed">
              247 Metropolitan Ave
              <br />
              <span className="text-claret-light">Williamsburg, Brooklyn</span>
              <br />
              Tue – Sun · 11 – 7
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-editorial italic text-pull text-ink leading-snug">
              A small studio with four working looms, a wall of rugs, and tea on the burner.
              Walk in. Touch the wool. Stay as long as you want.
            </p>
          </div>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 border-t border-ink/10 pt-10 md:pt-14">
          {PILLARS.map((p, i) => (
            <motion.a
              key={p.n}
              href={p.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 md:col-span-4 group block"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display text-[2rem] text-claret-light leading-none tabular"
                      style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 400" }}>
                  {p.n}
                </span>
                <span className="dateline text-ink-muted">{p.label}</span>
              </div>
              <h3 className="font-display text-[1.6rem] md:text-[1.85rem] leading-[1.15] text-ink mb-3"
                  style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 430" }}>
                {p.title}
              </h3>
              <p className="text-ink-soft leading-relaxed mb-4">{p.body}</p>
              <span className="dateline text-ink inline-flex items-center gap-2 border-b border-ink/40 pb-1 group-hover:border-claret-light group-hover:text-claret-light transition-colors">
                {p.cta} <span>→</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
