/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#FFD700',
          dark: '#0A0A0A',
          card: '#141414',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': 'radial-gradient(circle at top, #1a1a1a 0%, #0a0a0a 100%)',
      }
    },
  },
  plugins: [],
}
