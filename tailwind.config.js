/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          black: "#151611",
          darkGray: "#1A1A1A",
          gray: "#222222",
          mint: "#D0F0C0",
          mintDarker: "#b8e0a2",
          offWhite: "#EEEFED",
          muted: "#999999",
        },
        fontFamily: {
          heading: ["Abril Fatface", "serif"],
          primary: ["DM Sans", "sans-serif"],
          secondary: ["Inter", "sans-serif"],
        },
        boxShadow: {
          subtle: "0 4px 6px rgba(0, 0, 0, 0.1)",
          medium: "0 10px 15px rgba(0, 0, 0, 0.1)",
          strong: "0 20px 25px rgba(0, 0, 0, 0.15)",
        },
        borderRadius: {
          sm: "4px",
          md: "8px",
          lg: "16px",
          xl: "24px",
        },
        transitionTimingFunction: {
          DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        },
        transitionDuration: {
          DEFAULT: "300ms",
        },
      },
    },
    plugins: [],
  }