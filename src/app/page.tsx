
import { Education } from "@/sections/Education";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection/>
      <ProjectsSection/>
      <Education/>
    </div>
  );
}
