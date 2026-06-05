import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'shine-cream': '#F5F0E8',
        'shine-blue': '#2B5BA8',
        'shine-lightblue': '#8FABD4',
        'shine-gold': '#C9A84C',
        'shine-black': '#0D0D0D',
        'shine-navy': '#0C0F1A',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'var(--font-playfair)', 'serif'],
        body: ['var(--font-dm-sans)', 'var(--font-inter)', 'sans-serif'],
        accent: ['var(--font-montserrat)', 'var(--font-raleway)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '8px',
        md: '8px',
        sm: '8px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(12, 15, 26, 0.18)',
        'gold-glow': '0 0 24px rgba(201, 168, 76, 0.25)',
        luxe: '0 20px 60px -20px rgba(12, 15, 26, 0.35)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0C0F1A 0%, #11203b 55%, #2B5BA8 130%)',
        'gold-line': 'linear-gradient(90deg, transparent 0%, #C9A84C 50%, transparent 100%)',
        'cream-fade': 'linear-gradient(180deg, #F5F0E8 0%, #ffffff 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'subtle-float': 'subtle-float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
