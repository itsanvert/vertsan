// Import the amazing hero component
import Footer from "@/components/Footer";

import TechLogos from "@/components/LogoLoop";
import { HeroSection } from "@/components/Hero";
import Blog from "./blog/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Use the amazing hero component */}
      <HeroSection />
      <TechLogos />
      <Blog />


      
    </div>
  );
}
