'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, TrendingUp, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Webdesign & Entwicklung',
    description:
      'Wir entwickeln moderne, schnelle und responsiv gestaltete Websites und Web-Apps, die Ihre Marke überzeugend präsentieren und Besucher in Kunden verwandeln.',
    features: ['Next.js & React', 'Mobile-first Design', 'SEO-Optimierung', 'Performance 90+'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Von SEO über Social-Media-Management bis hin zu bezahlten Kampagnen — wir bringen Ihre Marke dorthin, wo Ihre Zielgruppe ist, und sorgen für messbares Wachstum.',
    features: ['SEO & Content Marketing', 'Google & Meta Ads', 'Social Media Management', 'Analytics & Reporting'],
    featured: true,
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Consulting',
    description:
      'Digitale Transformation beginnt mit einer klaren Strategie. Wir analysieren Ihre Situation, entwickeln einen maßgeschneiderten Plan und begleiten Sie Schritt für Schritt.',
    features: ['Digitale Strategie', 'UX-Beratung & Audit', 'Wettbewerbsanalyse', 'Roadmap-Planung'],
  },
]

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0]
  index: number
  inView: boolean
}) {
  const Icon = service.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.15, ease: 'easeOut' }}
      className={`group relative flex flex-col rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
        service.featured
          ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/20'
          : 'bg-white border-slate-100 hover:border-blue-100 hover:shadow-xl'
      }`}
    >
      {service.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Beliebt
        </span>
      )}

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
          service.featured
            ? 'bg-white/20'
            : 'bg-blue-50 group-hover:bg-blue-600'
        }`}
      >
        <Icon
          size={24}
          strokeWidth={1.8}
          className={`transition-colors duration-300 ${
            service.featured
              ? 'text-white'
              : 'text-blue-600 group-hover:text-white'
          }`}
          aria-hidden="true"
        />
      </div>

      <h3
        className={`text-xl font-bold mb-3 ${
          service.featured ? 'text-white' : 'text-slate-900'
        }`}
      >
        {service.title}
      </h3>
      <p
        className={`leading-relaxed mb-6 flex-1 ${
          service.featured ? 'text-blue-100' : 'text-slate-500'
        }`}
      >
        {service.description}
      </p>

      <ul className="space-y-2.5 mb-8">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm">
            <CheckCircle2
              size={16}
              className={service.featured ? 'text-blue-200' : 'text-blue-600'}
              aria-hidden="true"
            />
            <span className={service.featured ? 'text-blue-50' : 'text-slate-600'}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#kontakt"
        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link ${
          service.featured
            ? 'text-white hover:gap-3'
            : 'text-blue-600 hover:gap-3'
        }`}
        aria-label={`Mehr über ${service.title} erfahren`}
      >
        Mehr erfahren
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </motion.article>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="leistungen" className="py-24 lg:py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-semibold text-sm uppercase tracking-widest"
          >
            Unsere Leistungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mt-3 mb-4"
          >
            Alles aus einer Hand
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed"
          >
            Wir bieten alles, was Ihr Unternehmen im digitalen Raum braucht —
            von der Webseite bis zur Performance-Kampagne.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
