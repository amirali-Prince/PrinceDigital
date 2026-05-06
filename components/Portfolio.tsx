'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'HealthCore Clinic',
    category: 'Webdesign & Entwicklung',
    description:
      'Moderne Website für eine Gesundheitsklinik mit Online-Terminbuchung, Patient-Portal und vollständiger DSGVO-Konformität.',
    tags: ['Next.js', 'Tailwind CSS', 'Figma'],
    gradient: 'from-blue-500 via-blue-600 to-indigo-700',
    shape1: 'top-6 right-6 w-28 h-28 border-2 border-white/30 rounded-2xl rotate-12',
    shape2: 'bottom-6 left-6 w-20 h-20 border-2 border-white/20 rounded-full',
    shape3: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-0.5 bg-white/10 rotate-45',
  },
  {
    title: 'GreenBuild GmbH',
    category: 'Digital Marketing & SEO',
    description:
      'Vollständige SEO-Strategie und Google Ads-Kampagne für ein Bauunternehmen — 3× mehr qualifizierte Anfragen in 60 Tagen.',
    tags: ['SEO', 'Google Ads', 'Analytics'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    shape1: 'top-6 left-6 w-24 h-24 border-2 border-white/25 rounded-full',
    shape2: 'bottom-4 right-8 w-32 h-8 border-2 border-white/20 rounded-full',
    shape3: 'top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-lg rotate-45',
  },
  {
    title: 'LuxeRoom Hotels',
    category: 'Webdesign & Branding',
    description:
      'Premium-Website und vollständiges Brand-Redesign für eine Hotelkette — inklusive integriertem Buchungssystem und Mehrsprachigkeit.',
    tags: ['Branding', 'React', 'UX Design'],
    gradient: 'from-amber-500 via-orange-500 to-rose-600',
    shape1: 'top-8 right-8 w-20 h-20 border-2 border-white/25 rounded-xl',
    shape2: 'bottom-6 left-6 w-28 h-6 border-2 border-white/20 rounded-full',
    shape3: 'top-1/2 left-1/3 w-16 h-16 bg-white/8 rounded-full',
  },
  {
    title: 'TechStart SaaS',
    category: 'Strategy & Development',
    description:
      'High-converting SaaS-Landingpage und durchdachter Onboarding-Flow für ein Berliner B2B-Startup — von 0 auf 500 Signups in Monat 1.',
    tags: ['SaaS', 'Conversion-Optimierung', 'UX'],
    gradient: 'from-violet-500 via-purple-600 to-fuchsia-700',
    shape1: 'top-4 right-4 w-32 h-32 border border-white/20 rounded-full',
    shape2: 'bottom-8 left-4 w-16 h-16 border-2 border-white/25 rounded-lg rotate-12',
    shape3: 'top-2/3 right-1/3 w-24 h-0.5 bg-white/15',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-blue-600 font-semibold text-sm uppercase tracking-widest"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mt-3 mb-4"
          >
            Unsere Projekte
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed"
          >
            Ein Vorgeschmack auf kommende Arbeiten — sorgfältig kuratiert, demnächst live.
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + index * 0.1, ease: 'easeOut' }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-400 hover:-translate-y-1"
            >
              {/* Visual thumbnail */}
              <div className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                {/* Abstract decorative shapes */}
                <div aria-hidden="true" className={`absolute ${project.shape1}`} />
                <div aria-hidden="true" className={`absolute ${project.shape2}`} />
                <div aria-hidden="true" className={`absolute ${project.shape3}`} />

                {/* Glass shine */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
                />

                {/* Coming Soon badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/25 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Clock size={11} aria-hidden="true" />
                  In Kürze
                </div>

                {/* Project name overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/35 to-transparent">
                  <h3 className="text-white font-bold text-xl leading-tight">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
                  {project.category}
                </span>
                <p className="text-slate-500 text-sm leading-relaxed mt-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 mb-4">
            Werden Sie einer unserer ersten Referenzkunden.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200"
          >
            Jetzt Projekt anfragen <ArrowRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
