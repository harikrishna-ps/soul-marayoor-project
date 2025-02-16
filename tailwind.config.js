/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          light: '#d4bc98',
          DEFAULT: '#a67c52',
          dark: '#654321'
        }
      }
    }
  },
  plugins: [],
}