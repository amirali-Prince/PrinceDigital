'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Shield, MessageSquare, ArrowRight } from 'lucide-react'
import { useT } from '@/lib/i18n'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const t = useT()

  const usps = [
    { icon: Zap,           title: t.about.usp1t, description: t.about.usp1d },
    { icon: Shield,        title: t.about.usp2t, description: t.about.usp2d },
    { icon: MessageSquare, title: t.about.usp3t, description: t.about.usp3d },
  ]

  return (
    <section id="ueber-uns" className="py-20 sm:py-28 bg-[#09090f] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" ref={ref}>

          {/* Left — Text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="sig-badge"
            >
              {t.about.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-4 mb-0 leading-tight"
            >
              {t.about.h2a}{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                {t.about.h2b}
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.16, duration: 0.4 }}
              style={{ transformOrigin: 'left' }}
              className="sig-line"
            />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.22 }}
              className="space-y-4 text-white/60 leading-relaxed text-[15px]"
            >
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              href="#kontakt"
              className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-px"
            >
              {t.about.cta} <ArrowRight size={16} aria-hidden="true" />
            </motion.a>

            {/* Avatar / Identity strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.38 }}
              className="flex items-center gap-3 mt-6 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg shadow-indigo-500/30">
                AA
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Amir Ali Alizadeh</div>
                <div className="text-white/45 text-xs">Founder — Prince Digital, Zürich</div>
              </div>
            </motion.div>
          </div>

          {/* Right — USP cards */}
          <div className="space-y-4">
            {usps.map((u, i) => {
              const Icon = u.icon
              return (
                <motion.div
                  key={u.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.18 + i * 0.12 }}
                  className="group flex gap-4 p-5 bg-white/[0.04] rounded-2xl border-[1.5px] border-white/[0.07] border-l-indigo-500/40 hover:border-indigo-500/35 hover:border-l-indigo-500/70 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-indigo-500/[0.06] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 group-hover:from-indigo-500/30 group-hover:to-violet-500/30 transition-all">
                    <Icon size={20} strokeWidth={1.8} className="text-indigo-400 group-hover:text-violet-300 transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1">{u.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{u.description}</p>
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
