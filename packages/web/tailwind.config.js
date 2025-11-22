/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moxinexa: {
          navy: "#0B2C45",
          teal: "#0D9488",
          dark: "#1A2B3C",
          light: "#F9FAFB",
          gray: "#6C757D",
          danger: "#EF4444",
          orange: "#F59E0B",
          'green-light': '#F0FDF4',
          'green-border': '#DCFCE7',
          'green-bg': '#D1FAE5',
          'green-text': '#16A34A',
          'sky-light': '#F0F9FF',
          'sky-border': '#E0F2FE',
          'sky-bg': '#BAE6FD',
          'sky-text': '#0284C7',
          'indigo-light': '#EEF2FF',
          'indigo-border': '#E0E7FF',
          'indigo-bg': '#C7D2FE',
          'indigo-text': '#4F46E5',
          'amber-light': '#FFFBEB',
          'amber-border': '#FEF3C7',
          'amber-bg': '#FDE68A',
          'amber-text': '#D97706',
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-urgent': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}