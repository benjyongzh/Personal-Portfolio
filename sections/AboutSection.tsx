"use client";

// import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GithubIcon from "@/public/assets/icons/github-original.svg";
import LinkedInIcon from "@/public/assets/icons/linkedin-plain.svg";

//links
import { githubProfileURL, linkedinProfileURL } from "@/lib/urls";

//components
import aboutText from "@/lib/aboutText";

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

export default function About() {
  const pathname = usePathname();
  const currentBreakpoint: string = useAppSelector(
    (state) => state.display.currentBreakpoint
  );

  return (
    <motion.section
      id="about-section"
      className="flex flex-col items-start justify-start gap-12 pt-20 pb-40 overflow-x-hidden sm:gap-16 sm:pb-24 section"
    >
      <ScrollAnimationWrapper
        animationProps={{
          opacityIn: 0.1,
          yIn: 200,
          spring: dampSpring,
          animType: "focusCenterlg",
        }}
      >
        <motion.header className="pageText pageText-pageTitle">
          {aboutText.pageTitle}
        </motion.header>
      </ScrollAnimationWrapper>

      <div className="flex flex-col items-center sm:justify-center justify-stretch sm:flex-row">
        <div className="flex flex-col sm:pr-[10%] items-center justify-between w-full h-full gap-10 pb-6 border-b-2 sm:w-1/2 sm-h-full sm:pb-0 sm:border-b-0 sm:border-r-2 border-textlightmode dark:border-accentdarkmode">
          <ScrollAnimationWrapper
            animationProps={{
              yIn: 150,
              spring: dampSpring,
              animType: "focusCenterlg",
            }}
          >
            <motion.div className="border-4 border-solid rounded-full w-60 border-textlightmode dark:border-accentdarkmode sm:w-full aspect-square" />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            animationProps={{
              xIn: -200,
              spring: dampSpring,
            }}
          >
            <motion.div className="pageText pageText-header">
              {aboutText.header}
            </motion.div>
          </ScrollAnimationWrapper>
          <div className="flex gap-8 justify-even">
            <Link
              className="link-icon"
              href={githubProfileURL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon
                className="w-6 h-6 link-icon"
                alt="Github profile link"
              />
            </Link>
            <Link
              className="link-icon group"
              href={linkedinProfileURL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon
                className="w-6 h-6 link-icon"
                alt="LinkedIn profile link"
              />
            </Link>
          </div>
        </div>
        <ScrollAnimationWrapper
          animationProps={{
            opacityIn: 0,
            xIn: 200,
            spring: dampSpring,
            animType:
              currentBreakpoint === "xs" ? "focusCenterxs" : "focusCenterlg",
          }}
        >
          <motion.div className="flex items-stretch w-full h-full pt-6 justify-stretch sm:items-center sm:w-1/2 sm:pl-[10%] sm:pt-0 pageText pageText-bodytext">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            enim at dolor in nostrum reiciendis quos distinctio, consequatur
            accusamus. Eveniet expedita eum sit iure. Accusamus perferendis
            obcaecati iure, alias quaerat ut vel autem dolorum itaque corporis
            excepturi inventore veritatis omnis.
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </motion.section>
  );
}
