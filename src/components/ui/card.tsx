import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva('rounded-xl border bg-white/5', {
  variants: {
    elevation: {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-md'
    },
    tone: {
      default: 'border-white/10',
      muted: 'border-white/5 bg-white/5',
      inset: 'border-white/10 bg-black/20',
      glass: 'border-white/10 bg-white/5 backdrop-blur'
    },
    interactive: {
      true: 'transition-transform hover:-translate-y-0.5',
      false: ''
    }
  },
  defaultVariants: { elevation: 'none', tone: 'default', interactive: false }
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, elevation, tone, interactive, ...props }: CardProps) {
  return <div className={cn(cardVariants({ elevation, tone, interactive }), className)} {...props} />
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6', className)} {...props} />
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 pb-6', className)} {...props} />
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 pb-6 pt-0', className)} {...props} />
}

export { cardVariants }
