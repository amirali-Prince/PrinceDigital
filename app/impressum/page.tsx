import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impressum — Prince Digital',
  description: 'Impressum von Prince Digital, Amir Ali Alizadeh, Zürich.',
  robots: { index: false },
}

export default function Impressum() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-1">Impressum</h1>
          <p className="text-white/40 text-sm">Angaben gemäss Art. 3 UWG / Art. 13 EDSG</p>
        </div>

        <div className="space-y-8 text-white/65 leading-relaxed text-sm">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Betreiber dieser Website</h2>
            <p>
              <strong className="text-white">Amir Ali Alizadeh</strong><br />
              Prince Digital<br />
              Zürich, Schweiz
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Kontakt</h2>
            <p>
              E-Mail:{' '}
              <a href="mailto:admin@prince-digitals.ch" className="text-indigo-400 hover:text-violet-400 transition-colors">
                admin@prince-digitals.ch
              </a>
              <br />
              Telefon:{' '}
              <a href="tel:+41764336969" className="text-indigo-400 hover:text-violet-400 transition-colors">
                076 433 69 69
              </a>
              <br />
              Website:{' '}
              <a href="https://prince-digitals.ch" className="text-indigo-400 hover:text-violet-400 transition-colors">
                prince-digitals.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Mehrwertsteuer</h2>
            <p>
              Prince Digital ist ein Einzelunternehmen. Informationen zur Mehrwertsteuerpflicht erhalten Sie
              auf Anfrage per E-Mail.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Haftungsausschluss</h2>
            <p>
              Alle Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäss gesetzlicher Vorschriften für eigene Inhalte verantwortlich.
              Für fremde Inhalte, auf die wir verlinken, übernehmen wir keine Haftung.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Urheberrecht</h2>
            <p>
              Die auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Grafiken, Logos, Designs)
              unterliegen dem Urheberrecht. Eine Verwendung, Vervielfältigung oder Verbreitung ohne
              ausdrückliche schriftliche Genehmigung ist untersagt.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-wrap gap-4 text-sm">
          <Link href="/datenschutz"      className="text-white/35 hover:text-white transition-colors">Datenschutz</Link>
          <Link href="/agb"              className="text-white/35 hover:text-white transition-colors">AGB</Link>
          <Link href="/cookie-richtlinie" className="text-white/35 hover:text-white transition-colors">Cookie-Richtlinie</Link>
        </div>
      </div>
    </main>
  )
}
