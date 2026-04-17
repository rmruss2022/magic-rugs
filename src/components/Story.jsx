import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Story() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="story" ref={ref} className="py-24 md:py-32 bg-paper-deep relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-14">
          {/* Left: the portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5 md:col-start-1"
          >
            <div className="photo-frame">
              <img
                src="./images/04-mahmoud-couch.jpg"
                alt="Mahmoud at home, seated among rolls of yarn and traditional tapestries"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
            <p className="dateline text-ink-muted mt-3 pl-1">
              Fig. 01 — At home, among the materials.
            </p>
          </motion.div>

          {/* Right: the prose */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="col-span-12 md:col-span-6 md:col-start-7 md:pt-14"
          >
            <div className="dateline text-claret mb-5">Meet Mahmoud</div>
            <h2
              className="font-display text-display-md mb-10 text-ink"
              style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 430" }}
            >
              A fourth-grader's hands,
              <br />
              <span className="italic font-editorial font-normal">a thousand-year craft.</span>
            </h2>

            <div className="prose-editorial">
              <p>
                Mahmoud Koseyaem's family has been weaving in Aleppo for more than eight
                generations. His father ran one of the largest rug stores in the Citadel bazaar —
                the kind of place where the best work was kept in the back, and the carpets
                carried the names of the men who tied each knot. Mahmoud learned there as a boy.
              </p>
              <p>
                He was fourteen when he made his first sale: a small rug that had taken him four
                days to weave. A British man had been coming to the store every morning for a
                week, asking when it would be finished. When it finally was, he asked Mahmoud
                to name a price. Mahmoud froze, then said eight hundred Syrian pounds. The man
                paid without bargaining. <em className="font-editorial not-italic">"My dad took the money,"</em> Mahmoud laughs.
                <em className="font-editorial not-italic"> "That's fine. I'm happy. I like my dad."</em>
              </p>
              <p>
                Then the war came. He was hospitalized after a chemical attack and detained
                briefly by government forces. He left for Dubai, came back, left again.
                He lost count of how many times a loom was packed and unpacked. In 2021 the
                family landed in Houston; in 2026, they're opening a small studio in Williamsburg.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pull quote — breaks the grid */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-24 md:mt-32 max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center gap-2 mb-6 text-claret">
            <span className="w-10 h-px bg-claret self-center" />
            <span className="dateline">Pull quote</span>
            <span className="w-10 h-px bg-claret self-center" />
          </div>
          <blockquote className="pull-quote">
            "You never know what's gonna happen to you in the market.
            You never know. You just have to do it.
            <br className="hidden md:block" />
            <span className="text-claret"> Don't be afraid. Don't be scared."</span>
          </blockquote>
          <figcaption className="dateline text-ink-muted mt-6">— Mahmoud Koseyaem</figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
