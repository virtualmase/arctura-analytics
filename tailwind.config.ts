import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    './src/styles/**/*.css',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: { '2xl': '80rem' }
      },

      fontFamily: {
        heading: ['var(--font-heading)', 'Inter', 'ui-sans-serif', 'system-ui'],
        body: ['var(--font-body)', 'DM Sans', 'ui-sans-serif', 'system-ui']
      },

      colors: {
        // compatibility with previous tokens
        bg: 'var(--bg)',
        ink: 'var(--ink)',
        // semantic base + accents via CSS vars
        base: {
          bg: 'var(--bg)',
          fg: 'var(--fg, var(--ink))',
          surface: 'var(--surface, rgba(255,255,255,.06))',
          muted: 'var(--muted)'
        },
        brand: {
          50: 'var(--brand-50)',
          100: 'var(--brand-100)',
          200: 'var(--brand-200)',
          300: 'var(--brand-300)',
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
          700: 'var(--brand-700)',
          800: 'var(--brand-800)',
          900: 'var(--brand-900)',
          DEFAULT: 'var(--brand-500)'
        },
        accent: {
          teal: 'var(--accent-teal)',
          emerald: 'var(--accent-emerald)',
          cyan: 'var(--accent-cyan)'
        },
        // Brand palette (Coolors) kept for utility usage
        oxford_blue: {
          DEFAULT: '#0b132b',
          100: '#020409',
          200: '#050812',
          300: '#070c1b',
          400: '#091024',
          500: '#0b132b',
          600: '#1e3475',
          700: '#3154bd',
          800: '#6f89da',
          900: '#b7c4ec'
        },
        space_cadet: {
          DEFAULT: '#1c2541',
          100: '#06070d',
          200: '#0b0f1a',
          300: '#111627',
          400: '#161d33',
          500: '#1c2541',
          600: '#35467b',
          700: '#4f68b4',
          800: '#8a9bcd',
          900: '#c4cde6'
        },
        yinmn_blue: {
          DEFAULT: '#3a506b',
          100: '#0b1015',
          200: '#17202a',
          300: '#222f40',
          400: '#2e3f55',
          500: '#3a506b',
          600: '#517197',
          700: '#7894b6',
          800: '#a5b8ce',
          900: '#d2dbe7'
        },
        verdigris: {
          DEFAULT: '#5bc0be',
          100: '#102828',
          200: '#1f5150',
          300: '#2f7978',
          400: '#3fa2a0',
          500: '#5bc0be',
          600: '#7bccca',
          700: '#9cd8d7',
          800: '#bde5e5',
          900: '#def2f2'
        },
        fluorescent_cyan: {
          DEFAULT: '#6fffe9',
          100: '#00493e',
          200: '#00937d',
          300: '#00dcbb',
          400: '#27ffdf',
          500: '#6fffe9',
          600: '#8dffee',
          700: '#a9fff2',
          800: '#c6fff6',
          900: '#e2fffb'
        }
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h3: ['1.875rem', { lineHeight: '1.2' }],
        h4: ['1.5rem', { lineHeight: '1.25' }],
        h5: ['1.25rem', { lineHeight: '1.35' }],
        h6: ['1.125rem', { lineHeight: '1.4' }],
        lead: ['1.125rem', { lineHeight: '1.7' }],
        small: ['0.875rem', { lineHeight: '1.5' }]
      },

      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,.08)',
        'soft-lg': '0 12px 48px rgba(0,0,0,.12)',
        brand: '0 8px 24px rgba(16,185,129,.15)'
      },

      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}

export default config
