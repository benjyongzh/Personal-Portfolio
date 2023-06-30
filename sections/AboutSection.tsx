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

      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex flex-col items-center justify-between w-full h-full gap-5">
          <div className="w-48 h-48 border-4 border-solid rounded-full border-accentlightmode dark:border-accentdarkmode sm:w-96 sm:h-96">
            profile image
          </div>

          <div className="pageText pageText-header">{aboutText.header}</div>
          <div className="flex justify-around gap-4">
            <div>github</div>
            <div>linkedin</div>
          </div>
        </div>

        <div>vertical divider</div>

        <div className="flex items-center justify-center w-full h-full pageText pageText-bodytext">
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
