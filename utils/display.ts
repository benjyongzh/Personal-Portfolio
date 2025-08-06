// Tailwind's default screen sizes. Hard-coded to avoid importing the
// entire Tailwind configuration at runtime.
const mediaBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const getCurrentBreakpoint = (currentWidth: number) => {
  //switch
  if (currentWidth < mediaBreakpoints.sm) return "xs";
  if (currentWidth < mediaBreakpoints.md) return "sm";
  if (currentWidth < mediaBreakpoints.lg) return "md";
  if (currentWidth < mediaBreakpoints.xl) return "lg";
  if (currentWidth < mediaBreakpoints["2xl"]) return "xl";
  return "2xl";
};
