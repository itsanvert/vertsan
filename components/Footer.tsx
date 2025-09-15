import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 rounded-lg bg-background/95 p-8 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 md:flex-row md:items-start md:gap-0">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex">
            <p className="hidden p-2 md:block text-md font-medium tracking-wider">
              Vert San.
            </p>
          </Link>
          <p className="text-sm text-muted-foreground">© 2025, Vert San</p>
          <p className="text-sm text-muted-foreground">All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:items-start">
          <p className="text-sm font-medium text-foreground">Links</p>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:items-start">
          <p className="text-sm font-medium text-foreground">Social</p>
          <Link href="/">Facebook</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
