import { NextRequest, NextResponse } from 'next/server'

// Once prince-digitals.ch is verified in Resend, add 'admin@prince-digitals.ch' here
// and change FROM_EMAIL to 'noreply@prince-digitals.ch'
const FROM_EMAIL = 'Prince Digital Website <onboarding@resend.dev>'
const TO_EMAILS  = ['amirali@alizadeh.ch']           // add 'admin@prince-digitals.ch' after domain verification

function buildHtml(name: string, email: string, phone: string, message: string) {
  return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"></head>
<body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f8f8fc;">
  <div style="background:#fff;border-radius:12px;padding:32px;border:1px solid #e5e5ea;">
    <div style="margin-bottom:24px;padding-bottom:16px;border-bottom:2px solid #6366f1;">
      <h1 style="margin:0;font-size:22px;color:#09090f;">Neue Anfrage über die Website</h1>
      <p style="margin:4px 0 0;color:#888;font-size:13px;">Prince Digital — Kontaktformular</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr>
        <td style="padding:8px 0;color:#555;width:120px;vertical-align:top;">Name</td>
        <td style="padding:8px 0;color:#111;font-weight:600;">${name}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#555;vertical-align:top;">E-Mail</td>
        <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#6366f1;">${email}</a></td>
      </tr>
      ${phone ? `
      <tr>
        <td style="padding:8px 0;color:#555;vertical-align:top;">Telefon</td>
        <td style="padding:8px 0;"><a href="tel:${phone}" style="color:#6366f1;">${phone}</a></td>
      </tr>` : ''}
      <tr>
        <td style="padding:12px 0;color:#555;vertical-align:top;">Nachricht</td>
        <td style="padding:12px 0;color:#111;line-height:1.6;">${message.replace(/\n/g, '<br>')}</td>
      </tr>
    </table>
    <div style="margin-top:24px;padding:16px;background:#f3f3ff;border-radius:8px;font-size:13px;color:#555;">
      <strong>Direkt antworten an:</strong> <a href="mailto:${email}" style="color:#6366f1;">${email}</a>
    </div>
  </div>
  <p style="text-align:center;color:#aaa;font-size:11px;margin-top:16px;">
    Prince Digital · admin@prince-digitals.ch · 076 433 69 69
  </p>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone = '', message } = body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Alle Pflichtfelder sind erforderlich.' }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY
    const web3Key   = process.env.WEB3FORMS_ACCESS_KEY
    const subject   = `Neue Anfrage von ${name} — Prince Digital Website`

    /* ── 1. Resend ─────────────────────────────────────────────── */
    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: TO_EMAILS,
          reply_to: email,
          subject,
          html: buildHtml(name, email, phone, message),
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        console.error('[Resend error]', err)
        return NextResponse.json({ error: 'Fehler beim Senden. Bitte direkt mailen.' }, { status: 500 })
      }

      return NextResponse.json({ success: true })
    }

    /* ── 2. Web3Forms fallback ─────────────────────────────────── */
    if (web3Key && web3Key !== 'YOUR_ACCESS_KEY_HERE') {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3Key,
          subject,
          from_name: 'Prince Digital Website',
          name, email, phone, message,
          redirect: false,
        }),
      })
      const data = await res.json()
      if (!data.success) {
        return NextResponse.json({ error: 'Fehler beim Senden. Bitte direkt mailen.' }, { status: 500 })
      }
      return NextResponse.json({ success: true })
    }

    /* ── 3. Dev fallback ───────────────────────────────────────── */
    console.log('[Kontaktformular — kein Email-Service konfiguriert]', { name, email, phone, message })
    return NextResponse.json({ success: true })

  } catch {
    return NextResponse.json({ error: 'Server-Fehler. Bitte erneut versuchen.' }, { status: 500 })
  }
}
