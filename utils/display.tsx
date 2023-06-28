// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "@/tailwind.config.js";

const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("../tailwind.config.js");
const fullConfig = resolveConfig(tailwindConfig);
// console.log(fullConfig.theme.screens.md);
// => '768px'

const breakpoints = {
  sm: fullConfig.theme.screens.sm,
  md: fullConfig.theme.screens.md,
  lg: fullConfig.theme.screens.lg,
  xl: fullConfig.theme.screens.xl,
};
console.log(breakpoints);

const getCurrentBreakpoint = (currentWidth: number) => {
  //switch
};
