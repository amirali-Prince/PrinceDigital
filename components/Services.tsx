'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, TrendingUp, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Webdesign & Entwicklung',
    description: 'Keine Templates. Keine Kompromisse. Wir bauen Websites, die Ihrer Marke gerecht werden — schnell, scharf und darauf ausgelegt, Besucher in zahlende Kunden zu verwandeln.',
    features: ['Next.js & React', 'Mobile-first', 'SEO-optimiert', 'Core Web Vitals 90+'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Sichtbarkeit ohne Substanz bringt nichts. Wir schalten Kampagnen, die kaufbereite Kunden erreichen — gezielt, messbar und mit Respekt für Ihr Budget.',
    features: ['SEO & Content', 'Google & Meta Ads', 'Social Media', 'Reporting & KPIs'],
    featured: true,
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Beratung',
    description: 'Bevor wir eine Zeile schreiben, denken wir. Wir analysieren Ihren Markt, Ihre Konkurrenz und Ihre Chancen — und liefern einen Plan, der hält.',
    features: ['Digitale Strategie', 'UX-Audit', 'Wettbewerbsanalyse', 'Roadmap'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="leistungen" className="py-16 sm:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-amber-600 font-semibold text-xs uppercase tracking-widest"
          >
            Leistungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mt-2 mb-3"
          >
            Drei Disziplinen. Ein Ergebnis.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className="max-w-xl mx-auto text-base sm:text-lg text-slate-500"
          >
            Website, Marketing und Strategie — nicht als Einzelpakete, sondern als System, das zusammenarbeitet.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.13 }}
                className={`relative group flex flex-col rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
                  s.featured
                    ? 'bg-slate-900 border-slate-900 shadow-2xl shadow-slate-900/20'
                    : 'bg-white border-slate-100 hover:shadow-xl hover:border-amber-100'
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                    Beliebt
                  </span>
                )}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                  s.featured ? 'bg-white/15' : 'bg-amber-50 group-hover:bg-amber-500'
                }`}>
                  <Icon size={22} strokeWidth={1.8} className={s.featured ? 'text-white' : 'text-amber-600 group-hover:text-white'} aria-hidden="true" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${s.featured ? 'text-white' : 'text-slate-900'}`}>{s.title}</h3>
                <p className={`text-sm leading-relaxed mb-5 flex-1 ${s.featured ? 'text-slate-300' : 'text-slate-500'}`}>{s.description}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={14} className={s.featured ? 'text-amber-400' : 'text-amber-500'} aria-hidden="true" />
                      <span className={s.featured ? 'text-slate-200' : 'text-slate-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5 ${s.featured ? 'text-amber-400' : 'text-amber-600'}`}
                >
                  Mehr erfahren <ArrowRight size={15} aria-hidden="true" />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
