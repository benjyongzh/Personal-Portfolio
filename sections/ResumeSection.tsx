"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

//components
import resumeText from "@/lib/resumeText";
import Tooltip from "@/components/Tooltip";
import TechIcon from "@/components/TechIcon";

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
import Image from "next/image";

export default function Resume() {
  const currentBreakpoint: string = useAppSelector(
    (state) => state.display.currentBreakpoint
  );

  const techs = resumeText.skills.map((tech, i) => (
    <motion.p key={i} className="pageText pageText-bodytext">
      <TechIcon tech={tech} size="md" key={i} popup={false} />
    </motion.p>
  ));

  const professions = resumeText.professions.map((job, i) => (
    <motion.div
      key={i}
      className="flex flex-col items-stretch justify-start gap-3"
    >
      <div className="flex items-center justify-between">
        <div>
          {job.title} at {job.company}
        </div>
        <div>
          {job.yearStarted} - {job.yearEnded}
        </div>
      </div>
      <ul className="flex flex-col items-start justify-start">
        {job.description.map((item) => (
          <li className="text-justify list-none">- {item}</li>
        ))}
      </ul>
    </motion.div>
  ));

  const educations = resumeText.educations.map((degree, i) => (
    <motion.div
      key={i}
      className="flex flex-col items-stretch justify-start gap-3"
    >
      <div className="flex items-center justify-between">
        <div>
          {degree.title} at {degree.institution}, {degree.country}
        </div>
        <div>
          {degree.yearStarted} - {degree.yearEnded}
        </div>
      </div>
      <ul className="flex flex-col items-start justify-start">
        {degree.description.map((item) => (
          <li className="text-justify list-none">- {item}</li>
        ))}
      </ul>
    </motion.div>
  ));

  return (
    <motion.section
      id="resume-section"
      className="flex flex-col items-start justify-start gap-12 overflow-x-hidden sm:gap-16 section"
    >
      {/* <ScrollAnimationWrapper
        animationProps={{
          opacityIn: 0.1,
          yIn: 200,
          spring: dampSpring,
          animType: "focusCenterlg",
        }}
      > */}
      <motion.header className="pageText pageText-pageTitle">
        {resumeText.pageTitle}
      </motion.header>

      {/* SKILLS */}
      {/* </ScrollAnimationWrapper> */}
      <div className="flex flex-col items-stretch justify-start gap-4">
        <div className="flex items-center justify-center pageText pageText-header">
          Skills
        </div>
        <div className="flex flex-wrap items-center justify-center w-full gap-2 border-t-2 border-secondarydarkmode dark:border-accentdarkmode">
          {techs}
        </div>
      </div>

      {/* PROFESSION */}
      <div className="flex flex-col items-stretch justify-start gap-4">
        <div className="flex items-center justify-center pageText pageText-header">
          Professional Experience
        </div>
        <div className="flex flex-col items-stretch justify-start w-full gap-2 border-t-2 border-secondarydarkmode dark:border-accentdarkmode">
          {professions}
        </div>
      </div>

      {/* EDUCATION */}
      <div className="flex flex-col items-stretch justify-start gap-4">
        <div className="flex items-center justify-center pageText pageText-header">
          Education
        </div>
        <div className="flex flex-col items-stretch justify-start w-full gap-2 border-t-2 border-secondarydarkmode dark:border-accentdarkmode">
          {educations}
        </div>
      </div>
    </motion.section>
  );
}
