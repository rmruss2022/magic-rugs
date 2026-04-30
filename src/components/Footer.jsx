export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-paper relative overflow-hidden">
      {/* Warm top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-saffron/60 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-24">
        {/* Closing quote */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20">
          <div className="col-span-12 md:col-span-8">
            <p className="font-editorial italic text-pull text-paper leading-[1.2] max-w-3xl">
              "I am dying to go back and eat this Syrian sweet
              they used to have in the old markets. I miss my mom.
              <span className="block mt-2 text-saffron">I really miss that sweet."</span>
            </p>
            <p className="dateline text-paper/60 mt-6">— Mahmoud, on Aleppo</p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right flex flex-col justify-end">
            <span className="font-arabic text-[2.6rem] text-saffron/70 leading-none md:ml-auto">حلب</span>
            <span className="dateline text-paper/60 mt-3">Aleppo · حلب</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-paper/15 mb-10" />

        {/* Nav + credits */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="font-display text-[1.7rem] text-paper leading-none mb-2"
                 style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 500" }}>
              Creative Minds
            </div>
            <p className="dateline text-paper/60 leading-relaxed">
              Hand-knotted in Aleppo.
              <br />
              Re-rooted in Brooklyn.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="dateline text-saffron mb-3">Studio</div>
            <ul className="space-y-2 text-paper/85 text-sm">
              <li><a href="#story" className="hover:text-saffron">Story</a></li>
              <li><a href="#craft" className="hover:text-saffron">Craft</a></li>
              <li><a href="#classes" className="hover:text-saffron">Classes</a></li>
              <li><a href="#visit" className="hover:text-saffron">Visit</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="dateline text-saffron mb-3">Elsewhere</div>
            <ul className="space-y-2 text-paper/85 text-sm">
              <li><a href="https://instagram.com/creative_minds" className="hover:text-saffron">Instagram</a></li>
              <li><a href="https://creative-minds.com" className="hover:text-saffron">Etsy / Shop</a></li>
              <li><a href="mailto:hello@creative-minds.com" className="hover:text-saffron">hello@creative-minds.com</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="dateline text-saffron mb-3">Find us</div>
            <p className="text-paper/85 text-sm leading-relaxed">
              247 Metropolitan Ave
              <br />
              Williamsburg, Brooklyn 11211
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-paper/55">
          <div className="dateline text-[0.65rem]">
            © {year} Creative Minds LLC. All rugs have a history.
          </div>
          <div className="dateline text-[0.65rem]">
            Site in progress — v0.1 · Spring 2026
          </div>
        </div>
      </div>
    </footer>
  )
}
