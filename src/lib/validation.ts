import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional().default(''),
  message: z.string().min(10),
  // Honeypot: must be empty if present
  website: z.string().max(0).optional().default('')
})

export const applySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  cv: z.string().url({ message: 'Must be a valid URL' }),
  message: z.string().min(5, 'Please include a brief message')
})

export type ContactInput = z.infer<typeof contactSchema>
export type ApplyInput = z.infer<typeof applySchema>
