/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile-lg': '420px',
        'mobile-sm': '355px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

