"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// import Image from "next/image";
// import githubIcon from "@/public/assets/images/github-original.svg";
// import linkedinIcon from "@/public/assets/images/linkedin-plain.svg";

const routes = [
  { href: "/", text: "Home" },
  { href: "/projects", text: "Projects" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="absolute top-0 flex justify-end w-screen gap-5">
      {routes.map((route) => (
        <Link
          className={`nav-link group ${
            pathname === route.href ? "active:nav-link" : null
          }`}
          href={route.href}
        >
          {route.text}
        </Link>
      ))}
      {/* <Link className="nav-link group" href="/"> */}
      {/* home icon copied from heroicon*/}
      {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 nav-icon group-hover:text-textlightmode-light"
        >
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg> */}
      {/* </Link> */}
    </nav>
  );
};

export default Nav;
