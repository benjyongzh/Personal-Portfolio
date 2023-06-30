"use client";

// import { useState } from "react";
import { usePathname } from "next/navigation";

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

  const currentProjectPopup = useAppSelector(
    (state) => state.popup.currentProjectPopup
  );
  return (
    <motion.div
      id="about-section"
      className="flex flex-col items-start justify-start gap-8 sm:px-12 sm:py-10"
    >
      <header className="pageText pageText-pageTitle">
        {aboutText.pageTitle}
      </header>

      <div className="flex flex-col items-center sm:justify-center justify-stretch sm:flex-row">
        <div className="flex flex-col items-center justify-between w-full h-full gap-5 pb-6 border-b-2 sm:w-1/2 sm-h-full sm:pr-6 sm:pb-0 sm:border-b-0 sm:border-r-2 border-textlightmode dark:border-accentdarkmode">
          <div className="w-48 h-48 border-2 border-solid rounded-full sm:border-4 border-textlightmode dark:border-accentdarkmode sm:w-96 sm:h-96">
            profile image
          </div>

          <div className="pageText pageText-header">{aboutText.header}</div>
          <div className="flex justify-around gap-4">
            <div>github</div>
            <div>linkedin</div>
          </div>
        </div>

        <div className="flex items-stretch w-full h-full pt-6 justify-stretch sm:items-center sm:w-1/2 sm:pl-20 sm:pt-0 pageText pageText-bodytext">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum enim
          at dolor in nostrum reiciendis quos distinctio, consequatur accusamus.
          Eveniet expedita eum sit iure. Accusamus perferendis obcaecati iure,
          alias quaerat ut vel autem dolorum itaque corporis excepturi inventore
          veritatis omnis.
        </div>
      </div>
    </motion.div>
  );
}
