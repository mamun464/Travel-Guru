/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      montserrat: "'Montserrat', sans-serif",
      bebas_neue: "'Bebas Neue', sans-serif",
    }
  },
  plugins: [require("daisyui")],
}

