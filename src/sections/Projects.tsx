"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import BGproject from "@/assets/images/BGproject.jpg";

const LawyerImagePath = new URL(
  "@/assets/images/LawyerProject1.png",
  import.meta.url
).href;
const LawyerImageDetailsPath = new URL(
  "@/assets/images/LawyerDetails.png",
  import.meta.url
).href;
const LawyerImageChatbotPath = new URL(
  "@/assets/images/LawyerChatbot.png",
  import.meta.url
).href;

const SCGCInternImagePath = new URL("@/assets/images/SCGC.jpg", import.meta.url)
  .href;
const SCGCInternAppImagePath = new URL(
  "@/assets/images/SCGC-Intern.png",
  import.meta.url
).href;
const SCGCInterninterviewImagePath = new URL(
  "@/assets/images/SCGcinterview.png",
  import.meta.url
).href;

const MeatAvatar1ImagePath = new URL(
  "@/assets/images/MeatAvatar.png",
  import.meta.url
).href;
const MeatAvatar2ImagePath = new URL(
  "@/assets/images/MeatAvatar2.png",
  import.meta.url
).href;
const MeatAvatar3ImagePath = new URL(
  "@/assets/images/MeatAvatar3.png",
  import.meta.url
).href;

const PokedekImagePath = new URL(
  "@/assets/images/Pokedek1.png",
  import.meta.url
).href;
const PokedekLoginImagePath = new URL(
  "@/assets/images/PokedekAdmin.png",
  import.meta.url
).href;
const PokedekadminImagePath = new URL(
  "@/assets/images/PokedekLogin.png",
  import.meta.url
).href;

export const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const projects = [
    {
      title: "LawBuddy (Winning 2nd NSC 2024 🏆)",
      description:
        "This law platform, developed as my 3rd-year project at KMUTT, won 2nd place in the 2024 NSC competition 🏆. It features a chatbot for legal inquiries in Thai and interactive tools for learning about the law, making legal knowledge more accessible and engaging.",
      image: LawyerImagePath,
      additionalImages: [LawyerImageDetailsPath, LawyerImageChatbotPath],
      details: [
        "AI Search: Easily find legal information with intelligent search functionality.",
        "AI Chatbot: Ask legal questions in Thai and receive accurate, AI-powered responses.",
        "AI Education: Interactive tools and resources to help users learn about the law effectively",
      ],
      technologies: "Postges, Django, React",
      duration: "5 months",
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
      image: SCGCInternImagePath,
      additionalImages: [SCGCInterninterviewImagePath, SCGCInternAppImagePath],
      details: [
        "Data Collection: Gather real-time data on nitrogen usage.",
        "Data Monitoring: Continuously track and analyze data for accurate insights.",
        "PDF Reading: Extract and process information from PDFs.",
        "Billing Reports: Generate and print detailed billing reports for users.",
      ],
      technologies: "Power app, Power Automate, Sharepoint, AI Hub, Power BI",
      duration: "4 months",
      links: {
        canva:
          "https://www.canva.com/design/DAGRjlv_0j0/XDnYW5v2sIjd5HLKqdz7Rw/edit?utm_content=DAGRjlv_0j0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    },
    {
      title: "Meat Avatar design web",
      description:
        "The Meat Avatar redesign project, a collaboration between Mitphol and KMUTT, aims to create a popular and engaging avatar that stands out. This design will seamlessly integrate campaign information, making it both visually appealing and functional. The goal is to create an avatar that resonates with customers, boosts engagement, and enhances promotional campaigns.",
      image: MeatAvatar1ImagePath,
      additionalImages: [MeatAvatar2ImagePath, MeatAvatar3ImagePath],
      technologies: "Figma",
      duration: "1 months",
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
      image: PokedekImagePath,
      additionalImages: [PokedekadminImagePath, PokedekLoginImagePath],
      details: [
        "Authentication: Secure user login and registration to protect personal data.",
        "User-Specific Pokedex: Each user can create and manage their own collection of Pokémon cards.",
        "Admin Panel: Enables administrators to monitor, edit, and add data efficiently.",
      ],
      technologies: "React, Node.js, MongoDB",
      duration: "3 months",
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
  ];
  
  return (
    <div id="projects" className="py-32 md:py-48 lg:py-60 bg-gradient-to-b from-slate-950 to-gray-850 relative z-0 overflow-x-clip sm:py-5 ">
      <div
          className="absolute inset-0 -z-30 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url(${BGproject.src})` }}
        ></div>
      <div className="container z-10 max-w-5xl ">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl text-center mt-10 tracking-wide">
          My Projects
        </h1>
        <div className="join join-vertical w-full mt-10 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              isOpen={openIndex === index}
              onClick={() => toggleProject(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};