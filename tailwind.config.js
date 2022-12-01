const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "16px": "1rem",
      },
      fontFamily: {
        primary: "var(--font-family-primary)", // Gotham
        secondary: "var(--font-family-secondary)", // Open Sans
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        info: "var(--color-info)",
        danger: "var(--color-danger)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        purple: "var(--color-purple)",
        gray: "var(--color-gray)",
        "dark-gray": "var(--color-dark-gray)",
      },
      screens: {
        sm: "641px",
        // => @media (min-width: 641px) { ... } -- mobile landscape

        md: "769px",
        // => @media (min-width: 769px) { ... } -- tablet

        lg: "993px",
        // => @media (min-width: 993px) { ... } -- ipad / mini-laptop

        xlg: "1150px",
        // => @media (min-width: 1092px) { ... } -- mini-laptop

        xl: "1281px",
        // => @media (min-width: 1281px) { ... } -- laptop

        "1xl": "1441px",
        // => @media (min-width: 1441px) { ... } -- large laptop

        "2xl": "1601px",
        // => @media (min-width: 1601px) { ... } -- desktop
        "3xl": "1921px",
        // => @media (min-width: 1921px) { ... } -- large desktop
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("path", "& path"); // selecting svg path
    }),
  ],
};
