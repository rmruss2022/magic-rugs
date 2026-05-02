import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SECTIONS = [
  { id: 'top', label: 'The Front Door' },
  { id: 'dateline', label: 'What\'s Here' },
  { id: 'shop', label: 'The Shop' },
  { id: 'loom', label: 'The Loom' },
  { id: 'services', label: 'Services' },
  { id: 'craft', label: 'The Work' },
  { id: 'classes', label: 'The Classes' },
  { id: 'visit', label: 'Come Visit' },
]

const TOTAL = String(SECTIONS.length).padStart(2, '0')

export default function SectionTicket() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const elements = SECTIONS
      .map(s => ({ ...s, el: document.getElementById(s.id) }))
      .filter(s => s.el)

    if (!elements.length) return

    const onScroll = () => {
      // The section the user is "in" = the one whose top has crossed 35% of viewport.
      const probe = window.innerHeight * 0.35
      let current = 0
      for (let i = 0; i < elements.length; i++) {
        const top = elements[i].el.getBoundingClientRect().top
        if (top - probe <= 0) current = i
      }
      setActiveIndex(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const active = SECTIONS[activeIndex]
  const number = String(activeIndex + 1).padStart(2, '0')

  return (
    <div
      className="hidden md:block fixed top-24 right-10 z-40 pointer-events-none"
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, rotate: -8, y: -8 }}
          animate={{ opacity: 1, rotate: -3, y: 0 }}
          exit={{ opacity: 0, rotate: 4, y: -6 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="bg-paper text-ink px-3 py-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] min-w-[8.5rem]"
        >
          <div className="dateline text-[0.6rem] text-claret-light">
            No. {number} / {TOTAL}
          </div>
          <div className="font-mono text-[0.72rem] tracking-wider text-ink-soft uppercase whitespace-nowrap">
            {active.label}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
