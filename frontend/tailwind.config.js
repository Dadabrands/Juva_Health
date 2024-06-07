
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {

    extend: {
      
      colors: {
        primary: "#8730AB",
        secondary: "#F2D5FF",
        tertairy : "#F2D4FF",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        // dimBlue: "rgba(9, 151, 124, 0.1)",
        black : "#000000",
        gray20 : "#333333",
        white : "#ffffff",
        gray3 : "#E5F2FF",
        lightgreen : "#DDEED6",
        lightblue : "#E5F2FF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xxxs: "280px",
      xxs: "360px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      wildest: '.25em',
    }
  },
  plugins: [],
};