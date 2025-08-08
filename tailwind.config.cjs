/****
 * Tailwind config personnalisé - Charte Star Citizen
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        scDark: '#0A1B2A',
        scBlue: '#00BFFF',
        scMetal: '#1F2D3A',
        scLight: '#AFC6D4',
        scWhite: '#E6F1F8'
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial',
          'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'
        ]
      },
      boxShadow: {
        glow: '0 0 0.5rem #00BFFF88',
      },
      backdropBlur: {
        xs: '2px'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        fadeUp: 'fadeUp 600ms ease-out both',
        fadeIn: 'fadeIn 600ms ease-out both'
      }
    }
  },
  plugins: []
}
