"use client";

import { projectReference } from "@/lib/projectList";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import PopupWrapper, { popupWrapperInfoType } from "./PopupWrapper";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { removePopup } from "./popupSlice";

const ProjectPopup = (props: {
  project: projectReference;
  popupId: string;
  variants: Variants;
  initial: string;
  animate: string;
}) => {
  const dispatch = useAppDispatch();
  const {
    projectName,
    href,
    githubLink,
    cardDescription,
    longDescription,
    cardImage,
    popupImage,
    techStack,
  } = props.project;
  const currentPopups = useAppSelector((state) => state.popup.popups);

  const close = () => {
    dispatch(removePopup({ id: props.popupId }));
  };

  return (
    <motion.div
      layout
      initial={props.initial}
      animate={props.animate}
      exit={props.initial}
      variants={props.variants}
      data-popupId={props.popupId!}
      className="flex flex-col items-start justify-between w-[90%] h-[80%] rounded-[36px] gap-7 m-auto left-0 right-0 top-0 bottom-0 popup"
      style={{ zIndex: 10 + currentPopups.length * 10 }}
    >
      <motion.header
        layout="position"
        transition={{ type: "spring", duration: 0.4 }}
        className={`text-accentlightmode dark:text-accentdarkmode font-bold text-2xl`}
      >
        {projectName}
      </motion.header>
      <motion.p
        layout="position"
        transition={{ type: "spring", duration: 0.4 }}
        className="text-base text-justify text-accentlightmode-dark dark:text-accentdarkmode"
      >
        this is a test project card. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fugiat temporibus accusamus provident maxime impedit
        debitis quasi ipsa nobis amet qui nesciunt minima laborum corrupti a
        autem, voluptate ex fugit quas porro deleniti quam dolore! Magnam,
        consequatur. Ea aliquam dolores animi totam, accusantium quidem. Itaque
        asperiores voluptates placeat dicta voluptate? Atque.
      </motion.p>
      <motion.button
        layout="position"
        className="btn-secondary"
        type="button"
        transition={{ type: "spring", duration: 0.4 }}
        onClick={() => close()}
      >
        Close
      </motion.button>
    </motion.div>
  );
};

export default PopupWrapper(ProjectPopup);
