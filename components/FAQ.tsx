'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useT, useLang } from '@/lib/i18n'

const DE_FAQS = [
  {
    q: 'Was kostet eine Website bei Prince Digital?',
    a: 'Jedes Projekt ist anders. Eine Business-Website startet ab CHF 2\'500, ein Online Shop oder eine Web App kostet entsprechend mehr. Nach dem Erstgespräch bekommst du ein konkretes Angebot mit Fixpreis — alles drin, nichts offen.',
  },
  {
    q: 'Wie lange dauert die Umsetzung?',
    a: 'Für eine Standard-Website rechnen wir mit 3 Wochen. Grössere Projekte wie Shops oder Web Apps 6–8 Wochen. Du bekommst klare Meilensteine und siehst jederzeit wo wir stehen.',
  },
  {
    q: 'Brauche ich technisches Wissen?',
    a: 'Überhaupt nicht. Wir erklären alles in normaler Sprache. Nach dem Launch zeigen wir dir wie du Inhalte selbst anpassen kannst — oder wir machen es für dich, wenn du das bevorzugst.',
  },
  {
    q: 'Was passiert nach dem Launch?',
    a: 'Du bist nicht auf dich allein gestellt. Für Anpassungen und Fragen bin ich direkt erreichbar. Auf Wunsch gibt es auch ein Wartungspaket mit regelmässigen Updates und laufendem Support.',
  },
  {
    q: 'Arbeitet ihr nur mit Unternehmen aus Zürich?',
    a: 'Nein. Wir arbeiten mit Kunden aus der ganzen Deutschschweiz. Da das meiste digital läuft, spielt der Standort kaum eine Rolle. Persönliche Treffen in Zürich sind aber jederzeit möglich.',
  },
  {
    q: 'Wie läuft das Erstgespräch ab?',
    a: 'Entspannt und unkompliziert. Wir reden über dein Projekt, was du brauchst und bis wann. Am Ende bekommst du ein konkretes Angebot — kostenlos und unverbindlich.',
  },
  {
    q: 'Bietet Prince Digital auch Social Media Betreuung an?',
    a: 'Ja. Wir übernehmen Content-Erstellung, Planung und bezahlte Anzeigen auf Instagram, TikTok, Facebook und LinkedIn — entweder komplett oder genau das, was du brauchst.',
  },
  {
    q: 'Kann ich auch nur ein Logo oder Branding beauftragen?',
    a: 'Ja. Du kannst jede Leistung einzeln buchen — Logo, Corporate Identity, Visitenkarten, Flyer. Sag uns was du brauchst und wir machen ein Angebot darauf.',
  },
  {
    q: 'Wie funktioniert die Zusammenarbeit?',
    a: 'Erstgespräch, Angebot, Kickoff — dann arbeiten wir in klaren Phasen. Du siehst den Fortschritt regelmässig und kannst jederzeit Feedback geben. Das letzte Wort hast du immer.',
  },
  {
    q: 'Gibt es eine Garantie auf die Website?',
    a: 'Ja. Wenn nach dem Launch etwas nicht so funktioniert wie besprochen, fixen wir es ohne Extrakosten. Wir liefern fertige, funktionierende Arbeit — das ist unser Anspruch.',
  },
]

const EN_FAQS = [
  {
    q: 'How much does a website cost at Prince Digital?',
    a: 'Every project is different. A business website starts from CHF 2,500; an online shop or web app costs accordingly more. After the first call you\'ll get a concrete fixed-price quote — everything included, nothing open-ended.',
  },
  {
    q: 'How long does implementation take?',
    a: 'For a standard website, plan for 3 weeks. Larger projects like shops or web apps take 6–8 weeks. You get clear milestones and always know where things stand.',
  },
  {
    q: 'Do I need technical knowledge?',
    a: 'Not at all. We explain everything in plain language. After launch we show you how to update content yourself — or we handle it for you if you prefer.',
  },
  {
    q: 'What happens after launch?',
    a: 'You\'re not left on your own. For adjustments and questions I\'m directly reachable. We also offer maintenance packages with regular updates and ongoing support.',
  },
  {
    q: 'Do you only work with companies from Zurich?',
    a: 'No. We work with clients from all of German-speaking Switzerland. Since most work is done digitally, location doesn\'t really matter. In-person meetings in Zurich are always possible though.',
  },
  {
    q: 'How does the initial consultation work?',
    a: 'Relaxed and straightforward. We talk about your project, what you need and by when. At the end you\'ll get a concrete offer — free and without obligation.',
  },
  {
    q: 'Does Prince Digital also offer social media management?',
    a: 'Yes. We handle content creation, scheduling and paid ads on Instagram, TikTok, Facebook and LinkedIn — either fully managed or just what you specifically need.',
  },
  {
    q: 'Can I commission just a logo or branding?',
    a: 'Yes. You can book any service separately — logo, corporate identity, business cards, flyers. Tell us what you need and we\'ll put together a quote.',
  },
  {
    q: 'How does the collaboration work?',
    a: 'First call, quote, kickoff — then we work in clear phases. You see progress regularly and can give feedback at any time. You always have the final say.',
  },
  {
    q: 'Is there a guarantee on the website?',
    a: 'Yes. If something doesn\'t work as agreed after launch, we fix it at no extra cost. We deliver finished, working websites — that\'s our standard.',
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
