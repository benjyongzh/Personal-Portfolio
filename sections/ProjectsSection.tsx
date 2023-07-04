"use client";
import { useRef } from "react";

//lib
import projectList, { projectReference } from "@/lib/projectList";

//components
import ProjectCard from "@/components/ProjectCard";

//redux
// import { useDispatch, useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { addPopup, removePopup, IPopupType } from "@/features/popup/popupSlice";

//animations
import { motion } from "framer-motion";
import { textVerticalFadeMoveFromBottomVariant } from "@/lib/framerVariants";
import ScrollAnimationWrapper, {
  dampSpring,
} from "@/components/ScrollAnimationWrapper";
import { useScroll } from "framer-motion";

export default function Projects() {
  const dispatch = useAppDispatch();
  const currentProjectPopup = useAppSelector(
    (state) => state.popup.currentProjectPopup
  );
  const currentScreenSize = useAppSelector((state) => state.display.screenSize);

  const openProjectPopup = (projectName: string) => {
    if (JSON.stringify(currentProjectPopup) !== "{}") return;

    const project = projectList.filter(
      (projectItem: projectReference) => projectItem.projectName === projectName
    )[0];
    if (project) {
      console.log("project found: ", project);
      console.log("Open pop up");
      createPopup({ type: "projectPopup", info: project });
    }
  };

  const createPopup = (popupType: IPopupType) => {
    dispatch(addPopup({ id: "projectPopupID", type: popupType })); //create unique popup ID here
  };

  //useref usescroll for project section header
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
  });

  return (
    <motion.section
      id="projects-section"
      className="flex flex-col items-start justify-start gap-8 py-10 mx-auto h-max sm:gap-12 sm:py-10 max-w-7xl"
    >
      <motion.div className="sticky bottom-0 flex flex-col gap-8 px-10 overflow-hidden top-36 sm:px-12 pb-36">
        <ScrollAnimationWrapper
          animationProps={{
            xIn: 200,
            animType: "linear",
            spring: dampSpring,
          }}
        >
          <motion.header
            variants={textVerticalFadeMoveFromBottomVariant}
            className="sticky pageText pageText-pageTitle"
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
            Feel free to explore some of the works I have done on my own as part
            of my self-learning practice.
          </motion.p>
        </ScrollAnimationWrapper>
      </motion.div>

      <motion.ul
        initial="hidden"
        className="z-[1] grid w-full grid-flow-row align-top grid-cols-1 px-10 sm:px-12 gap-10 sm:gap-x-16 sm:gap-y-30 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {projectList.map((project, i) => (
          <ProjectCard
            key={project.projectName}
            index={i}
            project={project}
            click={() => openProjectPopup(project.projectName)}
          />
        ))}
      </motion.ul>
    </motion.section>
  );
}
