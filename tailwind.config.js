/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1D",
        text: "#FBFBFB",
        ttr: "#1E201E",
      },
      fontFamily: {
        title: ["Roboto"],
      },
    },
  },
  plugins: [],
};
