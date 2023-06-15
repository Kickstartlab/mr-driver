/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "20": "#343434",
        "50": "#191919",
        "100": "#000",
      },
      white: {
        "50": "#A09FAF",
        "100": "#fff",
      },
      yellow: {
        "50": "#FFE000",
        "100": "#FFC122",
        "200": "#FF86AB",
        "300": "#0ACF83",
      },
      blue: {
        "50": "#4759F9",
        "100": "#7A97FF",
        "200": "#FF7262",
      },
    },
    fontFamily: {
      'montserat': ["'Montserrat', sans-serif"],
      'urbanist': ["'Urbanist', sans-serif"]
    }
  },
  plugins: [],
}
