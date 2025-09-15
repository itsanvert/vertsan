"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";

import BlurText from "./BlurText";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme for more reliable theme detection
  const currentTheme = mounted ? resolvedTheme || theme : "dark";
  const isDark = currentTheme === "dark";

  return (
    <Card
      className={cn(
        "w-full h-[600px] relative overflow-hidden transition-colors duration-300 ",
        isDark ? "bg-black/[0.96] text-white" : "bg-white text-black shadow-lg"
      )}
    >
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          {mounted ? (
            <>
              <BlurText
                text="Hey, I'm Vert San"
                delay={50} // Reduced delay
                animateBy="words"
                direction="top"
                className={cn(
                  "text-4xl md:text-5xl mb-6 font-bold transition-colors duration-300",
                  isDark ? "text-white" : "text-black"
                )}
              />
              <BlurText
                text="I'm a web developer"
                delay={100} // Reduced and staggered delay
                animateBy="words"
                direction="top"
                className={cn(
                  "text-4xl md:text-5xl mb-8 font-bold transition-colors duration-300",
                  isDark ? "text-neutral-200" : "text-neutral-700"
                )}
              />

              {/* Add a subtle call-to-action or description */}
              <div className="mt-4">
                <BlurText
                  text=""
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className={cn(
                    "text-lg opacity-80 transition-colors duration-300",
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  )}
                />
                <div className="flex flex-row mt-6 space-x-4">
                  <button className="px-6 py-2 border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer">
                    <a href="#">Resume</a>
                  </button>
                  <button className="px-6 py-2 border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer">
                    <a href="https://t.me/itsanvert">Contact Me</a>
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Fallback content to prevent layout shift
            <div className="space-y-6">
              <div className="h-12 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
              <div className="h-12 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
              <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse w-2/3" />
            </div>
          )}
        </div>

        {/* Right content - Spline Scene */}

        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Optional: Add a subtle animation overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-30 pointer-events-none" />
    </Card>
  );
}
