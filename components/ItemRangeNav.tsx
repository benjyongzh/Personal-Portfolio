import React from "react";
import { motion } from "framer-motion";
import { createNumberArray } from "@/utils/numbers";

const ItemRangeNav = (props: {
  range: number;
  currentPosition: number;
  handleClick: Function;
}) => {
  const { range, currentPosition, handleClick } = props;

  const array = createNumberArray(range);

  return (
    <div className="flex items-center justify-center w-full h-3 gap-3">
      {array.map((item, i) => (
        <motion.button
          key={i}
          className={`h-full rounded-full cursor-pointer aspect-square ${
            currentPosition === i
              ? "bg-primarylightmode brightness-75 dark:brightness-100"
              : "bg-primarydarkmode-dark hover:bg-primarydarkmode brightness-75 dark:brightness-100"
          }`}
          animate={{
            scale: currentPosition === i ? 1 : 0.7,
          }}
          transition={{ type: "tween", duration: 0.15 }}
          onClick={() => handleClick(i)}
        ></motion.button>
      ))}
    </div>
  );
};

export default ItemRangeNav;
