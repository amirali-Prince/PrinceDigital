'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      {/* Gold gradient animation background */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="#0c0a09"
        gradientBackgroundEnd="#111008"
        firstColor="251, 191, 36"
        secondColor="234, 179, 8"
        thirdColor="180, 83, 9"
        fourthColor="217, 119, 6"
        fifthColor="252, 211, 77"
        pointerColor="253, 230, 138"
        blendingValue="hard-light"
        size="65%"
        containerClassName="min-h-[100dvh]"
        interactive
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center pt-14 md:pt-0">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 border border-amber-400/40 bg-amber-400/10 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" aria-hidden="true" />
          Digitalagentur · Hombrechtikon, Zürich
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-5 max-w-4xl"
        >
          Websites die verkaufen.
          <br />
          <span className="text-amber-400">Marketing das wirkt.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed mb-10"
        >
          Prince Digitals baut digitale Präsenzen, die Ihre Konkurrenz alt aussehen lassen —
          strategisch durchdacht, handwerklich perfekt, messbar im Ergebnis.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-sm sm:max-w-none"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-7 py-4 rounded-full font-bold text-base transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            Projekt starten <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white px-7 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Unsere Arbeit
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="mt-16 flex flex-row items-center justify-center gap-10 sm:gap-16"
        >
          {[
            { v: '50+', l: 'Projekte' },
            { v: '100%', l: 'Zufriedenheit' },
            { v: '5★', l: 'Bewertung' },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400">{s.v}</div>
              <div className="text-xs sm:text-sm text-white/50 mt-0.5 font-medium">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#leistungen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Weiter scrollen"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 text-white/30 hover:text-amber-400 transition-colors"
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.7, repeat: Infinity }}>
          <ChevronDown size={26} />
        </motion.div>
      </motion.a>
    </section>
  )
}
