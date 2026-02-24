"use client"

import Image from "next/image"
import Louis1 from "@/assets/images/Louis1.jpg"
import Louis2 from "@/assets/images/Louis2.jpg"
import Louis3 from "@/assets/images/Louis3.jpg"
import Workspace from "@/assets/images/Workspace.jpg"
import EducationImage1 from "@/assets/images/education1.jpg"
import EducationImage2 from "@/assets/images/education2.jpg"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ParticlesBackground, NoiseOverlay } from "@/components/BackgroundElements"

// Define the tab type
type TabType = "Education" | "CV"

const images = [Louis1, Louis2, Louis3]
const educationImages = [EducationImage1, EducationImage2]

export const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [educationImageIndex, setEducationImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<TabType>("Education")
  const [isEducationTabActive, setIsEducationTabActive] = useState(false)

  const educationImageSettings = {
    height: 150,
    maxHeight: "35vh",
    objectPosition: "center center",
    borderRadius: "lg",
    shadow: "xl",
  }

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    setIsEducationTabActive(tab === "Education")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isEducationTabActive) {
      const interval = setInterval(() => {
        setEducationImageIndex((prevIndex) => (prevIndex === educationImages.length - 1 ? 0 : prevIndex + 1))
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isEducationTabActive])



  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Copy of Gray Minimalist Clean Professional CV Resume.pdf" // Using the local file path served from /public
    link.download = "Siraphat_Ninprasert_CV.pdf" // Suggest a filename for download
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center bg-white dark:bg-black text-gray-900 dark:text-white px-6 relative z-0 overflow-hidden py-20 transition-colors duration-300"
    >
      {/* Enhanced background elements */}
      <motion.div
        className="absolute inset-0 -z-30 opacity-10"
        style={{
          backgroundImage: `url(${Workspace.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>

      <ParticlesBackground color="rgba(255, 215, 0, 0.3)" count={30} speed={0.3} />
      <NoiseOverlay opacity={0.04} />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-500/20 dark:bg-yellow-500/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/20 dark:bg-amber-500/5 blur-3xl animate-pulse"></div>

      {/* Section heading */}
      <motion.div
        className="w-full text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
      </motion.div>

      {/* Content Container */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-10 relative z-10">
        {/* Image Carousel Section */}
        <motion.div
          className="w-full md:w-1/2 overflow-hidden relative h-[500px] rounded-xl shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="flex transition-transform duration-[2500ms] ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Profile ${index + 1}`}
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                  width={600}
                  height={500}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Image indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index ? "bg-white w-8" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 min-h-[600px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I am Siraphat, or Louis, a student at KMUTT studying Applied Computer Science. I will graduate this year.
            Passionate about building interactive and responsive web applications, I am a quick learner who thrives in
            team environments and loves collaborating to create great applications.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            My journey in web development began with a fascination for creating user interfaces that are both beautiful
            and functional. I&apos;ve since expanded my skills to include full-stack development, allowing me to build
            complete, end-to-end solutions.
          </p>

          {/* Tabs Navigation */}
          <div className="flex gap-2 mb-8 bg-gray-200/50 dark:bg-gray-800/50 p-1.5 rounded-xl relative z-10 w-fit">
            {["Education", "CV"].map((tab) => (
              <motion.button
                key={tab}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out relative z-10 ${
                  activeTab === tab 
                    ? "text-gray-900 dark:text-white" 
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
                onClick={() => handleTabChange(tab as TabType)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabConfig"
                    className="absolute inset-0 bg-white dark:bg-gray-700 rounded-lg shadow-sm -z-10 border border-gray-200 dark:border-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="mt-6 space-y-2 min-h-[300px]">
            {activeTab === "CV" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center min-h-[250px] text-center"
              >
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">📄</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Curriculum Vitae</h4>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
                  Download my CV to see my complete work history, education, and technical skills in detail.
                </p>
                <div className="flex justify-center mt-8">
                  <motion.button
                    className="bg-white dark:bg-gray-800 text-yellow-600 dark:text-yellow-400 px-3 py-1.5 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-700 hover:border-yellow-500/50 transition-colors shadow-sm dark:shadow-none"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={handleDownloadCV}
                  >
                    <span className="flex items-center justify-center">
                      Download CV
                      <motion.span
                        className="ml-3 text-xl"
                        animate={{
                          y: [0, -5, 0],
                          transition: {
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1.5,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        ↓
                      </motion.span>
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ) : activeTab === "Education" ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key="education-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-white dark:bg-gray-800/30 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-white/5 shadow-sm mb-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">Bachelor&apos;s Degree in Applied Computer Science</h4>
                        <p className="text-yellow-600 dark:text-yellow-400 font-medium text-lg">King Mongkut&apos;s Institute of Technology Thonburi</p>
                      </div>
                      <div className="mt-3 md:mt-0 text-left md:text-right shrink-0">
                        <span className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-white/10 rounded-full text-sm font-semibold text-gray-800 dark:text-gray-200">
                          Class of 2024
                        </span>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 font-medium">GPA: 3.5/4.0</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/5">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm uppercase tracking-wider">Relevant Coursework</h5>
                      <div className="flex flex-wrap gap-2">
                        {["Web Development", "Database Systems", "Software Engineering", "User Interface Design"].map((course, i) => (
                          <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 rounded-lg text-sm font-medium transition-colors hover:border-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-400">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {educationImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                        className={`relative overflow-hidden rounded-lg shadow-xl border border-gray-200 dark:border-white/5`}
                        style={{
                          height: `${educationImageSettings.height}px`,
                          maxHeight: educationImageSettings.maxHeight,
                        }}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Education ${index + 1}`}
                          className="object-cover w-full h-full"
                          width={600}
                          height={educationImageSettings.height}
                          quality={90}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                          <p className="text-white text-sm font-medium">
                            {index === 0 ? "Campus View" : "Graduation Day"}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
