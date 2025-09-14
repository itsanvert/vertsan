// Import the amazing hero component
import Footer from "@/components/Footer";

import TechLogos from "@/components/LogoLoop";
import { HeroSection } from "@/components/Hero";
import Blog from "./blog/page";

export default function Home() {
  return (
    <>
      {/* Use the amazing hero component */}
      
      <HeroSection />

      {/* Logo loop section */}
      <TechLogos />
      <Blog />
      {/* Main content */}

      {/* Footer */}
      <Footer />
    </>
  );
}
