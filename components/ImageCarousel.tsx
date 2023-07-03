"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const ImageCarousel = (props: { images: Array<string> }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const { images } = props;

  const shiftImages = (position: number) => {
    if (currentPosition < 1 && position < 0) return;
    if (currentPosition >= images.length - 1 && position > 0) return;
    setCurrentPosition((curr) => curr + position);
  };

  return (
    <div className="relative flex items-stretch justify-center w-full h-48">
      <button
        className="h-full p-3 opacity-70 justify-self-start bg-secondarydarkmode-light dark:bg-secondarylightmode-dark hover:bg-secondarydarkmode dark:hover:bg-secondarylightmode"
        type="button"
        onClick={() => shiftImages(-1)}
      >
        L
      </button>
      {images?.map((image, i) => (
        <motion.div
          className="h-full px-4 -z-10"
          animate={{
            x: -currentPosition * 100,
            scale: currentPosition === i ? 1.2 : 1,
            opacity: currentPosition === i ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          <Image src={image} width={500} height={500} alt={image} />
        </motion.div>
      ))}
      <button
        className="h-full p-3 opacity-70 justify-self-start bg-secondarydarkmode-light dark:bg-secondarylightmode-dark hover:bg-secondarydarkmode dark:hover:bg-secondarylightmode"
        type="button"
        onClick={() => shiftImages(1)}
      >
        R
      </button>
    </div>
  );
};

export default ImageCarousel;
