'use client'

import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useLang } from '@/lib/i18n'
import { getProject, PROJECTS } from '@/lib/projects'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase">{n}</span>
      <span className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent" />
      <span className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase">{label}</span>
    </div>
  )
}

function MockScreen({ gradient }: { gradient: string }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/60">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.05] border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 mx-4 h-5 bg-white/[0.06] rounded-full border border-white/[0.06]" />
      </div>
      {/* Screen content — abstract UI */}
      <div className={`h-52 sm:h-72 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.15) 0%, transparent 50%)',
        }} />
        {/* Abstract UI elements */}
        <div className="absolute top-6 left-6 right-6 space-y-3">
          <div className="h-2.5 w-1/3 bg-white/30 rounded-full" />
          <div className="h-2 w-2/3 bg-white/20 rounded-full" />
          <div className="h-2 w-1/2 bg-white/15 rounded-full" />
        </div>
        <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
          {[0.25, 0.18, 0.22].map((op, i) => (
            <div key={i} className="h-14 rounded-xl" style={{ background: `rgba(255,255,255,${op})` }} />
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 rounded-full bg-white/30 backdrop-blur-sm" />
      </div>
    </div>
  )
}

export default function ProjectPage() {
  const params  = useParams()
  const slug    = params?.slug as string
  const project = getProject(slug)
  const { lang } = useLang()

  if (!project) return notFound()

  const data = project[lang]

  return (
    <main className="bg-[#09090f] min-h-screen text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
        <div className="absolute inset-0 bg-[#09090f]/55" />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
        />

        {/* Back link */}
        <motion.div
          {...fadeUp(0)}
          className="absolute top-24 left-4 sm:left-8 z-20"
        >
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Portfolio
          </Link>
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 px-4 sm:px-8 lg:px-16 pb-16 sm:pb-20 max-w-7xl mx-auto w-full">
          <motion.span {...fadeUp(0.1)} className="sig-badge mb-6 inline-flex">
            {data.category}
          </motion.span>
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl sm:text-7xl lg:text-[90px] font-bold tracking-tight leading-[0.95] mb-6 max-w-4xl"
          >
            {data.title}
          </motion.h1>
          <motion.p
            {...fadeUp(0.3)}
            className="text-lg sm:text-xl text-white/65 max-w-xl leading-relaxed"
          >
            {data.description}
          </motion.p>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap gap-8 sm:gap-14 mt-10 pt-8 border-t border-white/[0.12]"
          >
            {[data.stat1, data.stat2, data.stat3].map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-bold text-white">{s.value}</div>
                <div className="text-white/45 text-sm mt-0.5 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 text-white/30"
        >
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── MOCK SCREENSHOT ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <MockScreen gradient={project.gradient} />
        </motion.div>
      </section>

      {/* ── CHALLENGE ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel n="01" label={lang === 'de' ? 'Herausforderung' : 'Challenge'} />
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              {lang === 'de' ? 'Was war das Problem?' : 'What was the problem?'}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-lg leading-relaxed pt-8 lg:pt-12"
          >
            {data.challenge}
          </motion.p>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#0d0b1a] border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel n="02" label={lang === 'de' ? 'Lösung' : 'Solution'} />
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              {lang === 'de' ? 'Was wir gebaut haben.' : 'What we built.'}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-lg leading-relaxed pt-8 lg:pt-12"
          >
            {data.solution}
          </motion.p>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <SectionLabel n="03" label={lang === 'de' ? 'Ergebnis' : 'Results'} />
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              {lang === 'de' ? 'Was dabei rausgekommen ist.' : 'What came out of it.'}
            </h2>
          </motion.div>

          {/* Big stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[data.stat1, data.stat2, data.stat3].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.04] border-[1.5px] border-white/[0.07] border-l-indigo-500/50 rounded-2xl p-8"
              >
                <div
                  className="text-4xl sm:text-5xl font-bold mb-2 bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})` }}
                >
                  {s.value}
                </div>
                <div className="text-white/50 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/60 text-lg leading-relaxed max-w-2xl"
          >
            {data.results}
          </motion.p>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[#0d0b1a] border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <SectionLabel n="04" label={lang === 'de' ? 'Tech Stack' : 'Tech Stack'} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2.5"
          >
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="sig-badge"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA + NEXT PROJECT ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/40 text-sm mb-3 font-medium uppercase tracking-widest">
              {lang === 'de' ? 'Auch so ein Projekt?' : 'Want a project like this?'}
            </p>
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:-translate-y-px"
            >
              {lang === 'de' ? 'Projekt anfragen' : 'Request a project'}
              <ArrowRight size={17} />
            </a>
          </motion.div>

          {/* Next project link */}
          {(() => {
            const idx  = PROJECTS.findIndex((p) => p.slug === slug)
            const next = PROJECTS[(idx + 1) % PROJECTS.length]
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-white/40 text-sm mb-3 font-medium uppercase tracking-widest">
                  {lang === 'de' ? 'Nächstes Projekt' : 'Next project'}
                </p>
                <Link
                  href={`/portfolio/${next.slug}`}
                  className="inline-flex items-center gap-2.5 border border-white/[0.12] hover:border-indigo-500/40 bg-white/[0.04] hover:bg-indigo-500/[0.08] text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-px"
                >
                  {next[lang].title}
                  <ArrowRight size={17} />
                </Link>
              </motion.div>
            )
          })()}
        </div>
      </section>

    </main>
  )
}
