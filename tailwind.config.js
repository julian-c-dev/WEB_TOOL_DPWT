/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "dark",

  theme: {
    extend: {
      colors: {
        main: "#00040f",
        highlight: "#00f6ff",
        // Light theme colors
        light: {
          primary: "#ffffff",
          highlight: "#f0f0f0",
        },
        // Dark theme colors
        dark: {
          primary: "#121212",
          highlight: "#1e1e1e",
        },
      },
    },

    screens: {
      xss: "400px",
      xs: "480px",
      ss: "620px",
      sm: "680px",
      md: "1100px",
      lg: "1200px",
      xl: "1472px",
      xl2: "1700px",
    },
  },
  plugins: [],
};
