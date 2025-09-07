/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 
          beige: "#F8F0E5",          // fundo claro principal
          white: "#FFFFFF",          // branco puro
          red: "#FF0000",            // destaque (erros, botões de ação)
          blue: "#102C57",           // azul profundo (texto, header)
          beigeTransparent: "#EADBC800", // bege transparente (overlay)
          beigeSoft: "#EADBC8",      // bege suave (fundos secundários)
          beigeDark: "#DAC0A3",      // bege mais escuro (contraste)
          blueLight: "#102C5733",    // azul claro/transparente (hover, borda)
         }
      },
    },
  },
  plugins: [],
};
