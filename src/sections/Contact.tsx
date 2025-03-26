"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import BGproject from "@/assets/images/bgtexture.jpeg";

export const ContactSection = () => { 
  const contacts = [
    {
      platform: "Email",
      icon: <FaEnvelope />,
      link: "mailto:siraphat.ninp@gmail.com",
      color: "text-red-400 hover:text-red-300",
      action: "Opens your email app",
      value: "siraphat.ninp@gmail.com",
    },
    {
      platform: "Phone",
      icon: <FaPhone />,
      link: "tel:+0902163366",
      color: "text-green-400 hover:text-green-300",
      action: "Opens phone dialer on mobile",
      value: "0902163366",
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/siraphat-ninprasert-996188353/",
      color: "text-blue-400 hover:text-blue-300",
      action: "Opens LinkedIn profile in new tab",
      value: "siraphat-ninprasert",
    },
    {
      platform: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/JustLouispace",
      color: "text-purple-400 hover:text-purple-300",
      action: "Opens GitHub profile in new tab",
      value: "github.com/JustLouispace",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#yourPreviousSectionColor] to-slate-950 -z-20"></div>
      
      <div className="py-24 md:py-36 lg:py-48 bg-gradient-to-b from-slate-950 to-gray-850 relative z-0">
        <div
          className="absolute inset-0 -z-30 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url(${BGproject.src})` }}
        ></div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#yourNextSectionColor] to-transparent -z-20"></div>

        <motion.section
          id="contact"
          className="container px-6 sm:px-12 md:px-20 lg:px-32 mx-auto flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Contact Information
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-full"
              >
                <div className="p-10 rounded-lg bg-gray-900/70 hover:bg-gray-800/80 transition-all h-full backdrop-blur-sm border border-gray-700 flex flex-col items-center">
                  <motion.a
                    href={contact.link}
                    target={
                      contact.platform === "Email" || contact.platform === "Phone"
                        ? "_self"
                        : "_blank"
                    }
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-2 ${contact.color} text-center`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-3xl"
                    >
                      {contact.icon}
                    </motion.div>
                    <h3 className="text-lg font-medium text-white">{contact.platform}</h3>
                    <p className="text-gray-200 text-sm">{contact.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{contact.action}</p>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};
