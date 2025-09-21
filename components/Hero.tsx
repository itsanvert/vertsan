"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between">
        <h1
          className={cn(
            "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
            isDark ? "text-white" : "text-black"
          )}
        >
          He's Vert San, a passionate full stack developer from Cambodia.
        </h1>
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={500}
            height={500}
            className="mr-4"
          />
        </div>
      </div>
    </div>
  );
}
