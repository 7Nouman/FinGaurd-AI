import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
};

export const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'primary',
  ...props
}) => {
  const base = 'inline-flex items-center justify-center rounded-xl font-semibold transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40';
  const sizes = 'px-6 py-3';
  const variants =
    variant === 'primary'
      ? 'bg-gradient-primary text-primary-foreground shadow-glow hover:scale-[1.02]'
      : 'border border-border/60 text-foreground/90 hover:bg-secondary/60';

  return <button className={`${base} ${sizes} ${variants} ${className}`} {...props} />;
};


