"use client";

import { projectReference } from "@/lib/projectList";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import PopupWrapper, { popupWrapperInfoType } from "./PopupWrapper";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { removePopup } from "./popupSlice";
import TechIcon from "@/components/TechIcon";

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
    githubName,
    cardDescription,
    longDescription,
    cardImage,
    popupImage,
    techStack,
  } = props.project;
  const currentPopups = useAppSelector((state) => state.popup.popups);
  const githubAPI = `https://api.github.com/repos/benjyongzh/${githubName}`; ///relevant methods: updated_At

  const close = () => {
    dispatch(
      removePopup({
        id: props.popupId,
        type: { type: "projectPopup", info: props.project },
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
      className="flex flex-col items-start justify-start w-[90%] h-[80%] rounded-[36px] gap-7 m-auto left-0 right-0 top-0 bottom-0 popup"
      style={{ zIndex: 10 + currentPopups.length * 10 }}
    >
      <motion.header
        layout="position"
        transition={{ type: "spring", duration: 0.4 }}
        className={`pageText pageText-pageTitle`}
      >
        {projectName}
      </motion.header>
      <motion.div className="flex flex-wrap items-center justify-center w-full gap-4 pb-5 border-b-2 sm:justify-start border-secondarydarkmode dark:border-accentdarkmode">
        {techStack.map((tech) => (
          <TechIcon tech={tech} size="sm" />
        ))}
      </motion.div>
      <motion.p
        layout="position"
        transition={{ type: "spring", duration: 0.4 }}
        className="pageText pageText-bodytext"
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
        className="btn-popup-secondary-blue justify-self-end"
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
