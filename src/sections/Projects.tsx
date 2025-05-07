"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import ProjectCard from "@/components/ProjectCard"
import BGproject from "@/assets/images/BGproject.jpg"
import { GridBackground, NoiseOverlay, FloatingShapes } from "@/components/BackgroundElements"

// Import project images properly
import LawyerProject1 from "@/assets/images/LawyerProject1.png"
import LawyerDetails from "@/assets/images/LawyerDetails.png"
import LawyerChatbot from "@/assets/images/LawyerChatbot.png"

import SCGCImage from "@/assets/images/SCGC.jpg"
import SCGCIntern from "@/assets/images/SCGC-Intern.png"
import SCGCInterview from "@/assets/images/SCGcinterview.png"

import MeatAvatar from "@/assets/images/MeatAvatar.png"
import MeatAvatar2 from "@/assets/images/MeatAvatar2.png"
import MeatAvatar3 from "@/assets/images/MeatAvatar3.png"

import Pokedek1 from "@/assets/images/Pokedek1.png"
import PokedekAdmin from "@/assets/images/PokedekAdmin.png"
import PokedekLogin from "@/assets/images/PokedekLogin.png"

export const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const toggleProject = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))

    // If opening a project, scroll to it after a short delay
    if (openIndex !== index) {
      setTimeout(() => {
        const projectElements = projectsRef.current?.querySelectorAll(".project-card")
        if (projectElements && projectElements[index]) {
          projectElements[index].scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }

  const projects = [
    {
      title: "LawBuddy (Winning 2nd NSC 2024 🏆)",
      description:
        "This law platform, developed as my 3rd-year project at KMUTT, won 2nd place in the 2024 NSC competition 🏆. It features a chatbot for legal inquiries in Thai and interactive tools for learning about the law, making legal knowledge more accessible and engaging.",
      image: LawyerProject1.src,
      additionalImages: [LawyerDetails.src, LawyerChatbot.src],
      details: [
        "AI Search: Easily find legal information with intelligent search functionality.",
        "AI Chatbot: Ask legal questions in Thai and receive accurate, AI-powered responses.",
        "AI Education: Interactive tools and resources to help users learn about the law effectively",
      ],
      technologies: "PostgreSQL, Django, React, Python, TailwindCSS, OpenAI API",
      duration: "5 months",
      role: "Lead Developer and AI Integration Specialist. I was responsible for designing and implementing the chatbot functionality, integrating the AI models, and developing the user interface.",
      outcome:
        "The project won 2nd place in the 2024 NSC competition and is now being considered for further development as a commercial product to help make legal information more accessible to the Thai public.",
      links: {
        figma:
          "https://www.figma.com/design/EICm7xZ90ZWiUCvqzDFQbK/Lewyer-Near-U?node-id=1306-4413&t=TBKWDbZ0ye7zXBUW-1",
        canva:
          "https://www.canva.com/design/DAGip0LBN3s/p_Oa66Oxc8BBSDs2mGV82Q/edit?utm_content=DAGip0LBN3s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    },
    {
      title: "Nitrogen Consumption",
      description:
        "I developed a full-scale industrial application for SCGC to monitor and report nitrogen usage at the Map Ta Phut terminal. With automated customer reporting, this app collects real-time data and delivers valuable insights directly to clients, ensuring efficiency and accuracy in every report.",
      image: SCGCImage.src,
      additionalImages: [SCGCInterview.src, SCGCIntern.src],
      details: [
        "Data Collection: Gather real-time data on nitrogen usage.",
        "Data Monitoring: Continuously track and analyze data for accurate insights.",
        "PDF Reading: Extract and process information from PDFs.",
        "Billing Reports: Generate and print detailed billing reports for users.",
        "Automated Notifications: Alert system for unusual consumption patterns.",
        "User Management: Role-based access control for different stakeholders.",
      ],
      technologies: "Power App, Power Automate, SharePoint, AI Hub, Power BI, Microsoft Azure",
      duration: "4 months",
      role: "Full-stack Developer and Data Analyst. I designed the data collection system, implemented the reporting functionality, and created the user interface for both administrators and clients.",
      outcome:
        "The application reduced manual reporting time by 85% and improved data accuracy by 95%. It is now used as the primary monitoring tool for nitrogen consumption at the Map Ta Phut terminal.",
      links: {
        canva:
          "https://www.canva.com/design/DAGRjlv_0j0/XDnYW5v2sIjd5HLKqdz7Rw/edit?utm_content=DAGRjlv_0j0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    },
    {
      title: "Meat Avatar Design Web",
      description:
        "The Meat Avatar redesign project, a collaboration between Mitphol and KMUTT, aims to create a popular and engaging avatar that stands out. This design will seamlessly integrate campaign information, making it both visually appealing and functional. The goal is to create an avatar that resonates with customers, boosts engagement, and enhances promotional campaigns.",
      image: MeatAvatar.src,
      additionalImages: [MeatAvatar2.src, MeatAvatar3.src],
      details: [
        "Custom Avatar Creation: Users can design personalized avatars.",
        "Brand Integration: Seamless incorporation of Mitphol branding elements.",
        "Social Media Sharing: Direct sharing to various social platforms.",
        "Campaign Analytics: Track user engagement and avatar popularity.",
        "Responsive Design: Fully functional on both mobile and desktop devices.",
      ],
      technologies: "Figma, Adobe Illustrator, React, JavaScript, CSS",
      duration: "1 month",
      role: "UI/UX Designer and Frontend Developer. I created the avatar design system, implemented the user interface, and ensured the design was both visually appealing and functional.",
      outcome:
        "The avatar design was well-received by Mitphol and is being considered for implementation in their upcoming marketing campaigns. The project demonstrated my ability to combine creative design with technical implementation.",
      links: {
        canva:
          "https://www.canva.com/design/DAGip1wJGS4/m44sVnt_soKQtTPnG45RAQ/edit?utm_content=DAGip1wJGS4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        figma:
          "https://www.figma.com/design/mb99KRCe2CTpzXNGxibTNJ/Wireframe-Ecommerce?node-id=0-1&t=iZBaVGb6a3jWmgTt-1",
      },
    },
    {
      title: "Pokedek Website",
      description:
        "The Pokémon Collection website I developed in my 2nd year is a Pokedex that allows users to collect their Pokémon cards. It also features an admin panel for managing and editing data, as well as user authentication to ensure secure access.",
      image: Pokedek1.src,
      additionalImages: [PokedekAdmin.src, PokedekLogin.src],
      details: [
        "Authentication: Secure user login and registration to protect personal data.",
        "User-Specific Pokedex: Each user can create and manage their own collection of Pokémon cards.",
        "Admin Panel: Enables administrators to monitor, edit, and add data efficiently.",
        "Search & Filter: Advanced search functionality to find Pokémon by type, name, or abilities.",
        "Responsive Design: Optimized for both desktop and mobile viewing.",
        "Real-time Updates: Changes to the collection are reflected immediately across all devices.",
      ],
      technologies: "React, Node.js, Express, MongoDB, JWT Authentication, TailwindCSS",
      duration: "3 months",
      role: "Full-stack Developer. I designed and implemented both the frontend and backend components, created the database schema, and implemented the authentication system.",
      outcome:
        "The project received an A grade and demonstrated my ability to create a full-stack application with complex functionality. It showcases my skills in both frontend and backend development, as well as database design and user authentication.",
      links: [
        {
          label: "User Frontend",
          url: "https://github.com/JustLouispace/Pokedek-User",
          type: "github",
        },
        {
          label: "Backend",
          url: "https://github.com/JustLouispace/Pokedek-Backend",
          type: "github",
        },
        {
          label: "Admin Frontend",
          url: "https://github.com/JustLouispace/Pokedek-Admin",
          type: "github",
        },
      ],
    },
  ]

  return (
    <section
      id="projects"
      className="py-32 md:py-48 lg:py-60 bg-gradient-to-b from-slate-950 to-gray-850 relative z-0 overflow-x-clip"
    >
      {/* Enhanced background elements */}
      <div
        className="absolute inset-0 -z-30 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${BGproject.src})` }}
      ></div>
      <GridBackground size={40} opacity={0.05} />
      <FloatingShapes count={10} colors={["#FFD700", "#FF8C00", "#4682B4"]} />
      <NoiseOverlay opacity={0.03} />

      <div className="container z-10 max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each demonstrates different skills and technologies I&apos;ve
            mastered throughout my journey as a developer.
          </p>
        </motion.div>

        <div ref={projectsRef} className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ProjectCard {...project} isOpen={openIndex === index} onClick={() => toggleProject(index)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
