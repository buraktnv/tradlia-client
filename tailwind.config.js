/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1366px",
      },
      colors: {
        brand: {
          50: "#EAF9F8",
          100: "#D2F2F0",
          200: "#A5E5E1",
          300: "#78D8D3",
          400: "#4CBEC5",
          500: "#2FA8AD",
          600: "#1F8B92",
          700: "#186E74",
          800: "#145459",
          900: "#0F3D41",
        },
        ink: {
          DEFAULT: "#16232B",
          soft: "#51646E",
          muted: "#8FA0AA",
        },
        canvas: "#F4F8F9",
        surface: "#FFFFFF",
        line: "#E3EBEE",
        amber: {
          400: "#FFC53D",
          500: "#F5A623",
        },
        successTint: "#E6F7EF",
        successDark: "#1E7A50",
        dangerTint: "#FBEAE8",
        dangerDark: "#A33830",
        amberTint: "#FFF4DC",
        amberDark: "#8A5B10",
        success: "#2FB67C",
        danger: "#E2574C",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
      borderRadius: {
        card: "14px",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(22, 35, 43, 0.06), 0 4px 12px rgba(22, 35, 43, 0.08)",
        pop: "0 10px 24px rgba(22, 35, 43, 0.14)",
        modal: "0 24px 64px rgba(22, 35, 43, 0.24)",
      },
      dropShadow: {
        brand: "0 10px 20px rgba(170,172,178, 0.25)",
        "input-shadow": ["0 5px 7px rgb(0 0 0 / 0.04)", "0 5px 7px rgb(0 0 0 / 0.04)"],
      },
    },
  },
  plugins: [],
};
