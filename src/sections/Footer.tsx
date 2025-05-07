"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import { NoiseOverlay } from "@/components/BackgroundElements"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800 relative">
      {/* Background elements */}
      <NoiseOverlay opacity={0.05} />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif font-bold">Siraphat Ninprasert</h2>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </motion.div>

          <motion.div
            className="flex space-x-4 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.linkedin.com/in/siraphat-ninprasert-996188353/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/JustLouispace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:siraphat.ninp@gmail.com"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Siraphat Ninprasert. All rights reserved.</p>
          <p className="mt-2">Designed and built with passion using Next.js, Tailwind CSS, and Framer Motion.</p>
        </motion.div>
      </div>
    </footer>
  )
}
