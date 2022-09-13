// /** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],

    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,      
    ],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {}
  },
  plugins: [],
}