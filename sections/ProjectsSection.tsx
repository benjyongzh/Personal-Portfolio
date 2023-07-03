"use client";
import { useRef } from "react";
// import { usePathname } from "next/navigation";

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
  projectCardHolderVariant,
  staggerVariant,
  textVerticalFadeMoveFromBottomVariant,
} from "@/lib/framerVariants";
import ScrollAnimationWrapper, {
  dampSpring,
} from "@/components/ScrollAnimationWrapper";
import { useScroll, useTransform, useSpring } from "framer-motion";

export default function Projects(props: { handleCreatePopup: Function }) {
  // const pathname = usePathname();

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
      props.handleCreatePopup({ type: "projectPopup", info: project });
    }
  };

  //useref usescroll for project section header
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
  });

  const headerTranslateY = useTransform(
    scrollY,
    [currentScreenSize.screenHeight, 2000],
    [0, 2000 - currentScreenSize.screenHeight]
  );

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
            Here is some text. A brief description of me. blablabla. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Quis laboriosam
            qui praesentium officia earum itaque nulla voluptatum obcaecati
            saepe suscipit!
          </motion.p>
        </ScrollAnimationWrapper>
      </motion.div>

      <motion.ul
        initial="hidden"
        className="z-[1] grid w-full grid-flow-row grid-cols-1 px-10 sm:px-12 gap-10 sm:gap-x-16 sm:gap-y-30 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {projectList.map((project, i) => (
          <ProjectCard
            key={project.projectName}
            index={i}
            projectName={project.projectName}
            click={() => openProjectPopup(project.projectName)}
          />
        ))}
      </motion.ul>
    </motion.section>
  );
}
