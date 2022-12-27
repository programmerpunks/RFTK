/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grid-img": "url('./images/winners/Grid2x.png')",
      },
    },
  },
  plugins: [],
};
