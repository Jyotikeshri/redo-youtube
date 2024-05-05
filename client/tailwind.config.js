/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blac: "rgb(20,20,20)",
        greey: "rgb(40,40,40)",
        cream: "rgb(150,150,150)",
      },
      padding: {
        10: "0.8rem",
      },
      width: {
        300: "300px",
        400: "400px",
        250: "250px",
        200: "200px",
        100: "100px",
        70: "70px",
        150: "150px",
        1200: "1200px",
        1: "1px",
        1000: "100vw",
      },
      screens: {
        xsm: "400px",
        mbsm: "200px",
      },
      height: {
        100: "100vh",
        90: "90px",
        1: "1px",
        700: "700px",
      },
      objectPosition: {
        100: "100px",
      },
      margin: {
        170: "170px",
      },
      gap: {
        6: "10px",
      },
    },
  },
  plugins: [],
};
