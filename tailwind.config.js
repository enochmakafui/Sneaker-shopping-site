/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navColor: {
          hsl: "hsl(0, 0%, 100%)",
        },
        orangeColor: {
          hsl: "hsl(26, 100%, 55%)",
        },
      },
    },
  },
  plugins: [],
};
