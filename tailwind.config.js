/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{nunito:"Nunito"},
    },
    colors:{
      gray: { 100: "#808080", 200: "#212121", 300: "#212121" },
      white: "#fff",
      cyan: "#48c9b0",
      red: "#d6436e",
      green: "#25da72",
      purple:"#85C1E9",
      darkgreen:"#117864",
      orange:"#FF9800"
        },
        fontSize:{sm: "14px", md: "18px", lg: "24px", xl: "32px", base: "16px"},
  },

  plugins: [require('tailwind-scrollbar')],
}

