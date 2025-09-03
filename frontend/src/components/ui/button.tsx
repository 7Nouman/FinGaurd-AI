import { cn } from '../../lib/utils'
import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'primary' | 'outline'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant = 'primary', ...props }, ref) => {
    const Comp: any = asChild ? 'span' : 'button'
    return (
      <Comp
        ref={ref as any}
        className={cn(
          'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:opacity-50 disabled:cursor-not-allowed',
          'px-4 py-2',
          variant === 'primary'
            ? 'bg-[var(--gradient-primary)] bg-[length:200%_200%] bg-no-repeat text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] hover:scale-[1.02]'
            : 'border border-border/50 bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-[1.02] shadow-[var(--shadow-card)]',
          className,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'


