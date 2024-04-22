/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-Grayish-Blue": "hsl(233, 14%, 35%)",
        "Very-Dark-Grayish-Blue": "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
