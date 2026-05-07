import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen — Prince Digital',
  description: 'AGB von Prince Digital, Amir Ali Alizadeh, Zürich.',
  robots: { index: false },
}

export default function AGB() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-1">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="text-white/40 text-sm">Stand: Mai 2026 — Prince Digital, Amir Ali Alizadeh, Zürich</p>
        </div>

        <div className="space-y-8 text-white/65 leading-relaxed text-sm">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Prince Digital
              (nachfolgend «Auftragnehmer») und dem Auftraggeber (nachfolgend «Kunde»), soweit nichts anderes
              ausdrücklich schriftlich vereinbart wurde.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 2 Vertragsabschluss</h2>
            <p>
              Ein Vertrag kommt zustande, wenn der Auftragnehmer dem Kunden ein schriftliches Angebot unterbreitet
              und dieses vom Kunden schriftlich oder per E-Mail angenommen wird. Mündliche Nebenabreden bedürfen
              der schriftlichen Bestätigung.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 3 Leistungsumfang</h2>
            <p>
              Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot. Änderungen oder Erweiterungen des
              vereinbarten Leistungsumfangs bedürfen einer schriftlichen Vereinbarung und können zu
              Anpassungen des Preises und Zeitplans führen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 4 Preise und Zahlung</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Alle Preise sind Nettopreise in CHF, zzgl. der gesetzlichen Mehrwertsteuer, sofern anwendbar.</li>
              <li>Die Zahlungsbedingungen werden im jeweiligen Angebot festgelegt.</li>
              <li>In der Regel gilt: 50% Anzahlung bei Auftragserteilung, 50% nach Abnahme.</li>
              <li>Bei Zahlungsverzug sind wir berechtigt, die Arbeiten bis zur vollständigen Zahlung auszusetzen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 5 Mitwirkungspflichten des Kunden</h2>
            <p>
              Der Kunde verpflichtet sich, alle für die Durchführung des Auftrags notwendigen Informationen,
              Inhalte (Texte, Bilder, Logos etc.) und Zugänge rechtzeitig und vollständig bereitzustellen.
              Verzögerungen durch fehlende Zulieferungen des Kunden gehen nicht zu Lasten des Auftragnehmers.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 6 Abnahme</h2>
            <p>
              Nach Fertigstellung der vereinbarten Leistungen wird der Kunde schriftlich zur Abnahme aufgefordert.
              Beanstandungen sind innerhalb von 14 Kalendertagen schriftlich mitzuteilen. Erfolgt innerhalb dieser
              Frist keine Beanstandung, gilt die Leistung als abgenommen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 7 Urheberrecht und Nutzungsrechte</h2>
            <p>
              Alle erstellten Werke (Designs, Texte, Code) bleiben bis zur vollständigen Bezahlung im
              Eigentum des Auftragnehmers. Mit vollständiger Bezahlung erhält der Kunde das einfache,
              nicht übertragbare Nutzungsrecht für die vereinbarten Zwecke. Der Auftragnehmer behält das
              Recht, die Arbeiten zu Referenzzwecken zu verwenden, sofern der Kunde dem nicht widerspricht.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 8 Haftung</h2>
            <p>
              Der Auftragnehmer haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten
              beruhen. Die Haftung ist auf die Höhe des Auftragswertes begrenzt. Für indirekte Schäden,
              entgangenen Gewinn oder Datenverlust wird keine Haftung übernommen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 9 Vertraulichkeit</h2>
            <p>
              Beide Parteien verpflichten sich, alle vertraulichen Informationen der jeweils anderen Partei
              vertraulich zu behandeln und nicht an Dritte weiterzugeben, sofern dies nicht zur
              Auftragserfüllung notwendig ist.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 10 Kündigung</h2>
            <p>
              Beide Parteien können den Vertrag aus wichtigem Grund schriftlich kündigen. Bei Kündigung durch
              den Kunden sind die bis dahin erbrachten Leistungen vollständig zu vergüten. Bereits entstandene
              Auslagen werden ebenfalls in Rechnung gestellt.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 11 Anwendbares Recht und Gerichtsstand</h2>
            <p>
              Es gilt Schweizer Recht. Gerichtsstand ist Zürich, Schweiz, soweit gesetzlich zulässig.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">§ 12 Salvatorische Klausel</h2>
            <p>
              Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden,
              bleiben die übrigen Bestimmungen hiervon unberührt.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-wrap gap-4 text-sm">
          <Link href="/datenschutz"      className="text-white/35 hover:text-white transition-colors">Datenschutz</Link>
          <Link href="/impressum"        className="text-white/35 hover:text-white transition-colors">Impressum</Link>
          <Link href="/cookie-richtlinie" className="text-white/35 hover:text-white transition-colors">Cookie-Richtlinie</Link>
        </div>
      </div>
    </main>
  )
}
