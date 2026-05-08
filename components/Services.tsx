'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Share2, Palette, TrendingUp, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useT, useLang } from '@/lib/i18n'

const DE_SERVICES = [
  {
    icon: Globe,
    title: 'Webdesign & Entwicklung',
    description: 'Keine Templates. Keine Kompromisse. Wir bauen Websites, die Ihrer Marke gerecht werden — schnell, scharf und darauf ausgelegt, Besucher in zahlende Kunden zu verwandeln.',
    features: ['Next.js & React', 'Mobile-first Design', 'SEO-optimiert', 'Core Web Vitals 90+'],
    accent: 'from-indigo-500 to-violet-500',
    glow: 'shadow-indigo-500/20',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Konsistente Präsenz auf allen Kanälen — Content der begeistert, Communities die wachsen, Kampagnen die konvertieren. Ihr Auftritt, professionell gemanagt.',
    features: ['Content Creation', 'Community Management', 'Paid Social Ads', 'Analytics & Reporting'],
    accent: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
    featured: true,
  },
  {
    icon: Palette,
    title: 'Branding & Logo Design',
    description: 'Ihre Marke ist mehr als ein Logo. Wir entwickeln eine vollständige visuelle Identität, die sofort erkennbar ist und Vertrauen aufbaut — auf jedem Medium.',
    features: ['Logo Design (55+ Stile)', 'Corporate Identity', 'Brand Guidelines', 'Print & Digital Assets'],
    accent: 'from-purple-500 to-indigo-500',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Online Marketing',
    description: 'Sichtbarkeit ohne Substanz bringt nichts. Wir schalten Kampagnen, die kaufbereite Kunden erreichen — gezielt, messbar und mit Respekt für Ihr Budget.',
    features: ['Technisches SEO', 'Google & Meta Ads', 'Content Marketing', 'KPI Dashboard'],
    accent: 'from-blue-500 to-indigo-500',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Projektentwicklung & Strategie',
    description: 'Bevor wir eine Zeile schreiben, denken wir. Wir analysieren Ihren Markt, Ihre Konkurrenz und Chancen — und liefern einen Plan, der hält.',
    features: ['Digitale Roadmap', 'Marktanalyse', 'UX-Konzept & Wireframes', 'Launch-Strategie'],
    accent: 'from-indigo-400 to-violet-400',
    glow: 'shadow-indigo-400/20',
  },
]

const EN_SERVICES = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'No templates. No compromises. We build websites that do your brand justice — fast, sharp, and designed to convert visitors into paying customers.',
    features: ['Next.js & React', 'Mobile-first Design', 'SEO Optimized', 'Core Web Vitals 90+'],
    accent: 'from-indigo-500 to-violet-500',
    glow: 'shadow-indigo-500/20',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Consistent presence across all channels — content that inspires, communities that grow, campaigns that convert. Your presence, professionally managed.',
    features: ['Content Creation', 'Community Management', 'Paid Social Ads', 'Analytics & Reporting'],
    accent: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
    featured: true,
  },
  {
    icon: Palette,
    title: 'Branding & Logo Design',
    description: 'Your brand is more than a logo. We develop a complete visual identity that is instantly recognizable and builds trust — on every medium.',
    features: ['Logo Design (55+ styles)', 'Corporate Identity', 'Brand Guidelines', 'Print & Digital Assets'],
    accent: 'from-purple-500 to-indigo-500',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Online Marketing',
    description: 'Visibility without substance means nothing. We run campaigns that reach purchase-ready customers — targeted, measurable, and respectful of your budget.',
    features: ['Technical SEO', 'Google & Meta Ads', 'Content Marketing', 'KPI Dashboard'],
    accent: 'from-blue-500 to-indigo-500',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Project Development & Strategy',
    description: 'Before we write a single line, we think. We analyze your market, your competition, and your opportunities — and deliver a plan that holds.',
    features: ['Digital Roadmap', 'Market Analysis', 'UX Concept & Wireframes', 'Launch Strategy'],
    accent: 'from-indigo-400 to-violet-400',
    glow: 'shadow-indigo-400/20',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const t = useT()
  const { lang } = useLang()
  const services = lang === 'de' ? DE_SERVICES : EN_SERVICES

  return (
    <section id="leistungen" className="py-20 sm:py-28 bg-[#0d0b1a] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="sig-badge"
          >
            {t.services.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-4 mb-0"
          >
            {t.services.h2}
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
            className="max-w-xl mx-auto text-base sm:text-lg text-white/55"
          >
            {t.services.sub}
          </motion.p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.1 }}
                className={`relative group flex flex-col rounded-2xl p-7 border-[1.5px] transition-all duration-300 hover:-translate-y-1 ${
                  s.featured
                    ? `bg-gradient-to-br ${s.accent} bg-opacity-10 border-indigo-500/50 shadow-xl ${s.glow}`
                    : 'bg-white/[0.04] border-white/[0.07] border-l-indigo-500/40 hover:border-indigo-500/35 hover:border-l-indigo-500/70 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-indigo-500/[0.06]'
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-indigo-500/30">
                    {t.services.popular}
                  </span>
                )}

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${s.accent} bg-opacity-20 transition-all duration-300`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${s.accent} opacity-20 absolute`} />
                  <Icon size={22} strokeWidth={1.8} className="text-white relative z-10" aria-hidden="true" />
                </div>

                <h3 className="text-[17px] font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5 flex-1 text-white/55">{s.description}</p>

                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={14} className="text-indigo-400 flex-shrink-0" aria-hidden="true" />
                      <span className="text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-violet-300 transition-all hover:gap-2.5"
                >
                  {t.services.more} <ArrowRight size={15} aria-hidden="true" />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
