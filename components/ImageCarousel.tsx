"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useSwipeable, SwipeEventData } from "react-swipeable";

const ImageCarousel = (props: { images: Array<string> }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const currentBreakpoint: string = useAppSelector(
    (state) => state.display.currentBreakpoint
  );
  const { images } = props;

  const shiftImages = (position: number) => {
    if (currentPosition < 1 && position < 0) return;
    if (currentPosition >= images.length - 1 && position > 0) return;
    setCurrentPosition((curr) => curr + position);
  };

  const handleSwiped = (eventData: SwipeEventData) => {
    if (eventData.dir === "Left") {
      shiftImages(1);
    } else if (eventData.dir === "Right") {
      shiftImages(-1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwiped: handleSwiped,
    onTouchStartOrOnMouseDown: ({ event }) => event.preventDefault(),
    touchEventOptions: { passive: false },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const setImageIndex = (position: number) => {
    setCurrentPosition(position);
  };

  return (
    <div className="flex flex-col items-center justify-between w-full gap-5">
      <div className="flex items-center justify-between w-full gap-10 overflow-hidden h-60">
        {currentBreakpoint === "xs" ? null : (
          <button
            className="btn-circle-primary opacity-70 justify-self-start"
            type="button"
            onClick={() => shiftImages(-1)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 rotate-180"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        )}

        <div
          {...swipeHandlers}
          className="relative flex items-center w-full h-full overflow-hidden"
        >
          {images?.map((image, i) => (
            <motion.div
              className={`absolute left-[50%] overflow-hidden h-full w-[240px] sm:w-[320px] rounded-xl -z-10 ${
                currentPosition === i ? "shadow-xl" : "shadow-md"
              }`}
              animate={{
                x:
                  currentBreakpoint === "xs"
                    ? (i - currentPosition) * 240 - 120
                    : (i - currentPosition) * 320 - 160,
                scale: currentPosition === i ? 1 : 0.8,
                opacity: currentPosition === i ? 1 : 0.8,
              }}
              transition={{ type: "tween", duration: 0.15 }}
            >
              <Image
                src={image}
                fill={true}
                alt={image}
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          ))}
        </div>

        {currentBreakpoint === "xs" ? null : (
          <button
            className="btn-circle-primary opacity-70 justify-self-end"
            type="button"
            onClick={() => shiftImages(1)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        )}
      </div>
      <div className="flex items-center justify-center w-full h-3 gap-3">
        {images?.map((image, i) => (
          <motion.button
            className={`h-full rounded-full cursor-pointer aspect-square bg-primarylightmode hover:bg-primarylightmode-light ${
              currentPosition === i
                ? "bg-primarylightmode"
                : "bg-primarydarkmode hover:bg-primarydarkmode-light brightness-90"
            }`}
            animate={{
              scale: currentPosition === i ? 1 : 0.75,
            }}
            transition={{ type: "tween", duration: 0.15 }}
            onClick={() => setImageIndex(i)}
          ></motion.button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
