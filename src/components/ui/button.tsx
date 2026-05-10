import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-bg',
  {
    variants: {
      variant: {
        default: 'rounded-md bg-white text-black hover:opacity-90',
        gradient:
          'rounded-full text-[var(--glacier)] bg-[linear-gradient(120deg,var(--accent-start),var(--accent-mid),var(--accent-end))] shadow-[0_18px_48px_rgba(255,100,60,0.32)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(255,100,60,0.36)]',
        coral:
          'rounded-full text-[var(--glacier)] bg-[linear-gradient(120deg,var(--accent-start),var(--accent-mid),var(--accent-end))] shadow-[0_16px_40px_rgba(255,100,60,0.28)] hover:-translate-y-0.5 hover:shadow-[0_20px_54px_rgba(255,100,60,0.34)]',
        outline: 'rounded-full border border-[color:var(--border)] text-[color:var(--fg)] hover:bg-[color:rgba(26,13,18,0.35)]',
        ghost: 'rounded-md hover:bg-[color:rgba(26,13,18,0.32)]'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      },
      shape: {
        rounded: 'rounded-md',
        pill: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'rounded'
    }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, shape, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
