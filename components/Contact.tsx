'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name erforderlich'
    if (!form.email.trim()) e.email = 'E-Mail erforderlich'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Ungültige E-Mail'
    if (!form.message.trim()) e.message = 'Nachricht erforderlich'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setApiError('')
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Fehler')
      setSubmitted(true)
    } catch (err: unknown) {
      setApiError(err instanceof Error ? err.message : 'Unbekannter Fehler')
    } finally {
      setLoading(false)
    }
  }

  const set = (k: string, v: string) => {
    setForm((p) => ({ ...p, [k]: v }))
    if (errors[k]) setErrors((p) => { const n = { ...p }; delete n[k]; return n })
  }

  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start" ref={ref}>

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-amber-400 font-semibold text-xs uppercase tracking-widest"
            >
              Kontakt
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-2 mb-4"
            >
              Projekt anfragen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 }}
              className="text-slate-400 leading-relaxed mb-8 max-w-md"
            >
              Kostenlose Erstberatung — wir melden uns innerhalb von 24 Stunden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="space-y-3 mb-8"
            >
              <a
                href="mailto:admin@prince-digitals.ch"
                className="flex items-center gap-3.5 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors flex-shrink-0">
                  <Mail size={17} className="text-amber-400 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <span className="text-sm">admin@prince-digitals.ch</span>
              </a>
              <div className="flex items-center gap-3.5 text-slate-400">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-amber-400" aria-hidden="true" />
                </div>
                <span className="text-sm">Speerstrasse 9, 8634 Hombrechtikon, Zürich</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.35 }}
              className="inline-flex items-start gap-3.5 p-4 bg-slate-800 rounded-xl border border-slate-700"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white font-semibold text-sm">Aktuell verfügbar</p>
                <p className="text-slate-400 text-xs mt-0.5">Neue Projekte · Antwort in 24h</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-7 sm:p-9 shadow-2xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 220 }}>
                  <CheckCircle size={50} className="text-green-500 mb-4" aria-hidden="true" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Nachricht gesendet!</h3>
                <p className="text-slate-500 text-sm">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-lg font-bold text-slate-900 mb-5">Nachricht senden</h3>
                {apiError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm" role="alert">
                    {apiError} —{' '}
                    <a href="mailto:admin@prince-digitals.ch" className="underline font-medium">
                      direkt mailen
                    </a>
                  </div>
                )}
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                      Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name" type="text" autoComplete="name" required
                      value={form.name} onChange={(e) => set('name', e.target.value)}
                      placeholder="Max Mustermann"
                      aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all ${errors.name ? 'border-red-300' : 'border-slate-200'}`}
                    />
                    {errors.name && <p id="err-name" className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                      E-Mail <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email" type="email" autoComplete="email" required
                      value={form.email} onChange={(e) => set('email', e.target.value)}
                      placeholder="max@firma.ch"
                      aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all ${errors.email ? 'border-red-300' : 'border-slate-200'}`}
                    />
                    {errors.email && <p id="err-email" className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
                      Nachricht <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message" required rows={4}
                      value={form.message} onChange={(e) => set('message', e.target.value)}
                      placeholder="Beschreiben Sie Ihr Projekt..."
                      aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none ${errors.message ? 'border-red-300' : 'border-slate-200'}`}
                    />
                    {errors.message && <p id="err-message" className="mt-1 text-xs text-red-500" role="alert">{errors.message}</p>}
                  </div>

                  <button
                    type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-px mt-1"
                  >
                    {loading ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" /> Wird gesendet…</>
                    ) : (
                      <>Absenden <Send size={16} aria-hidden="true" /></>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Mit dem Absenden stimmen Sie unserer{' '}
                    <a href="#" className="underline hover:text-slate-600">Datenschutzerklärung</a> zu.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
