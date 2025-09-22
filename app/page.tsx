// Import the amazing hero component

import { HeroSection } from "@/components/Hero";
import AboutPage from "./about/page";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Use the amazing hero component */}

      <div className="my-10">
        <HeroSection />
      </div>

      <div className="my-10">
        <AboutPage />
      </div>

      {/* <div className="my-10">
        <TechLogos />
      </div> */}

      {/* <div className="my-10">
        <Project />
      </div>
      <div className="my-10">
        <Blog />
      </div> */}
    </div>
  );
}
