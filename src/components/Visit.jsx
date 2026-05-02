import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Visit() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (email.trim().length < 3) return
    setSubmitted(true)
  }

  return (
    <section id="visit" ref={ref} className="py-28 md:py-36 bg-paper-deep">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <span className="dateline text-claret-light">§ 08 · Come See</span>
          <h2 className="mt-4 font-display text-display-md text-ink"
              style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 420" }}>
            The shop is
            <br />
            <span className="italic font-editorial font-normal">on Metropolitan.</span>
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed max-w-reading">
            Drop in any open hour. The kettle is on. Nothing is locked behind glass —
            touch the rugs, watch the loom, ask anything. No appointment needed.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Left: details card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0 }}
            className="col-span-12 md:col-span-5 bg-paper p-8 md:p-10 border border-ink/10"
          >
            <div className="dateline text-claret-light mb-3">Creative Minds Studio</div>
            <div className="font-display text-[1.6rem] md:text-[1.85rem] leading-[1.2] text-ink mb-8"
                 style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 430" }}>
              247 Metropolitan Ave
              <br />
              Williamsburg, Brooklyn 11211
            </div>

            <div className="space-y-6">
              <div>
                <div className="dateline text-ink-muted mb-2">Studio hours</div>
                <ul className="font-sans text-ink-soft space-y-1.5">
                  <li className="flex justify-between border-b border-ink/10 pb-1.5">
                    <span>Wed – Fri</span>
                    <span className="dateline text-[0.72rem] self-center">11a – 7p</span>
                  </li>
                  <li className="flex justify-between border-b border-ink/10 pb-1.5">
                    <span>Saturday</span>
                    <span className="dateline text-[0.72rem] self-center">10a – 8p</span>
                  </li>
                  <li className="flex justify-between border-b border-ink/10 pb-1.5">
                    <span>Sunday</span>
                    <span className="dateline text-[0.72rem] self-center">11a – 6p</span>
                  </li>
                  <li className="flex justify-between text-ink-muted">
                    <span>Mon – Tue</span>
                    <span className="dateline text-[0.72rem] self-center">By appt.</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="dateline text-ink-muted mb-2">Reach us</div>
                <div className="space-y-1 text-ink-soft">
                  <div><a href="mailto:hello@creative-minds.com" className="hover:text-claret underline-offset-4 hover:underline">hello@creative-minds.com</a></div>
                  <div><a href="tel:+17185550100" className="hover:text-claret">+1 (718) 555-0100</a></div>
                  <div><a href="https://instagram.com/creative_minds" className="hover:text-claret">@creative_minds</a></div>
                </div>
              </div>

              <div>
                <div className="dateline text-ink-muted mb-2">Getting there</div>
                <p className="text-ink-soft leading-relaxed">
                  L train to Bedford, walk five blocks. G train to Metropolitan / Lorimer,
                  walk two. Street parking after 7p.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: big photo + newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="col-span-12 md:col-span-7 flex flex-col gap-6"
          >
            <figure className="photo-frame flex-1">
              <img
                src="./images/12-customer.jpg"
                alt="Mahmoud showing a rug to customers at his stall"
                className="w-full h-full object-cover aspect-[16/10]"
                loading="lazy"
              />
            </figure>

            {/* Newsletter */}
            <div className="bg-ink text-paper p-8 md:p-10">
              <div className="grid grid-cols-12 gap-5 items-end">
                <div className="col-span-12 md:col-span-7">
                  <div className="dateline text-claret-light mb-3">The Studio Dispatch</div>
                  <h3 className="font-display text-[1.5rem] md:text-[1.75rem] text-paper leading-[1.15]"
                      style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 400" }}>
                    New arrivals, open class seats, the occasional sale.
                  </h3>
                  <p className="text-paper/70 text-sm mt-2 leading-relaxed">
                    One email a month. First look at new pieces on the floor and the
                    upcoming class calendar.
                  </p>
                </div>
                <form onSubmit={submit} className="col-span-12 md:col-span-5 flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    required
                    className="flex-grow bg-transparent border border-paper/30 focus:border-claret-light text-paper placeholder:text-paper/40 px-3 py-2.5 outline-none transition-colors text-sm"
                  />
                  <button
                    type="submit"
                    className="dateline text-ink bg-claret-light hover:bg-paper transition-colors px-4 py-2.5 whitespace-nowrap"
                  >
                    {submitted ? 'Welcome ✓' : 'Sign up'}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
