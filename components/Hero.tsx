'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-white pt-16">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-[10%] w-96 h-96 bg-amber-400/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 35, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-[5%] w-80 h-80 bg-slate-900/5 rounded-full blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: 'radial-gradient(circle, #0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-7"
        >
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" aria-hidden="true" />
          Digitalagentur · Hombrechtikon, Zürich
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-5"
        >
          Ihre Digitalagentur
          <br />
          <span className="text-amber-600">in der Schweiz.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto text-lg sm:text-xl text-slate-500 leading-relaxed mb-9"
        >
          Websites, SEO und Online-Marketing, die Kunden gewinnen —
          persönlich betreut, messbar erfolgreich.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-600 text-white px-7 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            Projekt starten <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-900 text-slate-800 px-7 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            Unsere Arbeit
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-row items-center justify-center gap-8 sm:gap-14"
        >
          {[
            { v: '50+', l: 'Projekte' },
            { v: '100%', l: 'Zufriedenheit' },
            { v: '5★', l: 'Bewertung' },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">{s.v}</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-0.5">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#leistungen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        aria-label="Weiter scrollen"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-300 hover:text-amber-500 transition-colors"
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={26} />
        </motion.div>
      </motion.a>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  )
}
