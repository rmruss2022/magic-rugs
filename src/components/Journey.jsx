import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SERVICES = [
  {
    n: '01',
    name: 'Custom Commissions',
    lede: 'A rug made for your room.',
    body: 'Pick a size, a palette, and a pattern family — Persian medallion, Anatolian tribal, modern abstract. We sketch, we sample, we weave. Most commissions take 3–6 months.',
    price: 'From $1,800',
    cta: 'Start a commission',
  },
  {
    n: '02',
    name: 'Repair & Restoration',
    lede: 'Bring the heirloom in.',
    body: 'Re-fringing, re-binding, hole repair, dye correction, color matching for replacement knots. We work on rugs we sold and rugs you brought in from anywhere.',
    price: 'Quote in 1 day',
    cta: 'Get a quote',
  },
  {
    n: '03',
    name: 'Sourcing & Trade-In',
    lede: 'Looking for something specific?',
    body: 'Tell us the size, era, and palette. We have weavers in Türkiye, Syria, and Iran on speed-dial, plus our own pickers at U.S. estates and markets. Trade-in credit available.',
    price: 'No fee to ask',
    cta: 'Send a request',
  },
]

export default function Journey() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="services" ref={ref} className="py-28 md:py-40 bg-paper relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-6">
            <span className="dateline text-claret-light">§ 05 · Services</span>
            <h2 className="mt-4 font-display text-display-md text-ink"
                style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 420" }}>
              We make, we mend,
              <br />
              <span className="italic font-editorial font-normal">we hunt things down.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:pt-10">
            <p className="text-ink-soft leading-relaxed max-w-reading">
              Three things we do besides selling what's already on the wall. Walk in, email, or
              call — quotes are free and usually same-day.
            </p>
          </div>
        </div>

        {/* Service rows */}
        <ol className="space-y-px border-t border-ink/15">
          {SERVICES.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-ink/15"
            >
              <a
                href="#visit"
                className="grid grid-cols-12 gap-4 md:gap-10 py-10 md:py-14 group hover:bg-paper-deep/60 transition-colors -mx-6 md:-mx-10 px-6 md:px-10"
              >
                <div className="col-span-12 md:col-span-1">
                  <span className="font-display text-[1.6rem] text-claret-light tabular leading-none"
                        style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 400" }}>
                    {s.n}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-display text-[1.85rem] md:text-[2.25rem] text-ink leading-[1.05] mb-2"
                      style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 410" }}>
                    {s.name}
                  </h3>
                  <p className="font-editorial italic text-ink-soft text-[1.1rem]">{s.lede}</p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-ink-soft leading-relaxed max-w-reading">{s.body}</p>
                </div>
                <div className="col-span-12 md:col-span-2 md:text-right">
                  <div className="dateline text-claret-light mb-3">{s.price}</div>
                  <span className="dateline text-ink inline-flex items-center gap-2 border-b border-ink/40 pb-1 group-hover:border-claret-light group-hover:text-claret-light transition-colors">
                    {s.cta} <span>→</span>
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
