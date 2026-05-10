import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const chipVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border'
      },
      tone: {
        slate: '',
        accent: '',
        success: '',
        warning: ''
      }
    },
    compoundVariants: [
      { variant: 'solid', tone: 'slate', className: 'bg-white/10 text-white' },
      { variant: 'solid', tone: 'accent', className: 'text-black gradient' },
      { variant: 'solid', tone: 'success', className: 'bg-emerald-400/20 text-emerald-200' },
      { variant: 'solid', tone: 'warning', className: 'bg-amber-400/20 text-amber-200' },
      { variant: 'outline', tone: 'slate', className: 'border-white/20 text-white' },
      { variant: 'outline', tone: 'accent', className: 'border-arctura/50 text-arctura' },
      { variant: 'outline', tone: 'success', className: 'border-emerald-300/30 text-emerald-200' },
      { variant: 'outline', tone: 'warning', className: 'border-amber-300/30 text-amber-200' }
    ],
    defaultVariants: {
      variant: 'solid',
      tone: 'slate'
    }
  }
)

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof chipVariants> {}

export function Chip({ className, variant, tone, ...props }: ChipProps) {
  return <div className={cn(chipVariants({ variant, tone }), className)} {...props} />
}

export { chipVariants }
