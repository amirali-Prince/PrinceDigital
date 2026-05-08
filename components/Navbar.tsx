'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang, useT } from '@/lib/i18n'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang } = useLang()
  const t = useT()

  const tabs = [
    { label: t.nav.services,  href: '#leistungen' },
    { label: t.nav.about,     href: '#ueber-uns'  },
    { label: t.nav.portfolio, href: '#portfolio'  },
    { label: t.nav.faq,       href: '#faq'        },
    { label: t.nav.contact,   href: '#kontakt'    },
  ]

  return (
    <>
      {/* ────────────────────────────────────────────────────────────
          One unified floating pill — centered on all screen sizes.
          left-0 right-0 mx-auto w-fit is the most reliable centering
          approach for fixed elements across all viewports.
      ──────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 22, stiffness: 200, delay: 0.1 }}
        className="fixed top-4 left-0 right-0 mx-auto z-50 w-fit"
      >
        {/* Signature gradient border shell */}
        <div
          className="rounded-full p-px shadow-[0_8px_40px_rgba(0,0,0,0.65),0_0_0_1px_rgba(99,102,241,0.12)]"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.55) 0%, rgba(139,92,246,0.25) 50%, rgba(99,102,241,0.55) 100%)',
          }}
        >
          {/* Inner pill */}
          <div className="flex items-center h-12 rounded-full bg-[#0d0a1d]/92 backdrop-blur-2xl px-2 gap-0.5">

            {/* Logo */}
            <a
              href="#"
              aria-label="Prince Digital — Startseite"
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/[0.07] transition-colors flex-shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Prince Digital"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                priority
              />
            </a>

            {/* Divider */}
            <span className="w-px h-5 bg-white/[0.14] mx-1.5 flex-shrink-0" aria-hidden="true" />

            {/* Nav links — tablet and desktop */}
            <nav className="hidden sm:flex items-center gap-0.5" aria-label="Hauptnavigation">
              {tabs.map((tab) => (
                <a
                  key={tab.href}
                  href={tab.href}
                  className="px-3 h-8 inline-flex items-center text-[13px] font-medium text-white/58 hover:text-white hover:bg-white/[0.07] rounded-full transition-all duration-150 whitespace-nowrap"
                >
                  {tab.label}
                </a>
              ))}
            </nav>

            {/* Divider — tablet and desktop */}
            <span className="hidden sm:block w-px h-5 bg-white/[0.14] mx-1.5 flex-shrink-0" aria-hidden="true" />

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              aria-label="Sprache wechseln"
              className="h-8 px-3 text-[11px] font-bold tracking-wide text-white/42 hover:text-white/85 hover:bg-white/[0.07] rounded-full transition-all flex-shrink-0"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>

            {/* CTA — always visible, abbreviated on mobile */}
            <a
              href="#kontakt"
              className="ml-1 h-8 inline-flex items-center bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white text-[12px] font-semibold px-4 rounded-full transition-all duration-200 whitespace-nowrap shadow-md shadow-indigo-500/25 hover:-translate-y-px flex-shrink-0"
            >
              <span className="hidden sm:inline">{t.nav.cta}</span>
              <span className="sm:hidden">Start</span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden ml-1 h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-white/[0.07] text-white/65 hover:text-white transition-all flex-shrink-0"
              aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>

          </div>
        </div>
      </motion.div>

      {/* ── Mobile fullscreen menu ────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#09090f]/97 backdrop-blur-2xl flex flex-col sm:hidden"
          >
            <div className="h-[72px] px-5 flex items-center justify-between border-b border-white/[0.07]">
              <span className="font-bold text-white text-[15px]">
                Prince{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Digital
                </span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Schließen"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-7">
              {tabs.map((tab, i) => (
                <motion.a
                  key={tab.href}
                  href={tab.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-2xl font-bold text-white/70 hover:text-white transition-colors"
                >
                  {tab.label}
                </motion.a>
              ))}
              <motion.a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-10 py-3.5 rounded-full font-semibold text-lg shadow-xl shadow-indigo-500/30"
              >
                {t.nav.cta}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
