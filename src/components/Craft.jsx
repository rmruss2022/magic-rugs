import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Craft() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="craft" ref={ref} className="bg-paper-deep">
      {/* Full-bleed texture band */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="relative h-[45svh] md:h-[60svh] overflow-hidden"
      >
        <img
          src="./images/05-textures.jpg"
          alt="Stacked rows of brightly colored knotted yarn — a wall of finished tapestry edges"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper-deep via-transparent to-transparent" />
        {/* Label floating */}
        <div className="absolute bottom-8 left-6 md:left-10 text-paper/95">
          <span className="dateline block">Fig. 02 — Finished edges, all one family.</span>
        </div>
      </motion.div>

      {/* Content band */}
      <div className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-28">
            <div className="col-span-12 md:col-span-6">
              <span className="dateline text-claret">§ 04 · The Work</span>
              <h2 className="mt-4 font-display text-display-md text-ink"
                  style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 420" }}>
                Every knot is
                <br />
                <span className="italic font-editorial font-normal">a small decision.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:pt-10">
              <p className="text-ink-soft leading-relaxed max-w-reading">
                A medium rug holds something like eighty thousand hand-tied knots. Mahmoud
                works eight-to-fourteen hours on market weeks. He built the loom in his
                Houston apartment himself, because the traditional one from Aleppo is too
                big for the room. He's made it work. He always does.
              </p>
              <p className="mt-4 text-ink-soft leading-relaxed max-w-reading">
                The rugs on the wall of the new Brooklyn studio are a mix: pieces he's
                woven himself, antiques he's hunted down at Canton Market and Round Top,
                and kilims from weavers he trusts in Turkey and Syria. Every one has a
                history he can tell you.
              </p>
            </div>
          </div>

          {/* Image grid — three varied shapes */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <motion.figure
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.15 }}
              className="col-span-12 md:col-span-7"
            >
              <div className="photo-frame">
                <img
                  src="./images/08-rug-detail.jpg"
                  alt="Close-up of a hand-woven rug detail, rich reds and geometric motifs"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="dateline text-ink-muted mt-3 pl-1">
                Fig. 03 — Detail from a piece in the new studio.
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="col-span-12 md:col-span-5 md:pt-20"
            >
              <div className="photo-frame">
                <img
                  src="./images/03-cat-threads.jpg"
                  alt="A white cat plays with loose threads in front of the loom"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="dateline text-ink-muted mt-3 pl-1">
                Fig. 04 — The studio cat has opinions.
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.45 }}
              className="col-span-12 md:col-span-4 md:col-start-2"
            >
              <div className="photo-frame">
                <img
                  src="./images/07-warehouse.jpg"
                  alt="Mahmoud in silhouette inside a storage unit stacked with rolled rugs"
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="dateline text-ink-muted mt-3 pl-1">
                Fig. 05 — Picking for a market.
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.6 }}
              className="col-span-12 md:col-span-5"
            >
              <div className="photo-frame">
                <img
                  src="./images/09-antiques.jpg"
                  alt="A stack of rugs beside an ornate brass vessel"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="dateline text-ink-muted mt-3 pl-1">
                Fig. 06 — Antiques and oddities, curated across years.
              </figcaption>
            </motion.figure>
          </div>

          {/* Kilim divider */}
          <div className="kilim-divider mt-24">
            <span className="font-arabic text-2xl">◈</span>
          </div>
        </div>
      </div>
    </section>
  )
}
