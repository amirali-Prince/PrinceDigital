'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useT, useLang } from '@/lib/i18n'

const SLUGS = ['streetwear-brand-shop', 'beratungsfirma-zuerich', 'taxi-buchungsplattform']

const DE_PROJECTS = [
  {
    title: 'Streetwear Brand Shop',
    category: 'Online Shop',
    description: 'Kompletter Online-Shop für eine Modemarke. Produkte, Warenkorb, Checkout — alles drin. Sieht aus wie die Grossen, kostet nicht wie die Grossen.',
    tags: ['Online Shop', 'Zahlungssystem', 'Mobile-first'],
    gradient: 'from-indigo-600 via-violet-600 to-purple-700',
    glowColor: 'shadow-indigo-500/25',
  },
  {
    title: 'Beratungsfirma Zürich',
    category: 'Business Website',
    description: 'Professioneller Webauftritt für eine Unternehmensberatung. Klar, seriös, überzeugend — damit Kunden sofort wissen: hier bin ich richtig.',
    tags: ['Business Website', 'SEO', 'Kontaktformular'],
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    glowColor: 'shadow-violet-500/25',
  },
  {
    title: 'Taxi Buchungsplattform',
    category: 'Web App',
    description: 'Komplette Buchungs-App für einen Fahrdienst. Kunden buchen live, Fahrer sehen alles in Echtzeit, Zahlung läuft automatisch.',
    tags: ['Web App', 'Live-Buchung', 'Zahlungsintegration'],
    gradient: 'from-purple-600 via-indigo-600 to-blue-700',
    glowColor: 'shadow-purple-500/25',
  },
]

const EN_PROJECTS = [
  {
    title: 'Streetwear Brand Shop',
    category: 'Online Shop',
    description: 'Complete online shop for a fashion brand. Products, cart, checkout — everything included. Looks like the big players, doesn\'t cost like them.',
    tags: ['Online Shop', 'Payment System', 'Mobile-first'],
    gradient: 'from-indigo-600 via-violet-600 to-purple-700',
    glowColor: 'shadow-indigo-500/25',
  },
  {
    title: 'Consulting Firm Zurich',
    category: 'Business Website',
    description: 'Professional web presence for a consulting firm. Clear, serious, convincing — so clients instantly know: this is the right place.',
    tags: ['Business Website', 'SEO', 'Contact Form'],
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    glowColor: 'shadow-violet-500/25',
  },
  {
    title: 'Taxi Booking Platform',
    category: 'Web App',
    description: 'Complete booking app for a transport service. Customers book live, drivers see everything in real time, payment runs automatically.',
    tags: ['Web App', 'Live Booking', 'Payment Integration'],
    gradient: 'from-purple-600 via-indigo-600 to-blue-700',
    glowColor: 'shadow-purple-500/25',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const t = useT()
  const { lang } = useLang()
  const projects = lang === 'de' ? DE_PROJECTS : EN_PROJECTS
  const conceptLabel = lang === 'de' ? 'Konzeptprojekt' : 'Concept Project'

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#0d0b1a] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="sig-badge"
          >
            {t.portfolio.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-4 mb-0"
          >
            {t.portfolio.h2}
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
            {t.portfolio.sub}
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.09 }}
            >
              <Link
                href={`/portfolio/${SLUGS[i]}`}
                className={`group block bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${p.glowColor}`}
              >
                {/* Image area */}
                <div className={`relative h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  {/* Noise texture */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.4%22/%3E%3C/svg%3E')] opacity-30 mix-blend-overlay" />

                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

                  {/* Konzeptprojekt badge */}
                  <div className="absolute top-3.5 left-3.5 bg-black/40 backdrop-blur-sm text-white/80 text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 uppercase tracking-widest">
                    {conceptLabel}
                  </div>

                  {/* Arrow on hover */}
                  <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-white/15 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                      <ArrowUpRight size={14} className="text-white" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title bar */}
                  <div className="absolute bottom-0 inset-x-0 px-5 py-4 bg-gradient-to-t from-black/50 to-transparent">
                    <h3 className="text-white font-bold text-lg leading-tight">{p.title}</h3>
                  </div>
                </div>

                <div className="p-5">
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-widest">
                    {p.category}
                  </span>
                  <p className="text-white/50 text-sm leading-relaxed mt-1.5 mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="bg-white/[0.06] border border-white/[0.10] text-white/60 text-xs font-medium px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
          className="text-center mt-10"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent font-semibold text-sm hover:gap-3 transition-all"
          >
            {t.portfolio.cta} <ArrowRight size={16} className="text-violet-400" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
