/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1D",
        text: "#FBFBFB",
      },
      fontFamily: {
        title: ["Roboto"],
      },
    },
  },
  plugins: [],
};
