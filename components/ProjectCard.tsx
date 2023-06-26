"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = (props: {
  projectName?: string;
  click: Function;
  isOpen: boolean;
}) => {
  return (
    <motion.button
      className={`flex flex-col items-start justify-between bg-secondarylightmode dark:bg-secondarydarkmode-light rounded-[24px] shadow-slate-950
        ${
          // !props.isOpen
          // ?
          "max-w-lg h-52 sm:h-80 min-w-[200px] gap-3 p-5 hover:shadow-2xl"
          // : "absolute w-[80%] h-[80%] gap-7 p-7 sm:p-9 shadow-2xl"
        }`}
      type="button"
      transition={{ type: "spring", duration: 0.4 }}
      layout
      whileHover={{ scale: 1.05 }}
      onClick={() => {
        !props.isOpen ? props.click() : {};
      }}
    >
      <header
        className={`text-accentlightmode dark:text-accentdarkmode font-bold text-lg`}
      >
        {props.projectName}
      </header>
      {/* <motion.header
        layout
        transition={{ type: "spring", duration: 0.4 }}
        className={`text-accentlightmode-dark dark:text-accentdarkmode font-bold ${
          isOpen ? "text-2xl" : "text-lg"
        }`}
      >
        {props.projectName}
      </motion.header> */}
      {/* {isOpen ? (
        <p className="text-base text-justify text-accentlightmode-dark dark:text-accentdarkmode">
          this is a test project card. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat temporibus accusamus provident maxime impedit
          debitis quasi ipsa nobis amet qui nesciunt minima laborum corrupti a
          autem, voluptate ex fugit quas porro deleniti quam dolore! Magnam,
          consequatur. Ea aliquam dolores animi totam, accusantium quidem.
          Itaque asperiores voluptates placeat dicta voluptate? Atque.
        </p>
      ) : null} */}
      {/* <motion.button
        layout
        className={`${isOpen ? "btn-secondary" : "btn-primary w-full"}`}
        type="button"
        onClick={() => toggleOpen()}
      >
        {`${isOpen ? "Close" : "More"}`}
      </motion.button> */}
    </motion.button>
  );
};

export default ProjectCard;
