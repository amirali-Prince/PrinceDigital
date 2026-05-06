import { Zap, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Leistungen: [
    { label: 'Webdesign & Entwicklung', href: '#leistungen' },
    { label: 'Digital Marketing', href: '#leistungen' },
    { label: 'Strategy & Consulting', href: '#leistungen' },
  ],
  Unternehmen: [
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  Rechtliches: [
    { label: 'Datenschutz', href: '#' },
    { label: 'Impressum', href: '#' },
    { label: 'AGB', href: '#' },
  ],
}

const socialLinks = [
  { Icon: Twitter, href: '#', label: 'Twitter / X' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 mb-4"
              aria-label="Prince Digital — Startseite"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap size={18} className="text-white" strokeWidth={2.5} aria-hidden="true" />
              </div>
              <span className="text-xl font-bold text-white">
                Prince <span className="text-blue-500">Digital</span>
              </span>
            </a>
            <p className="text-slate-500 leading-relaxed text-sm max-w-xs mb-6">
              Wir bauen digitale Erlebnisse, die überzeugen — für Unternehmen, die online
              wachsen wollen. Professionell, persönlich, messbar.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5" role="list" aria-label="Soziale Netzwerke">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  role="listitem"
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <Icon
                    size={16}
                    className="text-slate-400 group-hover:text-white transition-colors duration-200"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h2 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
                {category}
              </h2>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-slate-600 text-sm">
            © {year} Prince Digital. Alle Rechte vorbehalten.
          </p>
          <p className="text-slate-700 text-xs">
            Designed &amp; built with ♥ in Deutschland
          </p>
        </div>
      </div>
    </footer>
  )
}
