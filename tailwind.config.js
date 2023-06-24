/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        textlightmode: {
          light: "#466476",
          DEFAULT: "#24475c", //original
          dark: "#19303d",
        },
        textdarkmode: {
          light: "#98b3c2",
          DEFAULT: "#7f95a3", //original
          dark: "#50748a",
        },

        primarylightmode: {
          light: "#27d1ba",
          DEFAULT: "#22b3a2",
          dark: "#3b998e",
        },
        primarydarkmode: {
          light: "#20bfb4",
          DEFAULT: "#1BA098", //original
          dark: "#328781",
        },

        accentlightmode: {
          light: "#a38564",
          DEFAULT: "#806951",
          dark: "#674b2c",
        },

        accentdarkmode: {
          light: "#f7cb9d",
          DEFAULT: "#DEB992", //original
          dark: "#c5915a",
        },

        bglightmode: {
          light: "#d8eefe",
          dark: "#95c4e5",
        },

        bgdarkmode: {
          light: "#152c3c",
          dark: "#051622", //original
        },
      },
    },
  },
  plugins: [],
};
