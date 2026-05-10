import { NextResponse } from 'next/server'
import { applySchema } from '@/lib/validation'

export async function POST(req: Request) {
  const json = await req.json().catch(() => null)
  const parsed = applySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 })
  }

  // Placeholder for ATS/email integration.
  return NextResponse.json({ ok: true })
}
