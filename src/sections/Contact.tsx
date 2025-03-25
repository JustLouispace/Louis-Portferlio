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
      {/* Top fade overlay (matches previous section's color) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#yourPreviousSectionColor] to-slate-950 -z-20"></div>
      
      {/* Main content with texture background */}
      <div className="py-32 md:py-48 lg:py-60 bg-gradient-to-b from-slate-950 to-gray-850 relative z-0">
        {/* Background Texture */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${BGproject.src})` }}
        ></div>

        {/* Bottom fade overlay (matches next section's color) */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#yourNextSectionColor] to-transparent -z-20"></div>

        <motion.section
          id="contact"
          className="container relative flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Contact Information
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33%-12px)]"
              >
                <div className="p-5 rounded-lg bg-gray-900/70 hover:bg-gray-800/80 transition-all h-full backdrop-blur-sm border border-gray-700">
                  <motion.a
                    href={contact.link}
                    target={
                      contact.platform === "Email" || contact.platform === "Phone"
                        ? "_self"
                        : "_blank"
                    }
                    rel="noopener noreferrer"
                    className={`flex items-start gap-4 ${contact.color}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl mt-1"
                    >
                      {contact.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{contact.platform}</h3>
                      <p className="text-gray-200">{contact.value}</p>
                      <p className="text-gray-400 text-sm mt-1">{contact.action}</p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
           
          </motion.div>
        </motion.section>
      </div>

      
    </div>
  );
};