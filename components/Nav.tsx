"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/hooks/reduxHooks";

import { motion, Variants } from "framer-motion";
import SwitchToggle from "./SwitchToggle";
import Path from "./Path";
import { IScreenSize } from "@/features/display/displaySlice";
import SiteLinkButton from "./SiteLinkButton";

const routes = [
  { href: "/#home-section", text: "Home", id: "home-section" },
  { href: "/#projects-section", text: "Projects", id: "projects-section" },
  // { href: "/resume", text: "Resume" },
  { href: "/#about-section", text: "About", id: "about-section" },
  // { href: "/contact", text: "Contact" },
];

const dropDownMenuVariant: Variants = {
  hide: {
    transition: {
      type: "tween",
      duration: 0.25,
      delay: 0,
    },
  },
  show: {
    transition: {
      type: "tween",
      duration: 0.25,
      delay: 0,
    },
  },
};

const dropDownListGroupVariant: Variants = {
  hide: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: 1,
    },
  },
};

const dropDownListItemVariant: Variants = {
  hide: {
    opacity: 0,
    y: -20,
    transition: { type: "spring", bounce: 0.4 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const pathname = usePathname();
  const currentScreenSize: IScreenSize = useAppSelector(
    (state) => state.display.screenSize
  );

  const toggleDropdown = () => {
    setShowDropdown((curr) => !curr);
  };

  //background circle parameters
  const navBackgroundOffsetVerticalHidden = 29;
  const navBackgroundOffsetVerticalShown = 120;
  const navBackgroundOffsetHorizontalHidden = 35;
  const navBackgroundOffsetHorizontalShown = 0;
  const navBackgroundRadiusShown = 180;

  return (
    <nav className="fixed top-0 z-10 flex items-center justify-end w-full gap-5 px-3 py-1 whitespace-nowrap">
      <SwitchToggle />

      <motion.div
        className="nav-dropdown"
        animate={showDropdown ? "show" : "hide"}
        initial="hide"
        variants={dropDownMenuVariant}
      >
        <button
          className="relative z-10 nav-dropdown-btn group"
          type="button"
          onClick={() => toggleDropdown()}
        >
          <svg
            width="24"
            height="24"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className={`nav-icon group-hover:text-primarylightmode ${
              showDropdown ? "text-textdarkmode dark:text-textlightmode" : ""
            }`}
          >
            <Path
              variants={{
                hide: { d: "M 2 5.5 L 25 5.5" },
                show: { d: "M 4.5 20.5 L 20 5.5" },
              }}
            />
            <Path
              d="M 2 13 L 25 13"
              variants={{
                hide: { opacity: 1 },
                show: { opacity: 0 },
              }}
              transition={{ duration: 0.25 }}
            />
            <Path
              variants={{
                hide: { d: "M 2 20.5 L 25 20.5" },
                show: { d: "M 4.5 5.5 L 20 20.5" },
              }}
            />
          </svg>
        </button>
        <motion.ul
          className="nav-dropdown-menu"
          variants={dropDownListGroupVariant}
        >
          {routes.map((route) => (
            <motion.div variants={dropDownListItemVariant} key={route.text}>
              <SiteLinkButton
                classStyle="nav-link"
                sectionId={route.id}
                onClickCallback={toggleDropdown}
              >
                {route.text}
              </SiteLinkButton>
            </motion.div>
          ))}
        </motion.ul>
      </motion.div>
      <div className="fixed m-auto right-0 w-screen h-screen -z-[1] top-0 pointer-events-none">
        <motion.div
          animate={
            showDropdown
              ? {
                  clipPath: `circle(${navBackgroundRadiusShown}px at ${
                    currentScreenSize.screenWidth -
                    navBackgroundOffsetHorizontalShown
                  }px ${navBackgroundOffsetVerticalShown}px)`, //first number is pixels counting from left. 2nd number is pixels counting from top
                }
              : {
                  clipPath: `circle(0px at ${
                    currentScreenSize.screenWidth -
                    navBackgroundOffsetHorizontalHidden
                  }px ${navBackgroundOffsetVerticalHidden}px)`,
                }
          }
          initial={{
            clipPath: `circle(0px at ${
              currentScreenSize.screenWidth -
              navBackgroundOffsetHorizontalHidden
            }px ${navBackgroundOffsetVerticalHidden}px)`,
          }}
          transition={{ type: "tween", duration: 0.25 }}
          className="absolute right-0 w-[100%] h-[100%] -z-[1] top-0 bg-secondarydarkmode dark:bg-secondarylightmode pointer-events-none"
        />
      </div>
    </nav>
  );
};

export default Nav;
