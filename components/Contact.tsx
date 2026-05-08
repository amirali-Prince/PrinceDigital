'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react'
import { useT } from '@/lib/i18n'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const t = useT()

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim())    e.name    = t.contact.nameRequired
    if (!form.email.trim())   e.email   = t.contact.emailRequired
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.contact.emailInvalid
    if (!form.message.trim()) e.message = t.contact.messageRequired
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
      const res  = await fetch('/api/contact', {
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

  const inputClass = (err?: string) =>
    `w-full px-4 py-3 bg-white/[0.05] border rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent transition-all ${
      err ? 'border-red-500/50' : 'border-white/[0.10] hover:border-white/20'
    }`

  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-[#09090f] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start" ref={ref}>

          {/* Left — Info */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="sig-badge"
            >
              {t.contact.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-4 mb-0"
            >
              {t.contact.h2}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.18, duration: 0.4 }}
              style={{ transformOrigin: 'left' }}
              className="sig-line"
            />
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.24 }}
              className="text-white/60 leading-relaxed mb-8 max-w-md"
            >
              {t.contact.sub}
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="space-y-3 mb-8"
            >
              <a
                href="mailto:admin@prince-digitals.ch"
                className="flex items-center gap-3.5 text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors flex-shrink-0">
                  <Mail size={17} className="text-indigo-400" aria-hidden="true" />
                </div>
                <span className="text-sm">admin@prince-digitals.ch</span>
              </a>

              <a
                href="tel:+41764336969"
                className="flex items-center gap-3.5 text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-center justify-center group-hover:bg-violet-500/20 transition-colors flex-shrink-0">
                  <Phone size={17} className="text-violet-400" aria-hidden="true" />
                </div>
                <span className="text-sm">076 433 69 69</span>
              </a>

              <div className="flex items-center gap-3.5 text-white/40">
                <div className="w-10 h-10 bg-white/[0.04] border border-white/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-white/40" aria-hidden="true" />
                </div>
                <span className="text-sm">Zürich, Schweiz</span>
              </div>
            </motion.div>

            {/* Availability indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
              className="inline-flex items-start gap-3.5 p-4 bg-white/[0.04] rounded-2xl border border-white/[0.08]"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white font-semibold text-sm">{t.contact.available}</p>
                <p className="text-white/40 text-xs mt-0.5">{t.contact.availableSub}</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-7 sm:p-9 border border-white/[0.08] shadow-2xl shadow-black/40"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 220 }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mb-5 shadow-xl shadow-indigo-500/30">
                    <CheckCircle size={32} className="text-white" aria-hidden="true" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{t.contact.successTitle}</h3>
                <p className="text-white/50 text-sm">{t.contact.successSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-lg font-bold text-white mb-6">{t.contact.formTitle}</h3>

                {apiError && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm" role="alert">
                    {apiError} —{' '}
                    <a href="mailto:admin@prince-digitals.ch" className="underline font-medium hover:text-red-300">
                      {t.contact.errorDirect}
                    </a>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white/70 mb-1.5">
                      {t.contact.nameLabel} <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name" type="text" autoComplete="name" required
                      value={form.name} onChange={(e) => set('name', e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      className={inputClass(errors.name)}
                    />
                    {errors.name && <p id="err-name" className="mt-1 text-xs text-red-400" role="alert">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white/70 mb-1.5">
                      {t.contact.emailLabel} <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email" type="email" autoComplete="email" required
                      value={form.email} onChange={(e) => set('email', e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      className={inputClass(errors.email)}
                    />
                    {errors.email && <p id="err-email" className="mt-1 text-xs text-red-400" role="alert">{errors.email}</p>}
                  </div>

                  {/* Phone (optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white/70 mb-1.5">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      id="phone" type="tel" autoComplete="tel"
                      value={form.phone} onChange={(e) => set('phone', e.target.value)}
                      placeholder={t.contact.phonePlaceholder}
                      className={inputClass()}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white/70 mb-1.5">
                      {t.contact.messageLabel} <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message" required rows={4}
                      value={form.message} onChange={(e) => set('message', e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'err-message' : undefined}
                      className={`${inputClass(errors.message)} resize-none`}
                    />
                    {errors.message && <p id="err-message" className="mt-1 text-xs text-red-400" role="alert">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-px mt-1"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>{t.contact.submit} <Send size={16} aria-hidden="true" /></>
                    )}
                  </button>

                  <p className="text-[11px] text-white/30 text-center">
                    {t.contact.privacy}{' '}
                    <a href="/datenschutz" className="underline hover:text-white/60 transition-colors">
                      {t.contact.privacyLink}
                    </a>{' '}
                    {t.contact.privacyEnd}
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
