import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Dateline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section ref={ref} className="py-20 md:py-28 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-6 md:gap-10"
        >
          {/* Left: byline block */}
          <div className="col-span-12 md:col-span-4">
            <div className="dateline text-ink-muted mb-4">No. 01 · A Family Record</div>
            <div className="rule mb-4" />
            <p className="dateline text-ink-soft leading-relaxed">
              Aleppo, Syria
              <br />
              Dubai · Istanbul
              <br />
              Houston, Texas
              <br />
              <span className="text-claret">Williamsburg, Brooklyn</span>
            </p>
          </div>

          {/* Right: dateline pull */}
          <div className="col-span-12 md:col-span-8">
            <p className="font-editorial italic text-pull text-ink leading-snug">
              In a two-bedroom apartment, Mahmoud Koseyaem sits on a red sofa and drinks black tea.
              On the wall: a tapestry of a buffalo he's weaving for someone. The loom he uses is
              one he invented himself — because the one his family has used for generations is
              too big for the room.
            </p>
            <p className="mt-8 text-ink-muted text-base leading-relaxed max-w-reading">
              Eight generations. One family. A loom that crossed an ocean. This is the story of
              Mahmoud, Alyssa, their daughter Mila Rose — and the studio they're opening on
              Metropolitan Avenue.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
