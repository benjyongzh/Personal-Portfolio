"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/hooks/reduxHooks";

import { motion, Variants } from "framer-motion";
import SwitchToggle from "./SwitchToggle";
import Path from "./Path";

const routes = [
  { href: "/#home-section", text: "Home", id: "home-section" },
  { href: "/#projects-section", text: "Projects", id: "projects-section" },
  // { href: "/resume", text: "Resume" },
  // { href: "/about", text: "About" },
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

const dropDownBackgroundVariantXS: Variants = {
  hide: {
    clipPath: "circle(0% at 265px 30px)", //first number is pixels counting from left. 2nd number is pixels counting from top
    transition: {
      type: "tween",
      duration: 0.25,
      delay: 0,
    },
  },
  show: {
    clipPath: "circle(60% at 360px 100px)",
    transition: {
      type: "tween",
      duration: 0.25,
      delay: 0,
    },
  },
};

const dropDownBackgroundVariant: Variants = {
  hide: {
    clipPath: "circle(2% at 265px 30px)",
    transition: {
      type: "tween",
      duration: 0.25,
      delay: 0,
    },
  },
  show: {
    clipPath: "circle(60% at 360px 100px)",
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
  const currentBreakpoint: string = useAppSelector(
    (state) => state.display.currentBreakpoint
  );

  const toggleDropdown = () => {
    setShowDropdown((curr) => !curr);
  };

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      // block: "start",
      // inline: "start",
    });
  };

  const handleNavLinkClick = (target: string) => {
    if (showDropdown) {
      toggleDropdown();
      scrolltoHash(target);
    }
  };

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
            className={`top-0 bottom-0 flex flex-col items-center justify-center text-textlightmode dark:text-textdarkmode group-hover:text-primarydarkmode ${
              showDropdown ? "text-primarydarkmode" : ""
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
            <motion.div variants={dropDownListItemVariant}>
              <Link
                className={`nav-link ${
                  pathname === route.href
                    ? "font-bold text-primarydarkmode dark:text-primarydarkmode"
                    : null
                }`}
                href="#"
                key={route.text}
                onClick={() => handleNavLinkClick(route.id)}
              >
                {route.text}
              </Link>
            </motion.div>
          ))}
        </motion.ul>
      </motion.div>
      <div className="fixed m-auto right-0 w-[100%] h-[100%] -z-[1] top-0 pointer-events-none">
        <motion.div
          animate={showDropdown ? "show" : "hide"}
          initial="hide"
          className="absolute right-0 w-[80%] h-[50%] -z-[1] top-0 bg-secondarydarkmode dark:bg-secondarylightmode pointer-events-none"
          variants={
            currentBreakpoint === "xs"
              ? dropDownBackgroundVariantXS
              : dropDownBackgroundVariant
          }
        />
      </div>
    </nav>
  );
};

export default Nav;
