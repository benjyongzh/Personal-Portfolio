"use client";

// import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GithubIcon from "@/public/assets/icons/github-original.svg";
import LinkedInIcon from "@/public/assets/icons/linkedin-plain.svg";
import PhoneIcon from "@/public/assets/icons/phone.svg";
import EmailIcon from "@/public/assets/icons/mail.svg";

import { phoneNumber, phoneNumberText, email } from "@/lib/urls";

//links
import { githubProfileURL, linkedinProfileURL } from "@/lib/urls";

//components
import aboutText from "@/lib/aboutText";
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

export default function About() {
  const pathname = usePathname();
  const currentBreakpoint: string = useAppSelector(
    (state) => state.display.currentBreakpoint
  );

  const description = aboutText.description.map((text, i) => (
    <motion.p key={i} className="pageText pageText-bodytext">
      {text}
      <br />
    </motion.p>
  ));

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
        <div className="flex flex-col sm:pr-[10%] items-center justify-between w-full h-full gap-7 sm:gap-10 pb-6 border-b-2 sm:w-1/2 sm-h-full sm:pb-0 sm:border-b-0 sm:border-r-2 border-textlightmode dark:border-accentdarkmode">
          <ScrollAnimationWrapper
            animationProps={{
              yIn: 150,
              spring: dampSpring,
              animType: "focusCenterlg",
            }}
          >
            <motion.div className="border-4 border-solid rounded-full w-60 border-textlightmode dark:border-accentdarkmode sm:w-full aspect-square">
              <Image
                src="/assets/images/profile-pic.JPG"
                alt="personal photo"
              />
            </motion.div>
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
          <div
            className={`${
              currentBreakpoint === "xs"
                ? "grid w-full grid-flow-row grid-cols-3 gap-3"
                : "flex items-center justify-even gap-8"
            }`}
          >
            <div
              className={`flex justify-start ${
                currentBreakpoint === "xs" ? "col-span-2" : " w-full"
              }`}
            >
              <a className="gap-2 link-icon group" href={`tel:${phoneNumber}`}>
                <PhoneIcon className="w-6 h-6 link-icon" alt="contact number" />
                {currentBreakpoint === "xs" ? (
                  <span className="text-sm pageText group-hover:text-textlightmode-light group-hover:underline group-hover:dark:text-accentdarkmode-light">
                    {phoneNumberText}
                  </span>
                ) : (
                  <Tooltip text={phoneNumberText} />
                )}
              </a>
            </div>
            <div
              className={`flex justify-start ${
                currentBreakpoint === "xs" ? "col-span-1" : " w-full"
              }`}
            >
              <Link
                className="gap-2 link-icon group"
                href={linkedinProfileURL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedInIcon
                  className="w-6 h-6 link-icon"
                  alt="LinkedIn profile link"
                />
                {currentBreakpoint === "xs" ? (
                  <span className="text-sm pageText group-hover:text-textlightmode-light group-hover:underline group-hover:dark:text-accentdarkmode-light">
                    LinkedIn
                  </span>
                ) : (
                  <Tooltip text="LinkedIn" />
                )}
              </Link>
            </div>
            <div
              className={`flex justify-start ${
                currentBreakpoint === "xs" ? "col-span-2" : " w-full"
              }`}
            >
              <a className="gap-2 link-icon group" href={`mailto:${email}`}>
                <EmailIcon className="w-6 h-6 link-icon" alt="email" />

                {currentBreakpoint === "xs" ? (
                  <span className="text-sm pageText group-hover:text-textlightmode-light group-hover:underline group-hover:dark:text-accentdarkmode-light">
                    {email}
                  </span>
                ) : (
                  <Tooltip text={email} />
                )}
              </a>
            </div>
            <div
              className={`flex justify-start ${
                currentBreakpoint === "xs" ? "col-span-1" : " w-full"
              }`}
            >
              <Link
                className="gap-2 link-icon group"
                href={githubProfileURL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubIcon
                  className="w-6 h-6 link-icon"
                  alt="Github profile link"
                />
                {currentBreakpoint === "xs" ? (
                  <span className="text-sm pageText group-hover:text-textlightmode-light group-hover:underline group-hover:dark:text-accentdarkmode-light">
                    Github
                  </span>
                ) : (
                  <Tooltip text="Github" />
                )}
              </Link>
            </div>
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
          <motion.div className="flex flex-col items-stretch w-full h-full pt-6 justify-stretch sm:items-center sm:w-1/2 sm:pl-[10%] sm:pt-0 ">
            {description}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </motion.section>
  );
}
