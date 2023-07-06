// "use client";

import { motion, Variants } from "framer-motion";
import PopupWrapper from "./PopupWrapper";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { removePopup } from "./popupSlice";
import Image from "next/image";
import CloseButton from "@/public/assets/icons/x.svg";
import { imageReference, slideshowInfo } from "@/lib/images";

const ImagePopup = (props: {
  imagesInfo: slideshowInfo;
  popupId: string;
  variants: Variants;
  initial: string;
  animate: string;
  exit: string;
}) => {
  const dispatch = useAppDispatch();
  const currentPopups = useAppSelector((state) => state.popup.popups);

  const close = () => {
    dispatch(
      removePopup({
        id: props.popupId,
        type: { type: "imagePopup", info: props.imagesInfo },
      })
    );
  };

  const popupIndex = currentPopups
    .map((popup) => popup.id)
    .indexOf(props.popupId);

  return (
    <motion.div
      layout
      initial={props.initial}
      animate={props.animate}
      exit={[props.initial, props.exit]}
      variants={props.variants}
      data-popupid={props.popupId!}
      className="flex-col items-center justify-start gap-5 popup-full-base"
      style={{ zIndex: 10 + (popupIndex + 1) * 10 }}
    >
      <motion.div
        layout
        className="popup-full-underlay"
        style={{ zIndex: 9 + (popupIndex + 1) * 10 }}
        onClick={() => close()}
      />

      {/* slideshow component here */}

      <Image
        src={props.imageInfo.image}
        fill
        alt={props.imageInfo.name}
        className="object-contain static mx-auto max-h-[85%] mt-5 shadow-2xl max-w-[85%] border-black border-2"
        style={{ zIndex: 11 + (popupIndex + 1) * 10 }}
      />

      <motion.button
        layout="position"
        className="btn-circle-primary"
        type="button"
        transition={{ type: "spring", duration: 0.4 }}
        onClick={() => close()}
        style={{ zIndex: 11 + (popupIndex + 1) * 10 }}
      >
        <CloseButton className="w-6 h-6" alt="close" />
      </motion.button>
    </motion.div>
  );
};

export default PopupWrapper(ImagePopup);
