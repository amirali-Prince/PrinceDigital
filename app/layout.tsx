import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prince Digital — Webdesign & Digital Marketing Agentur',
  description:
    'Prince Digital ist Ihre Digitalagentur für professionelles Webdesign, Webentwicklung und Digital Marketing. Wir helfen KMUs und Unternehmen, online zu wachsen.',
  keywords: [
    'Webdesign',
    'Webentwicklung',
    'Digital Marketing',
    'SEO',
    'Google Ads',
    'Social Media',
    'Agentur',
    'Prince Digital',
  ],
  authors: [{ name: 'Prince Digital' }],
  creator: 'Prince Digital',
  metadataBase: new URL('https://princedigital.de'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://princedigital.de',
    title: 'Prince Digital — Webdesign & Digital Marketing Agentur',
    description:
      'Professionelle Webseiten & digitale Strategien für Ihr Unternehmenswachstum.',
    siteName: 'Prince Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prince Digital — Webdesign & Digital Marketing Agentur',
    description:
      'Professionelle Webseiten & digitale Strategien für Ihr Unternehmenswachstum.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className={`${plusJakartaSans.className} bg-white`}>{children}</body>
    </html>
  )
}
