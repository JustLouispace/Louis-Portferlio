"use client";

import Image from "next/image";
import Louis1 from "@/assets/images/Louis1.jpg";
import Louis2 from "@/assets/images/Louis2.jpg";
import Louis3 from "@/assets/images/Louis3.jpg";
import Workspace from "@/assets/images/Workspace.jpg";
import EducationImage1 from "@/assets/images/education1.jpg";
import EducationImage2 from "@/assets/images/education2.jpg";



import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AboutSection = () => {
  const images = [Louis1, Louis2, Louis3];
  const educationImages = [EducationImage1, EducationImage2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [educationImageIndex, setEducationImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Skills");
  const [displayText, setDisplayText] = useState("");
  const [isEducationTabActive, setIsEducationTabActive] = useState(false);

  const tabContent = {
    Skills: "• Node.js\n• Express\n• React\n• Django\n• Figma\n• Power Platform",
    Education: "Bachelor's Degree in Applied computer science - King Mongkut's institute of Technology Thonburi",
    CV: "Download my CV using the button below:",
  };

  const educationImageSettings = {
    height: 150,
    maxHeight: "35vh",
    objectPosition: "center center",
    borderRadius: "lg",
    shadow: "xl",
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsEducationTabActive(tab === "Education");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isEducationTabActive) {
      const interval = setInterval(() => {
        setEducationImageIndex((prevIndex) =>
          prevIndex === educationImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isEducationTabActive]);

  useEffect(() => {
    let i = 0;
    const text = tabContent[activeTab];
    setDisplayText("");

    const typingInterval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [activeTab]);

  const handleDownloadCV = () => {
    // For development (localhost:3000)
    // For production (yourdomain.com)
    // Both will work with this same path
    const pdfUrl = '/pdf/SiraphatNinprasertCV.pdf';
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'SiraphatNinprasert_Resume.pdf'; // Custom download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 relative z-0 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-30 opacity-10"
        style={{
          backgroundImage: `url(${Workspace.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content Container */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Image Carousel Section */}
        <div className="w-full md:w-1/2 overflow-hidden relative h-[500px]">
          <div
            className="flex transition-transform duration-[2500ms] ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full">
                <Image
                  src={image}
                  alt={`Workspace ${index + 1}`}
                  className="rounded-lg shadow-lg object-cover w-full h-[500px]"
                  width={600}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a full-stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and love to
            expand my knowledge. I thrive in team environments and enjoy
            collaborating to build amazing applications.
          </p>

          {/* Tabs Navigation */}
          <div className="mt-6 flex gap-6 text-gray-400 border-b border-gray-700 pb-2">
            {["Skills", "Education", "CV"].map((tab) => (
              <motion.button
                key={tab}
                className={`pb-1 transition duration-300 ease-in-out ${
                  activeTab === tab
                    ? "text-white border-b-2 border-white"
                    : "hover:text-white"
                }`}
                onClick={() => handleTabChange(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="mt-4 text-lg space-y-2 min-h-[100px]">
            {activeTab === "CV" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <pre className="whitespace-pre-line">{displayText}</pre>
                <motion.button
                  className="btn btn-wide bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
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
                          repeat: Infinity, 
                          duration: 1.5,
                          ease: "easeInOut"
                        } 
                      }}
                    >
                      ↓
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            ) : activeTab === "Education" ? (
              <AnimatePresence mode="wait">
                {isEducationTabActive && (
                  <motion.div
                    key="education-images"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 space-y-4"
                  >
                    <pre className="whitespace-pre-line text-gray-200 bg-gray-900/50 p-4 rounded-lg">
                      {displayText}
                    </pre>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {educationImages.map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.03 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className={`relative overflow-hidden rounded-${educationImageSettings.borderRadius} shadow-${educationImageSettings.shadow}`}
                          style={{
                            height: `${educationImageSettings.height}px`,
                            maxHeight: educationImageSettings.maxHeight,
                          }}
                        >
                          <Image
                            src={image}
                            alt={`Education ${index + 1}`}
                            className={`object-cover w-full h-full`}
                            style={{
                              objectPosition: educationImageSettings.objectPosition,
                            }}
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

                    {educationImages.length > 1 && (
                      <div className="flex justify-center space-x-3 mt-4">
                        {educationImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setEducationImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all `}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              <pre className="whitespace-pre-line">{displayText}</pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};