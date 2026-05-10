import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const kpiVariants = cva('rounded-xl border p-4', {
  variants: {
    tone: {
      default: 'border-white/10 bg-white/5',
      inset: 'border-white/10 bg-black/20'
    },
    trend: {
      up: 'text-emerald-300',
      down: 'text-rose-300',
      neutral: 'text-slate-300'
    }
  },
  defaultVariants: { tone: 'default', trend: 'neutral' }
})

export interface KPIStatProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof kpiVariants> {
  label: string
  value: string
  delta?: string
}

export function KPIStat({ label, value, delta, tone, trend, className }: KPIStatProps) {
  return (
    <div className={cn(kpiVariants({ tone }), className)}>
      <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
      {delta ? (
        <div className={cn('mt-1 text-xs', trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-rose-400' : 'text-slate-400')}>
          {trend === 'up' ? '▲' : trend === 'down' ? '▼' : '—'} {delta}
        </div>
      ) : null}
    </div>
  )
}

export { kpiVariants }

