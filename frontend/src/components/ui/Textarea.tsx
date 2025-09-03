import React from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => (
  <textarea
    className={`w-full min-h-[120px] px-4 py-3 rounded-xl bg-input text-foreground placeholder:opacity-70 border border-border/60 focus:outline-none focus:ring-2 focus:ring-primary/40 ${className}`}
    {...props}
  />
);


