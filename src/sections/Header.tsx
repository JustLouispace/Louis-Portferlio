"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for background change
      setScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = ["home", "about", "education", "projects", "testimonials", "contact"]
      const sectionElements = sections.map((id) => (id === "home" ? document.body : document.getElementById(id)))

      const currentPosition = window.scrollY + 300

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4 px-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <nav
        className={`flex gap-1 p-1 rounded-full backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-gray-900/80 border border-white/15 shadow-lg" : "bg-white/5 border border-white/10"
        }`}
      >
        <a
          href="#"
          className={`nav-item ${activeSection === "home" ? "bg-white text-gray-900 hover:bg-white hover:text-gray-900" : ""}`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`nav-item ${activeSection === "about" ? "bg-white text-gray-900 hover:bg-white hover:text-gray-900" : ""}`}
        >
          About
        </a>
        <a
          href="#education"
          className={`nav-item ${activeSection === "education" ? "bg-white text-gray-900 hover:bg-white hover:text-gray-900" : ""}`}
        >
          Education
        </a>
        <a
          href="#projects"
          className={`nav-item ${activeSection === "projects" ? "bg-white text-gray-900 hover:bg-white hover:text-gray-900" : ""}`}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={`nav-item ${activeSection === "contact" ? "bg-white text-gray-900 hover:bg-white hover:text-gray-900" : ""}`}
        >
          Contact
        </a>
      </nav>
    </motion.div>
  )
}
