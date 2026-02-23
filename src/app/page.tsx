import { HeroSection } from "@/sections/Hero"
import { AboutSection } from "@/sections/About"
import { SkillsSection } from "@/sections/Skills"
import { ProjectsSection } from "@/sections/Projects"
import { ContactSection } from "@/sections/Contact"
import { TestimonialsSection } from "@/sections/Testimonials"
import { Footer } from "@/sections/Footer"
import { Header } from "@/sections/Header"
import { Education } from "@/sections/Education"

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Education />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
