"use client";

import { useRef } from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
  Code,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { CardHoverEffect } from "@/components/ui/pulse-card";
import Link from "next/link";

interface AboutProps {
  title?: string;
  subtitle?: string;
  summary?: string;
  contact?: Array<{ title: string; value: string; link?: string }>;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}

const iconComponents = {
  Users,
  Heart,
  Lightbulb,
  Globe,
  Sparkles,
  Rocket,
  Target,
  Code,
};

const defaultValues: AboutProps["values"] = [
  {
    title: "Innovation",
    description:
      "Pushing the boundaries of web development with cutting-edge technologies.",
    icon: "Lightbulb",
  },
  {
    title: "Problem-Solving",
    description:
      "Tackling complex challenges with creative and efficient solutions.",
    icon: "Code",
  },
  {
    title: "Excellence",
    description:
      "Delivering high-quality, performant, and user-friendly applications.",
    icon: "Sparkles",
  },
  {
    title: "Impact",
    description:
      "Creating solutions that make a meaningful difference for users.",
    icon: "Globe",
  },
];

export default function About() {
  const aboutData: AboutProps = {
    title: "About Me",
    subtitle:
      "A passionate web developer crafting modern, scalable web experiences from Cambodia.",
    summary:
      "Results-driven Web Developer with hands-on experience in designing, developing, and maintaining modern web applications. Proficient in both frontend and backend technologies, with strong expertise in React.js, Next.js, Laravel, and Node.js. Adept at building scalable systems, optimizing performance, and enhancing user experience. Recognized for problem-solving, mentoring students, and contributing to impactful academic and freelance projects.",
    contact: [
      {
        title: "Email",
        value: "itsanvert@gmail.com",
        link: "mailto:itsanvert@gmail.com",
      },
      {
        title: "GitHub",
        value: "github.com/itsanvert",
        link: "https://github.com/itsanvert",
      },
      {
        title: "LinkedIn",
        value: "linkedin.com/in/itsanvert",
        link: "https://www.linkedin.com/in/itsanvert",
      },
      { title: "Portfolio", value: "vertsan.com", link: "https://vertsan.com" },
      { title: "Phone", value: "+855 (97) 907 8615" },
    ],
    values: defaultValues,
    className: "relative overflow-hidden py-20",
  };

  const summaryRef = useRef(null);
  const valuesRef = useRef(null);
  const experienceRef = useRef(null);

  const summaryInView = useInView(summaryRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  const experienceInView = useInView(experienceRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-12 text-center max-w-3xl"
        >
          <h1 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent">
            {aboutData.title}
          </h1>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg md:text-xl">
            {aboutData.subtitle}
          </p>
        </motion.div>

        {/* Summary & Contact Section */}
        <div ref={summaryRef} className="relative mx-auto mb-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              summaryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid gap-8 md:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-6 sm:p-8 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="via-primary/40 from-transparent to-transparent"
              />
              <div className="from-primary/20 to-primary/5 mb-6 inline-flex aspect-square h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br backdrop-blur-sm">
                <Rocket className="text-primary h-6 w-6" />
              </div>
              <h2 className="from-primary/90 to-primary/70 mb-4 bg-gradient-to-r bg-clip-text text-xl sm:text-2xl font-bold text-transparent">
                Summary
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {aboutData.summary}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-6 sm:p-8 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Target className="h-6 w-6 text-blue-500" />
              </div>
              <h2 className="mb-4 bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text text-xl sm:text-2xl font-bold text-transparent">
                Contact
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                {aboutData.contact?.map((item) => (
                  <li key={item.title}>
                    <span className="font-semibold text-foreground">
                      {item.title}:
                    </span>{" "}
                    {item.link ? (
                      <Link
                        href={item.link}
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${item.title}`}
                      >
                        {item.value}
                      </Link>
                    ) : (
                      item.value
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div ref={valuesRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 text-center"
          >
            <h2 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent">
              My Core Values
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg">
              The principles that drive my work and passion for web development.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              const IconComponent = iconComponents[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0
                        ? "purple"
                        : index === 1
                        ? "blue"
                        : index === 2
                        ? "amber"
                        : "rose"
                    }
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Experience & Education Section */}
        <div ref={experienceRef} className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 text-center"
          >
            <h2 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent">
              Experience & Education
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid gap-8 md:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-6 sm:p-8 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="via-primary/40 from-transparent to-transparent"
              />
              <div className="from-primary/20 to-primary/5 mb-6 inline-flex aspect-square h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br backdrop-blur-sm">
                <Code className="text-primary h-6 w-6" />
              </div>
              <h2 className="from-primary/90 to-primary/70 mb-4 bg-gradient-to-r bg-clip-text text-xl sm:text-2xl font-bold text-transparent">
                Experience
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground">
                    Volunteer Web Developer | Samdech Preah Mahasanghara Bour
                    Kry University
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground/80">
                    2025 – Present
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>
                      Developed and maintained the official university website
                      (sbku.edu.kh), improving accessibility and reducing page
                      load time by 30%.
                    </li>
                    <li>
                      Leading the development of a University Management System
                      to streamline research and administrative workflows.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-6 sm:p-8 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Target className="h-6 w-6 text-blue-500" />
              </div>
              <h2 className="mb-4 bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text text-xl sm:text-2xl font-bold text-transparent">
                Education
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground/80">
                    Samdech Preah Mahasanghara Bour Kry University (Expected
                    2026)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
