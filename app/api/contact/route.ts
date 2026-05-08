import { NextRequest, NextResponse } from 'next/server'

const RESEND_KEY  = process.env.RESEND_API_KEY ?? ''
const FROM        = 'Prince Digital <onboarding@resend.dev>'
const PRIMARY_TO  = 'amirali@alizadeh.ch'
const BUSINESS_TO = 'admin@prince-digitals.ch'   // works after prince-digitals.ch is verified in Resend

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

function buildHtml(name: string, email: string, phone: string, message: string) {
  const safeMsg = esc(message).replace(/\n/g, '<br>')
  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f4f4f8;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:32px auto;">
    <tr><td style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5e5ea;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

      <!-- Header -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="background:linear-gradient(135deg,#6366f1 0%,#7c3aed 100%);padding:28px 32px;">
          <p style="margin:0;color:rgba(255,255,255,0.75);font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Prince Digital</p>
          <h1 style="margin:6px 0 0;color:#fff;font-size:22px;font-weight:700;">Neue Anfrage</h1>
        </td></tr>
      </table>

      <!-- Body -->
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:28px 32px;">
        <tr><td>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;color:#6b7280;font-size:13px;font-weight:600;width:100px;vertical-align:top;border-bottom:1px solid #f3f4f6;">Name</td>
              <td style="padding:10px 0 10px 16px;color:#111827;font-size:14px;font-weight:600;border-bottom:1px solid #f3f4f6;">${esc(name)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#6b7280;font-size:13px;font-weight:600;vertical-align:top;border-bottom:1px solid #f3f4f6;">E-Mail</td>
              <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f3f4f6;"><a href="mailto:${esc(email)}" style="color:#6366f1;font-size:14px;text-decoration:none;">${esc(email)}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding:10px 0;color:#6b7280;font-size:13px;font-weight:600;vertical-align:top;border-bottom:1px solid #f3f4f6;">Telefon</td>
              <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f3f4f6;"><a href="tel:${esc(phone)}" style="color:#6366f1;font-size:14px;text-decoration:none;">${esc(phone)}</a></td>
            </tr>` : ''}
            <tr>
              <td style="padding:14px 0 0;color:#6b7280;font-size:13px;font-weight:600;vertical-align:top;">Nachricht</td>
              <td style="padding:14px 0 0 16px;color:#111827;font-size:14px;line-height:1.7;">${safeMsg}</td>
            </tr>
          </table>

          <!-- Reply CTA -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
            <tr><td style="background:#f5f3ff;border-radius:10px;padding:16px 20px;">
              <p style="margin:0;color:#6b7280;font-size:13px;">
                <strong style="color:#374151;">Direkt antworten:</strong>&nbsp;
                <a href="mailto:${esc(email)}" style="color:#6366f1;text-decoration:none;">${esc(email)}</a>
              </p>
            </td></tr>
          </table>
        </td></tr>
      </table>

      <!-- Footer -->
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:0 32px 24px;">
        <tr><td style="border-top:1px solid #f3f4f6;padding-top:20px;">
          <p style="margin:0;color:#9ca3af;font-size:11px;text-align:center;">
            Prince Digital &middot; admin@prince-digitals.ch &middot; +41 76 433 69 69 &middot; Zürich
          </p>
        </td></tr>
      </table>

    </td></tr>
  </table>
</body>
</html>`
}

async function sendViaResend(to: string, subject: string, html: string, replyTo: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: FROM, to: [to], reply_to: replyTo, subject, html }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(JSON.stringify(err))
  }
  return res.json()
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone = '', message } = body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Alle Pflichtfelder sind erforderlich.' }, { status: 400 })
    }

    if (!RESEND_KEY) {
      console.warn('[Contact] RESEND_API_KEY not configured')
      return NextResponse.json({ success: true })
    }

    const subject = `Neue Anfrage von ${name} — Prince Digital`
    const html    = buildHtml(name, email, phone, message)

    // Primary recipient — must succeed
    await sendViaResend(PRIMARY_TO, subject, html, email)

    // Business email — fire-and-forget; fails silently until domain is verified in Resend
    sendViaResend(BUSINESS_TO, subject, html, email).catch((err: unknown) => {
      console.warn('[Contact] business email failed (domain not yet verified):', err)
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error('[Contact] Resend error:', err)
    return NextResponse.json({ error: 'Fehler beim Senden. Bitte direkt mailen.' }, { status: 500 })
  }
}
