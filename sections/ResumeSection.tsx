"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

//components
import resumeText from "@/lib/aboutText";
import Tooltip from "@/components/Tooltip";

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

  const description = resumeText.description.map((text, i) => (
    <motion.p key={i} className="pageText pageText-bodytext">
      {text}
      <br />
    </motion.p>
  ));

  return (
    <motion.section
      id="resume-section"
      className="flex flex-col items-start justify-start gap-12 pt-20 pb-40 overflow-x-hidden sm:gap-16 sm:pb-24 section"
    ></motion.section>
  );
}
