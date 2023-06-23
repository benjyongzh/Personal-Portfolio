/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  dark: "class",
  theme: {
    extend: {
      colors: {
        text: {
          lightmode: "#0f172a",
          darkmode: "#e2e8f0",
        },
        primary: {
          //sky
          light: "#38bdf8",
          DEFAULT: "#0ea5e9",
          dark: "#075985",
        },
        accent: {
          //yellow
          light: "#fef08a",
          DEFAULT: "#facc15",
          dark: "#ca8a04",
        },

        background: {
          //slate
          light: "#e2e8f0",
          dark: "#1e293b",
        },
      },
    },
  },
  plugins: [],
};
