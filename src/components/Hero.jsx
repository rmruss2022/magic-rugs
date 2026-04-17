import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="./images/01-mahmoud-hero.jpg"
          alt="Mahmoud Koseyaem holding a hand-woven rug above his head at a market"
          className="w-full h-full object-cover object-[60%_30%]"
          loading="eager"
        />
        {/* Warm color wash, bottom-weighted for type legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper/10 via-transparent to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
      </div>

      {/* Top-left small label */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute top-24 md:top-28 left-6 md:left-10 z-10"
      >
        <div className="flex items-center gap-3 text-paper/90">
          <span className="w-8 h-px bg-paper/60" />
          <span className="dateline text-paper/85">Williamsburg, Brooklyn · Est. Aleppo, 1800s</span>
        </div>
      </motion.div>

      {/* Main headline block */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <div className="max-w-[58rem]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="font-display text-display-xl text-paper"
            style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 144, 'wght' 420" }}
          >
            Hand-knotted
            <br />
            <span className="italic font-editorial font-normal text-paper">in Aleppo.</span>
            <br />
            Re-rooted
            <br />
            <span className="italic font-editorial font-normal text-saffron">in Brooklyn.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end gap-6 md:gap-10"
          >
            <p className="text-paper/85 max-w-md text-[1.05rem] leading-relaxed font-sans">
              Eight generations of weavers from Syria's oldest bazaar,
              now keeping a loom running on Metropolitan Avenue.
              Come hold a thread.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#story"
                className="dateline text-paper border border-paper/50 hover:border-paper hover:bg-paper hover:text-ink px-5 py-3 transition-all"
              >
                Read the story
              </a>
              <a
                href="#classes"
                className="dateline text-ink bg-paper hover:bg-saffron transition-colors px-5 py-3"
              >
                Book a class →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hairline at bottom — sets the editorial tone */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-paper/30 z-10" />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-6 right-6 md:right-10 z-10 flex items-center gap-3 text-paper/70"
      >
        <span className="dateline text-[0.6rem]">Scroll</span>
        <span className="block w-8 h-px bg-paper/50" />
      </motion.div>
    </section>
  )
}
