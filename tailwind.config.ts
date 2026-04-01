import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surface hierarchy
        surface: '#fcf9f4',
        'surface-container-low': '#f6f3ee',
        'surface-container-lowest': '#ffffff',
        'surface-container-high': '#ebe8e3',
        
        // Light/Dark tokens
        'on-surface': '#1c1c19',
        'on-surface-variant': '#4d5555',
        
        // Primary & Accents
        primary: '#006c51',
        'primary-container': '#33c096',
        tertiary: '#4d6264',
        'outline-variant': '#bbcac2',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.01em' }],
        sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.01em' }],
        base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(28, 28, 25, 0.05)',
        md: '0 4px 6px rgba(28, 28, 25, 0.07)',
        lg: '0 10px 15px rgba(28, 28, 25, 0.1)',
        xl: '0 20px 25px rgba(28, 28, 25, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
