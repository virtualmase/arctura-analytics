import { cn } from '@/lib/utils'
import * as React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bleed?: boolean
  tone?: 'dark' | 'light'
}

export function Section({ className, bleed = false, tone = 'dark', children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        bleed ? '' : 'py-16 md:py-24',
        tone === 'light'
          ? 'bg-[linear-gradient(135deg,rgba(40,19,22,0.92),rgba(15,6,8,0.92))] text-[color:var(--fg)]'
          : 'text-[color:var(--fg)]',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="text-3xl font-semibold text-[color:var(--ink)] md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-muted">{subtitle}</p> : null}
    </div>
  )
}
