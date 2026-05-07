'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang, useT } from '@/lib/i18n'
import { NavHeader, type TabItem } from '@/components/ui/nav-header'

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
      {/* ─────────────────────────────────────────────────────────────
          Desktop + Tablet navbar — sichtbar ab 640px (sm)
      ───────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 22, stiffness: 200, delay: 0.1 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden sm:flex items-center gap-2"
      >
        {/* Logo pill */}
        <a
          href="#"
          aria-label="Prince Digital Startseite"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-2xl border border-white/[0.12] shadow-2xl shadow-black/60 hover:bg-white/[0.09] transition-colors h-12"
        >
          <Image
            src="/logo.png"
            alt="Prince Digital"
            width={26}
            height={26}
            className="h-6 w-6 object-contain"
            priority
          />
          <span className="font-bold text-[13px] text-white whitespace-nowrap leading-none hidden lg:inline">
            Prince{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Digital
            </span>
          </span>
        </a>

        {/* Sliding-cursor nav — NavHeader component */}
        <div className="h-12 flex items-center">
          <NavHeader tabs={tabs} />
        </div>

        {/* Language + CTA */}
        <div className="flex items-center gap-2 h-12">
          <button
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            className="h-full flex items-center px-3 text-[11px] font-bold text-white/45 hover:text-white/80 transition-colors rounded-full bg-white/[0.06] backdrop-blur-2xl border border-white/[0.12] shadow-2xl shadow-black/60 hover:bg-white/[0.09]"
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>

          <a
            href="#kontakt"
            className="h-full flex items-center bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white text-[13px] font-semibold px-4 rounded-full transition-all duration-200 whitespace-nowrap shadow-lg shadow-indigo-500/30 hover:-translate-y-px"
          >
            <span className="hidden md:inline">{t.nav.cta}</span>
            <span className="md:hidden">Start</span>
          </a>
        </div>
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────
          Mobile header — nur unter 640px (sm)
      ───────────────────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 inset-x-0 z-50 sm:hidden bg-[#09090f]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-md shadow-black/40"
      >
        <div className="flex items-center justify-between h-14 px-4">
          <a href="#" className="flex items-center gap-2" aria-label="Prince Digital Startseite">
            <Image src="/logo.png" alt="Prince Digital" width={26} height={26} className="h-6 w-6 object-contain" />
            <span className="font-bold text-[14px] text-white">
              Prince{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Digital</span>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              className="text-[11px] font-bold text-white/45 hover:text-white transition-colors px-2 py-1 rounded-full border border-white/[0.10]"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ─────────────────────────────────────────────────────────────
          Mobile fullscreen menu
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#09090f]/97 backdrop-blur-2xl flex flex-col sm:hidden"
          >
            <div className="h-14 px-4 flex items-center justify-between border-b border-white/[0.07]">
              <span className="font-bold text-white">
                Prince{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Digital</span>
              </span>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-white/70" aria-label="Schließen">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
              {tabs.map((tab, i) => (
                <motion.a
                  key={tab.href}
                  href={tab.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-2xl font-bold text-white/75 hover:text-white transition-colors"
                >
                  {tab.label}
                </motion.a>
              ))}
              <motion.a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                className="mt-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-10 py-3.5 rounded-full font-semibold text-lg shadow-xl shadow-indigo-500/30"
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
