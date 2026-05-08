'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useT } from '@/lib/i18n'

const testimonials = [
  {
    name: 'Michael Bergmann',
    company: 'Bergmann Consulting GmbH',
    role: 'Geschäftsführer',
    text: 'Die neue Website hat unsere Anfragerate in drei Monaten verdoppelt. Schnelle Umsetzung, klare Kommunikation, modernes Ergebnis — ich hätte es nicht besser erwartet.',
    rating: 5,
    initials: 'MB',
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    name: 'Sarah Müller',
    company: 'Münchner Feinbäckerei',
    role: 'Inhaberin',
    text: 'Transparent, persönlich und das Ergebnis ist wunderschön. Was mich am meisten überzeugt hat: Amir Ali hat mitgedacht — nicht nur ausgeführt.',
    rating: 5,
    initials: 'SM',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Thomas Richter',
    company: 'RichterTech Solutions',
    role: 'CEO',
    text: 'Innerhalb von zwei Monaten auf Seite 1 bei Google. Professionell, ehrlich und mit echtem Verständnis für unser Business — genau das haben wir gesucht.',
    rating: 5,
    initials: 'TR',
    gradient: 'from-purple-500 to-indigo-600',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const t = useT()

  return (
    <section className="py-20 sm:py-28 bg-[#09090f] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="sig-badge"
          >
            {t.testimonials.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-4 mb-0"
          >
            {t.testimonials.h2}
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
            {t.testimonials.sub}
          </motion.p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.13 }}
              className="relative bg-white/[0.04] rounded-2xl p-7 border border-white/[0.08] hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-300 flex flex-col group"
            >
              {/* Decorative quote */}
              <Quote
                size={36}
                className="absolute top-5 right-5 text-indigo-500/15 group-hover:text-indigo-500/25 transition-colors"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4" role="img" aria-label={`${item.rating} von 5 Sternen`}>
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-indigo-400 text-indigo-400" aria-hidden="true" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{item.text}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-lg`}>
                  {item.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{item.name}</div>
                  <div className="text-white/40 text-xs">{item.role}, {item.company}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
