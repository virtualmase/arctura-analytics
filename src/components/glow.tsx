import * as React from 'react'
import { cn } from '@/lib/utils'
import { gradientAccent } from '@/lib/theme'

type GlowProps = {
  className?: string
  children: React.ReactNode
  blur?: number
  opacity?: number
}

export function Glow({ className, children, blur = 40, opacity = 0.3 }: GlowProps) {
  return (
    <div className={cn('relative', className)}>
      <div
        aria-hidden
        className={cn('pointer-events-none absolute -inset-6 -z-10 rounded-[28px]')}
        style={{ filter: `blur(${blur}px)`, opacity }}
      >
        <div className={cn('h-full w-full rounded-[28px]', gradientAccent())} />
      </div>
      <div className="relative">{children}</div>
    </div>
  )}

