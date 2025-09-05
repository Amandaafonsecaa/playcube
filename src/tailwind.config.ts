/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: "#F8F0E5",
          white: "#FFFFFF",
          red: "#FF0000",
          blue: "#102C57",
          beigeTransparent: "#EADBC800",
          beigeSoft: "#EADBC8",
          beigeDark: "#DAC0A3",
          blueLight: "#102C5733",
        },
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      borderRadius: { xl: "0.75rem" },
    },
  },
  plugins: [],
};
