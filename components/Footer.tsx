import Image from 'next/image'
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'

const links: Record<string, { label: string; href: string }[]> = {
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

const socials = [
  { Icon: Twitter, href: '#', label: 'Twitter / X' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-4 sm:px-6 lg:px-8 pt-14 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" aria-label="Prince Digitals – Startseite" className="inline-flex items-center gap-2.5 mb-3">
              <Image src="/logo.svg" alt="Prince Digitals Logo" width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="text-lg font-bold text-white">Prince <span className="text-amber-500">Digitals</span></span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-5">
              Webdesign & Digital Marketing aus Hombrechtikon, Zürich — für KMUs in der Schweiz.
            </p>
            <p className="text-slate-600 text-xs mb-1">admin@prince-digitals.ch</p>
            <p className="text-slate-600 text-xs mb-5">Speerstrasse 9, 8634 Hombrechtikon</p>
            <div className="flex gap-2" aria-label="Soziale Netzwerke">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label} href={href} aria-label={label}
                  className="w-8 h-8 bg-slate-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Icon size={14} className="text-slate-400 group-hover:text-white transition-colors" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h2 className="font-bold text-white text-xs uppercase tracking-wider mb-3">{cat}</h2>
              <ul className="space-y-2.5">
                {items.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-slate-500 hover:text-white transition-colors text-sm">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
          <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Prince Digitals Alizadeh. Alle Rechte vorbehalten.</p>
          <p className="text-slate-700 text-xs">Made with ♥ in der Schweiz</p>
        </div>
      </div>
    </footer>
  )
}
