'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import { useT } from '@/lib/i18n'

export default function Hero() {
  const t = useT()

  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="#09090f"
        gradientBackgroundEnd="#0d0919"
        firstColor="99, 102, 241"
        secondColor="139, 92, 246"
        thirdColor="79, 70, 229"
        fourthColor="109, 40, 217"
        fifthColor="167, 139, 250"
        pointerColor="129, 140, 248"
        blendingValue="hard-light"
        size="60%"
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
          className="inline-flex items-center gap-2.5 border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <Sparkles size={13} className="text-indigo-400" aria-hidden="true" />
          {t.hero.badge}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-5 max-w-5xl"
        >
          {t.hero.h1a}
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            {t.hero.h1b}
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="max-w-2xl text-lg sm:text-xl text-white/55 leading-relaxed mb-10"
        >
          {t.hero.sub}
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
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white px-7 py-4 rounded-full font-bold text-base transition-all duration-200 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
          >
            {t.hero.cta1} <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-indigo-500/50 bg-white/[0.04] hover:bg-indigo-500/[0.08] text-white px-7 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            {t.hero.cta2}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 flex flex-row items-center justify-center gap-10 sm:gap-16"
        >
          {[
            { v: t.hero.stat1v, l: t.hero.stat1l },
            { v: t.hero.stat2v, l: t.hero.stat2l },
            { v: t.hero.stat3v, l: t.hero.stat3l },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                {s.v}
              </div>
              <div className="text-xs sm:text-sm text-white/40 mt-0.5 font-medium">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#leistungen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        aria-label="Weiter scrollen"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 text-white/25 hover:text-indigo-400 transition-colors"
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.7, repeat: Infinity }}>
          <ChevronDown size={26} />
        </motion.div>
      </motion.a>
    </section>
  )
}
