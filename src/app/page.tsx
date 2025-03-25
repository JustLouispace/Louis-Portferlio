
import { Education } from "@/sections/Education";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { ContactSection } from "@/sections/Contact";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  );
}
