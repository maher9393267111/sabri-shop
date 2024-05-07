/** @type {import('tailwindcss').Config} */
const { screens } = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./functions/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      xxl: "1536px",
      ...screens,
    },
    extend: {

      fontFamily: {
        kufi: ["Noto Kufi Arabic", "sans-serif"],
        ibm: ['IBM Plex Sans Arabic', 'sans-serif']
      },
      colors: {
        primary: "#171F49",
      },

      animation : {
marquee : "marquee 30s linear  infinite",

marquee2 : "marquee2  50s linear  infinite "


      }

      ,

      keyframes : {

        marquee : {

          "0%" : {transform :"translateX(50%)"},
          "100%" : {transform :"translateX(-300%)"},


        }
,
        marquee2 :{
          "0%" : {transform :"translateX(100%)"},
          "100%" : {transform :"translateX(0%)"},


        }

      }


    },
  },
  plugins: [],
}