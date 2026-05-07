'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Shield, HeartHandshake, ArrowRight } from 'lucide-react'

const usps = [
  {
    icon: Zap,
    title: 'Schnelle Umsetzung',
    description: 'Vom Erstgespräch zur fertigen Website in 3–5 Wochen. Kein endloses Hin und Her.',
  },
  {
    icon: Shield,
    title: 'Transparent & fair',
    description: 'Fixpreise, klare Meilensteine — keine bösen Überraschungen auf der Rechnung.',
  },
  {
    icon: HeartHandshake,
    title: 'Direkt & persönlich',
    description: 'Sie sprechen immer direkt mit uns — nicht mit einem Ticketsystem oder Account Manager.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="ueber-uns" className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center" ref={ref}>

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-amber-600 font-semibold text-xs uppercase tracking-widest"
            >
              Über uns
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mt-2 mb-5"
            >
              Nicht die grösste Agentur.{' '}
              <span className="text-amber-600">Die richtige.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 }}
              className="space-y-3 text-slate-500 leading-relaxed"
            >
              <p>
                Prince Digitals ist eine Boutique-Agentur aus Hombrechtikon, Zürich.
                Wir arbeiten mit KMUs, die ihre digitale Präsenz ernst nehmen —
                und mit jemandem zusammenarbeiten wollen, der dasselbe tut.
              </p>
              <p>
                Kein Grosskonzern. Kein Callcenter. Bei uns haben Sie immer einen direkten Draht
                zu den Menschen, die Ihre Website bauen und Ihre Kampagnen steuern.
              </p>
            </motion.div>
            <motion.a
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              href="#kontakt"
              className="inline-flex items-center gap-2 mt-7 bg-slate-900 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-px"
            >
              Kennenlernen <ArrowRight size={16} aria-hidden="true" />
            </motion.a>
          </div>

          {/* Right — USPs */}
          <div className="space-y-4">
            {usps.map((u, i) => {
              const Icon = u.icon
              return (
                <motion.div
                  key={u.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.18 + i * 0.12 }}
                  className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-transparent hover:border-amber-100 hover:bg-amber-50/40 transition-all group"
                >
                  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                    <Icon size={20} strokeWidth={1.8} className="text-amber-600 group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{u.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{u.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
