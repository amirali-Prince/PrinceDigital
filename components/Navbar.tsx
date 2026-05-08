'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang, useT } from '@/lib/i18n'

interface Cursor { left: number; width: number; opacity: number }

const ease = [0.32, 0.72, 0, 1] as const

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden,     setHidden]     = useState(false)
  const [hovered,    setHovered]    = useState(false)
  const [cursor,     setCursor]     = useState<Cursor>({ left: 0, width: 0, opacity: 0 })
  const { lang, setLang }           = useLang()
  const t                           = useT()
  const lastY                       = useRef(0)
  const tabRefs                     = useRef<(HTMLAnchorElement | null)[]>([])

  const tabs = [
    { label: t.nav.services,  href: '#leistungen' },
    { label: t.nav.about,     href: '#ueber-uns'  },
    { label: t.nav.portfolio, href: '#portfolio'  },
    { label: t.nav.faq,       href: '#faq'        },
    { label: t.nav.contact,   href: '#kontakt'    },
  ]

  // Hide on scroll-down, reveal on scroll-up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      if (y < 60) {
        setHidden(false)
      } else if (delta > 8) {
        setHidden(true)
        setMobileOpen(false)
      } else if (delta < -8) {
        setHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const show   = !hidden || hovered
  const radius = mobileOpen ? 20 : 9999

  return (
    <>
      {/* Indigo glow at top — visible only when navbar is hidden */}
      <motion.div
        animate={{ opacity: hidden && !hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 inset-x-0 h-20 z-[48] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 100% at 50% 0%, rgba(99,102,241,0.28) 0%, transparent 100%)',
        }}
      />

      {/* Invisible hover-trigger strip (catches mouse when navbar is hidden) */}
      <div
        className="fixed top-0 inset-x-0 h-16 z-[49]"
        style={{ pointerEvents: hidden && !hovered ? 'auto' : 'none' }}
        onMouseEnter={() => setHovered(true)}
      />

      {/* ── Main floating navbar ───────────────────────────────────── */}
      <motion.div
        animate={{ y: show ? 0 : -96, opacity: show ? 1 : 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 250 }}
        onMouseLeave={() => { if (hidden) setHovered(false) }}
        className="fixed top-4 left-4 right-4 sm:left-0 sm:right-0 mx-auto z-50 sm:w-fit"
      >
        {/* Signature gradient border shell */}
        <motion.div
          animate={{ borderRadius: radius }}
          transition={{ duration: 0.38, ease }}
          className="p-px shadow-[0_8px_40px_rgba(0,0,0,0.65),0_0_0_1px_rgba(99,102,241,0.12)]"
          style={{
            background:
              'linear-gradient(135deg, rgba(99,102,241,0.60) 0%, rgba(139,92,246,0.28) 50%, rgba(99,102,241,0.60) 100%)',
          }}
        >
          {/* Inner glass surface */}
          <motion.div
            animate={{ borderRadius: radius - 1 }}
            transition={{ duration: 0.38, ease }}
            className="bg-[#0d0a1d]/92 backdrop-blur-2xl overflow-hidden"
          >

            {/* ── Top row ── */}
            <div className="flex items-center h-12 px-2 gap-0.5">

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

              {/* Desktop: sliding-cursor nav */}
              <nav
                className="hidden sm:flex items-center gap-0 relative"
                aria-label="Hauptnavigation"
                onMouseLeave={() => setCursor((c) => ({ ...c, opacity: 0 }))}
              >
                {/* Sliding highlight */}
                <motion.span
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  animate={cursor as any}
                  transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                  className="absolute top-0 h-8 rounded-full bg-white/[0.10] pointer-events-none"
                />
                {tabs.map((tab, i) => (
                  <a
                    key={tab.href}
                    href={tab.href}
                    ref={(el) => { tabRefs.current[i] = el }}
                    onMouseEnter={() => {
                      const el = tabRefs.current[i]
                      if (!el) return
                      setCursor({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 })
                    }}
                    className="relative z-10 px-3 h-8 inline-flex items-center text-[13px] font-medium text-white/60 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {tab.label}
                  </a>
                ))}
              </nav>

              {/* Divider — desktop */}
              <span className="hidden sm:block w-px h-5 bg-white/[0.14] mx-1.5 flex-shrink-0" aria-hidden="true" />

              {/* Mobile spacer — pushes right controls to far edge */}
              <div className="flex-1 sm:hidden" />

              {/* Language toggle */}
              <button
                onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
                aria-label="Sprache wechseln"
                className="h-8 px-3 text-[11px] font-bold tracking-wide text-white/45 hover:text-white/80 hover:bg-white/[0.07] rounded-full transition-all flex-shrink-0"
              >
                {lang === 'de' ? 'EN' : 'DE'}
              </button>

              {/* CTA button — always visible */}
              <a
                href="#kontakt"
                className="ml-1 h-8 inline-flex items-center bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white text-[12px] font-semibold px-4 rounded-full transition-all duration-200 whitespace-nowrap shadow-md shadow-indigo-500/25 hover:-translate-y-px flex-shrink-0"
              >
                <span className="hidden sm:inline">{t.nav.cta}</span>
                <span className="sm:hidden">Start</span>
              </a>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="sm:hidden ml-1 h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-white/[0.07] text-white/65 hover:text-white transition-all flex-shrink-0"
                aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={17} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="m"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={17} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* ── Mobile expanded menu (transforms inside the pill) ── */}
            <AnimatePresence initial={false}>
              {mobileOpen && (
                <motion.div
                  key="mobile-menu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                  className="overflow-hidden sm:hidden"
                >
                  <div className="px-2 pt-1 pb-3 border-t border-white/[0.08]">
                    {tabs.map((tab, i) => (
                      <motion.a
                        key={tab.href}
                        href={tab.href}
                        onClick={() => setMobileOpen(false)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.045, duration: 0.2 }}
                        className="flex items-center px-4 py-3 text-[15px] font-semibold text-white/65 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all"
                      >
                        {tab.label}
                      </motion.a>
                    ))}
                    <div className="mt-2 px-1">
                      <a
                        href="#kontakt"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold text-[14px] rounded-xl shadow-md shadow-indigo-500/25"
                      >
                        {t.nav.cta}
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}
