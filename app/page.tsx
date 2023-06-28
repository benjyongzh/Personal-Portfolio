"use client";

import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// //animations
import { motion, useScroll } from "framer-motion";
// import { useRef } from "react";
// import {
//   pageVariant,
//   textVerticalFadeMoveFromBottomVariant,
// } from "@/lib/framerVariants";

//sections
import HomeSection from "@/sections/HomeSection";
import ProjectsSection from "@/sections/ProjectsSection";
// import ResumeSection from "@/sections/ResumeSection";
// import AboutSection from "@/sections/AboutSection";
// import ContactSection from "@/sections/ContactSection";

import ScreenGreyOut from "@/components/ScreenGreyOut";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import {
  addPopup,
  removePopup,
  IPopup,
  IPopupType,
} from "@/features/popup/popupSlice";
import PopupList from "@/features/popup/PopupList";

//lib
import { emptyProject } from "@/sections/ProjectsSection";

export default function Portfolio() {
  const dispatch = useAppDispatch();

  const [currentProjectPopup, setCurrentProjectPopup] = useState(emptyProject);

  //general popup stuff
  const currentPopups = useAppSelector((state) => state.popup.popups);
  const createPopup = (popupType: IPopupType) => {
    dispatch(addPopup({ id: "hello", type: popupType })); //create unique popup ID here
    //only for projectcards
    if (popupType.type === "project") {
      setCurrentProjectPopup(popupType.info);
    }
  };

  const deletePopup = (popup: IPopup) => {
    dispatch(removePopup(popup));
  };

  return (
    <motion.section className="relative flex flex-col items-start justify-center app">
      <HomeSection />
      <ProjectsSection
        handleCreatePopup={(popup: IPopupType) => {
          createPopup(popup);
        }}
        currentProjectPopup={currentProjectPopup}
      />
      {/* <ResumeSection />
      <AboutSection />
      <ContactSection /> */}
      <ScreenGreyOut
        clicked={() => deletePopup(currentPopups[currentPopups.length - 1])}
      />
      <PopupList />
    </motion.section>
  );
}
