"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa"
import BGproject from "@/assets/images/bgtexture.jpeg"
import { ParticlesBackground, NoiseOverlay, GradientBackground } from "@/components/BackgroundElements"

export const ContactSection = () => {
  const contacts = [
    {
      platform: "Email",
      icon: <FaEnvelope />,
      link: "mailto:siraphat.ninp@gmail.com",
      color: "from-red-500 to-pink-600",
      hoverColor: "from-red-600 to-pink-700",
      textColor: "text-red-400",
      action: "Opens your email app",
      value: "siraphat.ninp@gmail.com",
      delay: 0.1,
    },
    {
      platform: "Phone",
      icon: <FaPhone />,
      link: "tel:+0902163366",
      color: "from-green-500 to-emerald-600",
      hoverColor: "from-green-600 to-emerald-700",
      textColor: "text-green-400",
      action: "Opens phone dialer on mobile",
      value: "0902163366",
      delay: 0.2,
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/siraphat-ninprasert-996188353/",
      color: "from-blue-500 to-indigo-600",
      hoverColor: "from-blue-600 to-indigo-700",
      textColor: "text-blue-400",
      action: "Opens LinkedIn profile in new tab",
      value: "siraphat-ninprasert",
      delay: 0.3,
    },
    {
      platform: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/JustLouispace",
      color: "from-purple-500 to-violet-600",
      hoverColor: "from-purple-600 to-violet-700",
      textColor: "text-purple-400",
      action: "Opens GitHub profile in new tab",
      value: "github.com/JustLouispace",
      delay: 0.4,
    },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-36 lg:py-48 bg-gradient-to-b from-gray-900 to-black">
      {/* Enhanced background elements */}
      <motion.div
        className="absolute inset-0 -z-30 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${BGproject.src})` }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>

      <ParticlesBackground color="rgba(255, 255, 255, 0.3)" count={40} speed={0.2} />
      <GradientBackground colors={["#4a00e0", "#3498db"]} opacity={0.05} speed={20} />
      <NoiseOverlay opacity={0.03} />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-600/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-600/20 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-600/20 blur-3xl"></div>

      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I&apos;d love to hear from you. Feel free to
            reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: contact.delay, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <motion.div
                className={`h-full rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 bg-gradient-to-br ${contact.color} hover:${contact.hoverColor} group`}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <a
                  href={contact.link}
                  target={contact.platform === "Email" || contact.platform === "Phone" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="p-8 flex flex-col items-center text-center h-full">
                    <div className="bg-white/10 p-5 rounded-full mb-6 transform transition-transform duration-300 group-hover:scale-110">
                      <motion.div className="text-white text-3xl" whileHover={{ rotate: 5 }} whileTap={{ scale: 0.9 }}>
                        {contact.icon}
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{contact.platform}</h3>
                    <p className="text-white/90 font-medium mb-4 break-all">{contact.value}</p>

                    <div className="mt-auto">
                      <span className="inline-flex items-center justify-center px-4 py-2 bg-white/20 rounded-full text-sm text-white/90 mt-4">
                        {contact.action}
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative element */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-400 italic">Let&apos;s create something amazing together!</p>
        </motion.div>
      </div>
    </section>
  )
}
