import * as React from 'react'
import { cn } from '../../lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'risk-low' | 'risk-medium' | 'risk-high'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const styles =
    variant === 'risk-low'
      ? 'bg-[var(--gradient-risk-low)] text-primary-foreground'
      : variant === 'risk-medium'
      ? 'bg-[var(--gradient-risk-medium)] text-primary-foreground'
      : variant === 'risk-high'
      ? 'bg-[var(--gradient-risk-high)] text-primary-foreground'
      : 'bg-secondary text-secondary-foreground'

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium shadow-[var(--shadow-card)]',
        styles,
        className,
      )}
      {...props}
    />
  )
}


