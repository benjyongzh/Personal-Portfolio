"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SwitchToggle from "./SwitchToggle";

import { motion, Variants } from "framer-motion";

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

const dropDownButtonVariant: Variants = {
  hide: {
    rotate: 0,
    transition: {
      type: "tween",
      duration: 0.25,
      delay: 0,
    },
  },
  show: {
    rotate: 90,
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
          className="z-10 nav-dropdown-btn group"
          type="button"
          onClick={() => toggleDropdown()}
        >
          <motion.div className="space-y-1.5" variants={dropDownButtonVariant}>
            <div
              key="navDropdownLine1"
              className={`w-7 h-0.5 bg-textlightmode dark:bg-textdarkmode group-hover:bg-primarydarkmode transition-all duration-200 ${
                showDropdown ? "bg-primarydarkmode" : ""
              }`}
            ></div>
            <div
              key="navDropdownLine2"
              className={`w-7 h-0.5 bg-textlightmode dark:bg-textdarkmode group-hover:bg-primarydarkmode transition-all duration-200 ${
                showDropdown ? "bg-primarydarkmode" : ""
              }`}
            ></div>
            <div
              key="navDropdownLine3"
              className={`w-7 h-0.5 bg-textlightmode dark:bg-textdarkmode group-hover:bg-primarydarkmode transition-all duration-200 ${
                showDropdown ? "bg-primarydarkmode" : ""
              }`}
            ></div>
          </motion.div>
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
    </nav>
  );
};

export default Nav;
