import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Family() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="family" ref={ref} className="py-28 md:py-36 bg-paper relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20 md:mb-24 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-6">
            <span className="dateline text-claret">§ 05 · The Household</span>
            <h2 className="mt-4 font-display text-display-md text-ink"
                style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 420" }}>
              A weaver
              <br />
              <span className="italic font-editorial font-normal">marries a weaver.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:pt-10">
            <p className="text-ink-soft leading-relaxed max-w-reading">
              Alyssa Young was traveling in Dubai with her mother when she walked into
              Mahmoud's shop. She knew her way around a loom — enough that Mahmoud dared
              her to sit down and try it. She did. They got married. They have a daughter,
              Mila Rose. She is five, and already has good taste in yarn.
            </p>
          </div>
        </div>

        {/* Big photo — Alyssa, Mahmoud, Mila at the loom */}
        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="photo-frame">
            <img
              src="./images/02-family-loom.jpg"
              alt="Alyssa, Mahmoud, and their daughter Mila Rose at the family loom, with Mila standing on a small wooden stool"
              className="w-full aspect-[16/10] object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="dateline text-ink-muted mt-4 md:flex md:items-baseline md:gap-3 max-w-3xl">
            <span className="text-claret">Fig. 07</span>
            <span>
              Alyssa, Mila Rose, and Mahmoud at the loom. Mila has a stool of her own now.
            </span>
          </figcaption>
        </motion.figure>

        {/* Two-column: quote + side photo */}
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="col-span-12 md:col-span-7"
          >
            <blockquote className="pull-quote border-l-2 border-saffron pl-6 md:pl-8">
              The power went out during Ramadan dinner.
              Mahmoud laughed.
              <span className="block mt-3 text-saffron">
                "Now we're a real Syrian family."
              </span>
            </blockquote>
            <p className="dateline text-ink-muted mt-5 pl-6 md:pl-8">
              — A Tuesday in March, somewhere in Texas.
            </p>
            <p className="mt-10 text-ink-soft leading-relaxed max-w-reading pl-6 md:pl-8">
              The family runs Creative Minds together. Alyssa manages the Etsy shop and the
              teaching side — she's the calmer half of the classes. Mahmoud's brother helps
              from Turkey. His father, still in Aleppo, FaceTimes every week. When the
              regime fell in December, they started talking about going home, just to
              visit.
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="col-span-12 md:col-span-5"
          >
            <div className="photo-frame">
              <img
                src="./images/15-family-couch.jpg"
                alt="Mahmoud, Alyssa and Mila Rose on a couch at home, watching something on a phone"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="dateline text-ink-muted mt-3 pl-1">
              Fig. 08 — Home, before bed.
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
