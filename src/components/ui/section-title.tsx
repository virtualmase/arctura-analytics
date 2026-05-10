import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const titleVariants = cva('font-semibold tracking-tight', {
  variants: {
    size: {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-3xl md:text-4xl'
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    }
  },
  defaultVariants: { size: 'lg', align: 'center' }
})

export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof titleVariants> {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle, size, align, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn('mx-auto mb-10 max-w-2xl', align === 'left' ? '' : 'text-center', className)} {...props}>
      <h2 className={cn(titleVariants({ size, align }))}>{title}</h2>
      {subtitle ? <p className="mt-4 text-slate-300">{subtitle}</p> : null}
    </div>
  )
}

export { titleVariants as sectionTitleVariants }

