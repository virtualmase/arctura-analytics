import { cn } from '@/lib/utils'

export function Callout({ type = 'info', children }: { type?: 'info' | 'warn' | 'tip'; children: React.ReactNode }) {
  const styles = {
    info: 'border-blue-400/40 bg-blue-400/10',
    warn: 'border-amber-400/40 bg-amber-400/10',
    tip: 'border-emerald-400/40 bg-emerald-400/10'
  } as const
  return (
    <div className={cn('my-4 rounded-lg border p-4 text-sm', styles[type])}>{children}</div>
  )
}
