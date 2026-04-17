import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Generations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section ref={ref} className="py-28 md:py-40 bg-indigo text-paper relative overflow-hidden">
      {/* Faint kilim motif in background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="kilim" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M40 0 L80 40 L40 80 L0 40 Z M40 20 L60 40 L40 60 L20 40 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kilim)" />
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          {/* Massive 8 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-6 relative"
          >
            <span className="dateline text-saffron mb-4 block">§ 02 · Origin</span>
            <span
              className="font-display leading-[0.78] tracking-tightest-ish text-paper block"
              style={{
                fontSize: 'clamp(12rem, 32vw, 28rem)',
                fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 380",
              }}
            >
              8
            </span>
            <span className="block font-editorial italic text-paper text-[clamp(1.8rem,3.5vw,3rem)] -mt-4 md:-mt-6">
              generations.
            </span>
          </motion.div>

          {/* Right column: context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.25 }}
            className="col-span-12 md:col-span-6 md:pl-8 md:border-l md:border-paper/20 pb-4"
          >
            <p className="font-display text-[1.55rem] md:text-[1.85rem] leading-[1.25] text-paper max-w-md"
               style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 380" }}>
              A family of weavers working in the same tradition since before the
              United States was a country.
            </p>

            <div className="mt-10 space-y-5 font-sans text-paper/85 leading-relaxed max-w-md">
              <p>
                Mahmoud's father kept one of the largest rug stores in Aleppo's Citadel
                bazaar — a warren of limestone vaults where carpets from Anatolia, Persia,
                and the Syrian countryside were brought to trade, restore, and haggle over
                for days.
              </p>
              <p>
                Every Koseyaem for eight generations has tied the knots the same way.
                The tools don't change. The patterns change slowly. The people who sit
                at the loom change quickest of all.
              </p>
            </div>

            {/* Small stat strip */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-paper/20 pt-8">
              <Stat k="~8–14 hrs" v="A weaving day" />
              <Stat k="~80,000" v="Knots per sq. meter" />
              <Stat k="2026" v="Studio opens" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ k, v }) {
  return (
    <div>
      <div className="font-display text-[1.6rem] md:text-[1.9rem] leading-none text-saffron tabular"
           style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144, 'wght' 420" }}>
        {k}
      </div>
      <div className="dateline text-paper/70 mt-2 text-[0.62rem] leading-snug">{v}</div>
    </div>
  )
}
