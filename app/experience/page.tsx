"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ExperiencePage() {
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
      location: "Phnom Penh, Cambodia",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting complex systems.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Innovation Co.",
      location: "Phnom Penh, Cambodia",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects, focusing on modern web technologies and responsive design. Collaborated with cross-functional teams to deliver high-quality solutions.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Docker", "Git"],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartUp Hub",
      location: "Siem Reap, Cambodia",
      period: "2019 - 2020",
      description:
        "Built responsive web interfaces and improved user experience across multiple platforms. Worked closely with designers to implement pixel-perfect designs.",
      technologies: ["JavaScript", "CSS3", "HTML5", "Bootstrap", "jQuery"],
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "Local Web Agency",
      location: "Phnom Penh, Cambodia",
      period: "2018 - 2019",
      description:
        "Started my professional journey by building websites for local businesses. Learned fundamental web development principles and best practices.",
      technologies: ["PHP", "MySQL", "WordPress", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-bold mb-6",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p
            className={cn(
              "text-lg sm:text-xl max-w-2xl mx-auto",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            A journey through my professional development and the amazing
            companies I've worked with.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={cn(
              "absolute left-8 top-0 bottom-0 w-0.5",
              isDark ? "bg-gray-700" : "bg-gray-300"
            )}
          ></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start gap-8">
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full border-4",
                      isDark
                        ? "bg-blue-600 border-gray-900"
                        : "bg-blue-600 border-white"
                    )}
                  ></div>
                  <div
                    className={cn(
                      "absolute inset-0 w-4 h-4 rounded-full animate-ping",
                      index === 0 ? "bg-blue-400" : "hidden"
                    )}
                  ></div>
                </div>

                {/* Content Card */}
                <div
                  className={cn(
                    "flex-1 rounded-xl p-8 shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                    isDark
                      ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
                      : "bg-white border-gray-200 hover:bg-gray-50"
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3
                      className={cn(
                        "text-xl sm:text-2xl font-bold mb-2 sm:mb-0",
                        isDark ? "text-white" : "text-gray-900"
                      )}
                    >
                      {exp.title}
                    </h3>
                    <span
                      className={cn(
                        "text-sm font-semibold px-3 py-1 rounded-full",
                        isDark
                          ? "bg-blue-900/50 text-blue-300"
                          : "bg-blue-100 text-blue-700"
                      )}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4
                      className={cn(
                        "text-lg font-semibold",
                        isDark ? "text-blue-400" : "text-blue-600"
                      )}
                    >
                      {exp.company}
                    </h4>
                    <p
                      className={cn(
                        "text-sm",
                        isDark ? "text-gray-400" : "text-gray-500"
                      )}
                    >
                      {exp.location}
                    </p>
                  </div>

                  <p
                    className={cn(
                      "text-base leading-relaxed mb-6",
                      isDark ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={cn(
                          "px-3 py-1 text-sm font-medium rounded-full transition-colors",
                          isDark
                            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div
            className={cn(
              "inline-flex items-center gap-4 px-8 py-4 rounded-xl border-2 border-dashed transition-colors",
              isDark
                ? "border-gray-600 hover:border-gray-500"
                : "border-gray-300 hover:border-gray-400"
            )}
          >
            <div
              className={cn(
                "w-3 h-3 rounded-full animate-pulse",
                isDark ? "bg-green-400" : "bg-green-500"
              )}
            ></div>
            <span
              className={cn(
                "text-lg font-medium",
                isDark ? "text-gray-300" : "text-gray-600"
              )}
            >
              Currently open to new opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
