"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiVuedotjs,
  SiDotnet,
  SiFigma,
  SiAdobephotoshop,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Logo {
  node: React.ReactNode;
  title: string;
  href: string;
}

const techLogos: Logo[] = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
  { node: <SiDotnet />, title: ".NET", href: "https://dotnet.microsoft.com" },

  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  {
    node: <SiAdobephotoshop />,
    title: "Photoshop",
    href: "https://www.adobe.com/products/photoshop.html",
  },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
];

export default function TechLogos() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-background ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" mb-10"
        >
          <h2 className="p-5 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-transparent">
            My Tech Stack
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none z-10" />
          <LogoLoop logos={techLogos} />
        </div>
      </div>
    </section>
  );
}

function LogoLoop({ logos }: { logos: Logo[] }) {
  const duplicatedLogos = [...logos, ...logos]; // Duplicate for seamless looping

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-50%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <Link
            key={`${logo.title}-${index}`}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 group"
            aria-label={`Learn more about ${logo.title}`}
          >
            <motion.div
              className={cn(
                "flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
                "bg-background/80 backdrop-blur-sm rounded-xl border border-border/40",
                "transition-all duration-300 group-hover:shadow-lg group-hover:scale-110"
              )}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl text-foreground/80 group-hover:text-primary">
                {logo.node}
              </div>
              <span className="sr-only">{logo.title}</span>
            </motion.div>
            <p className="mt-2 text-xs sm:text-sm text-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
              {logo.title}
            </p>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
