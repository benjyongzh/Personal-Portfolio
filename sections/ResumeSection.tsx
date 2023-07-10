"use client";

//components
import resumeText from "@/lib/resumeText";
import SkillsSection from "@/components/SkillsSection";

//animations
import { motion } from "framer-motion";
import {
  staggerVariant,
  textVerticalFadeMoveFromBottomVariant,
} from "@/lib/framerVariants";
import ScrollAnimationWrapper, {
  dampSpring,
} from "@/components/ScrollAnimationWrapper";

export default function Resume() {
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
        <SkillsSection skillset={resumeText.skills} />
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
