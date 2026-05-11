/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF4DC",
        blush: "#F8D9CF",
        cherry: "#8F1830",
        berry: "#B52A42",
        golden: "#F2A23A",
        pistachio: "#778C43",
        cocoa: "#3D241B"
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(61, 36, 27, 0.12)"
      }
    }
  },
  plugins: []
};
