"use client";

import { projectReference } from "@/lib/projectList";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import PopupWrapper from "./PopupWrapper";

const ProjectPopup = (props: {
  project: projectReference;
  closePopup: Function;
  popupId: string;

  popupAnimations: {
    variants: Variants;
    initial: string;
    animate: string;
  };
  popupStyle: string;
}) => {
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

  return (
    <motion.div
      layout
      initial={props.popupAnimations.initial}
      animate={props.popupAnimations.animate}
      variants={props.popupAnimations.variants}
      data-popupId={props.popupId}
      className={`flex flex-col items-center justify-between w-[90%] h-[80%] rounded-[36px] gap-7 mx-auto left-0 right-0 ${props.popupStyle}`}
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
        onClick={() => props.closePopup()}
      >
        Close
      </motion.button>
    </motion.div>
  );
};

export default PopupWrapper(ProjectPopup);
