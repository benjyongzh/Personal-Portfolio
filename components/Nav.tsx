"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            pathname === route.href ? "font-bold text-primarydarkmode" : null
          }`}
          href={route.href}
        >
          {route.text}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
