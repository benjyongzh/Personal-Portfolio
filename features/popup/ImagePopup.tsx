// "use client";

import { motion, Variants } from "framer-motion";
import PopupWrapper from "./PopupWrapper";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { removePopup } from "./popupSlice";
import Image from "next/image";
import CloseButton from "@/public/assets/icons/x.svg";
import { imageReference } from "@/lib/images";

const ImagePopup = (props: {
  imageInfo: imageReference;
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
        type: { type: "imagePopup", info: props.imageInfo },
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
      className="popup-image"
      style={{ zIndex: 10 + (popupIndex + 1) * 10 }}
    >
      <div className="object-contain h-auto border-2 border-black">
        <Image
          src={props.imageInfo.image}
          fill
          alt={props.imageInfo.name}
          style={{ objectFit: "contain", position: "absolute" }}
        />
      </div>

      <motion.button
        layout="position"
        className="absolute top-5 right-5 btn-circle-primary"
        type="button"
        transition={{ type: "spring", duration: 0.4 }}
        onClick={() => close()}
      >
        <CloseButton className="w-6 h-6" alt="close" />
      </motion.button>
    </motion.div>
  );
};

export default PopupWrapper(ImagePopup);
