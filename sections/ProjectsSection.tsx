"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

//lib
import projectList, { projectReference } from "@/lib/projectList";

//components
import ProjectPopup from "@/components/ProjectPopup";
import ProjectCard from "@/components/ProjectCard";
import ScreenGreyOut from "@/components/ScreenGreyOut";

//redux
// import { useDispatch, useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { addPopup, removePopup } from "@/features/popup/popupSlice";
import { IPopup } from "@/features/popup/popupSlice";

//animations
import { motion } from "framer-motion";
import {
  staggerVariant,
  textVerticalFadeMoveFromBottomVariant,
} from "@/lib/framerVariants";

const emptyProject: projectReference = {
  projectName: "",
  href: "",
  githubLink: "",
  cardDescription: "",
  longDescription: "",
  cardImage: "",
  popupImage: "",
  techStack: [],
};

export default function Projects() {
  const [currentProject, setCurrentProject] =
    useState<projectReference>(emptyProject);

  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const currentPopups = useAppSelector((state) => state.popup.popups);

  const toggleProjectPopup = (projectName: string) => {
    const project = projectList.filter(
      (projectItem: projectReference) => projectItem.projectName === projectName
    )[0];
    if (project) {
      // toggle pop up here
      const thisPopup: IPopup = {
        page: pathname,
        type: `popup ${project.projectName}`,
      };

      if (currentProject === emptyProject) {
        //no pop up at currently. so open one
        console.log("project found: ", project);
        console.log("Open pop up");
        setCurrentProject(project);

        dispatch(addPopup(thisPopup));
      } else {
        //pop up is currently already open. close it
        console.log("Close pop up");
        setCurrentProject(emptyProject);

        dispatch(removePopup(thisPopup));
      }
    }
  };

  return (
    <motion.section className="flex flex-col items-start justify-center h-screen gap-8 sm:gap-12 sm:py-10">
      <motion.header
        variants={textVerticalFadeMoveFromBottomVariant}
        className="text-3xl font-light tracking-wide sm:text-5xl"
      >
        PROJECTS
      </motion.header>
      <motion.p
        variants={textVerticalFadeMoveFromBottomVariant}
        className="text-base text-start text-textlightmode dark:text-textdarkmode"
      >
        Here is some text. A brief description of me. blablabla. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Quis laboriosam qui
        praesentium officia earum itaque nulla voluptatum obcaecati saepe
        suscipit!
      </motion.p>
      <motion.ul
        variants={textVerticalFadeMoveFromBottomVariant}
        className="grid w-full grid-flow-row grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {projectList.map((project) => (
          <ProjectCard
            key={project.projectName}
            projectName={project.projectName}
            click={() => toggleProjectPopup(project.projectName)}
            isOpen={
              currentProject !== emptyProject &&
              currentProject.projectName === project.projectName
            }
          />
        ))}
      </motion.ul>
      <ScreenGreyOut
        clicked={() => toggleProjectPopup(currentProject.projectName)}
      />
      <ProjectPopup
        project={currentProject}
        closePopup={() => toggleProjectPopup(currentProject.projectName)}
      />
    </motion.section>
  );
}
