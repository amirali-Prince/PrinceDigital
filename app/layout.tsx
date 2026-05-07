import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prince Digital — Webdesign & Digital Marketing Zürich',
  description:
    'Prince Digital von Amir Ali Alizadeh aus Zürich. Professionelles Webdesign, Branding, SEO und Online-Marketing für KMUs in der Schweiz.',
  keywords: ['Webdesign Zürich', 'Digital Marketing Schweiz', 'SEO', 'Branding', 'Social Media', 'Prince Digital'],
  authors: [{ name: 'Amir Ali Alizadeh — Prince Digital' }],
  metadataBase: new URL('https://prince-digitals.ch'),
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://prince-digitals.ch',
    title: 'Prince Digital — Webdesign & Digital Marketing Zürich',
    description: 'Webdesign, SEO & Online-Marketing für KMUs — aus Zürich, für die Schweiz.',
    siteName: 'Prince Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prince Digital — Webdesign & Digital Marketing Zürich',
    description: 'Webdesign, SEO & Online-Marketing für KMUs — aus Zürich, für die Schweiz.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={font.variable}>
      <body className={`${font.className} bg-[#09090f] antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
