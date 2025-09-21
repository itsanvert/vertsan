"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto flex justify-between items-center py-4 px-6 max-w-7xl">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="Vert San Logo"
            width={32}
            height={32}
            className=""
          />
          <span className="font-medium text-foreground">vert.san/profile</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background pb-4 px-6">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
