"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

//components
import resumeText from "@/lib/resumeText";
import Tooltip from "@/components/Tooltip";
import TechIcon from "@/components/TechIcon";
import { tech } from "@/lib/techStackList";

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

  const skills = (skillset: object) => {
    const domains: string[] = Object.keys(skillset);
    return domains.map((domain) => {
      const domainSkills: Array<tech> =
        skillset[domain as keyof typeof skillset];
      const icons = techlist(domainSkills);
      return (
        <div className="flex flex-col items-center justify-start gap-3 p-4 sm:gap-5 pageText">
          <div className="w-full text-lg text-center pageText sm:text-xl">
            {domain}
          </div>
          <ul className="flex flex-wrap items-start justify-center w-full gap-3">
            {icons}
          </ul>
        </div>
      );
    });
  };

  const techlist = (domain: Array<tech>) => {
    return domain.map((tech, i) => (
      <motion.p key={i} className="pageText pageText-bodytext">
        <TechIcon tech={tech} size="md" key={i} popup={true} />
      </motion.p>
    ));
  };

  const professions = resumeText.professions.map((job, i) => (
    <motion.div
      key={i}
      className="flex flex-col items-stretch justify-start gap-4 pageText"
    >
      <div className="flex items-center justify-between">
        <div>
          {job.title} at {job.company}
        </div>
        <div>
          {job.yearStarted} - {job.yearEnded}
        </div>
      </div>
      <ul className="flex flex-col items-start justify-start gap-2">
        {job.description.map((item) => (
          <li className="list-none">- {item}</li>
        ))}
      </ul>
    </motion.div>
  ));

  const educations = resumeText.educations.map((degree, i) => (
    <motion.div
      key={i}
      className="flex flex-col items-stretch justify-start gap-4 pageText"
    >
      <div className="flex items-center justify-between">
        <div>
          {degree.title} at {degree.institution}, {degree.country}
        </div>
        <div>
          {degree.yearStarted} - {degree.yearEnded}
        </div>
      </div>
      <ul className="flex flex-col items-start justify-start gap-2">
        {degree.description.map((item) => (
          <li className="list-none">- {item}</li>
        ))}
      </ul>
    </motion.div>
  ));

  return (
    <motion.section
      id="resume-section"
      className="flex flex-col items-stretch justify-start gap-12 py-20 overflow-x-hidden sm:gap-16 section"
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
        <div className="flex items-center justify-center py-2 border-t-2 border-b-2 pageText pageText-header border-secondarydarkmode dark:border-accentdarkmode">
          SKILLS
        </div>
        <div className="grid w-full grid-flow-row grid-cols-1 gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills(resumeText.skills)}
        </div>
      </div>

      {/* PROFESSION */}
      <div className="flex flex-col items-stretch justify-start gap-4">
        <div className="flex items-center justify-center py-2 border-t-2 border-b-2 pageText pageText-header border-secondarydarkmode dark:border-accentdarkmode">
          PROFESSIONAL EXPERIENCE
        </div>
        <div className="flex flex-col items-stretch justify-start w-full gap-6">
          {professions}
        </div>
      </div>

      {/* EDUCATION */}
      <div className="flex flex-col items-stretch justify-start gap-4">
        <div className="flex items-center justify-center py-2 border-t-2 border-b-2 pageText pageText-header border-secondarydarkmode dark:border-accentdarkmode">
          EDUCATION
        </div>
        <div className="flex flex-col items-stretch justify-start w-full gap-6">
          {educations}
        </div>
      </div>
    </motion.section>
  );
}
