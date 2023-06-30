"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

//lib
import projectList, { projectReference } from "@/lib/projectList";

//components
import ProjectCard from "@/components/ProjectCard";

//redux
// import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "@/hooks/reduxHooks";

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

export default function Projects(props: { handleCreatePopup: Function }) {
  const pathname = usePathname();

  const currentProjectPopup = useAppSelector(
    (state) => state.popup.currentProjectPopup
  );

  const openProjectPopup = (projectName: string) => {
    if (JSON.stringify(currentProjectPopup) !== "{}") return;

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
    <motion.section
      id="projects-section"
      className="flex flex-col items-start justify-start h-screen gap-8 sm:gap-12 sm:py-10"
    >
      <ScrollAnimationWrapper
        animationProps={{
          xIn: 200,
          animType: "linear",
          spring: dampSpring,
        }}
      >
        <motion.header
          variants={textVerticalFadeMoveFromBottomVariant}
          className="pageText pageText-pageTitle"
        >
          PROJECTS
        </motion.header>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper
        animationProps={{
          xIn: 50,
          animType: "linear",
          spring: dampSpring,
        }}
      >
        <motion.p
          variants={textVerticalFadeMoveFromBottomVariant}
          className="pageText pageText-header"
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
