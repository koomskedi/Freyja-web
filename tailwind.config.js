/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F0',
        sand: '#F0E7DA',
        powder: '#EADCE4',
        rose: '#D9A8B8',
        ink: '#2B1F24',
        muted: '#7A6A6F',
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
        glow: '0 20px 60px -20px rgba(43, 31, 36, 0.25)',
        gold: '0 20px 40px -15px rgba(191, 125, 86, 0.3)',
        soft: '0 10px 40px -15px rgba(217, 168, 184, 0.5)',
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
