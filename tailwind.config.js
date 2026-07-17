/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#2563EB',
        success: '#16A34A',
        warning: '#FACC15',
        canvas: '#F8FAFC',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(15, 23, 42, 0.15)',
        card: '0 4px 24px -8px rgba(15, 23, 42, 0.10)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        gridpulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        gridpulse: 'gridpulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
