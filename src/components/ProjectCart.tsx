"use client";  // ✅ Ensures it's a Client Component

import { useState } from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion for animations

interface ProjectCartProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCart: React.FC<ProjectCartProps> = ({ title, description, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card lg:card-side bg-base-100 shadow-sm overflow-hidden transition-all duration-300"
    >
      {/* Fixed Image Section */}
      <figure className="w-60 flex-shrink-0"> 
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </figure>

      {/* Expandable Content Section */}
      <motion.div
        animate={{ height: expanded ? "auto" : "150px" }} // Expands without affecting image
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="card-body"
      >
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        {/* Additional details (hidden by default) */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-2 text-gray-500"
          >
            <p>🔹 Additional project details...</p>
            <p>🔹 Technologies used: React, Tailwind, etc.</p>
            <p>🔹 Duration: 6 months</p>
          </motion.div>
        )}

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary transition-all duration-200 hover:scale-105"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "View More"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCart;
