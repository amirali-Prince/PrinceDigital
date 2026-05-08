'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useT, useLang } from '@/lib/i18n'

const DE_FAQS = [
  {
    q: 'Was kostet eine Website bei Prince Digital?',
    a: 'Jedes Projekt ist anders. Eine einfache Business-Website startet ab CHF 2\'500, komplexere Projekte mit Shop oder individuellen Funktionen kosten entsprechend mehr. Nach einem kurzen Erstgespräch erhalten Sie ein fixes Angebot — ohne versteckte Kosten.',
  },
  {
    q: 'Wie lange dauert die Umsetzung?',
    a: 'Für eine Standard-Business-Website rechnen wir mit 3–5 Wochen. Grössere Projekte können 6–10 Wochen dauern. Wir kommunizieren klare Meilensteine und halten uns daran.',
  },
  {
    q: 'Brauche ich technisches Wissen?',
    a: 'Nein. Wir erklären alles auf Deutsch, ohne Fachjargon. Nach dem Launch zeigen wir Ihnen, wie Sie Inhalte selbst anpassen können — wenn Sie das wollen. Wenn nicht, übernehmen wir das.',
  },
  {
    q: 'Was passiert nach dem Launch?',
    a: 'Wir lassen Sie nicht allein. Wir bieten optionale Wartungspakete an, sind für Fragen erreichbar und begleiten Sie beim weiteren Wachstum — ob mit SEO, Ads oder Website-Updates.',
  },
  {
    q: 'Arbeiten Sie nur mit Unternehmen aus Zürich?',
    a: 'Nein. Unsere Kunden kommen aus der ganzen Deutschschweiz. Da das meiste digital läuft, ist der Standort nebensächlich — obwohl wir ein persönliches Gespräch immer bevorzugen.',
  },
  {
    q: 'Wie läuft das Erstgespräch ab?',
    a: 'Ganz entspannt. Wir besprechen Ihr Projekt, Ihre Ziele und Ihren Zeitrahmen. Keine Präsentation, kein Pitching — nur ein ehrliches Gespräch. Im Anschluss erhalten Sie ein konkretes Angebot.',
  },
  {
    q: 'Bietet Prince Digital auch Social Media Betreuung an?',
    a: 'Ja. Wir übernehmen das vollständige Social Media Management — von der Content-Strategie über die Gestaltung bis zur Planung und Schaltung bezahlter Anzeigen auf Instagram, Facebook und LinkedIn.',
  },
  {
    q: 'Kann ich auch nur ein Logo oder Branding beauftragen?',
    a: 'Absolut. Sie können einzelne Leistungen auch separat beauftragen. Ob Logo, Corporate Identity oder komplettes Branding — wir passen das Paket an Ihre Bedürfnisse an.',
  },
  {
    q: 'Wie funktioniert die Zusammenarbeit?',
    a: 'Nach dem Erstgespräch erhalten Sie ein Angebot. Bei Zusage starten wir mit einem Kickoff, bei dem wir alle Details festlegen. Danach arbeiten wir in klaren Phasen — Sie werden regelmässig über den Fortschritt informiert und haben immer das letzte Wort.',
  },
  {
    q: 'Gibt es eine Garantie auf die Website?',
    a: 'Ja. Wir liefern keine halbfertigen Websites. Wenn nach dem Launch etwas nicht wie vereinbart funktioniert, beheben wir es kostenlos. Darüber hinaus bieten wir optionale Wartungsverträge für laufenden Support an.',
  },
]

const EN_FAQS = [
  {
    q: 'How much does a website cost at Prince Digital?',
    a: 'Every project is different. A simple business website starts from CHF 2,500; more complex projects with a shop or custom functions cost accordingly more. After a short initial consultation you receive a fixed quote — no hidden costs.',
  },
  {
    q: 'How long does the implementation take?',
    a: 'For a standard business website we estimate 3–5 weeks. Larger projects can take 6–10 weeks. We communicate clear milestones and stick to them.',
  },
  {
    q: 'Do I need technical knowledge?',
    a: 'No. We explain everything in plain language, without jargon. After launch we show you how to update content yourself — if you want to. If not, we handle it.',
  },
  {
    q: 'What happens after launch?',
    a: 'We don\'t leave you alone. We offer optional maintenance packages, are reachable for questions, and support your continued growth — whether with SEO, ads, or website updates.',
  },
  {
    q: 'Do you only work with companies from Zurich?',
    a: 'No. Our clients come from all of German-speaking Switzerland. Since most work is done digitally, location is secondary — though we always prefer a personal conversation.',
  },
  {
    q: 'How does the initial consultation work?',
    a: 'Very relaxed. We discuss your project, goals, and timeline. No presentation, no pitching — just an honest conversation. Afterwards you receive a concrete offer.',
  },
  {
    q: 'Does Prince Digital also offer social media management?',
    a: 'Yes. We handle complete social media management — from content strategy to design, scheduling, and running paid ads on Instagram, Facebook, and LinkedIn.',
  },
  {
    q: 'Can I commission just a logo or branding?',
    a: 'Absolutely. You can also commission individual services separately. Whether logo, corporate identity, or complete branding — we adapt the package to your needs.',
  },
  {
    q: 'How does the collaboration work?',
    a: 'After the initial consultation you receive a quote. Once agreed, we start with a kickoff where we lock in all details. From there we work in clear phases — you are regularly updated on progress and always have the final say.',
  },
  {
    q: 'Is there a guarantee on the website?',
    a: 'Yes. We do not deliver half-finished websites. If something doesn\'t work as agreed after launch, we fix it at no extra cost. Beyond that we offer optional maintenance contracts for ongoing support.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-white/[0.08] hover:border-indigo-500/25 rounded-2xl overflow-hidden bg-white/[0.03] transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group hover:bg-white/[0.03] transition-colors"
      >
        <span className="font-semibold text-white/85 text-sm sm:text-base leading-snug group-hover:text-white transition-colors">
          {q}
        </span>
        <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
          open
            ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/30'
            : 'bg-white/[0.06] text-white/50 group-hover:text-white/80'
        }`}>
          {open ? <Minus size={14} aria-hidden="true" /> : <Plus size={14} aria-hidden="true" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-white/50 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const t = useT()
  const { lang } = useLang()
  const faqs = lang === 'de' ? DE_FAQS : EN_FAQS

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0d0b1a] px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="sig-badge"
          >
            {t.faq.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-4 mb-0"
          >
            {t.faq.h2}
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
            {t.faq.sub}
          </motion.p>
        </div>

        {/* FAQ items */}
        <div className="space-y-2.5">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-4">{t.faq.other}</p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:-translate-y-px"
          >
            {t.faq.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
