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
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const pathname = usePathname();

  // const useLightMode = () => {
  //   console.log("nav setting to light mode");
  //   setDisplayMode("light");
  // };
  // const useDarkMode = () => {
  //   console.log("nav setting to dark mode");
  //   setDisplayMode("dark");
  // };

  const toggleDropdown = () => {
    setShowDropdown((curr) => !curr);
  };

  return (
    <nav className="absolute top-0 flex items-center justify-end w-screen gap-5 px-2 py-1">
      <SwitchToggle />
      <div className="nav-dropdown">
        <button
          className="nav-dropdown-btn group"
          type="button"
          onClick={() => toggleDropdown()}
        >
          <div
            className={`space-y-1.5 transition-all duration-200 ${
              showDropdown ? "rotate-90" : ""
            }`}
          >
            <div
              className={`w-7 h-0.5 bg-textlightmode group-hover:bg-primarydarkmode transition-all duration-200 ${
                showDropdown ? "bg-primarydarkmode" : ""
              }`}
            ></div>
            <div
              className={`w-7 h-0.5 bg-textlightmode group-hover:bg-primarydarkmode transition-all duration-200 ${
                showDropdown ? "bg-primarydarkmode" : ""
              }`}
            ></div>
            <div
              className={`w-7 h-0.5 bg-textlightmode group-hover:bg-primarydarkmode transition-all duration-200 ${
                showDropdown ? "bg-primarydarkmode" : ""
              }`}
            ></div>
          </div>
        </button>
        <ul
          className={`nav-dropdown-menu ${
            showDropdown ? "opacity-100" : "opacity-0"
          }`}
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
