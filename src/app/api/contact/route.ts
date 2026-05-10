import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation'
import { sendEmail } from '@/lib/email'

// Extremely simple in-memory rate limiter stub (per process)
const hits = new Map<string, { count: number; ts: number }>()
const WINDOW_MS = 60_000
const MAX_HITS = 5

async function parseBody(req: Request) {
  const ct = req.headers.get('content-type') || ''
  if (ct.includes('application/json')) {
    return await req.json().catch(() => null)
  }
  // Handle progressive enhancement form posts
  if (ct.includes('application/x-www-form-urlencoded') || ct.includes('multipart/form-data')) {
    const fd = await req.formData()
    const obj: Record<string, unknown> = {}
    fd.forEach((v, k) => {
      obj[k] = typeof v === 'string' ? v : v.name
    })
    return obj
  }
  return null
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const now = Date.now()
  const rec = hits.get(ip)
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now })
  } else if (rec.count >= MAX_HITS) {
    return NextResponse.json({ ok: false, error: 'Rate limited' }, { status: 429 })
  } else {
    rec.count++
    hits.set(ip, rec)
  }

  const json = await parseBody(req)
  const parsed = contactSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 })
  }

  // Honeypot check
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true }) // silently accept
  }

  const { name, email, company, message } = parsed.data
  const text = [`Name: ${name}`, `Email: ${email}`, company ? `Company: ${company}` : null, '', message]
    .filter(Boolean)
    .join('\n')
  await sendEmail({ to: 'hello@arctura-analytics.com', subject: 'New contact form submission', text })
  return NextResponse.json({ ok: true })
}
