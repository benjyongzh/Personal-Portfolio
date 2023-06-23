import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav = () => {
  return (
    <nav className="absolute top-0 flex justify-between w-screen">
      Nav
      <Link className="nav-link" href="/">
        Home
        {/* <Image className="w-max" src="/assets/icons/vercel.svg" alt="Home" /> */}
      </Link>
      <Link className="nav-link" href="/about">
        About
        {/* <Image className="w-max" src="/assets/icons/vercel.svg" alt="Home" /> */}
      </Link>
      <Link className="nav-link" href="/contact">
        Contact
        {/* <Image className="w-max" src="/assets/icons/vercel.svg" alt="Home" /> */}
      </Link>
    </nav>
  );
};

export default Nav;
