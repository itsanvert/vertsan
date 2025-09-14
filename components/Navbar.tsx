"use client";

import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="text-lg font-semibold transition-colors hover:text-primary relative z-20 mr-4 flex items-center space-x-2 px-2 py-1"
    >
      Vert San
    </Link>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/project" },

    { name: "Blog", link: "/blog" },
  ];

  return (
    <ResizableNavbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton href="/contact" variant="primary">
          Contact Me
        </NavbarButton>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen}>
          <div className="flex flex-col items-start gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="w-full py-2 px-4 hover:bg-accent rounded-md text-neutral-600 dark:text-neutral-300"
              >
                {item.name}
              </Link>
            ))}
            <NavbarButton href="/contact" variant="gradient">
              Contact Us
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
