import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prince Digitals — Webdesign & Digital Marketing Zürich',
  description:
    'Prince Digitals Alizadeh aus Hombrechtikon, Zürich. Professionelles Webdesign, SEO und Online-Marketing für KMUs in der Schweiz.',
  keywords: ['Webdesign Zürich', 'Digital Marketing Schweiz', 'SEO', 'Google Ads', 'Prince Digitals'],
  authors: [{ name: 'Prince Digitals Alizadeh' }],
  metadataBase: new URL('https://prince-digitals.ch'),
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://prince-digitals.ch',
    title: 'Prince Digitals — Webdesign & Digital Marketing Zürich',
    description: 'Webdesign, SEO & Online-Marketing für KMUs — aus Zürich, für die Schweiz.',
    siteName: 'Prince Digitals',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prince Digitals — Webdesign & Digital Marketing Zürich',
    description: 'Webdesign, SEO & Online-Marketing für KMUs — aus Zürich, für die Schweiz.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={font.variable}>
      <body className={`${font.className} bg-white antialiased`}>{children}</body>
    </html>
  )
}
