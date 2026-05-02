/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#EFE7D4',
          deep: '#E4D8BE',
          darker: '#D6C8A8',
        },
        ink: {
          DEFAULT: '#1A1511',
          soft: '#3D342B',
          muted: '#6B5B48',
        },
        claret: {
          DEFAULT: '#6B1F1F',
          dark: '#4A1515',
          light: '#C2554F',
        },
        saffron: '#C87D2E',
        indigo: {
          DEFAULT: '#0F1E33',
          deep: '#08111F',
        },
        gold: '#9F7A2A',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        editorial: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        arabic: ['"Amiri"', 'serif'],
      },
      fontSize: {
        // Editorial-scale typography
        'display-xl': ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        'pull': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.25', letterSpacing: '-0.005em' }],
      },
      letterSpacing: {
        'tightest-ish': '-0.035em',
        'tracked': '0.14em',
        'tracked-wide': '0.22em',
      },
      maxWidth: {
        'reading': '38rem',
        'editorial': '72ch',
      },
      animation: {
        'draw-line': 'drawLine 2.4s ease-out forwards',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        drawLine: {
          to: { strokeDashoffset: '0' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-10%)' },
          '30%': { transform: 'translate(3%,-15%)' },
          '50%': { transform: 'translate(12%,9%)' },
          '70%': { transform: 'translate(9%,4%)' },
          '90%': { transform: 'translate(-1%,7%)' },
        },
      },
    },
  },
  plugins: [],
}
