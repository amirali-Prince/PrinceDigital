'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'HealthCore Clinic',
    category: 'Webdesign & Entwicklung',
    description: 'Neue Website mit Online-Terminbuchung und Patientenportal. Ladezeit unter 1 Sekunde, DSGVO-konform.',
    tags: ['Next.js', 'Tailwind', 'Figma'],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'GreenBuild GmbH',
    category: 'Digital Marketing',
    description: 'SEO & Google Ads — dreimal mehr qualifizierte Anfragen innerhalb von 60 Tagen nach Launch.',
    tags: ['SEO', 'Google Ads', 'Analytics'],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'LuxeRoom Hotels',
    category: 'Webdesign & Branding',
    description: 'Premium-Webauftritt mit integriertem Buchungssystem und komplett überarbeitetem Markenauftritt.',
    tags: ['Branding', 'React', 'UX'],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'TechStart SaaS',
    category: 'Strategy & Development',
    description: 'Konversionsstark konzipierte Landingpage — von null auf 500 Signups im ersten Monat.',
    tags: ['SaaS', 'Conversion', 'UX'],
    gradient: 'from-violet-500 to-purple-700',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-amber-600 font-semibold text-xs uppercase tracking-widest"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mt-2 mb-3"
          >
            Projekte, die etwas bewegt haben.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className="text-base sm:text-lg text-slate-500"
          >
            Reale Resultate für reale Unternehmen — demnächst mit Screenshots und Zahlen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.09 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-black/25 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Clock size={11} aria-hidden="true" /> In Kürze
                </div>
                <div className="absolute bottom-0 inset-x-0 px-5 py-3.5 bg-gradient-to-t from-black/30 to-transparent">
                  <h3 className="text-white font-bold text-lg leading-tight">{p.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <span className="text-amber-600 text-[11px] font-bold uppercase tracking-widest">{p.category}</span>
                <p className="text-slate-500 text-sm leading-relaxed mt-1.5 mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.55 }}
          className="text-center mt-10"
        >
          <a href="#kontakt" className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-sm hover:gap-3 transition-all">
            Ihr Projekt könnte hier stehen <ArrowRight size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
