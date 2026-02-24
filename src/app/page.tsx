import { HeroSection } from "@/sections/Hero"
import { AboutSection } from "@/sections/About"
import { SkillsSection } from "@/sections/Skills"
import { ProjectsSection } from "@/sections/Projects"
import { ContactSection } from "@/sections/Contact"
import { TestimonialsSection } from "@/sections/Testimonials"
import { Footer } from "@/sections/Footer"
import { Header } from "@/sections/Header"
import { Education } from "@/sections/Education"
import { Experience } from "@/sections/Experience"

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Education />
        <Experience />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
