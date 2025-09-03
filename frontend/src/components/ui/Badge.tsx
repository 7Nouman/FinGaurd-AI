import React from 'react';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'low' | 'medium' | 'high';
};

export const Badge: React.FC<BadgeProps> = ({ className = '', variant = 'low', ...props }) => {
  const variants = {
    low: 'bg-gradient-risk-low text-success-foreground',
    medium: 'bg-gradient-risk-medium text-warning-foreground',
    high: 'bg-gradient-risk-high text-danger-foreground',
  } as const;

  return (
    <span
      className={`inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full shadow-card ${variants[variant]} ${className}`}
      {...props}
    />
  );
};


