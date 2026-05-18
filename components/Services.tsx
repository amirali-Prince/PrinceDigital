'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Share2, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useT, useLang } from '@/lib/i18n'

const DE_SERVICES = [
  {
    icon: Globe,
    title: 'Deine Website — fertig in 3 Wochen',
    description: 'Egal ob du ein Geschäft hast, eine Marke aufbaust oder eine App brauchst — wir bauen dir genau das, was du brauchst. Kein Baukastensystem, keine Vorlage. Deine Website, von Grund auf neu.',
    features: ['Online Shops', 'Firmenwebsites', 'Buchungs-Apps', 'Alles dazwischen'],
    accent: 'from-indigo-500 to-violet-500',
    glow: 'shadow-indigo-500/20',
    featured: true,
  },
  {
    icon: Share2,
    title: 'Social Media — wir übernehmen das',
    description: 'Du hast keine Zeit dich um Instagram, TikTok und Co. zu kümmern? Wir machen das. Inhalte erstellen, posten, Kommentare beantworten — dein Auftritt läuft, während du dein Business führst.',
    features: ['Content erstellen', 'Regelmässig posten', 'Werbeanzeigen schalten', 'Ergebnisse zeigen'],
    accent: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Noch mehr? Kein Problem.',
    description: 'Visitenkarten, Fahrzeugbeschriftung, Arbeitskleidung, Logo, Flyer — wenn es mit deiner Marke zu tun hat, kümmern wir uns darum. Sag uns einfach was du brauchst.',
    features: ['Logo & Branding', 'Visitenkarten', 'Fahrzeugbeschriftung', 'Arbeitskleidung & Merchandise'],
    accent: 'from-purple-500 to-indigo-500',
    glow: 'shadow-purple-500/20',
  },
]

const EN_SERVICES = [
  {
    icon: Globe,
    title: 'Your website — done in 3 weeks',
    description: 'Whether you have a business, are building a brand, or need an app — we build exactly what you need. No drag-and-drop builder, no template. Your website, built from scratch.',
    features: ['Online Shops', 'Business Websites', 'Booking Apps', 'Everything in between'],
    accent: 'from-indigo-500 to-violet-500',
    glow: 'shadow-indigo-500/20',
    featured: true,
  },
  {
    icon: Share2,
    title: 'Social Media — we handle it',
    description: 'No time to deal with Instagram, TikTok and the rest? We do it. Create content, post, reply to comments — your presence runs while you run your business.',
    features: ['Create content', 'Post consistently', 'Run paid ads', 'Show results'],
    accent: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Need more? No problem.',
    description: 'Business cards, vehicle wraps, workwear, logo, flyers — if it has to do with your brand, we handle it. Just tell us what you need.',
    features: ['Logo & Branding', 'Business Cards', 'Vehicle Wrapping', 'Workwear & Merchandise'],
    accent: 'from-purple-500 to-indigo-500',
    glow: 'shadow-purple-500/20',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
