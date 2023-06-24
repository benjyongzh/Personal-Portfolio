"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SwitchToggle from "./SwitchToggle";

const routes = [
  { href: "/", text: "Home" },
  { href: "/projects", text: "Projects" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
];

const Nav = () => {
  const [displayMode, setDisplayMode] = useState<string>("light");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const pathname = usePathname();

  const useLightMode = () => {
    console.log("nav setting to light mode");
    setDisplayMode("light");
  };
  const useDarkMode = () => {
    console.log("nav setting to dark mode");
    setDisplayMode("dark");
  };

  const toggleDropdown = () => {
    setShowDropdown((curr) => !curr);
  };

  return (
    <nav className="absolute top-0 flex items-center justify-end w-screen gap-5 px-5 py-3 sm:gap-7">
      <SwitchToggle
        setLightMode={useLightMode}
        setDarkMode={useDarkMode}
        displayState={displayMode}
      />
      <div className="nav-dropdown">
        <button
          className="nav-dropdown-btn"
          type="button"
          onClick={() => toggleDropdown()}
        >
          drop
        </button>
        <ul
          className={`nav-dropdown-menu ${showDropdown ? "visible" : "hidden"}`}
        >
          {routes.map((route) => (
            <Link
              className={`nav-link group ${
                pathname === route.href
                  ? "font-bold text-primarydarkmode"
                  : null
              }`}
              href={route.href}
              key={route.text}
            >
              {route.text}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
