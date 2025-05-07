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
type TabType = "Skills" | "Education" | "CV"

export const AboutSection = () => {
  const images = [Louis1, Louis2, Louis3]
  const educationImages = [EducationImage1, EducationImage2]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [educationImageIndex, setEducationImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<TabType>("Skills") // Use TabType
  const [displayText, setDisplayText] = useState("")
  const [isEducationTabActive, setIsEducationTabActive] = useState(false)

  const tabContent: Record<TabType, string> = {
    // Record ensures that we map TabType keys to string values
    Skills:
      "• React & Next.js\n• Node.js & Express\n• Django & Python\n• MongoDB & PostgreSQL\n• Figma & UI/UX Design\n• Power Platform\n• Responsive Web Design\n• RESTful API Development\n• Git & Version Control\n• Agile Development",
    Education:
      "Bachelor's Degree in Applied Computer Science\nKing Mongkut's Institute of Technology Thonburi\n\nGraduation: 2024\nGPA: 3.5/4.0\n\nRelevant Coursework:\n• Web Development\n• Database Systems\n• Software Engineering\n• User Interface Design",
    CV: "Download my CV using the button below to see my complete work history, education, and technical skills in detail.",
  }

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

  useEffect(() => {
    let i = 0
    const text = tabContent[activeTab]
    setDisplayText("")

    const typingInterval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 30) // Faster typing speed

    return () => clearInterval(typingInterval)
  }, [activeTab])

  const handleDownloadCV = () => {
    // Alternative approach that tries to force download
    const link = document.createElement("a")
    link.href = "https://drive.google.com/uc?export=download&id=1-P9fpMzNgg8wRIEoQdHW0n6_iNF1Xc8W"
    link.target = "_blank"
    link.click()
  }

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center bg-black text-white px-6 relative z-0 overflow-hidden py-20"
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
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl animate-pulse"></div>

      {/* Section heading */}
      <motion.div
        className="w-full text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Me</h2>
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
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
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
          <div className="mt-6 flex gap-6 text-gray-400 border-b border-gray-700 pb-2">
            {["Skills", "Education", "CV"].map((tab) => (
              <motion.button
                key={tab}
                className={`pb-1 transition duration-300 ease-in-out ${
                  activeTab === tab ? "text-white border-b-2 border-yellow-400" : "hover:text-white"
                }`}
                onClick={() => handleTabChange(tab as TabType)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="mt-6 text-lg space-y-2 min-h-[300px]">
            {activeTab === "CV" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <pre className="whitespace-pre-line">{displayText}</pre>
                <div className="flex justify-center mt-8">
                  <motion.button
                    className="btn btn-wide bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300"
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <pre className="whitespace-pre-line mb-6 text-gray-300">{displayText}</pre>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {educationImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                        className={`relative overflow-hidden rounded-lg shadow-xl`}
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
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <pre className="whitespace-pre-line text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {displayText}
                </pre>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
