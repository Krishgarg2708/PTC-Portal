/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#141B42',
        ink: '#F2F4FF',
        muted: '#9AA3CC',
        accent: '#22D3EE',
        plasma: '#B478FF',
        success: '#34E4A6',
        warning: '#FFC24B',
        canvas: '#05061A',
        void: '#0A0D2B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 50px -12px rgba(34, 211, 238, 0.25)',
        card: '0 4px 24px -8px rgba(6, 8, 30, 0.6)',
        glow: '0 0 0 1px rgba(148, 163, 255, 0.08), 0 20px 60px -20px rgba(180, 120, 255, 0.35)',
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
