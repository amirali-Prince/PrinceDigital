import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie — Prince Digital',
  description: 'Cookie-Richtlinie von Prince Digital, Amir Ali Alizadeh, Zürich.',
  robots: { index: false },
}

export default function CookieRichtlinie() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </Link>

        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Rechtliches
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-1">Cookie-Richtlinie</h1>
          <p className="text-white/40 text-sm">Letzte Aktualisierung: Mai 2026</p>
        </div>

        <div className="space-y-8 text-white/65 leading-relaxed text-sm">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Was sind Cookies?</h2>
            <p>
              Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden.
              Sie ermöglichen es, bestimmte Einstellungen zu speichern und die Nutzung der Website zu verbessern.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Welche Cookies verwenden wir?</h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <h3 className="text-white font-semibold mb-2">Technisch notwendige Cookies</h3>
                <p>
                  Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können nicht
                  deaktiviert werden. Sie speichern keine personenbezogenen Daten und werden nicht für
                  Marketingzwecke verwendet.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 px-2.5 py-1 rounded-full">Session-Cookies</span>
                  <span className="text-xs bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 px-2.5 py-1 rounded-full">CSRF-Schutz</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <h3 className="text-white font-semibold mb-2">Analyse-Cookies (optional)</h3>
                <p>
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                  Die Daten werden anonymisiert gesammelt und nicht an Dritte weitergegeben.
                  Diese Cookies werden nur mit Ihrer ausdrücklichen Zustimmung gesetzt.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Cookie-Verwaltung</h2>
            <p>
              Sie können Cookies jederzeit in Ihrem Browser deaktivieren oder löschen. Bitte beachten Sie,
              dass das Deaktivieren bestimmter Cookies die Funktionalität der Website beeinträchtigen kann.
            </p>
            <p className="mt-3">
              Anleitungen für gängige Browser:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Google Chrome: Einstellungen → Datenschutz und Sicherheit → Cookies</li>
              <li>Mozilla Firefox: Einstellungen → Datenschutz & Sicherheit</li>
              <li>Safari: Einstellungen → Datenschutz</li>
              <li>Microsoft Edge: Einstellungen → Cookies und Websiteberechtigungen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Speicherdauer</h2>
            <p>
              Session-Cookies werden nach dem Schliessen des Browsers automatisch gelöscht.
              Persistente Cookies bleiben für die jeweilige Laufzeit auf Ihrem Gerät gespeichert,
              längstens jedoch 12 Monate.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Kontakt</h2>
            <p>
              Bei Fragen zu unserer Cookie-Richtlinie wenden Sie sich bitte an:{' '}
              <a href="mailto:admin@prince-digitals.ch" className="text-indigo-400 hover:text-violet-400 transition-colors">
                admin@prince-digitals.ch
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-wrap gap-4 text-sm">
          <Link href="/datenschutz" className="text-white/35 hover:text-white transition-colors">Datenschutz</Link>
          <Link href="/impressum"   className="text-white/35 hover:text-white transition-colors">Impressum</Link>
          <Link href="/agb"         className="text-white/35 hover:text-white transition-colors">AGB</Link>
        </div>
      </div>
    </main>
  )
}
