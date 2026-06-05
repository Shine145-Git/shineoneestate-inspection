import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

// Glassmorphism surface used across the site (8px radius, gold-tinted border).
export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`rounded-lg border border-shine-gold/20 bg-white/70 backdrop-blur-md shadow-glass ${className}`}
    >
      {children}
    </div>
  );
}
