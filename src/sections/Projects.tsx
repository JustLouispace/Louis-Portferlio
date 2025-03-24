"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const LawyerImagePath = new URL("@/assets/images/LawyerProject1.png", import.meta.url).href;
const LawyerImageDetailsPath = new URL("@/assets/images/LawyerDetails.png", import.meta.url).href;
const LawyerImageChatbotPath = new URL("@/assets/images/LawyerChatbot.png", import.meta.url).href;

const SCGCInternImagePath = new URL("@/assets/images/SCGC.jpg", import.meta.url).href;
const SCGCInternAppImagePath = new URL("@/assets/images/SCGC-Intern.png", import.meta.url).href;
const SCGCInterninterviewImagePath = new URL("@/assets/images/SCGcinterview.png", import.meta.url).href;

const MeatAvatar1ImagePath = new URL("@/assets/images/MeatAvatar.png", import.meta.url).href;
const MeatAvatar2ImagePath = new URL("@/assets/images/MeatAvatar2.png", import.meta.url).href;
const MeatAvatar3ImagePath = new URL("@/assets/images/MeatAvatar3.png", import.meta.url).href;

const PokedekImagePath = new URL("@/assets/images/Pokedek1.png", import.meta.url).href;
const PokedekLoginImagePath = new URL("@/assets/images/PokedekAdmin.png", import.meta.url).href;
const PokedekadminImagePath = new URL("@/assets/images/PokedekLogin.png", import.meta.url).href;

export const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Changed to null for none open by default

  const toggleProject = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  const projects = [
    {
      title: "Lawyer Consultation Platform",
      description: "A comprehensive platform connecting clients with legal professionals for online consultations and document management.",
      image: LawyerImagePath,
      additionalImages: [
        LawyerImageDetailsPath,
        LawyerImageChatbotPath
      ],
      details: [
        "Implemented real-time chat functionality",
        "Developed secure document sharing system",
        "Created lawyer matching algorithm",
        "Built admin dashboard for analytics"
      ],
      technologies: "React, Node.js, MongoDB, Socket.io",
      duration: "5 months",
      links: {
        figma: "https://www.figma.com/design/EICm7xZ90ZWiUCvqzDFQbK/Lewyer-Near-U?node-id=1306-4413&t=TBKWDbZ0ye7zXBUW-1",
        canva: "https://www.canva.com/design/DAGip0LBN3s/p_Oa66Oxc8BBSDs2mGV82Q/edit?utm_content=DAGip0LBN3s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      }
    },
    {
      title: "Nitrogen Consumption",
      description: "Industrial application for SCGC to monitor and report nitrogen usage at Map Ta Phut terminal with automated customer reporting.",
      image: SCGCInternImagePath,
      additionalImages: [
        SCGCInterninterviewImagePath,
        SCGCInternAppImagePath
      ],
      details: [
        "Integrated with SCADA systems for real-time data",
        "Developed automated PDF report generation",
        "Created role-based access control",
        "Implemented data visualization dashboards"
      ],
      technologies: "React, Python, PostgreSQL, Chart.js",
      duration: "4 months",
      links: {
        canva: "https://www.canva.com/design/DAGRjlv_0j0/XDnYW5v2sIjd5HLKqdz7Rw/edit?utm_content=DAGRjlv_0j0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      }
    },
    {
      title: "E-commerce Analytics Dashboard",
      description: "Business intelligence tool for e-commerce stores to track sales, customer behavior, and inventory in real-time.",
      image: MeatAvatar1ImagePath,
      additionalImages: [
        MeatAvatar2ImagePath,
        MeatAvatar3ImagePath
      ],
      technologies: "Vue.js, Firebase, D3.js",
      duration: "3 months",
      links: {
        canva: "https://www.canva.com/design/DAGip1wJGS4/m44sVnt_soKQtTPnG45RAQ/edit?utm_content=DAGip1wJGS4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        figma: "https://www.figma.com/design/mb99KRCe2CTpzXNGxibTNJ/Wireframe-Ecommerce?node-id=0-1&t=iZBaVGb6a3jWmgTt-1",
      }
    },
    {
      title: "Pokedek",
      description: "Pokémon collection and trading platform with admin management system.",
      image: PokedekImagePath,
      additionalImages: [
        PokedekadminImagePath,
        PokedekLoginImagePath
      ],
      technologies: "React, Node.js, MongoDB",
      duration: "3 months",
      links: [
        {
          label: "User Frontend",
          url: "https://github.com/JustLouispace/Pokedek-User",
          type: "github"
        },
        {
          label: "Backend",
          url: "https://github.com/JustLouispace/Pokedek-Backend",
          type: "github"
        },
        {
          label: "Admin Frontend",
          url: "https://github.com/JustLouispace/Pokedek-Admin",
          type: "github"
        }
      ]
    }
  ];

  return (
    <div className="container z-10 max-w-5xl">
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-10 tracking-wide">
        My Projects
      </h1>
      <div className="join join-vertical w-full mt-10">
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
  );
};