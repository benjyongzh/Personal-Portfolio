"use client";

import Link from "next/link";
import GithubIcon from "@/public/assets/icons/github-original.svg";
import LinkedInIcon from "@/public/assets/icons/linkedin-plain.svg";
import ExternalLinkIcon from "@/public/assets/icons/external-link.svg";

//animations
import { motion } from "framer-motion";
import ScrollAnimationWrapper, {
  dampSpring,
} from "@/components/ScrollAnimationWrapper";
import {
  staggerVariant,
  textVerticalFadeMoveFromBottomVariant,
} from "@/lib/framerVariants";

//redux
import { useAppSelector } from "@/hooks/reduxHooks";
import SiteLinkButton from "@/components/SiteLinkButton";

//links
import { githubProfileURL, linkedinProfileURL } from "@/lib/urls";

export default function Home() {
  const currentBreakpoint: string = useAppSelector(
    (state) => state.display.currentBreakpoint
  );

  return (
    <motion.section
      animate="visible"
      initial="hidden"
      variants={staggerVariant}
      id="home-section"
      className="flex flex-col items-start justify-center h-screen gap-8 overflow-hidden sm:gap-12 sm:py-10 section"
    >
      <motion.header
        variants={textVerticalFadeMoveFromBottomVariant}
        className="flex flex-col items-start justify-center gap-1 sm:gap-3"
      >
        <ScrollAnimationWrapper
          animationProps={{
            opacityOut: 0.2,
            yOut: -100,
            spring: dampSpring,
            animType:
              currentBreakpoint === "xs" ? "focusCenterxs" : "focusCenterlg",
          }}
        >
          <motion.h3
            variants={textVerticalFadeMoveFromBottomVariant}
            className="pageText-header pageText"
          >
            Hello! I'm
          </motion.h3>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          animationProps={{
            opacityOut: 0.2,
            yOut: -100,
            spring: dampSpring,
            animType:
              currentBreakpoint === "xs" ? "focusCenterxs" : "focusCenterlg",
          }}
        >
          <motion.h1
            variants={textVerticalFadeMoveFromBottomVariant}
            className="pageText-bigTitle pageText"
          >
            BENJAMIN YONG
          </motion.h1>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          animationProps={{
            opacityOut: 0.2,
            yOut: -100,
            spring: dampSpring,
            animType:
              currentBreakpoint === "xs" ? "focusCenterxs" : "focusCenterlg",
          }}
        >
          <motion.h4
            variants={textVerticalFadeMoveFromBottomVariant}
            className="pageText-header pageText"
          >
            Self-taught Software Developer
          </motion.h4>
        </ScrollAnimationWrapper>
      </motion.header>
      <ScrollAnimationWrapper
        animationProps={{
          opacityOut: 0.2,
          yOut: -100,
          spring: dampSpring,
          animType:
            currentBreakpoint === "xs" ? "focusCenterxs" : "focusCenterlg",
        }}
      >
        <motion.div
          variants={textVerticalFadeMoveFromBottomVariant}
          className="flex items-center justify-center gap-5"
        >
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
        </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper
        animationProps={{
          opacityOut: 0.2,
          yOut: -100,
          spring: dampSpring,
          animType:
            currentBreakpoint === "xs" ? "focusCenterxs" : "focusCenterlg",
        }}
      >
        <motion.p
          variants={textVerticalFadeMoveFromBottomVariant}
          className="pageText pageText-bodytext"
        >
          This is my portfolio website focused on web app development projects.
          The range of projects showcased here include both my pet projects as
          well as the learning projects I underwent when I was doing{" "}
          <a
            className="font-bold underline cursor-pointer hover:pageText-hover"
            href="https://www.theodinproject.com/"
            target="_blank"
          >
            The Odin Project
          </a>
          .
          <br />
          <br />
          This site is deployed on{" "}
          <a
            className="font-bold underline cursor-pointer hover:pageText-hover"
            href="https://vercel.com/"
            target="_blank"
          >
            Vercel
          </a>
          . Thank you for visiting!
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper
        animationProps={{
          opacityOut: 0.2,
          yOut: -100,
          spring: dampSpring,
          animType:
            currentBreakpoint === "xs" ? "focusCenterxs" : "focusCenterlg",
        }}
      >
        <motion.div
          variants={textVerticalFadeMoveFromBottomVariant}
          className="flex items-center self-end justify-center gap-4 mt-4"
        >
          <SiteLinkButton classStyle="btn-primary" sectionId="projects-section">
            Projects
            <svg
              aria-hidden="true"
              className="w-5 h-5 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </SiteLinkButton>
        </motion.div>
      </ScrollAnimationWrapper>
    </motion.section>
  );
}
