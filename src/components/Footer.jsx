export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-paper relative overflow-hidden">
      {/* BG LAYER 1 — kilim pattern, very subtle */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none text-paper">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-kilim" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M22 4 L40 22 L22 40 L4 22 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="22" cy="22" r="1.2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-kilim)" />
        </svg>
      </div>

      {/* BG LAYER 2 — grain */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
           }} />

      {/* TORN CAP — paints Visit's paper-deep over the top edge */}
      <svg
        className="absolute top-0 left-0 right-0 block w-full text-paper-deep -scale-y-100 z-20 pointer-events-none"
        viewBox="0 0 1440 28"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 28 L0 12 L48 18 L102 8 L156 16 L218 6 L274 14 L330 8 L388 18 L444 10 L500 4 L556 14 L612 8 L672 18 L728 10 L784 6 L844 14 L898 8 L958 16 L1014 6 L1070 14 L1126 8 L1184 18 L1240 10 L1296 4 L1356 14 L1410 6 L1440 14 L1440 28 Z"
              fill="currentColor" />
      </svg>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-12 md:pb-16">

        {/* Closing grand statement + postage stamp */}
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-20 md:mb-24">
          {/* Left: closing italic statement */}
          <div className="col-span-12 md:col-span-8 relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-12 h-px bg-claret-light" />
              <span className="dateline text-claret-light tracking-tracked-wide">Postscript</span>
              <span className="font-arabic text-[1.15rem] text-paper/55">حلب → BK</span>
            </div>

            <p className="font-display text-[2.4rem] md:text-[3.4rem] leading-[0.96] text-paper tracking-tightest-ish"
               style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 400" }}>
              Come in.
              <span className="block">Sit down.</span>
              <span className="block italic font-editorial font-normal text-claret-light mt-1">
                Try the loom.
              </span>
            </p>

            <p className="font-editorial italic text-paper/75 text-[1.4rem] md:text-[1.55rem] mt-6 leading-snug max-w-md">
              The kettle is on. Tea is free.
            </p>

            {/* Hand-drawn signature line */}
            <div className="mt-12 max-w-md">
              <Signature />
              <div className="flex items-baseline gap-3 mt-3">
                <span className="block w-8 h-px bg-paper/30" />
                <span className="dateline text-paper/55 tracking-tracked-wide">— The studio, 247 Met. Ave</span>
              </div>
            </div>
          </div>

          {/* Right: postage stamp */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex justify-center md:justify-end items-start">
            <PostageStamp year={year} />
          </div>
        </div>

        {/* Three-column footer-nav block — printed on paper, pinned to the dark wall */}
        <div className="relative bg-paper text-ink p-7 md:p-9 mb-10"
             style={{
               transform: 'rotate(-0.3deg)',
               boxShadow: '0 30px 50px -32px rgba(0, 0, 0, 0.7)',
             }}>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-paper-darker/85 border border-ink/10"
               style={{ transform: 'translateX(-50%) rotate(-3deg)' }} />

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <div className="font-display text-[1.7rem] text-ink leading-none mb-2"
                   style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 500" }}>
                Creative Minds
              </div>
              <p className="dateline text-ink-muted leading-relaxed">
                A weaving studio &amp; rug shop.
                <br />
                Williamsburg, Brooklyn.
              </p>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-arabic text-[1.4rem] text-claret-light leading-none">حلب</span>
                <span className="dateline text-ink-muted">Aleppo · Brooklyn</span>
              </div>
            </div>

            <div className="col-span-6 md:col-span-2">
              <div className="dateline text-claret-light mb-3 tracking-tracked-wide">Shop</div>
              <ul className="space-y-2 text-ink-soft text-sm">
                <li><a href="#shop"     className="hover:text-claret-light transition-colors">The Rugs</a></li>
                <li><a href="#services" className="hover:text-claret-light transition-colors">Services</a></li>
                <li><a href="#classes"  className="hover:text-claret-light transition-colors">Classes</a></li>
                <li><a href="#visit"    className="hover:text-claret-light transition-colors">Visit</a></li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-3">
              <div className="dateline text-claret-light mb-3 tracking-tracked-wide">Elsewhere</div>
              <ul className="space-y-2 text-ink-soft text-sm">
                <li><a href="https://instagram.com/creative_minds" className="hover:text-claret-light transition-colors">Instagram · @creative_minds</a></li>
                <li><a href="https://creative-minds.com" className="hover:text-claret-light transition-colors">Etsy / Online shop</a></li>
                <li><a href="mailto:hello@creative-minds.com" className="hover:text-claret-light transition-colors">hello@creative-minds.com</a></li>
                <li><a href="tel:+17185550100" className="hover:text-claret-light transition-colors tabular">(718) 555 · 0100</a></li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-3">
              <div className="dateline text-claret-light mb-3 tracking-tracked-wide">Find us</div>
              <p className="font-display text-[1.05rem] text-ink leading-tight"
                 style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'wght' 420" }}>
                247 Metropolitan Ave
                <br />
                Williamsburg, Brooklyn 11211
              </p>
              <p className="dateline text-ink-muted mt-3 leading-relaxed">
                Tue – Sun · 11 – 7
              </p>
            </div>
          </div>
        </div>

        {/* Bottom hairline copyright strip */}
        <div className="pt-4 border-t border-paper/15 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-paper/55">
          <div className="dateline text-[0.65rem] tracking-tracked-wide">
            © {year} Creative Minds LLC · All rugs have a history.
          </div>
          <div className="dateline text-[0.65rem] tracking-tracked-wide flex items-center gap-3">
            <span>Brooklyn</span>
            <span className="block w-2 h-px bg-paper/30" />
            <span>Williamsburg</span>
            <span className="block w-2 h-px bg-paper/30" />
            <span className="font-arabic text-paper/55 not-italic text-[0.85rem]">حلب</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─────────── Hand-drawn signature SVG ─────────── */
function Signature() {
  return (
    <svg viewBox="0 0 320 60" className="w-64 md:w-72 text-claret-light" aria-hidden="true">
      <path
        d="M 6 38
           C 18 18, 36 18, 44 32
           C 50 42, 36 50, 32 42
           C 28 32, 50 30, 60 38
           C 70 46, 84 32, 80 24
           C 76 16, 90 28, 100 28
           L 116 24
           M 124 38
           C 136 22, 152 22, 158 34
           C 160 38, 154 42, 150 38
           C 148 36, 154 30, 162 30
           L 178 28
           M 188 26
           C 196 16, 212 16, 218 28
           C 222 36, 212 42, 206 36
           C 200 30, 218 26, 230 32
           C 240 36, 248 30, 252 24
           M 258 36
           C 266 26, 280 26, 286 36
           C 290 42, 280 46, 276 40
           C 272 34, 290 32, 304 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      {/* Underline flourish */}
      <path
        d="M 4 52 C 80 56, 200 50, 312 54"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

/* ─────────── Postage stamp SVG (closing seal) ─────────── */
function PostageStamp({ year }) {
  return (
    <div className="relative" style={{ transform: 'rotate(3deg)' }}>
      <svg viewBox="0 0 180 220" className="w-44 md:w-48 text-paper" aria-hidden="true">
        {/* Perforated edge background */}
        <path
          d="M 8 4 L 172 4 L 172 216 L 8 216 Z"
          fill="#EFE7D4"
          stroke="#1A1511"
          strokeWidth="0.5"
        />
        {/* Perforated dots all around — visual perforation */}
        <g fill="#1A1511" opacity="0.6">
          {[...Array(11)].map((_, i) => (
            <circle key={`t${i}`} cx={16 + i * 15} cy={4} r="2" />
          ))}
          {[...Array(11)].map((_, i) => (
            <circle key={`b${i}`} cx={16 + i * 15} cy={216} r="2" />
          ))}
          {[...Array(14)].map((_, i) => (
            <circle key={`l${i}`} cx={8} cy={16 + i * 15} r="2" />
          ))}
          {[...Array(14)].map((_, i) => (
            <circle key={`r${i}`} cx={172} cy={16 + i * 15} r="2" />
          ))}
        </g>

        {/* Inner border */}
        <rect x="20" y="20" width="140" height="180" fill="none" stroke="#1A1511" strokeWidth="0.6" />
        <rect x="24" y="24" width="132" height="172" fill="none" stroke="#C2554F" strokeWidth="1.2" />

        {/* Header text */}
        <text x="90" y="42" textAnchor="middle" fill="#1A1511"
              fontFamily="'IBM Plex Mono', monospace" fontSize="7" letterSpacing="2">
          CREATIVE MINDS
        </text>
        <text x="90" y="52" textAnchor="middle" fill="#6B5B48"
              fontFamily="'IBM Plex Mono', monospace" fontSize="5" letterSpacing="1.5">
          BROOKLYN · ALEPPO
        </text>

        {/* Center motif: stylized loom + thread */}
        <g transform="translate(90,110)">
          <line x1="-26" y1="-30" x2="-26" y2="30" stroke="#1A1511" strokeWidth="2" />
          <line x1="26" y1="-30" x2="26" y2="30" stroke="#1A1511" strokeWidth="2" />
          <g stroke="#C2554F" strokeWidth="1.2">
            <line x1="-26" y1="-20" x2="26" y2="-20" />
            <line x1="-26" y1="-10" x2="26" y2="-10" />
            <line x1="-26" y1="0" x2="26" y2="0" />
            <line x1="-26" y1="10" x2="26" y2="10" />
            <line x1="-26" y1="20" x2="26" y2="20" />
          </g>
          {/* Knot in the middle */}
          <path d="M -8 -4 C -8 -10, 8 -10, 8 -4 C 8 4, -8 4, -8 -4 Z"
                fill="#C2554F" stroke="#1A1511" strokeWidth="0.8" />
        </g>

        {/* Arabic */}
        <text x="90" y="170" textAnchor="middle" fill="#C2554F"
              fontFamily="'Amiri', serif" fontSize="20">
          حلب
        </text>

        {/* Year + value */}
        <text x="90" y="186" textAnchor="middle" fill="#1A1511"
              fontFamily="'Fraunces', serif" fontSize="12" fontStyle="italic">
          {year}
        </text>
        <text x="90" y="196" textAnchor="middle" fill="#6B5B48"
              fontFamily="'IBM Plex Mono', monospace" fontSize="6" letterSpacing="1.5">
          ONE VISIT
        </text>
      </svg>

      {/* Cancellation mark — a circular postmark stamp overlapping */}
      <svg
        viewBox="0 0 80 80"
        className="absolute -top-2 -right-3 w-16 md:w-20 text-claret-light"
        style={{ transform: 'rotate(-12deg)' }}
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <text x="40" y="32" textAnchor="middle" fill="currentColor"
              fontFamily="'IBM Plex Mono', monospace" fontSize="6" letterSpacing="1">
          BROOKLYN
        </text>
        <text x="40" y="44" textAnchor="middle" fill="currentColor"
              fontFamily="'Fraunces', serif" fontSize="9" fontWeight="500">
          POSTED
        </text>
        <text x="40" y="56" textAnchor="middle" fill="currentColor"
              fontFamily="'IBM Plex Mono', monospace" fontSize="5" letterSpacing="1">
          {year}
        </text>
        <line x1="14" y1="40" x2="22" y2="40" stroke="currentColor" strokeWidth="0.8" />
        <line x1="58" y1="40" x2="66" y2="40" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    </div>
  )
}
