"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaExternalLinkAlt, FaGithub, FaFigma } from "react-icons/fa"

interface ProjectLink {
  label?: string
  url: string
  type?: string
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  additionalImages?: string[]
  details?: string[]
  technologies?: string
  duration?: string
  role?: string
  outcome?: string
  links?: Record<string, string | undefined> | ProjectLink[]
  isOpen: boolean
  onClick: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  additionalImages = [],
  details = [],
  technologies = "React, Tailwind, etc.",
  duration = "6 months",
  role = "",
  outcome = "",
  links = {},
  isOpen,
  onClick,
}) => {
  // Normalize links to always be an array
  const normalizedLinks = Array.isArray(links)
    ? links
    : links
      ? Object.entries(links)
          .filter(([_, url]) => url !== undefined)
          .map(([type, url]) => ({
            label: type.charAt(0).toUpperCase() + type.slice(1),
            url: url as string, // We've filtered out undefined, so this is safe
            type: type.toLowerCase(),
          }))
      : []

  return (
    <div className="relative z-[1]">
      <motion.div
        className="border border-base-300 rounded-lg mb-6 overflow-hidden transition-all duration-400 bg-gray-900/40 backdrop-blur-sm hover:shadow-lg"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="flex items-center justify-between p-6 cursor-pointer hover:bg-base-200/20 transition-colors"
          onClick={onClick}
        >
          <div className="flex items-center gap-6">
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image || "/placeholder.svg"} alt={title} className="w-32 h-32 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center p-2">
                <span className="text-xs text-white font-medium">View Details</span>
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-base mt-2 text-gray-400 line-clamp-2">{description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {technologies
                  .split(",")
                  .slice(0, 3)
                  .map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs">
                      {tech.trim()}
                    </span>
                  ))}
                {technologies.split(",").length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs">
                    +{technologies.split(",").length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                duration: 1.2,
                ease: [0.8, 0.9, 0.8, 0.98],
              }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <motion.h4
                      className="text-lg font-semibold mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Project Overview
                    </motion.h4>

                    <motion.p
                      className="mb-6 text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {description}
                    </motion.p>

                    <motion.div
                      className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="col-span-2">
                        <img
                          src={image || "/placeholder.svg"}
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
                          className="overflow-hidden rounded-lg shadow-md"
                          whileHover={{ scale: 1.02 }}
                        >
                          <img
                            src={img || "/placeholder.svg"}
                            alt={`Additional view ${index + 1} of ${title}`}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    {details.length > 0 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                        <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                        <ul className="space-y-3 mb-6">
                          {details.map((detail, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + index * 0.05 }}
                            >
                              <span className="text-yellow-400 mr-2">•</span>
                              <span className="text-gray-300">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {role && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mb-6"
                      >
                        <h4 className="text-lg font-semibold mb-2">My Role</h4>
                        <p className="text-gray-300">{role}</p>
                      </motion.div>
                    )}

                    {outcome && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                        <h4 className="text-lg font-semibold mb-2">Outcome</h4>
                        <p className="text-gray-300">{outcome}</p>
                      </motion.div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                      <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.split(",").map((tech, index) => (
                          <span key={index} className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-md text-sm">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                      <h4 className="text-lg font-semibold mb-2">Duration</h4>
                      <p className="text-gray-300">{duration}</p>
                    </motion.div>

                    {normalizedLinks.length > 0 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <h4 className="text-lg font-semibold mb-3">Links</h4>
                        <div className="flex flex-wrap gap-3">
                          {normalizedLinks.map((link, index) => (
                            <motion.a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline flex items-center gap-2"
                              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              {link.type === "github" && <FaGithub className="w-4 h-4" />}
                              {link.type === "figma" && <FaFigma className="w-4 h-4" />}
                              {!["github", "figma"].includes(link.type || "") && (
                                <FaExternalLinkAlt className="w-4 h-4" />
                              )}
                              {link.label || link.type}
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
      </motion.div>
    </div>
  )
}

export default ProjectCard
