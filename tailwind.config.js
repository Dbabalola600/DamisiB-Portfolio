/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        primary: "rgb(93, 63, 211)",
        secondary:"rgb(230, 230, 250)"
      }
    },
  },
  plugins: [],
}
