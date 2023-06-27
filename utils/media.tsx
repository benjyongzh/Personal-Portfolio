export const checkScreenSize = (): string => {
  const sizer = document.body.querySelector(
    "#screensizechecker"
  ) as HTMLDivElement;
  if (!sizer) {
    return "none";
  }
  const children = sizer.children;
  const elements = Array.from(children) as Array<HTMLElement>;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].style.display === "block") {
      return elements[i].getAttribute("data-size")!;
    }
  }

  return "none";
};
