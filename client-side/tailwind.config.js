/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['"Raleway", serif'],
        workSans: ['"Work Sans", sans-serif'],
        yesterYear: ["Yesteryear, cursive"],
      },
      backgroundImage: {
        banner: "url('./assets/cuadro-horizontal-1.jpg')",
        banner_1: "url('./assets/Hnasyaeggy_Studio.jpg')",
        login_background: "url('/src/assets/dark login bg 1.jpg')",
      },
      colors: {
        blackPrimary: "#030712",
        blackSecondary: "rgba(48, 48, 48, 0.90)",
        whiteSecondary: "#F0F0F0",
      },
      boxShadow: {
        "custom-white": "0px 4px 10px 0px rgba(255, 255, 255, 0.90)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Add DaisyUI's default light and dark themes
  },
};
