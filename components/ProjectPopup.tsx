import { isEmptyObj } from "@/utils/objects";
import { projectReference, isProjectReference } from "@/lib/projectList";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const screenPopupVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
    },
  },
};

const ProjectPopup = (props: {
  project: projectReference;
  closePopup: Function;
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

  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(projectName !== "");
  }, [props.project]);

  return (
    <motion.div
      layout
      variants={screenPopupVariant}
      initial="hidden"
      animate={shown ? "visible" : "hidden"}
      className={`bg-gradient-to-br from-secondarylightmode to-secondarylightmode-dark dark:from-secondarydarkmode-light dark:to-secondarydarkmode z-10 fixed mx-auto left-0 right-0 flex flex-col items-start justify-between w-[90%] h-[80%]  rounded-[36px] gap-7 p-7 sm:p-9 shadow-2xl`}
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

export default ProjectPopup;
