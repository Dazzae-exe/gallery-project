/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "mobile-lg": "420px",
        "mobile-sm": "355px",
      },
      colors: {
        "schema-light": {
          base: "#eff1ed",
          header: "#A3AE98",
          footer: "#A3AE98",
          links: "#707E63"
        },
        "schema-dark": {
          base: "#252422",
          header: "#4A4845",
          footer: "#4a4845",
          links: "#74716D"
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
