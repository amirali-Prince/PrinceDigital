export interface ProjectLang {
  title: string
  category: string
  description: string
  challenge: string
  solution: string
  results: string
  stat1: { value: string; label: string }
  stat2: { value: string; label: string }
  stat3: { value: string; label: string }
}

export interface Project {
  slug: string
  gradient: string
  accentFrom: string
  accentTo: string
  tags: string[]
  de: ProjectLang
  en: ProjectLang
}

export const PROJECTS: Project[] = [
  {
    slug: 'healthcore-clinic',
    gradient: 'from-indigo-600 via-violet-600 to-purple-700',
    accentFrom: '#6366f1',
    accentTo: '#7c3aed',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'DSGVO'],
    de: {
      title: 'HealthCore Clinic',
      category: 'Webdesign & Entwicklung',
      description: 'Neue Website mit Online-Terminbuchung und Patientenportal. Ladezeit unter 1 Sekunde, DSGVO-konform.',
      challenge: 'Die bestehende Website der Klinik war über zehn Jahre alt — langsam, nicht mobiloptimiert und ohne jegliche Buchungsfunktionalität. Patienten mussten telefonisch anrufen, was sowohl den Staff überbelastete als auch Patienten außerhalb der Öffnungszeiten frustrierte. Die digitale Visitenkarte der Klinik entsprach nicht mehr dem Qualitätsniveau ihrer medizinischen Leistungen.',
      solution: 'Wir entwickelten eine komplett neue Plattform auf Next.js: ein intuitives Buchungsformular, ein persönliches Patientenportal, barrierefreie UX nach WCAG 2.1 AA und DSGVO-konformes Datenmanagement. Das Design orientiert sich an medizinischem Vertrauen — klar, ruhig, professionell. Mobile-first von Anfang an.',
      results: 'Bereits in der ersten Woche nach Launch wurden über 200 Termine online gebucht. Die Telefonlast am Empfang sank um über 40%, das Team konnte sich wieder auf die Patienten konzentrieren. Der Performance Score erreichte 98/100 auf Google Lighthouse.',
      stat1: { value: '<1s', label: 'Ladezeit' },
      stat2: { value: '+280%', label: 'Online-Termine' },
      stat3: { value: '98', label: 'Lighthouse Score' },
    },
    en: {
      title: 'HealthCore Clinic',
      category: 'Web Design & Development',
      description: 'New website with online appointment booking and patient portal. Load time under 1 second, GDPR-compliant.',
      challenge: 'The clinic\'s existing website was over ten years old — slow, not mobile-optimized, and without any booking functionality. Patients had to call by phone, which overloaded staff and frustrated patients outside office hours. The clinic\'s digital presence no longer matched the quality of its medical services.',
      solution: 'We built a completely new platform on Next.js: an intuitive booking form, personal patient portal, accessible UX following WCAG 2.1 AA and GDPR-compliant data management. The design follows medical trust principles — clear, calm, professional. Mobile-first from the start.',
      results: 'In the very first week after launch, over 200 appointments were booked online. Reception phone load dropped by over 40%, allowing staff to focus on patients. The performance score reached 98/100 on Google Lighthouse.',
      stat1: { value: '<1s', label: 'Load Time' },
      stat2: { value: '+280%', label: 'Online Bookings' },
      stat3: { value: '98', label: 'Lighthouse Score' },
    },
  },
  {
    slug: 'greenbuild-gmbh',
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    accentFrom: '#7c3aed',
    accentTo: '#6366f1',
    tags: ['Technisches SEO', 'Google Ads', 'Meta Ads', 'Analytics', 'Content'],
    de: {
      title: 'GreenBuild GmbH',
      category: 'SEO & Online Marketing',
      description: 'SEO & Google Ads — dreimal mehr qualifizierte Anfragen innerhalb von 60 Tagen nach Launch.',
      challenge: 'Das Bauunternehmen war in den Suchergebnissen quasi unsichtbar — trotz guter Arbeit und jahrelanger Erfahrung. Wenige digitale Anfragen, hohe Kosten für Empfehlungsmarketing und keine verlässliche Pipeline für neue Projekte. Die Website existierte, brachte aber keinen messbaren Mehrwert.',
      solution: 'Technisches SEO-Audit und vollständige On-Page-Optimierung, gefolgt von gezielten Google Ads Kampagnen mit sauber strukturierten Anzeigengruppen nach Leistungsbereich. Parallel haben wir ein Analytics-Dashboard aufgebaut, das genau zeigt welche Kanäle konvertieren — und welche nicht.',
      results: 'Innerhalb von 60 Tagen nach dem Launch verdreifachten sich die qualifizierten Anfragen. Der Cost per Lead sank um 42% und GreenBuild erscheint jetzt organisch unter den Top 3 für ihre wichtigsten Keywords in der Region.',
      stat1: { value: '3×', label: 'mehr Anfragen' },
      stat2: { value: '−42%', label: 'Cost per Lead' },
      stat3: { value: 'Top 3', label: 'Google Ranking' },
    },
    en: {
      title: 'GreenBuild GmbH',
      category: 'SEO & Online Marketing',
      description: 'SEO & Google Ads — three times more qualified leads within 60 days of launch.',
      challenge: 'The construction company was virtually invisible in search results — despite great work and years of experience. Few digital inquiries, high referral marketing costs, and no reliable pipeline for new projects. The website existed but brought no measurable value.',
      solution: 'Technical SEO audit and complete on-page optimization, followed by targeted Google Ads campaigns with cleanly structured ad groups by service area. In parallel, we built an analytics dashboard showing exactly which channels convert — and which don\'t.',
      results: 'Within 60 days of launch, qualified leads tripled. Cost per lead dropped by 42% and GreenBuild now appears organically in the top 3 for their most important regional keywords.',
      stat1: { value: '3×', label: 'More Leads' },
      stat2: { value: '−42%', label: 'Cost per Lead' },
      stat3: { value: 'Top 3', label: 'Google Ranking' },
    },
  },
  {
    slug: 'luxeroom-hotels',
    gradient: 'from-purple-600 via-indigo-600 to-blue-700',
    accentFrom: '#9333ea',
    accentTo: '#4f46e5',
    tags: ['Branding', 'Logo Design', 'React', 'Booking System', 'UX Research'],
    de: {
      title: 'LuxeRoom Hotels',
      category: 'Webdesign & Branding',
      description: 'Premium-Webauftritt mit integriertem Buchungssystem und komplett überarbeitetem Markenauftritt.',
      challenge: 'Das Hotel hatte ein veraltetes, inkonsistentes Markenbild und eine Website mit hoher Absprungrate. Direktbuchungen lagen weit unter dem Branchendurchschnitt, der Großteil der Buchungen lief über OTAs — mit hohen Provisionen. Das Brand-Erlebnis entsprach nicht dem tatsächlichen Hotelstandard.',
      solution: 'Komplettes Rebranding — neues Logo, Farbsystem und Typografie — kombiniert mit einer konversionsoptimierten Website. Das Buchungssystem wurde direkt integriert, um Gäste ohne Umweg über OTAs zu leiten. Jede Seite folgt einem klaren Ziel: die Buchung.',
      results: 'Direktbuchungen stiegen im ersten Monat um 65%. Die Absprungrate sank von 72% auf 38%. Das Hotel spart seitdem monatlich erheblich an OTA-Provisionen — ein Return on Investment, der sich innerhalb von 3 Monaten rechnete.',
      stat1: { value: '+65%', label: 'Direktbuchungen' },
      stat2: { value: '−34%', label: 'Absprungrate' },
      stat3: { value: '3 Mon.', label: 'bis ROI' },
    },
    en: {
      title: 'LuxeRoom Hotels',
      category: 'Web Design & Branding',
      description: 'Premium web presence with integrated booking system and completely redesigned brand identity.',
      challenge: 'The hotel had an outdated, inconsistent brand image and a website with a high bounce rate. Direct bookings were far below industry average, with most bookings going through OTAs — at high commission rates. The brand experience didn\'t match the actual hotel standard.',
      solution: 'Complete rebranding — new logo, color system and typography — combined with a conversion-optimized website. The booking system was directly integrated to guide guests without detours via OTAs. Every page serves one clear goal: the booking.',
      results: 'Direct bookings increased by 65% in the first month. Bounce rate dropped from 72% to 38%. The hotel has since saved significantly on OTA commissions monthly — a return on investment that paid off within 3 months.',
      stat1: { value: '+65%', label: 'Direct Bookings' },
      stat2: { value: '−34%', label: 'Bounce Rate' },
      stat3: { value: '3 Mo.', label: 'to ROI' },
    },
  },
  {
    slug: 'techstart-saas',
    gradient: 'from-blue-600 via-indigo-600 to-violet-700',
    accentFrom: '#2563eb',
    accentTo: '#6366f1',
    tags: ['SaaS', 'Conversion Optimization', 'A/B Testing', 'UX Strategy', 'Copywriting'],
    de: {
      title: 'TechStart SaaS',
      category: 'Strategie & Entwicklung',
      description: 'Konversionsstark konzipierte Landingpage — von null auf 500 Signups im ersten Monat.',
      challenge: 'Das SaaS-Startup hatte ein starkes Produkt, aber eine Landing Page, die nicht überzeugte. Das Wertversprechen war unklar, die Conversion Rate unter 1% — und Investoren fragten nach Wachstumszahlen. Das Team wusste, dass das Produkt funktioniert, aber die Seite kommunizierte es nicht.',
      solution: 'User-Journey-Analyse, vollständiger Rewrite des Copywritings, Redesign der Landing Page mit klarem CTA-Flow. Wir führten A/B-Tests mit verschiedenen Headlines und Hero-Sektionen durch, kommunizierten das Pricing-Modell klarer und optimierten den Onboarding-Funnel.',
      results: 'Im ersten Monat nach dem Relaunch: 500 neue Signups, eine Konversionsrate von 4,8% — ein Vielfaches des vorherigen Wertes. Die Wachstumsdaten haben dem Team geholfen, ihre nächste Finanzierungsrunde erfolgreich abzuschließen.',
      stat1: { value: '500+', label: 'Signups (Monat 1)' },
      stat2: { value: '4.8%', label: 'Konversionsrate' },
      stat3: { value: '+120%', label: 'Trial-Starts' },
    },
    en: {
      title: 'TechStart SaaS',
      category: 'Strategy & Development',
      description: 'Conversion-optimized landing page — from zero to 500 signups in the first month.',
      challenge: 'The SaaS startup had a strong product but a landing page that didn\'t convince. The value proposition was unclear, conversion rate under 1% — and investors were asking for growth numbers. The team knew the product worked, but the page didn\'t communicate it.',
      solution: 'User journey analysis, complete copywriting rewrite, landing page redesign with clear CTA flow. We ran A/B tests with different headlines and hero sections, communicated the pricing model more clearly, and optimized the onboarding funnel.',
      results: 'In the first month after relaunch: 500 new signups, a conversion rate of 4.8% — a multiple of the previous value. The growth data helped the team successfully close their next funding round.',
      stat1: { value: '500+', label: 'Signups (Month 1)' },
      stat2: { value: '4.8%', label: 'Conversion Rate' },
      stat3: { value: '+120%', label: 'Trial Starts' },
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
