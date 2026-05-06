'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, CheckCircle, MapPin } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Bitte geben Sie Ihren Namen ein.'
    if (!form.email.trim()) e.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    if (!form.message.trim()) e.message = 'Bitte geben Sie eine Nachricht ein.'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    setErrors({})
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n })
  }

  return (
    <section
      id="kontakt"
      className="py-24 lg:py-32 bg-slate-900 px-4 sm:px-6 lg:px-8"
      aria-label="Kontakt"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start" ref={ref}>
          {/* Left — CTA text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-blue-400 font-semibold text-sm uppercase tracking-widest"
            >
              Kontakt
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight mt-3 mb-6"
            >
              Bereit für Ihr nächstes Projekt?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-10"
            >
              Erzählen Sie uns von Ihrer Idee. Wir melden uns innerhalb von 24 Stunden
              mit einem ersten kostenlosen Beratungsgespräch zurück — unverbindlich
              und ohne versteckte Kosten.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              <a
                href="mailto:hello@princedigital.de"
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                  <Mail size={18} className="text-blue-400 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                </div>
                <span className="font-medium">hello@princedigital.de</span>
              </a>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center">
                  <MapPin size={18} className="text-blue-400" aria-hidden="true" />
                </div>
                <span>Deutschland — Remote &amp; vor Ort</span>
              </div>
            </motion.div>

            {/* Availability indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45 }}
              className="inline-flex items-start gap-4 p-5 bg-slate-800 rounded-2xl border border-slate-700"
            >
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white font-semibold text-sm mb-1">Aktuell verfügbar</p>
                <p className="text-slate-400 text-sm">
                  Wir nehmen neue Projekte an. Antwortzeit: innerhalb von 24 Stunden.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <CheckCircle size={56} className="text-green-500 mb-5" aria-hidden="true" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Nachricht gesendet!</h3>
                <p className="text-slate-500 leading-relaxed">
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden
                  persönlich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Nachricht senden</h3>
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Ihr Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Max Mustermann"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm ${
                        errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-600" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      E-Mail-Adresse <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="max@mustermann.de"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm ${
                        errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Ihre Nachricht <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Erzählen Sie uns von Ihrem Projekt, Ihren Zielen und Ihrem Budget..."
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm ${
                        errors.message ? 'border-red-400 bg-red-50' : 'border-slate-200'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-600" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white py-3.5 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-px mt-2"
                    aria-label="Formular absenden"
                  >
                    {loading ? (
                      <>
                        <div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                          aria-hidden="true"
                        />
                        Wird gesendet…
                      </>
                    ) : (
                      <>
                        Nachricht absenden
                        <Send size={17} aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    Mit dem Absenden stimmen Sie unserer{' '}
                    <a href="#" className="underline hover:text-slate-600">
                      Datenschutzerklärung
                    </a>{' '}
                    zu.
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
