/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1366px",
      },
      dropShadow: {
        brand: "0 10px 20px rgba(170,172,178, 0.25)",
        "input-shadow": ["0 5px 7px rgb(0 0 0 / 0.04)", "0 5px 7px rgb(0 0 0 / 0.04)"],
      },
    },
  },
  plugins: [],
};
