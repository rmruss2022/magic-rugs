import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Background — the loom in the back room, family weaving together */}
      <div className="absolute inset-0">
        <img
          src="./images/03-cat-threads.jpg"
          alt="Inside Creative Minds — hand-knotting a kilim in progress, the shop cat watching"
          className="w-full h-full object-cover object-[75%_50%]"
          loading="eager"
        />
        {/* Warm multiply pulls the photo onto the page instead of floating over it */}
        <div className="absolute inset-0 bg-claret-dark/25 mix-blend-multiply" />
        {/* Strong left-weighted ink wash so the type stack reads on the wall */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/85" />
      </div>

      {/* Hand-painted style top dateline — runs the full width like a sign band over the door */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="absolute top-20 md:top-24 left-0 right-0 z-20"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center gap-3 md:gap-5 text-paper/85 flex-wrap">
          <span className="dateline text-paper">247 Metropolitan Ave</span>
          <span className="hidden md:block w-5 h-px bg-paper/40" />
          <span className="dateline text-paper/70">Williamsburg, BK</span>
          <span className="hidden md:block w-5 h-px bg-paper/40" />
          <span className="font-arabic not-italic text-claret-light/95 text-[1.05rem] leading-none">حلب</span>
          <span className="dateline text-claret-light tracking-tracked-wide">→ BK</span>
          <span className="hidden md:block w-5 h-px bg-paper/40" />
          <span className="dateline text-paper/55">Est. 1800s / Brooklyn 2024</span>
        </div>
      </motion.div>

      {/* Right-rail vertical mark — quiet "we have a master in the back room" line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="hidden lg:flex absolute right-8 bottom-32 z-10 flex-col items-center gap-4"
      >
        <span className="block w-px h-12 bg-paper/30" />
        <span className="dateline text-paper/55 [writing-mode:vertical-rl] rotate-180 tracking-tracked-wide">
          Eight generations · in the back room
        </span>
        <span className="block w-px h-12 bg-paper/30" />
      </motion.div>

      {/* Headline block — anchored bottom-left, Brooklyn warehouse stack */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pt-40 md:pt-48 pb-20 md:pb-28 min-h-[100svh] flex flex-col justify-end">
        <div className="max-w-[68rem]">
          {/* Stencil overline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 mb-6 md:mb-7"
          >
            <span className="block w-10 md:w-14 h-px bg-claret-light" />
            <span className="dateline text-claret-light tracking-tracked-wide">A Weaving Studio &amp; Rug Shop</span>
          </motion.div>

          {/* Wordmark — display caps, the store's name as the room's name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="font-display text-paper leading-[0.86] tracking-tightest-ish uppercase"
            style={{
              fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 470",
              fontSize: 'clamp(3.2rem, 11.5vw, 10.5rem)',
            }}
          >
            <span className="block">Creative</span>
            <span className="block text-claret-light">Minds.</span>
          </motion.h1>

          {/* Italic foil — the room, in one line */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-5 md:mt-7 font-editorial italic text-paper"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.6rem)', lineHeight: 1.15 }}
          >
            a weaving studio in Brooklyn.
          </motion.div>

          {/* Body — store first, classes second, lineage as the closer */}
          {/* <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="mt-8 md:mt-10 text-paper/90 max-w-xl text-[1.05rem] md:text-[1.15rem] leading-relaxed font-sans"
          >
            Walk in off Metropolitan Ave. Sit at a loom. Knot a thread. Buy a rug if one talks
            to you. Classes every week — beginners welcome. And in the back, one of the best
            living weavers from Aleppo, eight generations deep, teaches whoever shows up.
          </motion.p> */}

          {/* CTAs — classes first, shop second, story demoted to a quiet link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="mt-9 md:mt-11 flex flex-wrap items-center gap-4 md:gap-5"
          >
            <a
              href="#classes"
              className="dateline text-ink bg-paper hover:bg-paper-deep transition-colors px-6 py-4"
            >
              Book a class →
            </a>
            <a
              href="#visit"
              className="dateline text-paper border border-paper/50 hover:border-paper hover:bg-paper hover:text-ink px-6 py-4 transition-all"
            >
              Visit the shop
            </a>
            <a
              href="#story"
              className="dateline text-paper/65 hover:text-claret-light underline-offset-4 hover:underline px-2 py-2"
            >
              Read the story
            </a>
          </motion.div>
        </div>
      </div>

      {/* Open-hours ticker — bottom strip, like the painted hours over a Brooklyn door */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-paper/15 bg-ink/65 backdrop-blur-[2px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3 flex items-center gap-4 md:gap-6 text-paper/75 flex-wrap">
          <span className="flex items-center gap-2">
            <span className="block w-1.5 h-1.5 rounded-full bg-claret-light animate-pulse" />
            <span className="dateline text-claret-light">Open</span>
          </span>
          <span className="dateline text-paper/80">Tue–Sun · 11 – 7</span>
          <span className="hidden md:block w-5 h-px bg-paper/30" />
          <span className="hidden md:inline dateline text-paper/55">Loom running, kettle on</span>
          <span className="ml-auto hidden md:flex items-center gap-3 text-paper/55">
            <span className="dateline text-[0.6rem]">Scroll</span>
            <span className="block w-8 h-px bg-paper/50" />
          </span>
        </div>
      </div>
    </section>
  )
}
