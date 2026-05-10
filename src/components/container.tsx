import { cn } from '@/lib/utils'
import * as React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement>

export function Container({ className, ...props }: Props) {
  return <div className={cn('container', className)} {...props} />
}
