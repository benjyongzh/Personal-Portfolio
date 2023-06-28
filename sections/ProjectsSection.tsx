"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

//lib
import projectList, { projectReference } from "@/lib/projectList";

//components
import ProjectCard from "@/components/ProjectCard";

//redux
// import { useDispatch, useSelector } from "react-redux";
// import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
// import { addPopup, removePopup } from "@/features/popup/popupSlice";
// import { IPopup } from "@/features/popup/popupSlice";
// import { IPopupType } from "@/features/popup/PopupList";

//animations
import { motion } from "framer-motion";
import {
  staggerVariant,
  textVerticalFadeMoveFromBottomVariant,
} from "@/lib/framerVariants";
import ScrollAnimationWrapper, {
  dampSpring,
} from "@/components/ScrollAnimationWrapper";

export const emptyProject: projectReference = {
  projectName: "",
  href: "",
  githubLink: "",
  cardDescription: "",
  longDescription: "",
  cardImage: "",
  popupImage: "",
  techStack: [],
};

export default function Projects(props: {
  handleCreatePopup: Function;
  currentProjectPopup: projectReference;
}) {
  const pathname = usePathname();

  const openProjectPopup = (projectName: string) => {
    if (props.currentProjectPopup !== emptyProject) return;

    const project = projectList.filter(
      (projectItem: projectReference) => projectItem.projectName === projectName
    )[0];
    if (project) {
      console.log("project found: ", project);
      console.log("Open pop up");
      props.handleCreatePopup({ type: "projectPopup", info: project });
    }
  };

  return (
    <motion.section className="flex flex-col items-start justify-center h-screen gap-8 sm:gap-12 sm:py-10">
      <ScrollAnimationWrapper
        animationProps={{
          xIn: -200,
          xOut: 200,
          animType: "linear",
          spring: dampSpring,
        }}
      >
        <motion.header
          variants={textVerticalFadeMoveFromBottomVariant}
          className="text-3xl font-light tracking-widest sm:text-5xl"
        >
          PROJECTS
        </motion.header>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper
        animationProps={{
          xIn: -50,
          xOut: 50,
          animType: "linear",
          spring: dampSpring,
        }}
      >
        <motion.p
          variants={textVerticalFadeMoveFromBottomVariant}
          className="text-base text-justify text-textlightmode dark:text-textdarkmode"
        >
          Here is some text. A brief description of me. blablabla. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Quis laboriosam qui
          praesentium officia earum itaque nulla voluptatum obcaecati saepe
          suscipit!
        </motion.p>
      </ScrollAnimationWrapper>
      <motion.ul
        variants={textVerticalFadeMoveFromBottomVariant}
        className="grid w-full grid-flow-row grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {projectList.map((project) => (
          <ProjectCard
            key={project.projectName}
            projectName={project.projectName}
            click={() => openProjectPopup(project.projectName)}
          />
        ))}
      </motion.ul>
    </motion.section>
  );
}
