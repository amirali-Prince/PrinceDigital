'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang, useT } from '@/lib/i18n'
import { NavHeader, type TabItem } from '@/components/ui/nav-header'

const pill = 'bg-white/[0.06] backdrop-blur-2xl border border-white/[0.12] shadow-2xl shadow-black/60'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang } = useLang()
  const t = useT()

  const tabs: TabItem[] = [
    { label: t.nav.services,  href: '#leistungen' },
    { label: t.nav.about,     href: '#ueber-uns'  },
    { label: t.nav.portfolio, href: '#portfolio'  },
    { label: t.nav.faq,       href: '#faq'        },
    { label: t.nav.contact,   href: '#kontakt'    },
  ]

  return (
    <>
      {/* ── Floating pill navbar — all screen sizes ───────────────── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 22, stiffness: 200, delay: 0.1 }}
        aria-label="Hauptnavigation"
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
      >
        {/* Logo pill — logo only, no company name */}
        <a
          href="#"
          aria-label="Prince Digital — Startseite"
          className={`flex items-center justify-center w-12 h-12 rounded-full ${pill} hover:bg-white/[0.09] transition-colors flex-shrink-0`}
        >
          <Image
            src="/logo.png"
            alt="Prince Digital"
            width={30}
            height={30}
            className="h-[30px] w-[30px] object-contain"
            priority
          />
        </a>

        {/* Sliding-cursor nav — tablet and desktop */}
        <div className="hidden sm:flex items-center h-12">
          <NavHeader tabs={tabs} />
        </div>

        {/* Language + CTA — tablet and desktop */}
        <div className="hidden sm:flex items-center gap-2 h-12">
          <button
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            aria-label="Sprache wechseln"
            className={`h-full px-3.5 text-[11px] font-bold text-white/45 hover:text-white/80 transition-colors rounded-full ${pill} hover:bg-white/[0.09]`}
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
          <a
            href="#kontakt"
            className="h-full flex items-center bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white text-[13px] font-semibold px-5 rounded-full transition-all duration-200 whitespace-nowrap shadow-lg shadow-indigo-500/30 hover:-translate-y-px"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Language + hamburger — mobile only */}
        <div className="flex sm:hidden items-center gap-2 h-12">
          <button
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            aria-label="Sprache wechseln"
            className={`h-full px-3 text-[11px] font-bold text-white/45 hover:text-white/80 transition-colors rounded-full ${pill}`}
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`h-full px-3 flex items-center rounded-full ${pill} text-white/70 hover:text-white transition-colors`}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

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
