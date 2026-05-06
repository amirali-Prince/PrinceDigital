'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Bergmann',
    company: 'Bergmann Consulting GmbH',
    role: 'Geschäftsführer',
    text: 'Die neue Website hat unsere Anfragerate in 3 Monaten verdoppelt. Schnelle Umsetzung, modernes Design — rundum empfehlenswert.',
    rating: 5,
    initials: 'MB',
    color: 'bg-amber-600',
  },
  {
    name: 'Sarah Müller',
    company: 'Münchner Feinbäckerei',
    role: 'Inhaberin',
    text: 'Transparent, persönlich und das Ergebnis ist wunderschön. Ich hätte nicht gedacht, dass es so unkompliziert geht.',
    rating: 5,
    initials: 'SM',
    color: 'bg-slate-700',
  },
  {
    name: 'Thomas Richter',
    company: 'RichterTech Solutions',
    role: 'CEO',
    text: 'Innerhalb von 2 Monaten auf Google Seite 1. Professionell, ehrlich und ergebnisorientiert — genau was wir gesucht haben.',
    rating: 5,
    initials: 'TR',
    color: 'bg-amber-800',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-amber-600 font-semibold text-xs uppercase tracking-widest"
          >
            Kundenstimmen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mt-2 mb-3"
          >
            Was unsere Kunden sagen
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.13 }}
              className="relative bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-lg hover:border-amber-100 transition-all flex flex-col"
            >
              <Quote size={32} className="absolute top-5 right-5 text-amber-100" aria-hidden="true" />
              <div className="flex gap-0.5 mb-4" role="img" aria-label={`${t.rating} von 5 Sternen`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className={`w-9 h-9 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>{t.initials}</div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}, {t.company}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="text-center text-slate-400 text-xs mt-8">* Platzhalter — werden durch echte Kundenstimmen ersetzt</p>
      </div>
    </section>
  )
}
