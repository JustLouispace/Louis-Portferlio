/* eslint-disable @next/next/no-img-element */
"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FaExternalLinkAlt, FaGithub, FaFigma, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa"

interface ProjectLink {
  label?: string
  url: string
  type?: string
}

interface ComparisonItem {
  aspect: string
  legacy: string
  modern: string
  improvement?: string // e.g. "40× faster", "100% uptime"
}

interface Comparison {
  legacyImage?: string  // optional — show placeholder if missing
  modernImage?: string
  legacyLabel?: string
  modernLabel?: string
  items: ComparisonItem[]
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
  comparison?: Comparison
  links?: Record<string, string | undefined> | ProjectLink[]
  isOpen: boolean
  onClick: () => void
}

// ─── Lightbox ────────────────────────────────────────────────────────────────
const Lightbox = ({
  images,
  startIndex,
  onClose,
}: {
  images: string[]
  startIndex: number
  onClose: () => void
}) => {
  const [current, setCurrent] = useState(startIndex)
  const [mounted, setMounted] = useState(false)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  useEffect(() => {
    setMounted(true)
    
    // Lock body scroll
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handler)
    
    return () => {
      window.removeEventListener("keydown", handler)
      document.body.style.overflow = originalStyle
    }
  }, [onClose, prev, next])

  if (!mounted) return null

  const content = (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/92 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10"
        onClick={onClose}
      >
        <FaTimes size={24} />
      </button>

      {/* Counter */}
      <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
        {current + 1} / {images.length}
      </span>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10 bg-white/5 hover:bg-white/10 rounded-full p-3"
          onClick={(e) => { e.stopPropagation(); prev() }}
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Image ${current + 1}`}
          className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        />
      </AnimatePresence>

      {/* Next */}
      {images.length > 1 && (
        <button
          className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10 bg-white/5 hover:bg-white/10 rounded-full p-3"
          onClick={(e) => { e.stopPropagation(); next() }}
        >
          <FaChevronRight size={20} />
        </button>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 px-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${
                i === current ? "border-yellow-400 opacity-100" : "border-white/20 opacity-40 hover:opacity-70"
              }`}
            >
              <img src={img} className="w-full h-full object-cover" alt="" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  )

  return createPortal(content, document.body)
}

// ─── Gallery Grid ─────────────────────────────────────────────────────────────
const GalleryGrid = ({
  allImages,
  title,
  onOpen,
}: {
  allImages: string[]
  title: string
  onOpen: (index: number) => void
}) => {
  const count = allImages.length

  const getGridClass = () => {
    if (count === 1) return "grid-cols-1"
    if (count === 2) return "grid-cols-2"
    if (count === 3) return "grid-cols-2"   // 1 full-width + 2 equal below
    if (count === 4) return "grid-cols-2"
    return "grid-cols-3"
  }

  const getItemClass = (index: number) => {
    if (count >= 3 && index === 0) {
      if (count === 3) return "col-span-2"   // full row in 2-col grid
      if (count === 4) return "col-span-2"
      return "col-span-2 row-span-2"        // 5+: top-left big
    }
    return ""
  }

  const getHeightClass = (index: number) => {
    if (count === 1) return "h-72 md:h-80"
    if (count === 2) return "h-60"
    if (count === 3) return index === 0 ? "h-60" : "h-44"
    if (count === 4) return index === 0 ? "h-56" : "h-40"
    if (index === 0) return "h-full min-h-[14rem]"
    return "h-36"
  }

  return (
    <div className={`grid ${getGridClass()} gap-2 mb-8`}>
      {allImages.map((img, index) => (
        <motion.div
          key={index}
          className={`relative overflow-hidden rounded-lg cursor-pointer group ${getItemClass(index)} ${getHeightClass(index)}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.07 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => onOpen(index)}
        >
          <img
            src={img}
            alt={`${title} — view ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-3 py-1 rounded-full">
              View fullscreen
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// ─── Comparison Section ──────────────────────────────────────────────────────
const ComparisonSection = ({ comparison }: { comparison: Comparison }) => {

  const legacyLabel = comparison.legacyLabel ?? "Legacy System"
  const modernLabel = comparison.modernLabel ?? "Modern System"

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
    >
      {/* ── Section header ── */}
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <h4 className="text-lg font-serif font-bold text-white whitespace-nowrap">⚡ Legacy → Modern</h4>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Side-by-Side Image display ── */}
      {(comparison.legacyImage || comparison.modernImage) && (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Legacy Side */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 flex flex-col h-64 bg-gray-900/50">
            <div className="px-3 py-2 bg-red-500/20 border-b border-red-500/20 text-red-300 text-xs font-bold tracking-wide flex items-center justify-between">
              <span>✕ {legacyLabel}</span>
              <span className="opacity-50">Before</span>
            </div>
            <div className="flex-1 relative">
              {comparison.legacyImage ? (
                <img src={comparison.legacyImage} alt={legacyLabel} className="absolute inset-0 w-full h-full object-cover object-top" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
                  <span className="text-3xl opacity-30">🗃️</span>
                  <p className="text-gray-600 text-xs">Legacy screenshot not available</p>
                </div>
              )}
            </div>
          </div>

          {/* Modern Side */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 flex flex-col h-64 bg-gray-900/50">
            <div className="px-3 py-2 bg-emerald-500/20 border-b border-emerald-500/20 text-emerald-300 text-xs font-bold tracking-wide flex items-center justify-between">
              <span>✓ {modernLabel}</span>
              <span className="opacity-50">After</span>
            </div>
            <div className="flex-1 relative">
              {comparison.modernImage ? (
                <img src={comparison.modernImage} alt={modernLabel} className="absolute inset-0 w-full h-full object-cover object-top" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <span className="text-gray-600 text-xs">Modern screenshot not available</span>
                </div>
              )}
            </div>
          </div>

        </div>
      )}

      {/* ── Feature comparison table ── */}
      <div className="rounded-xl border border-white/10 overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[2fr_3fr_3fr] bg-white/5 text-xs font-semibold tracking-widest uppercase">
          <div className="px-4 py-3 text-gray-500 border-r border-white/10">Aspect</div>
          <div className="px-4 py-3 text-red-400/80 border-r border-white/10">✕ {legacyLabel}</div>
          <div className="px-4 py-3 text-emerald-400/80">✓ {modernLabel}</div>
        </div>

        {/* Table rows */}
        {comparison.items.map((item, i) => (
          <motion.div
            key={item.aspect}
            className={`grid grid-cols-[2fr_3fr_3fr] border-t border-white/[0.06] ${
              i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
            }`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.06 }}
          >
            <div className="px-4 py-3 border-r border-white/[0.06]">
              <span className="text-xs font-semibold text-gray-400">{item.aspect}</span>
              {item.improvement && (
                <span className="ml-2 text-[10px] px-1.5 py-0.5 bg-yellow-500/15 text-yellow-400 border border-yellow-500/20 rounded-full font-bold">
                  {item.improvement}
                </span>
              )}
            </div>
            <div className="px-4 py-3 border-r border-white/[0.06]">
              <span className="text-xs text-red-300/70 leading-relaxed">{item.legacy}</span>
            </div>
            <div className="px-4 py-3">
              <span className="text-xs text-emerald-300/80 leading-relaxed">{item.modern}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Main ProjectCard ─────────────────────────────────────────────────────────
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
  comparison,
  links = {},
  isOpen,
  onClick,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const allImages = [image, ...additionalImages].filter(Boolean)

  const normalizedLinks = Array.isArray(links)
    ? links
    : links
      ? Object.entries(links)
          .filter(([_, url]) => url !== undefined)
          .map(([type, url]) => ({
            label: type.charAt(0).toUpperCase() + type.slice(1),
            url: url as string,
            type: type.toLowerCase(),
          }))
      : []

  return (
    <div className="relative z-[1]">
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={allImages}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="border border-base-300 rounded-lg mb-6 overflow-hidden transition-all duration-400 bg-gray-900/40 backdrop-blur-sm hover:shadow-lg"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* ── Header ── */}
        <div
          className="relative flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-base-200/20 transition-colors"
          onClick={onClick}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 w-full">
            <div className="flex justify-between items-start w-full md:w-auto">
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-md flex-shrink-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img src={image || "/placeholder.svg"} alt={title} className="w-full h-40 md:w-32 md:h-32 object-cover rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center p-2">
                  <span className="text-xs text-white font-medium">View Details</span>
                </div>
              </motion.div>

              {/* Mobile-only expand icon */}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-full p-2 flex-shrink-0 ml-4 md:hidden mt-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>

            <div className="flex-1 mt-2 md:mt-0">
              <h3 className="text-lg md:text-xl font-bold pr-8 md:pr-0">{title}</h3>
              <p className="text-sm md:text-base mt-1 md:mt-2 text-gray-400 line-clamp-2 md:line-clamp-none">{description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {technologies.split(",").slice(0, 3).map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-[10px] md:text-xs">
                    {tech.trim()}
                  </span>
                ))}
                {technologies.split(",").length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-[10px] md:text-xs">
                    +{technologies.split(",").length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Desktop-only expand icon */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block bg-gray-800 rounded-full p-2 flex-shrink-0 ml-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>

        {/* ── Expanded ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.8, 0.9, 0.8, 0.98] }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0">
                <div className="grid md:grid-cols-3 gap-8">

                  {/* Left */}
                  <div className="md:col-span-2">
                    <motion.h4 className="text-lg font-semibold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                      Project Overview
                    </motion.h4>
                    <motion.p className="mb-6 text-gray-300 leading-relaxed" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                      {description}
                    </motion.p>

                    {/* Gallery */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
                      <GalleryGrid allImages={allImages} title={title} onOpen={(i) => setLightboxIndex(i)} />
                    </motion.div>
                  </div>

                  {/* Right */}
                  <div className="space-y-6 self-start sticky top-8">
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

                    {allImages.length > 1 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}>
                        <h4 className="text-lg font-semibold mb-2">Gallery</h4>
                        <button
                          onClick={() => setLightboxIndex(0)}
                          className="flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
                        >
                          <span>📷</span>
                          <span>{allImages.length} photos — click to browse</span>
                        </button>
                      </motion.div>
                    )}

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
                              {!["github", "figma"].includes(link.type || "") && <FaExternalLinkAlt className="w-4 h-4" />}
                              {link.label || link.type}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>

                {/* ── Full Width Elements (Below the 2/1 Grid) ── */}
                <div className="mt-8 border-t border-white/5 pt-8 space-y-8">
                  {/* Legacy → Modern comparison */}
                  {comparison && <ComparisonSection comparison={comparison} />}

                  {/* Key Features */}
                  {details.length > 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                      <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                        {details.map((detail, index) => (
                          <motion.div key={index} className="flex items-start" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + index * 0.05 }}>
                            <span className="text-yellow-400 mr-2 flex-shrink-0">•</span>
                            <span className="text-gray-300">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* My Role */}
                    {role && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                        <h4 className="text-lg font-semibold mb-2">My Role</h4>
                        <p className="text-gray-300 leading-relaxed">{role}</p>
                      </motion.div>
                    )}

                    {/* Outcome */}
                    {outcome && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                        <h4 className="text-lg font-semibold mb-2">Outcome</h4>
                        <p className="text-gray-300 leading-relaxed">{outcome}</p>
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
