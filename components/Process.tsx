'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useT } from '@/lib/i18n'

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const t = useT()

  const steps = [
    { n: '01', title: t.process.step1t, desc: t.process.step1d, tag: t.process.step1tag },
    { n: '02', title: t.process.step2t, desc: t.process.step2d, tag: t.process.step2tag },
    { n: '03', title: t.process.step3t, desc: t.process.step3d, tag: t.process.step3tag },
    { n: '04', title: t.process.step4t, desc: t.process.step4d, tag: t.process.step4tag },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#0d0b1a] px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="sig-badge"
          >
            {t.process.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-4 mb-0"
          >
            {t.process.h2}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.18, duration: 0.4 }}
            className="sig-line mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.24 }}
            className="text-base sm:text-lg text-white/55"
          >
            {t.process.sub}
          </motion.p>
        </div>

        {/* Timeline — desktop: 4 columns, mobile: vertical list */}
        <div className="relative">

          {/* Desktop horizontal connector line */}
          <div className="hidden lg:block absolute top-[28px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-indigo-500/20 via-violet-500/30 to-indigo-500/20" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="relative flex lg:flex-col gap-5 lg:gap-0"
              >
                {/* Mobile vertical connector line (between steps) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-[27px] top-[56px] bottom-[-32px] w-px bg-gradient-to-b from-indigo-500/30 to-transparent" aria-hidden="true" />
                )}

                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 lg:w-14 lg:h-14 lg:mx-auto lg:mb-6 rounded-full bg-[#0d0b1a] border-2 border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/10">
                  <span
                    className="text-[15px] font-black bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #7c3aed)' }}
                  >
                    {step.n}
                  </span>
                </div>

                {/* Step content */}
                <div className="pt-1 lg:pt-0 lg:text-center">
                  {/* Tag pill */}
                  <span className="inline-flex items-center bg-indigo-500/[0.10] border border-indigo-500/20 text-indigo-300/80 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest mb-3">
                    {step.tag}
                  </span>
                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
