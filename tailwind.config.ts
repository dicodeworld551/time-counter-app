import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0b1120'
        },
        brass: {
          50: '#fdf7f1',
          100: '#f6e8d8',
          200: '#eed1ae',
          300: '#e1b67f',
          400: '#d3954e',
          500: '#c57b35',
          600: '#a55f2a',
          700: '#7f4722',
          800: '#59321b',
          900: '#3a2114'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 24px 60px -40px rgba(15, 23, 42, 0.6)'
      }
    }
  },
  plugins: []
};

export default config;
