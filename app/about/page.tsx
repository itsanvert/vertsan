"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const AboutPage = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications. Mentoring junior developers and architecting systems.",
      technologies: ["React", "Node.js", "AWS", "TypeScript"],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Innovation Co.",
      period: "2020 - 2022",
      description:
        "Developed client projects with modern web technologies. Collaborated with teams to deliver solutions.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Docker"],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description:
        "Built responsive interfaces and improved user experience across platforms.",
      technologies: ["JavaScript", "CSS3", "Bootstrap", "jQuery"],
    },
  ];
  const education = [
    {
      id: 1,
      title: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2015 - 2019",
      description:
        "Completed a rigorous program with a focus on software development, algorithms, and data structures.",
      technologies: ["Java", "Python", "C++", "SQL"],
    },
    {
      id: 2,
      title: "Full Stack Web Development Bootcamp",
      school: "General Assembly",
      period: "2018",
      description:
        "Intensive program covering full stack web development with hands-on projects.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "React"],
    },
    {
      id: 3,
      title: "Full Stack Web Development Bootcamp",
      school: "General Assembly",
      period: "2018",
      description:
        "Intensive program covering full stack web development with hands-on projects.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "React"],
    }
  ];

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1
          className={cn(
            "text-3xl font-bold mb-3",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          Education
        </h1>
        <p
          className={cn(
            "text-base",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          Academic background and qualifications
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className={cn(
            "absolute left-3 top-6 bottom-0 w-px",
            isDark ? "bg-gray-700" : "bg-gray-200"
          )}
        ></div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={edu.id} className="relative flex gap-6">
              {/* Timeline dot */}
              <div
                className={cn(
                  "w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1",
                  index === 0
                    ? isDark
                      ? "bg-blue-500 border-blue-500"
                      : "bg-blue-500 border-blue-500"
                    : isDark
                    ? "bg-gray-800 border-gray-600"
                    : "bg-white border-gray-300"
                )}
              ></div>

              {/* Content */}
              <div className="min-w-0 flex-1 pb-8">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className={cn(
                      "text-lg font-semibold",
                      isDark ? "text-white" : "text-gray-900"
                    )}
                  >
                    {edu.title}
                  </h3>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      isDark ? "text-gray-400" : "text-gray-500"
                    )}
                  >
                    {edu.period}
                  </span>
                </div>

                <p
                  className={cn(
                    "text-sm font-medium mb-3",
                    isDark ? "text-blue-400" : "text-blue-600"
                  )}
                >
                  {edu.school}
                </p>

                <p
                  className={cn(
                    "text-sm mb-4 leading-relaxed",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={cn(
                        "px-2 py-1 text-xs font-medium rounded",
                        isDark
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12">
        <h1
          className={cn(
            "text-3xl font-bold mb-3",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          Experience
        </h1>
        <p
          className={cn(
            "text-base",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          Professional journey and key milestones
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className={cn(
            "absolute left-3 top-6 bottom-0 w-px",
            isDark ? "bg-gray-700" : "bg-gray-200"
          )}
        ></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex gap-6">
              {/* Timeline dot */}
              <div
                className={cn(
                  "w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1",
                  index === 0
                    ? isDark
                      ? "bg-blue-500 border-blue-500"
                      : "bg-blue-500 border-blue-500"
                    : isDark
                    ? "bg-gray-800 border-gray-600"
                    : "bg-white border-gray-300"
                )}
              ></div>

              {/* Content */}
              <div className="min-w-0 flex-1 pb-8">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className={cn(
                      "text-lg font-semibold",
                      isDark ? "text-white" : "text-gray-900"
                    )}
                  >
                    {exp.title}
                  </h3>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      isDark ? "text-gray-400" : "text-gray-500"
                    )}
                  >
                    {exp.period}
                  </span>
                </div>

                <p
                  className={cn(
                    "text-sm font-medium mb-3",
                    isDark ? "text-blue-400" : "text-blue-600"
                  )}
                >
                  {exp.company}
                </p>

                <p
                  className={cn(
                    "text-sm mb-4 leading-relaxed",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={cn(
                        "px-2 py-1 text-xs font-medium rounded",
                        isDark
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
