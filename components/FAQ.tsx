'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Was kostet eine Website bei Prince Digitals?',
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
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors group"
      >
        <span className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">{q}</span>
        <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${open ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-amber-50 group-hover:text-amber-600'}`}>
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
            <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 sm:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-amber-600 font-semibold text-xs uppercase tracking-widest"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mt-2 mb-3"
          >
            Häufig gestellte Fragen.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className="text-base sm:text-lg text-slate-500"
          >
            Alles, was Sie vor dem ersten Gespräch wissen sollten.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-slate-500 text-sm mb-4">Noch eine andere Frage?</p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-px"
          >
            Direkt fragen
          </a>
        </motion.div>
      </div>
    </section>
  )
}
