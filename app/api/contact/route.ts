import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Alle Felder sind erforderlich.' }, { status: 400 })
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      // Fallback: log to console in dev, still return success to user
      console.log('[Kontaktformular]', { name, email, message })
      return NextResponse.json({ success: true })
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Neue Anfrage von ${name} — Prince Digitals Website`,
        from_name: 'Prince Digitals Website',
        name,
        email,
        message,
        redirect: false,
      }),
    })

    const data = await res.json()
    if (!data.success) {
      return NextResponse.json({ error: 'Fehler beim Senden. Bitte direkt mailen.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server-Fehler. Bitte erneut versuchen.' }, { status: 500 })
  }
}
