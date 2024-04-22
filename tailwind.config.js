/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**//*{js,jsx?ts?tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#0FA3B1",
        "custom-orange": "#F7A072",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
