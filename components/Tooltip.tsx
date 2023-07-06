import React from "react";

const Tooltip = (props: { text: string }) => {
  return (
    <span
      className={`absolute w-auto px-3 py-1.5 text-sm font-bold text-center transition-all duration-200 origin-bottom scale-0 rounded-md shadow-lg bottom-10 min-w-max group-hover:scale-100 bg-secondarydarkmode text-accentdarkmode`}
    >
      {props.text}
    </span>
  );
};

export default Tooltip;
