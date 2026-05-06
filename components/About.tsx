'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Shield, HeartHandshake, ArrowRight } from 'lucide-react'

const usps = [
  {
    icon: Zap,
    title: 'Schnelle Umsetzung',
    description:
      'Von der Idee zur fertigen Webseite in wenigen Wochen — ohne Kompromisse bei Qualität oder Design.',
  },
  {
    icon: Shield,
    title: 'Transparenz & Verlässlichkeit',
    description:
      'Klare Kommunikation, faire Preise, keine versteckten Kosten. Sie wissen jederzeit genau, woran wir arbeiten.',
  },
  {
    icon: HeartHandshake,
    title: 'Persönliche Betreuung',
    description:
      'Kein Callcenter, keine Anonymität. Sie haben einen direkten Ansprechpartner, der Ihr Projekt in- und auswendig kennt.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ueber-uns" className="py-24 lg:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center" ref={ref}>
          {/* Left — Text block */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-blue-600 font-semibold text-sm uppercase tracking-widest"
            >
              Über uns
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mt-3 mb-6"
            >
              Ihr Partner für digitales Wachstum
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-slate-500 leading-relaxed text-lg"
            >
              <p>
                Prince Digital ist eine Boutique-Agentur mit einer Leidenschaft für klares
                Design und messbares Wachstum. Wir glauben, dass jedes Unternehmen — egal
                wie groß — einen starken digitalen Auftritt verdient.
              </p>
              <p>
                Unser Team vereint tiefe Erfahrung in Webentwicklung, UX-Design und digitalem
                Marketing. Wir denken strategisch, arbeiten präzise und liefern Ergebnisse,
                auf die Sie stolz sein können.
              </p>
              <p>
                Was uns unterscheidet: Wir behandeln Ihr Projekt wie unser eigenes — mit dem
                gleichen Engagement, der gleichen Sorgfalt und dem gleichen Anspruch
                an Exzellenz.
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              href="#kontakt"
              className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-px"
            >
              Zusammenarbeiten
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
          </div>

          {/* Right — USP cards */}
          <div className="space-y-5">
            {usps.map((usp, index) => {
              const Icon = usp.icon
              return (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
                  className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1.5">{usp.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{usp.description}</p>
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
