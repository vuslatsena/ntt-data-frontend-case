/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extend: {
    backgroundColor: {
      'blue-950': '#00254F',
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
