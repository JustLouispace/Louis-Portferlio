"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import ProjectCard from "@/components/ProjectCard"
import BGproject from "@/assets/images/BGproject.jpg"
import { GridBackground, NoiseOverlay, FloatingShapes } from "@/components/BackgroundElements"

// Import project images properly
import LawyerProject1 from "@/assets/images/Project/LawyerNearU/LawyerProject1.png"
import LawyerDetails from "@/assets/images/Project/LawyerNearU/LawyerDetails.png"
import LawyerChatbot from "@/assets/images/Project/LawyerNearU/LawyerChatbot.png"

import SCGCImage from "@/assets/images/Project/SCGC/SCGC.jpg"
import SCGCIntern from "@/assets/images/Project/SCGC/SCGC-Intern.png"
import SCGCInterview from "@/assets/images/Project/SCGC/SCGcinterview.png"

import MeatAvatar from "@/assets/images/Project/MeatAvatar/MeatAvatar.png"
import MeatAvatar2 from "@/assets/images/Project/MeatAvatar/MeatAvatar2.png"
import MeatAvatar3 from "@/assets/images/Project/MeatAvatar/MeatAvatar3.png"

import Pokedek1 from "@/assets/images/Project/PokeDek/Pokedek1.png"
import PokedekAdmin from "@/assets/images/Project/PokeDek/PokedekAdmin.png"
import PokedekLogin from "@/assets/images/Project/PokeDek/PokedekLogin.png"

import SCLogin from "@/assets/images/Project/StoreCompliance/SC-Login.png"
import SCMain from "@/assets/images/Project/StoreCompliance/SC-Main.png"
import SCReport1 from "@/assets/images/Project/StoreCompliance/SC-Report1.png"
import SCReport2 from "@/assets/images/Project/StoreCompliance/SC-Report2.png"
import SCLegacy from "@/assets/images/Project/StoreCompliance/SC-Legacy.png"


import DebitLogin from "@/assets/images/Project/DebitSystem/Debit-login.png"
import DebitRBAC from "@/assets/images/Project/DebitSystem/DebitRBAC.png"
import DebitLegacy from "@/assets/images/Project/DebitSystem/DebitLegacy.png"

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
      title: "Store Compliance — Query Engine & Architecture Overhaul",
      description:
        "A complete architectural migration of an internal legacy reporting system (PHP/Apache) into a modern, event-driven web application. The goal was to eliminate severe server bottlenecks and transform slow, brittle reporting pipelines into a responsive, concurrent system built for scale.",
      image: SCLogin.src,
      additionalImages: [SCReport1.src, SCReport2.src],

      details: [
        "Asynchronous Refactoring: Rebuilt the core data-fetching engine in Node.js to support concurrent requests — resolving the blocking I/O issues that paralysed the previous PHP-based system under load.",
        "Dynamic DB Routing: Engineered a hybrid database layer that seamlessly switches between Oracle (deep historical data) and MySQL (fast caching), keeping query latency minimal regardless of data age.",
        "Zero-Downtime Deployment: Established a robust production pipeline with PM2 process management and Nginx reverse proxy, enabling hot reloads and instant rollback without any service interruption.",
        "UI/UX Redesign: Redesigned the reporting interface from scratch in Next.js — replacing cluttered legacy screens with a clean, data-dense dashboard optimised for operational workflows.",
      ],
      technologies: "Next.js, Node.js, Oracle Database, MySQL, PM2, Nginx",
      duration: "Ongoing",
      role: "Sole Full-Stack Developer. Owned the entire migration lifecycle — from redesigning the UI/UX and refactoring the backend engine, to optimising database queries and configuring the production server infrastructure.",
      outcome:
        "Successfully reduced complex report generation times from minutes to mere seconds — cutting heavy multi-join query times by over half, and bringing standard filter responses down to sub-second. Significantly improved operational workflow for end-users while keeping server resource consumption well within acceptable limits.",
      links: {},
      comparison: {
        legacyImage: SCLegacy.src,  // รูป legacy ที่เพิ่งใส่
        modernImage: SCReport1.src,

        legacyLabel: "PHP / Apache (Legacy)",
        modernLabel: "Next.js / Node.js",
        items: [
          {
            aspect: "Architecture",
            legacy: "Monolithic PHP scripts — synchronous, blocking I/O. One slow query freezes every concurrent user.",
            modern: "Event-driven Node.js with async/await — concurrent requests handled without blocking.",
            improvement: "Non-blocking",
          },
          {
            aspect: "Database",
            legacy: "Single MySQL connection. All queries (historical + real-time) hit the same DB pool, causing contention.",
            modern: "Hybrid router: Oracle for deep historical data, MySQL for fast caching. Queries routed automatically.",
            improvement: "Dual-DB",
          },
          {
            aspect: "Query Speed",
            legacy: "Complex reports took minutes to generate under moderate load. Timeouts were common.",
            modern: "Heavy queries cut by over half. Standard filters run in sub-second response times.",
            improvement: ">50% faster",
          },
          {
            aspect: "Deployment",
            legacy: "Apache restarts required for every config change, causing service interruptions.",
            modern: "PM2 + Nginx reverse proxy — hot reloads and zero-downtime rolling restarts.",
            improvement: "0 downtime",
          },
          {
            aspect: "UI / UX",
            legacy: "Cluttered table-heavy PHP views. No real-time feedback. Required page refresh for every filter.",
            modern: "Next.js SPA with livefilter, skeleton loaders, and a clean data-dense dashboard layout.",
            improvement: "Redesigned",
          },
          {
            aspect: "Error Handling",
            legacy: "Unhandled exceptions crash the process and drop active user sessions silently.",
            modern: "Structured try/catch, centralised error middleware, and PM2 auto-restart on failure.",
            improvement: "Resilient",
          },
        ],
      },

    },

   {
      title: "Debit System & Centralized Control Hub — Security Overhaul",
      description:
        "Developed a comprehensive internal debit management system focusing on enterprise-grade security and scalable architecture. The project replaced flawed, scattered legacy authorization structures with a robust, centralized ecosystem that unifies permission management across multiple applications.",
      image: DebitLogin.src, // เปลี่ยนเป็นตัวแปรรูปของคุณ
      additionalImages: [ControlHub1.src, DebitRBAC.src], // เปลี่ยนเป็นตัวแปรรูปของคุณ

      details: [
        "Strict RBAC Architecture: Engineered Role-Based Access Control from the ground up, securing both UI rendering (component-level guards) and backend API endpoints (Secure by Default).",
        "The 'Control Hub' Initiative: Architected a decoupled, centralized platform to unify permission management, user roles, and system maintenance modes across the entire enterprise ecosystem.",
        "Type-Safe Foundation: Built a scalable frontend architecture using React, Vite, and TypeScript, enforcing strict code quality and maintainability standards for future developers.",
        "Legacy Refactoring: Audited and resolved vulnerabilities in the previous access system, migrating hardcoded, fragmented permission logic into a single, reliable source of truth.",
      ],
      technologies: "React, Vite, TypeScript, Node.js, Express, RBAC",
      duration: "Ongoing",
      role: "Lead Full-Stack Developer. Refactored legacy backend flows, enforced code quality standards, and built the modern frontend architecture from scratch.",
      outcome:
        "Successfully delivered a highly secure application and established a new centralized architectural standard (The Control Hub) for all future internal web projects, significantly reducing the overhead of managing user permissions.",
      links: {},
      comparison: {
        legacyImage: DebitLegacy.src,  // รูป legacy
        modernImage: ControlHub1.src,   // รูป modern

        legacyLabel: "Scattered Legacy Auth",
        modernLabel: "Centralized RBAC",
        items: [
          {
            aspect: "Authorization",
            legacy: "Hardcoded, fragmented permissions scattered across different files and legacy apps.",
            modern: "Strict Role-Based Access Control (RBAC) managed from a single centralized database.",
            improvement: "Centralized",
          },
          {
            aspect: "Platform Management",
            legacy: "Each application required its own isolated user management and admin panel.",
            modern: "The 'Control Hub' acts as a universal admin layer for unified app and permission management.",
            improvement: "Unified Ecosystem",
          },
          {
            aspect: "Security Level",
            legacy: "Basic UI-hiding techniques. Vulnerable API endpoints lacking strict validation.",
            modern: "Component-level UI guards paired with robust API middleware for deep verification.",
            improvement: "Secure by Default",
          },
          {
            aspect: "Code Quality",
            legacy: "Untyped vanilla JavaScript/PHP prone to runtime errors and difficult to scale.",
            modern: "Strictly typed architecture using TypeScript and modern React patterns.",
            improvement: "Type-Safe",
          },
          {
            aspect: "Maintenance Mode",
            legacy: "Required manual server shutdowns or hardcoding 'under construction' pages.",
            modern: "1-click toggleable maintenance modes for specific apps directly from the Control Hub.",
            improvement: "Zero-Touch Config",
          },
          {
            aspect: "Audit & Tracking",
            legacy: "No clear visibility into who accessed or modified sensitive debit data.",
            modern: "Action-tracking integrated with user roles to ensure accountability.",
            improvement: "Traceable",
          },
        ],
      },
    },

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

      <div className="container z-10 max-w-6xl">

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
