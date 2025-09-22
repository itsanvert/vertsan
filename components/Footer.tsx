import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto px-4 sm:px-6 py-8 mt-16">
      {/* Main Footer Content */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 border-t border-gray-200 dark:border-gray-700 pt-8">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Vert San"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium text-foreground">
            vert.san/profile
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2025 Vert San. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
