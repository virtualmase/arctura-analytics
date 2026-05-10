"use client"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { applySchema, type ApplyInput } from '@/lib/validation'
import { Input, Textarea } from '@/components/forms/fields'
import { Button } from '@/components/ui/button'

export function ApplyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<ApplyInput>({ resolver: zodResolver(applySchema) })

  async function onSubmit(values: ApplyInput) {
    const res = await fetch('/api/apply', { method: 'POST', body: JSON.stringify(values) })
    if (res.ok) reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-soft md:grid-cols-2"
    >
      <label className="grid gap-1">
        <span className="text-sm text-muted-strong">Full name</span>
        <Input placeholder="Ada Lovelace" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'apply-name-error' : undefined} {...register('name')} />
        {errors.name && <span id="apply-name-error" className="text-sm text-red-400">{errors.name.message}</span>}
      </label>
      <label className="grid gap-1">
        <span className="text-sm text-muted-strong">Email</span>
        <Input type="email" placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'apply-email-error' : undefined} {...register('email')} />
        {errors.email && <span id="apply-email-error" className="text-sm text-red-400">{errors.email.message}</span>}
      </label>
      <label className="grid gap-1 md:col-span-2">
        <span className="text-sm text-muted-strong">CV URL</span>
        <Input placeholder="https://link-to-your-cv.pdf" aria-invalid={!!errors.cv} aria-describedby={errors.cv ? 'apply-cv-error' : undefined} {...register('cv')} />
        {errors.cv && <span id="apply-cv-error" className="text-sm text-red-400">{errors.cv.message as string}</span>}
      </label>
      <label className="grid gap-1 md:col-span-2">
        <span className="text-sm text-muted-strong">Message</span>
        <Textarea rows={5} placeholder="Tell us why you’re excited" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'apply-message-error' : undefined} {...register('message')} />
        {errors.message && (
          <span id="apply-message-error" className="text-sm text-red-400">{errors.message.message as string}</span>
        )}
      </label>
      <div className="md:col-span-2">
        <Button variant="gradient" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting…' : 'Submit application'}
        </Button>
        {isSubmitSuccessful && (
          <span className="ml-3 text-sm text-muted">Thanks — we’ll be in touch.</span>
        )}
      </div>
    </form>
  )
}
