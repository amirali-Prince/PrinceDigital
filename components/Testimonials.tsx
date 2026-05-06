'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Bergmann',
    company: 'Bergmann Consulting GmbH',
    role: 'Geschäftsführer',
    text: 'Prince Digital hat unsere Website von Grund auf neu entwickelt. Das Ergebnis hat alle Erwartungen übertroffen — schnell, modern und unsere Anfragerate hat sich innerhalb von 3 Monaten verdoppelt.',
    rating: 5,
    initials: 'MB',
    accent: 'bg-blue-600',
  },
  {
    name: 'Sarah Müller',
    company: 'Münchner Feinbäckerei',
    role: 'Inhaberin',
    text: 'Als kleines Unternehmen hatte ich Bedenken, dass eine professionelle Agentur zu teuer und unpersönlich wäre. Prince Digital war das genaue Gegenteil: transparent, engagiert — und das Ergebnis ist wunderschön.',
    rating: 5,
    initials: 'SM',
    accent: 'bg-indigo-600',
  },
  {
    name: 'Thomas Richter',
    company: 'RichterTech Solutions',
    role: 'CEO',
    text: 'Die SEO- und Google-Ads-Kampagne hat uns innerhalb von 2 Monaten auf Seite 1 gebracht. Sehr professionelles Team, das wirklich hält, was es verspricht. Klare Empfehlung!',
    rating: 5,
    initials: 'TR',
    accent: 'bg-violet-600',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 lg:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-blue-600 font-semibold text-sm uppercase tracking-widest"
          >
            Kundenstimmen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mt-3 mb-4"
          >
            Was unsere Kunden sagen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-lg text-slate-500 leading-relaxed"
          >
            Echte Ergebnisse, echte Zufriedenheit. Lesen Sie, was Unternehmen über
            die Zusammenarbeit mit uns berichten.
          </motion.p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + index * 0.15, ease: 'easeOut' }}
              className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex flex-col"
            >
              {/* Decorative quote icon */}
              <Quote
                size={40}
                className="absolute top-6 right-6 text-blue-100"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5" role="img" aria-label={`${t.rating} von 5 Sternen`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-slate-600 leading-relaxed mb-6 flex-1 relative z-10">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3 mt-auto">
                <div
                  className={`w-10 h-10 ${t.accent} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">
                    {t.role}, {t.company}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-slate-400 text-xs mt-10"
        >
          * Platzhalter-Testimonials — werden durch echte Kundenstimmen ersetzt
        </motion.p>
      </div>
    </section>
  )
}
