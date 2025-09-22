"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SocialMedia from "@/app/social-media/page";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex items-center gap-8">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Vert San"
            width={120}
            height={120}
            className=""
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h1
            className={cn(
              "text-3xl font-bold mb-3",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            Hi, I am Vert San
          </h1>

          <p
            className={cn(
              "text-base leading-relaxed",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            A passionate full stack developer from Cambodia, crafting digital
            experiences with modern technologies.
          </p>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
