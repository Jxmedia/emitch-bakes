/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Roboto Slab"],
    },
    extend: {
      dropShadow: {
        glow: [
          "0 0px 5px rgba(255,255, 255, 1)",
          "0 0px 5px rgba(255, 255,255, 0.2)",
        ],
      },
    },
  },
  plugins: [],
}
