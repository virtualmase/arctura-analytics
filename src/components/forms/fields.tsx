"use client"
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-3 py-2 text-[color:var(--fg)] outline-none placeholder:text-muted focus:border-[color:var(--border-strong)] focus:ring-0 focus-visible:ring-2 focus-visible:ring-[color:var(--border-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-3 py-2 text-[color:var(--fg)] outline-none placeholder:text-muted focus:border-[color:var(--border-strong)] focus:ring-0 focus-visible:ring-2 focus-visible:ring-[color:var(--border-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]',
        className
      )}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'
