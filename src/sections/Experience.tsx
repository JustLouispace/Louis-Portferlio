"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ParticlesBackground, NoiseOverlay } from "@/components/BackgroundElements"

// Import existing logos
import SinoLogo from "@/assets/images/Logo/Sino.png"
import ScgcLogo from "@/assets/images/Logo/SCGC.png"

const experiences = [
  {
    role: "Full-Stack Developer Full-time",
    company: "Sino Pacific",
    period: "2024 - Present",
    description: 
      "Developing and migrating enterprise-level applications to modern tech stacks (Next.js, Node.js). Engineered a robust Store Compliance Query Engine and a centralized Debit Management Hub, focusing on high-performance architecture, real-time dashboards, and CI/CD pipelines.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Oracle DB", "MySQL"],
    color: "from-blue-500 to-cyan-500",
    logo: SinoLogo,
    jobType: "Full-time"
  },
  {
    role: "Data Analyst / Developer Intern",
    company: "SCGC",
    period: "2023",
    description: 
      "Built a full-scale industrial application to monitor and report nitrogen usage at Map Ta Phut terminal. Developed automated reporting systems, PDF processing pipelines, and role-based access dashboards, reducing manual reporting time significantly.",
    technologies: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "Microsoft Azure"],
    color: "from-emerald-500 to-teal-500",
    logo: ScgcLogo,
    jobType: "Internship"
  }
]

export const Experience = () => {
  return (
    <section 
      id="experience" 
      className="py-24 md:py-36 min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white relative z-0 overflow-hidden transition-colors duration-300"
    >
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 dark:bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <ParticlesBackground color="rgba(100, 100, 100, 0.15)" count={30} speed={0.3} />
      <NoiseOverlay opacity={0.03} />

      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider mb-4 border border-blue-200 dark:border-blue-800/50">CAREER</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Journey</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A timeline of my professional experience, showcasing the roles and responsibilities I&apos;ve taken on to build scalable and modern solutions.
          </p>
        </motion.div>

        {/* Centered Cards Layout */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Subtle connecting line */}
          <div className="absolute left-[28px] md:left-12 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-500/20 to-transparent rounded-full -z-10 block"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative flex items-start w-full group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[28px] md:left-12 transform -translate-x-1/2 mt-10 md:mt-12 flex items-center justify-center z-20">
                  <div className={`absolute w-10 h-10 rounded-full bg-gradient-to-r ${exp.color} opacity-20 group-hover:animate-ping`}></div>
                  <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-[3px] border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full pl-16 md:pl-28">
                  <motion.div 
                    className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-white/10 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.2)" }}
                  >
                    {/* Subtle gradient glow inside card */}
                    <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${exp.color} opacity-0 dark:opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 relative z-10">
                      <div className="flex items-center gap-4">
                        {/* Company Logo rendering */}
                        <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-gray-50 dark:bg-slate-800 border-2 border-gray-100 dark:border-white/10 flex-shrink-0 flex items-center justify-center shadow-lg">
                          {exp.logo ? (
                            <Image 
                              src={exp.logo} 
                              alt={`${exp.company} logo`} 
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <span className="text-3xl lg:text-4xl font-bold text-gray-400 dark:text-gray-500">
                              {exp.company.charAt(0)}
                            </span>
                          )}
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400">{exp.company}</span>
                          </div>
                          <span className="text-base font-medium text-gray-500 uppercase tracking-widest mt-1.5 block">{exp.jobType}</span>
                        </div>
                      </div>
                      
                      <span className="inline-block px-5 py-2.5 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 text-sm md:text-base font-bold shadow-sm border border-blue-100 dark:border-white/5 w-fit h-fit whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="relative z-10 w-full">
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">{exp.role}</h3>
                      
                      <p className="text-gray-600 dark:text-gray-300/90 mb-10 leading-relaxed text-lg md:text-xl">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mt-auto">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-4 py-2 bg-gray-100/80 dark:bg-slate-800/80 text-gray-800 dark:text-gray-200 text-sm md:text-base font-medium rounded-xl border border-gray-200/80 dark:border-white/5 shadow-sm hover:border-blue-400/50 dark:hover:border-blue-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
