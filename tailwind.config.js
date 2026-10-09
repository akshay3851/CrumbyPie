/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8EF',
        blush: '#F3D5C0',
        cocoa: '#4A2E27',
        caramel: '#C88752',
        accentPink: '#E07A5F'
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        outfit: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
