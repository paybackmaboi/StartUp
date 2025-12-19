/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#46ec13",
        "background-light": "#f6f8f6",
        "background-dark": "#152211", // Your specific dark green
        "surface-dark": "#1f3319",
        "border-dark": "#2c4823",
        "text-secondary": "#9fc992"
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
      },
      borderRadius: {
        "lg": "2rem",
        "xl": "3rem",
      },
    },
  },
  plugins: [],
}