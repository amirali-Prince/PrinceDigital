'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'de' | 'en'

export const T = {
  de: {
    nav: {
      services: 'Leistungen',
      about: 'Über uns',
      portfolio: 'Portfolio',
      faq: 'FAQ',
      contact: 'Kontakt',
      cta: 'Projekt starten',
    },
    hero: {
      badge: 'Digitalagentur · Zürich, Schweiz',
      h1a: 'Websites die verkaufen.',
      h1b: 'Marken die regieren.',
      sub: 'Strategisch entwickelte Websites für Unternehmen, die dominant auftreten wollen.',
      cta1: 'Projekt starten',
      cta2: 'Unsere Arbeit',
      stat1v: '50+', stat1l: 'Projekte',
      stat2v: '100%', stat2l: 'Zufriedenheit',
      stat3v: '5★', stat3l: 'Bewertung',
    },
    services: {
      badge: 'Leistungen',
      h2: 'Was wir für dich machen.',
      sub: 'Deine Website, dein Social Media, dein Branding — wir kümmern uns darum.',
      more: 'Mehr erfahren',
      popular: 'Beliebt',
    },
    about: {
      badge: 'Über uns',
      h2a: 'Nicht die grösste Agentur.',
      h2b: 'Die richtige.',
      p1: 'Prince Digital ist eine Boutique-Digitalagentur aus Zürich. Hinter dem Studio steht Amir Ali Alizadeh — ein Spezialist für digitales Wachstum, der mit KMUs und Startups zusammenarbeitet, die ihren digitalen Auftritt ernst nehmen.',
      p2: 'Kein Grosskonzern, kein Callcenter. Bei uns haben Sie immer einen direkten Draht zu den Menschen, die Ihre Website bauen und Ihre Kampagnen steuern.',
      cta: 'Kennenlernen',
      usp1t: 'Schnelle Umsetzung',
      usp1d: 'Vom Erstgespräch zur fertigen Website in 3–5 Wochen. Kein endloses Hin und Her.',
      usp2t: 'Transparent & fair',
      usp2d: 'Fixpreise, klare Meilensteine — keine bösen Überraschungen auf der Rechnung.',
      usp3t: 'Direkt & persönlich',
      usp3d: 'Sie sprechen immer direkt mit Amir Ali — nicht mit einem Ticketsystem oder Account Manager.',
    },
    portfolio: {
      badge: 'Portfolio',
      h2: 'Projekte, die zeigen was möglich ist.',
      sub: 'Konzeptprojekte — so sehen Websites aus, die wir für dich bauen würden.',
      soon: 'In Kürze',
      cta: 'Dein Projekt könnte hier stehen',
    },
    faq: {
      badge: 'FAQ',
      h2: 'Häufig gestellte Fragen.',
      sub: 'Alles, was Sie vor dem ersten Gespräch wissen sollten.',
      other: 'Noch eine andere Frage?',
      cta: 'Direkt fragen',
    },
    contact: {
      badge: 'Kontakt',
      h2: 'Erzählen Sie uns von Ihrem Projekt.',
      sub: 'Kostenloses Erstgespräch, 30 Minuten, kein Pitching. Wir hören zu — dann sagen wir Ihnen ehrlich, ob und wie wir helfen können.',
      available: 'Aktuell verfügbar',
      availableSub: 'Neue Projekte · Antwort in 24 Stunden',
      formTitle: 'Nachricht senden',
      nameLabel: 'Name',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon (optional)',
      messageLabel: 'Nachricht',
      namePlaceholder: 'Max Mustermann',
      emailPlaceholder: 'max@firma.ch',
      phonePlaceholder: '+41 79 123 45 67',
      messagePlaceholder: 'Was planen Sie? Erzählen Sie uns davon...',
      submit: 'Absenden',
      sending: 'Wird gesendet…',
      successTitle: 'Nachricht erhalten!',
      successSub: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
      privacy: 'Mit dem Absenden stimmen Sie unserer',
      privacyLink: 'Datenschutzerklärung',
      privacyEnd: 'zu.',
      errorDirect: 'direkt mailen',
      nameRequired: 'Name erforderlich',
      emailRequired: 'E-Mail erforderlich',
      emailInvalid: 'Ungültige E-Mail',
      messageRequired: 'Nachricht erforderlich',
    },
    footer: {
      tagline: 'Webdesign & Digital Marketing aus Zürich — für KMUs in der Schweiz.',
      services: 'Leistungen',
      company: 'Unternehmen',
      legal: 'Rechtliches',
      rights: 'Alle Rechte vorbehalten.',
      madeIn: 'Made with ♥ in der Schweiz',
    },
  },
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      portfolio: 'Portfolio',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Start Project',
    },
    hero: {
      badge: 'Digital Agency · Zurich, Switzerland',
      h1a: 'Websites that sell.',
      h1b: 'Brands that reign.',
      sub: 'Strategically developed websites for businesses that want to appear dominant.',
      cta1: 'Start Project',
      cta2: 'Our Work',
      stat1v: '50+', stat1l: 'Projects',
      stat2v: '100%', stat2l: 'Satisfaction',
      stat3v: '5★', stat3l: 'Rating',
    },
    services: {
      badge: 'Services',
      h2: 'What we do for you.',
      sub: 'Your website, your social media, your branding — we take care of it.',
      more: 'Learn more',
      popular: 'Popular',
    },
    about: {
      badge: 'About Us',
      h2a: 'Not the biggest agency.',
      h2b: 'The right one.',
      p1: 'Prince Digital is a boutique digital agency from Zurich. Behind the studio is Amir Ali Alizadeh — a digital growth specialist working with SMEs and startups that take their digital presence seriously.',
      p2: 'No big corporation, no call center. With us, you always have a direct line to the people building your website and managing your campaigns.',
      cta: 'Get to Know Us',
      usp1t: 'Fast Execution',
      usp1d: 'From initial call to finished website in 3–5 weeks. No endless back and forth.',
      usp2t: 'Transparent & Fair',
      usp2d: 'Fixed prices, clear milestones — no nasty surprises on the invoice.',
      usp3t: 'Direct & Personal',
      usp3d: 'You always speak directly with Amir Ali — not with a ticket system or account manager.',
    },
    portfolio: {
      badge: 'Portfolio',
      h2: 'Projects that show what\'s possible.',
      sub: 'Concept projects — this is what websites we build for you look like.',
      soon: 'Coming Soon',
      cta: 'Your project could be here',
    },
    faq: {
      badge: 'FAQ',
      h2: 'Frequently Asked Questions.',
      sub: 'Everything you should know before our first call.',
      other: 'Have another question?',
      cta: 'Ask directly',
    },
    contact: {
      badge: 'Contact',
      h2: 'Tell us about your project.',
      sub: 'Free initial consultation, 30 minutes, no pitching. We listen — then tell you honestly if and how we can help.',
      available: 'Currently available',
      availableSub: 'New projects · Reply within 24 hours',
      formTitle: 'Send a message',
      nameLabel: 'Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone (optional)',
      messageLabel: 'Message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@company.com',
      phonePlaceholder: '+41 79 123 45 67',
      messagePlaceholder: 'What are you planning? Tell us about it...',
      submit: 'Submit',
      sending: 'Sending…',
      successTitle: 'Message received!',
      successSub: 'We will get back to you within 24 hours.',
      privacy: 'By submitting you agree to our',
      privacyLink: 'Privacy Policy',
      privacyEnd: '.',
      errorDirect: 'email directly',
      nameRequired: 'Name required',
      emailRequired: 'Email required',
      emailInvalid: 'Invalid email',
      messageRequired: 'Message required',
    },
    footer: {
      tagline: 'Web Design & Digital Marketing from Zurich — for SMEs in Switzerland.',
      services: 'Services',
      company: 'Company',
      legal: 'Legal',
      rights: 'All rights reserved.',
      madeIn: 'Made with ♥ in Switzerland',
    },
  },
}

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'de',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('de')
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
}

export function useLang() {
  return useContext(LangCtx)
}

export function useT() {
  const { lang } = useLang()
  return T[lang]
}
