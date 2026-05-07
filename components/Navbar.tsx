'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLang, useT } from '@/lib/i18n'

const EXPAND_THRESHOLD = 80

const pillVariants = {
  expanded: {
    width: 'auto',
    transition: { type: 'spring' as const, damping: 22, stiffness: 280, staggerChildren: 0.05, delayChildren: 0.06 },
  },
  collapsed: {
    width: '3rem',
    transition: { type: 'spring' as const, damping: 22, stiffness: 280, when: 'afterChildren', staggerChildren: 0.04, staggerDirection: -1 },
  },
}

const logoVariants = {
  expanded:  { opacity: 1, x: 0,   transition: { type: 'spring' as const, damping: 18 } },
  collapsed: { opacity: 0, x: -18, transition: { duration: 0.18 } },
}

const itemVariants = {
  expanded:  { opacity: 1, x: 0,   scale: 1,    transition: { type: 'spring' as const, damping: 18 } },
  collapsed: { opacity: 0, x: -12, scale: 0.95, transition: { duration: 0.14 } },
}

const burgerVariants = {
  expanded:  { opacity: 0, scale: 0.7, transition: { duration: 0.14 } },
  collapsed: { opacity: 1, scale: 1,   transition: { type: 'spring' as const, damping: 18, stiffness: 300, delay: 0.14 } },
}

export default function Navbar() {
  const [isExpanded, setExpanded] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const lastY = useRef(0)
  const collapseY = useRef(0)
  const { lang, setLang } = useLang()
  const t = useT()

  const navLinks = [
    { name: t.nav.services,  href: '#leistungen' },
    { name: t.nav.about,     href: '#ueber-uns'  },
    { name: t.nav.portfolio, href: '#portfolio'  },
    { name: t.nav.faq,       href: '#faq'        },
    { name: t.nav.contact,   href: '#kontakt'    },
  ]

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = lastY.current
    if (isExpanded && latest > prev && latest > 140) {
      setExpanded(false)
      collapseY.current = latest
    } else if (!isExpanded && latest < prev && collapseY.current - latest > EXPAND_THRESHOLD) {
      setExpanded(true)
    }
    lastY.current = latest
  })

  const handlePillClick = (e: React.MouseEvent) => {
    if (!isExpanded) { e.preventDefault(); setExpanded(true) }
  }

  return (
    <>
      {/* ── Floating glass pill — tablet & desktop (md = 768px+) ─── */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block px-2 w-full max-w-[calc(100vw-24px)]">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          variants={pillVariants}
          whileHover={!isExpanded ? { scale: 1.08 } : {}}
          whileTap={!isExpanded ? { scale: 0.94 } : {}}
          onClick={handlePillClick}
          aria-label="Hauptnavigation"
          className={cn(
            'mx-auto relative flex items-center overflow-hidden rounded-full h-11',
            'shadow-2xl shadow-black/60',
            isExpanded
              ? 'bg-white/[0.06] backdrop-blur-2xl border border-white/[0.12]'
              : 'bg-white/[0.08] backdrop-blur-2xl border border-white/[0.12] cursor-pointer justify-center w-11',
          )}
        >
          {/* Logo — image always, text hidden on tablet */}
          <motion.div variants={logoVariants} className="flex items-center gap-1.5 pl-2.5 pr-1 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Prince Digital"
              width={26}
              height={26}
              className="h-6 w-6 object-contain flex-shrink-0"
              priority
            />
            <span className="hidden lg:inline font-bold text-[13px] text-white whitespace-nowrap leading-none">
              Prince{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Digital
              </span>
            </span>
          </motion.div>

          {/* Nav links — tablet: smaller, desktop: normal */}
          <div className={cn('flex items-center px-0.5', !isExpanded && 'pointer-events-none')}>
            {navLinks.map((l) => (
              <motion.a
                key={l.name}
                href={l.href}
                variants={itemVariants}
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] lg:text-[13px] font-medium text-white/65 hover:text-white transition-colors px-2 lg:px-3 py-2 whitespace-nowrap rounded-full hover:bg-white/[0.06]"
              >
                {l.name}
              </motion.a>
            ))}
          </div>

          {/* Lang switcher — hidden on tablet, shown on desktop */}
          <motion.div variants={itemVariants} className={cn('hidden lg:flex items-center pr-1', !isExpanded && 'pointer-events-none')}>
            <button
              onClick={(e) => { e.stopPropagation(); setLang(lang === 'de' ? 'en' : 'de') }}
              className="text-[11px] font-bold text-white/45 hover:text-white/80 transition-colors px-2 py-1 rounded-full border border-white/[0.10] hover:border-white/20"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
          </motion.div>

          {/* CTA button — shorter on tablet */}
          <motion.div variants={itemVariants} className={cn('pr-2 flex-shrink-0', !isExpanded && 'pointer-events-none')}>
            <a
              href="#kontakt"
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white text-[11px] lg:text-[13px] font-semibold px-3 lg:px-4 py-1.5 lg:py-2 rounded-full transition-all duration-200 whitespace-nowrap inline-block shadow-lg shadow-indigo-500/30 hover:-translate-y-px"
            >
              <span className="lg:hidden">Anfragen</span>
              <span className="hidden lg:inline">{t.nav.cta}</span>
            </a>
          </motion.div>

          {/* Collapsed burger icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div variants={burgerVariants} animate={isExpanded ? 'expanded' : 'collapsed'}>
              <Menu className="h-4 w-4 text-white" aria-hidden="true" />
            </motion.div>
          </div>
        </motion.nav>
      </div>

      {/* ── Mobile header (< 768px) ─────────────────────────────── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 inset-x-0 z-50 md:hidden bg-[#09090f]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-md shadow-black/40"
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

      {/* ── Mobile fullscreen menu ───────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#09090f]/97 backdrop-blur-2xl flex flex-col md:hidden"
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
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.name}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-2xl font-bold text-white/75 hover:text-white transition-colors"
                >
                  {l.name}
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
