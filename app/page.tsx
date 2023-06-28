"use client";

import { useState, useEffect } from "react";

// //animations
import { motion } from "framer-motion";
import { useWindowDimensions } from "@/hooks/displayHooks";

//sections
import HomeSection from "@/sections/HomeSection";
import ProjectsSection from "@/sections/ProjectsSection";
// import ResumeSection from "@/sections/ResumeSection";
// import AboutSection from "@/sections/AboutSection";
// import ContactSection from "@/sections/ContactSection";
import ScreenGreyOut from "@/components/ScreenGreyOut";

//redux
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import {
  addPopup,
  removePopup,
  IPopup,
  IPopupType,
} from "@/features/popup/popupSlice";
import PopupList from "@/features/popup/PopupList";
import { storeScreenSize } from "@/features/display/displaySlice";

export default function Portfolio() {
  const dispatch = useAppDispatch();
  const { height, width } = useWindowDimensions();

  //general popup stuff
  const currentPopups = useAppSelector((state) => state.popup.popups);
  const createPopup = (popupType: IPopupType) => {
    dispatch(addPopup({ id: "hello", type: popupType })); //create unique popup ID here
  };

  const deletePopup = (popup: IPopup) => {
    dispatch(removePopup(popup));
  };

  useEffect(() => {
    dispatch(storeScreenSize({ screenWidth: width, screenHeight: height }));
  }, [height, width]);

  return (
    <motion.section className="relative flex flex-col items-start justify-center app">
      <HomeSection />
      <ProjectsSection
        handleCreatePopup={(popup: IPopupType) => {
          createPopup(popup);
        }}
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
