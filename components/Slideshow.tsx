"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSwipeable, SwipeEventData } from "react-swipeable";
import { imageReference } from "@/lib/images";
import ItemRangeNav from "./ItemRangeNav";

//redux
import { useAppSelector } from "@/hooks/reduxHooks";

type slideshowProps = {
  currentIndex: number;
  imageRefs: imageReference[];
};

const Slideshow = (props: slideshowProps) => {
  const { imageRefs } = props;
  const [currentPosition, setCurrentPosition] = useState(props.currentIndex);
  const currentBreakpoint: string = useAppSelector(
    (state) => state.display.currentBreakpoint
  );

  const shiftImages = (position: number) => {
    if (currentPosition < 1 && position < 0) return;
    if (currentPosition >= imageRefs.length - 1 && position > 0) return;
    setCurrentPosition((curr) => curr + position);
  };

  const handleSwiped = (eventData: SwipeEventData) => {
    if (eventData.dir === "Left") {
      shiftImages(1);
    } else if (eventData.dir === "Right") {
      shiftImages(-1);
    }
  };

  /* const handleImageClick = (imagePosition: number) => {
    if (imagePosition === currentPosition) {
      //clicked on current image. open popup
      //get currentImage
      const imageSource = imageRefs[imagePosition];
      createPopup(imageSource, {
        //popupID should be better generated
        type: "imagePopup",
        info: images.map((image) => {
          return {
            image: imageSource,
            name: imageSource, //should have an image description}
          };
        }),
      });
    } else {
      //clicked on other images at the side
      setCurrentPosition(imagePosition);
    }
  }; */

  const swipeHandlers = useSwipeable({
    onSwiped: handleSwiped,
    // onTouchStartOrOnMouseDown: ({ event }) => event.preventDefault(),
    touchEventOptions: { passive: false },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="flex flex-col items-center justify-between w-full h-full gap-5">
      <div className="flex items-center justify-between w-full h-full gap-10 px-1 overflow-hidden">
        {currentBreakpoint === "xs" ? null : (
          <button
            className="btn-circle-popup justify-self-start"
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

        <motion.div
          initial={{ opacity: 0.5, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          {...swipeHandlers}
          className={`relative flex items-center w-full h-full overflow-hidden`}
        >
          {imageRefs?.map((image, i) => (
            <motion.div
              key={i}
              className={`overflow-hidden h-full w-full`}
              animate={{
                // x: (i - currentPosition) * 320 - 160,
                opacity: currentPosition === i ? 1 : 0,
              }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Image
                src={image.src}
                fill={true}
                alt={image.name}
                className="object-contain w-full h-full mx-auto"
              />
            </motion.div>
          ))}
        </motion.div>

        {currentBreakpoint === "xs" ? null : (
          <button
            className="btn-circle-popup justify-self-end"
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
      <p>{imageRefs[currentPosition].description || ""}</p>
      <ItemRangeNav
        range={imageRefs.length}
        currentPosition={currentPosition}
        handleClick={setCurrentPosition}
      />
    </div>
  );
};

export default Slideshow;
