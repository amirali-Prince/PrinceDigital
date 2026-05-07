import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — Prince Digital',
  description: 'Datenschutzerklärung von Prince Digital, Amir Ali Alizadeh, Zürich.',
  robots: { index: false },
}

export default function Datenschutz() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-1">Datenschutzerklärung</h1>
          <p className="text-white/40 text-sm">Letzte Aktualisierung: Mai 2026</p>
        </div>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/65 leading-relaxed">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              <strong className="text-white">Amir Ali Alizadeh — Prince Digital</strong><br />
              Zürich, Schweiz<br />
              E-Mail: <a href="mailto:admin@prince-digitals.ch" className="text-indigo-400 hover:text-violet-400 transition-colors">admin@prince-digitals.ch</a><br />
              Telefon: <a href="tel:+41764336969" className="text-indigo-400 hover:text-violet-400 transition-colors">076 433 69 69</a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang erhoben.
              Eine Weitergabe Ihrer Daten an Dritte erfolgt ohne Ihre ausdrückliche Zustimmung nicht,
              sofern dies nicht zur Vertragserfüllung erforderlich ist oder gesetzliche Pflichten bestehen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. Kontaktformular</h2>
            <p>
              Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden die von Ihnen
              angegebenen Daten (Name, E-Mail-Adresse, ggf. Telefonnummer und Nachricht) zum Zweck der
              Bearbeitung Ihrer Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Rechtsgrundlage für die Verarbeitung dieser Daten ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse zur Bearbeitung von Anfragen).
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. Server-Logs</h2>
            <p>
              Beim Besuch dieser Website speichert unser Hosting-Anbieter automatisch Informationen in sogenannten
              Server-Log-Dateien. Dazu gehören Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
            <p>
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und reibungslosen Betrieb der Website).
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. Cookies</h2>
            <p>
              Diese Website verwendet Cookies. Weitere Informationen finden Sie in unserer{' '}
              <Link href="/cookie-richtlinie" className="text-indigo-400 hover:text-violet-400 transition-colors">
                Cookie-Richtlinie
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">6. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a href="mailto:admin@prince-digitals.ch" className="text-indigo-400 hover:text-violet-400 transition-colors">
                admin@prince-digitals.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">7. Datensicherheit</h2>
            <p>
              Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre Daten vor
              unberechtigtem Zugriff, Verlust oder Missbrauch zu schützen. Unsere Website wird über eine
              verschlüsselte HTTPS-Verbindung übertragen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">8. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung jederzeit mit Wirkung für die Zukunft zu ändern.
              Die jeweils aktuelle Version ist auf dieser Seite abrufbar.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">9. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten durch uns zu beschweren. In der Schweiz ist dies der{' '}
              <strong className="text-white">Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB)</strong>.
            </p>
          </section>
        </div>

        {/* Legal links */}
        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-wrap gap-4 text-sm">
          <Link href="/impressum"        className="text-white/35 hover:text-white transition-colors">Impressum</Link>
          <Link href="/agb"              className="text-white/35 hover:text-white transition-colors">AGB</Link>
          <Link href="/cookie-richtlinie" className="text-white/35 hover:text-white transition-colors">Cookie-Richtlinie</Link>
        </div>
      </div>
    </main>
  )
}
