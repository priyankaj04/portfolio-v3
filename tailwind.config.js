/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#111111',
        'border-soft': '#1f1f1f',
        line: '#2a2a2a',
        emerald: {
          DEFAULT: '#10b981',
          dim: 'rgba(16, 185, 129, 0.08)',
        },
        ink: '#f5f5f5',
        muted: '#6b6b6b',
      },
      fontFamily: {
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        syne: ['"Syne"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'widest-2': '0.3em',
        'widest-3': '0.42em',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0.15' },
        },
      },
      animation: {
        floatY: 'floatY 7s ease-in-out infinite',
        scan: 'scan 8s linear infinite',
        blink: 'blink 1.1s steps(2, end) infinite',
      },
    },
  },
  plugins: [],
};
