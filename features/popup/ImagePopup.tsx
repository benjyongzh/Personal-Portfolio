// "use client";

import { motion, Variants } from "framer-motion";
import PopupWrapper from "./PopupWrapper";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { removePopup } from "./popupSlice";
import Image from "next/image";
import { imageReference } from "@/lib/images";

const ImagePopup = (props: {
  imageInfo: imageReference;
  popupId: string;
  variants: Variants;
  initial: string;
  animate: string;
}) => {
  const dispatch = useAppDispatch();
  const currentPopups = useAppSelector((state) => state.popup.popups);

  const close = () => {
    dispatch(
      removePopup({
        id: props.popupId,
        type: { type: "imagePopup", info: props.imageInfo },
      })
    );
  };

  return (
    <motion.div
      layout
      initial={props.initial}
      animate={props.animate}
      exit={props.initial}
      variants={props.variants}
      data-popupId={props.popupId!}
      className="flex flex-col items-center justify-start w-[90%] rounded-[36px] gap-7 m-auto left-0 right-0 top-0 bottom-0 popup"
      style={{ zIndex: 10 + currentPopups.length * 10 }}
    >
      <Image
        src={props.imageInfo.image}
        width={500}
        height={500}
        alt={props.imageInfo.name}
      />

      <motion.button
        layout="position"
        className="btn-popup-secondary-blue"
        type="button"
        transition={{ type: "spring", duration: 0.4 }}
        onClick={() => close()}
      >
        Close
      </motion.button>
    </motion.div>
  );
};

export default PopupWrapper(ImagePopup);
