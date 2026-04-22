/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        powder: '#D9C1D7',
        ink: '#080A0D',
        gold: '#BFAE7A',
        copper: '#BF7D56',
        earth: '#734230',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(217, 193, 215, 0.35)',
        gold: '0 0 40px -10px rgba(191, 174, 122, 0.4)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
