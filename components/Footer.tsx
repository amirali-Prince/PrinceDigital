import Image from 'next/image'
import { Instagram, Linkedin, Facebook } from 'lucide-react'

const serviceLinks = [
  { label: 'Webdesign & Entwicklung', href: '#leistungen' },
  { label: 'Social Media Management', href: '#leistungen' },
  { label: 'Branding & Logo Design',  href: '#leistungen' },
  { label: 'SEO & Online Marketing',  href: '#leistungen' },
  { label: 'Strategie & Planung',     href: '#leistungen' },
]

const companyLinks = [
  { label: 'Über uns',  href: '#ueber-uns' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ',       href: '#faq'       },
  { label: 'Kontakt',   href: '#kontakt'   },
]

const legalLinks = [
  { label: 'Datenschutz',     href: '/datenschutz'      },
  { label: 'Impressum',       href: '/impressum'        },
  { label: 'AGB',             href: '/agb'              },
  { label: 'Cookie-Richtlinie', href: '/cookie-richtlinie' },
]

const socials = [
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: Linkedin,  href: 'https://linkedin.com',  label: 'LinkedIn'  },
  { Icon: Facebook,  href: 'https://facebook.com',  label: 'Facebook'  },
]

export default function Footer() {
  return (
    <footer className="bg-[#060609] border-t border-white/[0.06] px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/[0.06]">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" aria-label="Prince Digital – Startseite" className="inline-flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="Prince Digital Logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-lg font-bold text-white">
                Prince{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Digital
                </span>
              </span>
            </a>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-5">
              Webdesign & Digital Marketing aus Zürich — für KMUs in der Schweiz.
            </p>

            <div className="space-y-1 mb-5">
              <a href="mailto:admin@prince-digitals.ch" className="block text-white/35 text-xs hover:text-white/70 transition-colors">
                admin@prince-digitals.ch
              </a>
              <a href="tel:+41764336969" className="block text-white/35 text-xs hover:text-white/70 transition-colors">
                076 433 69 69
              </a>
              <p className="text-white/25 text-xs">Zürich, Schweiz</p>
            </div>

            {/* Socials */}
            <div className="flex gap-2" aria-label="Soziale Netzwerke">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/[0.05] hover:bg-indigo-500/20 border border-white/[0.08] hover:border-indigo-500/30 rounded-lg flex items-center justify-center transition-all group"
                >
                  <Icon size={14} className="text-white/40 group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-bold text-white/60 text-[11px] uppercase tracking-wider mb-4">Leistungen</h2>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/40 hover:text-white transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="font-bold text-white/60 text-[11px] uppercase tracking-wider mb-4">Unternehmen</h2>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/40 hover:text-white transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="font-bold text-white/60 text-[11px] uppercase tracking-wider mb-4">Rechtliches</h2>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/40 hover:text-white transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Prince Digital — Amir Ali Alizadeh. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/20 text-xs">Made with ♥ in der Schweiz</p>
        </div>
      </div>
    </footer>
  )
}
