"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <section className="container mx-auto px-6 py-20 lg:py-30">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            Hi, I'm{" "}
            <span
              className={cn(
                "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              )}
            >
              Vert San
            </span>
          </h1>

          <p
            className={cn(
              "text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            A passionate full stack developer from Cambodia, crafting digital
            experiences with modern technologies.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button
              className={cn(
                "px-8 py-4 font-semibold rounded-lg border-2 transition-colors duration-200",
                isDark
                  ? "border-gray-600 text-white hover:bg-gray-800"
                  : "border-gray-300 text-gray-900 hover:bg-gray-50"
              )}
            >
              Get In Touch
            </button>
          </div> */}
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <div className="relative">
            
            <Image
              src="/logo.png"
              alt="Vert San Profile"
              width={400}
              height={400}
              className="relative  border-white/10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
