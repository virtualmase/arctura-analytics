export type EmailPayload = {
  to: string
  subject: string
  text: string
}

// Placeholder util that would call an email provider (Resend/SES/etc.)
export async function sendEmail(_payload: EmailPayload): Promise<{ ok: true }> {
  // In real life, call provider SDK/API here and handle failures
  await new Promise((r) => setTimeout(r, 20))
  return { ok: true }
}

