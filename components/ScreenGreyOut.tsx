"use client";

//redux
// import { useSelector } from "react-redux";
import { useAppSelector } from "@/hooks/reduxHooks";
// import { removePopup } from "@/features/popup/popupSlice";
import { useEffect } from "react";

import { motion } from "framer-motion";

const screenGreyOutVariant = {
  hidden: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const ScreenGreyOut = (props: { clicked: Function }) => {
  const currentPopups = useAppSelector((state) => state.popup.popups);

  const checkPopups = () => {
    if (currentPopups.length > 0) {
      //make document body be unclickable
      //   body.has-popup
      if (!document.body.classList.contains("has-popup"))
        document.body.classList.add("has-popup");
    } else {
      if (document.body.classList.contains("has-popup"))
        document.body.classList.remove("has-popup");
    }

    return () => {
      //remove document unclickable class
      //   body.has-popup
      document.body.classList.remove("has-popup");
    };
  };

  useEffect(() => {
    checkPopups();
  }, [currentPopups]);

  return (
    <motion.div
      variants={screenGreyOutVariant}
      initial="hidden"
      animate={currentPopups.length > 0 ? "visible" : "hidden"}
      className={`${
        currentPopups.length <= 0 ? "pointer-events-none" : ""
      } fixed mx-auto left-0 right-0 flex my-auto top-0 bottom-0 items-center justify-center w-screen h-screen`}
      style={{
        backgroundColor: "#020617b4",
        zIndex: currentPopups.length * 10 + 9,
      }}
      onClick={() => {
        props.clicked();
      }}
    ></motion.div>
  );
};

export default ScreenGreyOut;
