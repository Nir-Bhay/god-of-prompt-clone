/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          lighter: '#1a1a1a',
          card: '#121212',
        },
        primary: {
          DEFAULT: '#ffffff',
          dim: '#a1a1aa',
        },
        accent: {
          DEFAULT: '#3b82f6', // Standard blue for some highlights, GoP uses a lot of white/black with subtle glows
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}