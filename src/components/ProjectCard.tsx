"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "figma" | "demo" | "canva";
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  additionalImages?: string[];
  details?: string[];
  technologies?: string;
  duration?: string;
  links?:
    | {
        github?: string;
        figma?: string;
        demo?: string;
        canva?: string;
      }
    | ProjectLink[];
  isOpen: boolean;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  additionalImages = [],
  details = [],
  technologies = "React, Tailwind, etc.",
  duration = "6 months",
  links = {},
  isOpen,
  onClick,
}) => {
  // Normalize links to always be an array
  const normalizedLinks = Array.isArray(links)
    ? links
    : Object.entries(links)
        .map(([type, url]) => ({
          label: type.charAt(0).toUpperCase() + type.slice(1),
          url: url as string,
          type: type as "github" | "figma" | "demo" | "canva",
        }))
        .filter((link) => link.url);

  return (
    <div className="relative z-[1]">
      <div className="border border-base-300 rounded-lg mb-4 overflow-hidden transition-all duration-400">
        <div
          className="flex items-center justify-between p-6 cursor-pointer hover:bg-base-200 transition-colors"
          onClick={onClick}
        >
          <div className="flex items-center gap-6">
            <motion.img
              src={image}
              alt={title}
              className="w-32 h-32 object-cover rounded-lg shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 2 }}
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-base mt-2 text-gray-400 line-clamp-2">
                {description}
              </p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 1.5,
                ease: [0.8, 0.9, 0.8, 0.98],
              }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <motion.h4
                      className="text-lg font-semibold mb-4 "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Project Details
                    </motion.h4>

                    <motion.p
                      className="mb-4 text-gray-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {description}
                    </motion.p>

                    <motion.div
                      className="mb-6 grid grid-cols-2 gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="col-span-2">
                        <img
                          src={image}
                          alt={`Main view of ${title}`}
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      {additionalImages.slice(0, 2).map((img, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <img
                            src={img}
                            alt={`Additional view ${index + 1} of ${title}`}
                            className="w-full h-48 object-cover rounded-lg shadow-md"
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    {details.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h4 className="text-lg font-semibold mb-2">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {details.map((detail, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + index * 0.05 }}
                            >
                              <span className="text-primary mr-2">•</span>
                              <span className="text-gray-300">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold mb-2">
                        Technologies
                      </h4>
                      <p className="text-gray-400">{technologies}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.35 }}
                    >
                      <h4 className="text-lg font-semibold mb-2">Duration</h4>
                      <p className="text-gray-400">{duration}</p>
                    </motion.div>

                    {normalizedLinks.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h4 className="text-lg font-semibold mb-2">Links</h4>
                        <div className="flex flex-wrap gap-3">
                          {normalizedLinks.map((link, index) => (
                            <motion.a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              {link.type === "github" && (
                                <svg
                                  className="w-4 h-4 mr-1"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                              )}
                              {link.type === "figma" && (
                                <svg
                                  className="w-4 h-4 mr-1"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 1 1-8 0zM12 0v8h4a4 4 0 1 0 0-8h-4zM4 4a4 4 0 0 0 4 4h4V0H8a4 4 0 0 0-4 4zM4 12a4 4 0 0 0 4 4h4V8H8a4 4 0 0 0-4 4z" />
                                </svg>
                              )}
                              {link.label}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectCard;
