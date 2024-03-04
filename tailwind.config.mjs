/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        fluo_green: "#08FF08",
        fluo_green_bright: "#21FF21",
        fluo_green_dark: "#048004",
        'text': '#e8eced',
        'background': '#051319',
        'primary': '#9bbcca',
        'secondary': '#305e72',
        'accent': '#f3e402',
      },
      fontFamily: {
        alien: '"Noto Sans Phags Pa"'
      },
    },
  },
  plugins: [],
};
