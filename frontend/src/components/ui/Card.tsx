import React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div
    className={`bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl shadow-card ${className}`}
    {...props}
  />
);

export const CardHeader: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div className={`px-6 pt-6 ${className}`} {...props} />
);

export const CardContent: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div className={`px-6 pb-6 ${className}`} {...props} />
);


