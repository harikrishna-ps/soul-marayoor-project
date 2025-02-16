/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
  }
}