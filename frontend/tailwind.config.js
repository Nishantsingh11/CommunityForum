/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      backgroundclr: "hsl(36 39% 88%)",
      forgroundclr: "hsl(36 45% 15%)",
      forButton: "hsl(37, 45%, 70%)",
      fortextnormal: "hsl(34, 22%, 41%)",
      forheading: "hsl(41, 28%, 21%)",
      secondaryColor:"hsl(34, 33%, 75%)",
      card:"hsl(34, 46%, 82%)"
    },
    extend: {}
  },
  plugins: []
};
