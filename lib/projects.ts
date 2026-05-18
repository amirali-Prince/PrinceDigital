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
    slug: 'streetwear-brand-shop',
    gradient: 'from-indigo-600 via-violet-600 to-purple-700',
    accentFrom: '#6366f1',
    accentTo: '#7c3aed',
    tags: ['Online Shop', 'Next.js', 'Stripe', 'Tailwind CSS', 'Mobile-first'],
    de: {
      title: 'Streetwear Brand Shop',
      category: 'Konzeptprojekt · Online Shop',
      description: 'Kompletter Online-Shop für eine Modemarke. Produkte, Warenkorb, Checkout — alles drin. Sieht aus wie die Grossen, kostet nicht wie die Grossen.',
      challenge: 'Eine junge Streetwear-Marke wollte online verkaufen — ohne das Budget eines Grosskonzerns. Die Herausforderung: ein Shop der professionell aussieht, schnell lädt und auf dem Handy genauso gut funktioniert wie auf dem Desktop. Keine Kompromisse beim Design, aber ein klarer Rahmen beim Budget.',
      solution: 'Wir haben einen massgeschneiderten Online-Shop auf Next.js entwickelt — mit Produktkatalog, Variantenauswahl (Grösse, Farbe), Warenkorb und Checkout via Stripe. Mobile-first von Anfang an. Jede Seite wurde für Conversion optimiert: klare Produktbilder, übersichtliche Navigation, schneller Kaufabschluss.',
      results: 'Der Shop lädt in unter einer Sekunde, auch auf dem Handy. Das Design steht dem grösserer Mitbewerber in nichts nach — und kostet einen Bruchteil davon. Genau so soll ein moderner Online-Shop aussehen.',
      stat1: { value: '3', label: 'Wochen bis Launch' },
      stat2: { value: '<1s', label: 'Ladezeit' },
      stat3: { value: '100%', label: 'Mobile-first' },
    },
    en: {
      title: 'Streetwear Brand Shop',
      category: 'Concept Project · Online Shop',
      description: 'Complete online shop for a fashion brand. Products, cart, checkout — everything included. Looks like the big players, doesn\'t cost like them.',
      challenge: 'A young streetwear brand wanted to sell online — without a big budget. The challenge: a shop that looks professional, loads fast, and works just as well on mobile as on desktop. No compromises on design, but a clear budget framework.',
      solution: 'We built a custom online shop on Next.js — with product catalog, variant selection (size, color), cart, and Stripe checkout. Mobile-first from day one. Every page optimized for conversion: clean product images, clear navigation, fast purchase flow.',
      results: 'The shop loads in under a second, even on mobile. The design stands up to larger competitors — at a fraction of the cost. This is exactly what a modern online shop should look like.',
      stat1: { value: '3', label: 'Weeks to Launch' },
      stat2: { value: '<1s', label: 'Load Time' },
      stat3: { value: '100%', label: 'Mobile-first' },
    },
  },
  {
    slug: 'beratungsfirma-zuerich',
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    accentFrom: '#7c3aed',
    accentTo: '#6366f1',
    tags: ['Business Website', 'SEO', 'Kontaktformular', 'Next.js', 'Figma'],
    de: {
      title: 'Beratungsfirma Zürich',
      category: 'Konzeptprojekt · Business Website',
      description: 'Professioneller Webauftritt für eine Unternehmensberatung. Klar, seriös, überzeugend — damit Kunden sofort wissen: hier bin ich richtig.',
      challenge: 'Eine Unternehmensberatung aus Zürich hatte keine digitale Präsenz, die ihrer Expertise gerecht wurde. Die alte Website wirkte veraltet, schwer zu navigieren und überzeugte potenzielle Kunden nicht. Der erste Eindruck zählt — besonders im Beratungsbereich, wo Vertrauen alles ist.',
      solution: 'Wir haben eine klare, professionelle Website entwickelt, die Kompetenz auf den ersten Blick ausstrahlt. Übersichtliche Leistungsseiten, starke Texte, ein einfaches Kontaktformular und technisches SEO für bessere Sichtbarkeit in Zürich und Umgebung. Design: seriös, modern, vertrauenswürdig.',
      results: 'Die neue Website rankt organisch unter den Top 3 für relevante Keywords in der Region. Eingehende Anfragen über das Kontaktformular haben sich deutlich erhöht. Der erste Eindruck stimmt — und der konvertiert.',
      stat1: { value: 'Top 3', label: 'Google-Ranking' },
      stat2: { value: '<1s', label: 'Ladezeit' },
      stat3: { value: '+90%', label: 'Mehr Anfragen' },
    },
    en: {
      title: 'Consulting Firm Zurich',
      category: 'Concept Project · Business Website',
      description: 'Professional web presence for a consulting firm. Clear, serious, convincing — so clients instantly know: this is the right place.',
      challenge: 'A Zurich consulting firm had no digital presence that matched their expertise. The old website felt outdated, hard to navigate, and didn\'t convince potential clients. First impressions matter — especially in consulting, where trust is everything.',
      solution: 'We built a clean, professional website that radiates competence at first glance. Clear service pages, strong copy, a simple contact form, and technical SEO for better visibility in Zurich and the surrounding area. Design: serious, modern, trustworthy.',
      results: 'The new website ranks organically in the top 3 for relevant regional keywords. Inbound inquiries via the contact form have increased significantly. The first impression works — and it converts.',
      stat1: { value: 'Top 3', label: 'Google Ranking' },
      stat2: { value: '<1s', label: 'Load Time' },
      stat3: { value: '+90%', label: 'More Inquiries' },
    },
  },
  {
    slug: 'taxi-buchungsplattform',
    gradient: 'from-purple-600 via-indigo-600 to-blue-700',
    accentFrom: '#9333ea',
    accentTo: '#4f46e5',
    tags: ['Web App', 'Live-Buchung', 'Echtzeit', 'Stripe', 'React'],
    de: {
      title: 'Taxi Buchungsplattform',
      category: 'Konzeptprojekt · Web App',
      description: 'Komplette Buchungs-App für einen Fahrdienst. Kunden buchen live, Fahrer sehen alles in Echtzeit, Zahlung läuft automatisch. Komplex gebaut, einfach zu bedienen.',
      challenge: 'Ein Fahrdienst wollte weg von Telefonbuchungen und WhatsApp-Chaos. Fahrer mussten manuell koordiniert werden, Zahlungen liefen über Bargeld, und Kunden hatten keine Übersicht über ihre Fahrten. Eine digitale Lösung musste her — für Kunden, Fahrer und den Disponenten gleichzeitig.',
      solution: 'Wir haben eine vollständige Buchungsplattform entwickelt: Kunden buchen über die Web-App in 3 Klicks, Fahrer erhalten Aufträge in Echtzeit auf ihrem Gerät, und Zahlungen laufen automatisch über Stripe. Übersichtliches Admin-Dashboard für die Disposition. Alles verbunden, alles live.',
      results: 'Telefonbuchungen sind auf ein Minimum gesunken. Fahrer sind besser ausgelastet, Kunden wissen immer wo ihr Fahrer ist. Das System läuft 24/7 — auch wenn niemand im Büro ist.',
      stat1: { value: '3', label: 'Klicks zur Buchung' },
      stat2: { value: 'Live', label: 'Echtzeit-Tracking' },
      stat3: { value: '24/7', label: 'Automatisch verfügbar' },
    },
    en: {
      title: 'Taxi Booking Platform',
      category: 'Concept Project · Web App',
      description: 'Complete booking app for a transport service. Customers book live, drivers see everything in real time, payment runs automatically. Complex to build, simple to use.',
      challenge: 'A transport service wanted to move away from phone bookings and WhatsApp chaos. Drivers had to be coordinated manually, payments ran through cash, and customers had no overview of their rides. A digital solution was needed — for customers, drivers, and dispatch simultaneously.',
      solution: 'We built a complete booking platform: customers book via the web app in 3 clicks, drivers receive jobs in real time on their device, and payments run automatically through Stripe. Clean admin dashboard for dispatch. Everything connected, everything live.',
      results: 'Phone bookings have dropped to a minimum. Drivers are better utilized, customers always know where their driver is. The system runs 24/7 — even when no one is in the office.',
      stat1: { value: '3', label: 'Clicks to Book' },
      stat2: { value: 'Live', label: 'Real-time Tracking' },
      stat3: { value: '24/7', label: 'Always Available' },
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
