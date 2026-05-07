'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Leistungen', href: '#leistungen' },
  { name: 'Über uns', href: '#ueber-uns' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Kontakt', href: '#kontakt' },
]

const EXPAND_THRESHOLD = 80

const pillVariants = {
  expanded: {
    width: 'auto',
    transition: { type: 'spring' as const, damping: 22, stiffness: 280, staggerChildren: 0.06, delayChildren: 0.08 },
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
      {/* ── Floating pill nav ───────────────────────────── */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          variants={pillVariants}
          whileHover={!isExpanded ? { scale: 1.08 } : {}}
          whileTap={!isExpanded ? { scale: 0.94 } : {}}
          onClick={handlePillClick}
          aria-label="Hauptnavigation"
          className={cn(
            'relative flex items-center overflow-hidden rounded-full h-12 shadow-xl shadow-black/15',
            isExpanded
              ? 'bg-white/95 backdrop-blur-md border border-white/60'
              : 'bg-slate-900 cursor-pointer justify-center',
          )}
        >
          {/* Logo */}
          <motion.div variants={logoVariants} className="flex items-center gap-2 pl-3 pr-1 flex-shrink-0">
            <Image src="/logo.png" alt="Prince Digitals" width={32} height={32} className="h-8 w-8 object-contain" priority />
            <span className="font-bold text-[15px] text-slate-900 whitespace-nowrap leading-none">
              Prince <span className="text-amber-600">Digitals</span>
            </span>
          </motion.div>

          {/* Nav links */}
          <div className={cn('flex items-center gap-0 px-1', !isExpanded && 'pointer-events-none')}>
            {navLinks.map((l) => (
              <motion.a
                key={l.name}
                href={l.href}
                variants={itemVariants}
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors px-3 py-2 whitespace-nowrap"
              >
                {l.name}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className={cn('pr-2 flex-shrink-0', !isExpanded && 'pointer-events-none')}>
            <a
              href="#kontakt"
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap inline-block"
            >
              Projekt anfragen
            </a>
          </motion.div>

          {/* Collapsed burger */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div variants={burgerVariants} animate={isExpanded ? 'expanded' : 'collapsed'}>
              <Menu className="h-5 w-5 text-white" aria-hidden="true" />
            </motion.div>
          </div>
        </motion.nav>
      </div>

      {/* ── Mobile header ───────────────────────────────── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 inset-x-0 z-50 md:hidden bg-white/90 backdrop-blur-md border-b border-white/50 shadow-sm"
      >
        <div className="flex items-center justify-between h-14 px-4">
          <a href="#" className="flex items-center gap-2" aria-label="Prince Digitals Startseite">
            <Image src="/logo.png" alt="Prince Digitals" width={30} height={30} className="h-8 w-8 object-contain" />
            <span className="font-bold text-[15px] text-slate-900">Prince <span className="text-amber-600">Digitals</span></span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-700"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile fullscreen menu ───────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-white flex flex-col md:hidden"
          >
            <div className="h-14 px-4 flex items-center justify-between border-b border-slate-100">
              <span className="font-bold text-slate-900">Prince <span className="text-amber-600">Digitals</span></span>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-slate-700" aria-label="Schließen"><X size={22} /></button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-7">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.name}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  {l.name}
                </motion.a>
              ))}
              <motion.a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2 bg-slate-900 text-white px-10 py-3.5 rounded-full font-semibold text-lg hover:bg-amber-600 transition-colors"
              >
                Projekt anfragen
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
