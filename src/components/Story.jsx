import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CATEGORIES = [
  {
    name: 'Hand-Knotted Persians',
    range: '$1,200 – $9,000',
    note: 'Tabriz, Kashan, Isfahan. Knotted in our family workshop or sourced from weavers we trust.',
  },
  {
    name: 'Anatolian Kilims',
    range: '$280 – $2,400',
    note: 'Flat-weave, geometric, sturdy. Good for a hallway, a couch, or a wall.',
  },
  {
    name: 'Vintage & Antique',
    range: '$600 – $14,000',
    note: 'Pieces with a history we can tell you. Most are 50–120 years old.',
  },
  {
    name: 'Small & Decorative',
    range: '$45 – $320',
    note: 'Mug rugs, table runners, framed weavings. Easy to take home today.',
  },
]

export default function Story() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="shop" ref={ref} className="py-24 md:py-32 bg-paper-deep relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-14 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5"
          >
            <div className="photo-frame">
              <img
                src="./images/12-customer.jpg"
                alt="Inside the shop — kilims hung as walls, rugs unrolled on the counter"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
            <p className="dateline text-ink-muted mt-3 pl-1">
              Fig. 01 — On the floor. Rugs come down from the wall on request.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="col-span-12 md:col-span-6 md:col-start-7 md:pt-14"
          >
            <div className="dateline text-claret-light mb-5">§ 03 · The Shop</div>
            <h2
              className="font-display text-display-md mb-8 text-ink"
              style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 430" }}
            >
              Roughly 200 rugs,
              <br />
              <span className="italic font-editorial font-normal">all under one roof.</span>
            </h2>

            <div className="prose-editorial">
              <p>
                The shop carries hand-knotted rugs we make ourselves, kilims sourced from
                weavers we know in Türkiye and Syria, and a rotating selection of vintage
                pieces hunted at Round Top, Canton Market, and a few estate sales we won't
                name. Prices on every piece. No haggling theater.
              </p>
              <p>
                Most of the inventory is on the wall. The rest is in the back. Ask — we'll
                roll it out for you. Coffee or tea while you decide.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#visit"
                className="dateline text-paper bg-ink hover:bg-ink-soft transition-colors px-5 py-3"
              >
                Visit the floor →
              </a>
              <a
                href="https://creative-minds.com"
                className="dateline text-ink border border-ink/40 hover:border-ink hover:bg-ink hover:text-paper px-5 py-3 transition-all"
              >
                Shop online
              </a>
            </div>
          </motion.div>
        </div>

        {/* Categories grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 border-t border-ink/10 pt-10"
        >
          {CATEGORIES.map((c) => (
            <article key={c.name} className="bg-paper p-6 border border-ink/10">
              <h3 className="font-display text-[1.25rem] text-ink leading-tight mb-3"
                  style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 440" }}>
                {c.name}
              </h3>
              <div className="dateline text-claret-light mb-4 tabular">{c.range}</div>
              <p className="text-ink-soft text-[0.95rem] leading-relaxed">{c.note}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
