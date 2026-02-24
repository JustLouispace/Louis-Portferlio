"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ThemeToggle"

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for background change
      setScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "education", "projects", "testimonials", "contact"]
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
        className={`flex gap-1 p-1 rounded-full backdrop-blur-md transition-all duration-300 items-center ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-white/15 shadow-lg"
            : "bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 shadow-sm"
        }`}
      >
        <div className="mr-1">
          <ThemeToggle />
        </div>
        <a
          href="#"
          className={`nav-item ${activeSection === "home" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white" : "text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"}`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`nav-item ${activeSection === "about" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white" : "text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"}`}
        >
          About
        </a>
        <a
          href="#skills"
          className={`nav-item ${activeSection === "skills" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white" : "text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"}`}
        >
          Skills
        </a>
        <a
          href="#education"
          className={`nav-item ${activeSection === "education" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white" : "text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"}`}
        >
          Education
        </a>
        <a
          href="#projects"
          className={`nav-item ${activeSection === "projects" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white" : "text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"}`}
        >
          Projects
        </a>
        <a
          href="#testimonials"
          className={`nav-item ${activeSection === "testimonials" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white" : "text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"}`}
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className={`nav-item ${activeSection === "contact" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white" : "text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"}`}
        >
          Contact
        </a>
      </nav>
    </motion.div>
  )
}
