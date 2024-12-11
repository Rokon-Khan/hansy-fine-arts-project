/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['"Work Sans", sans-serif'],
      },
      backgroundImage: {
        banner: "url('./assets/cuadro-horizontal-1.jpg')",
      },
    },
  },
  plugins: [daisyui],
};
