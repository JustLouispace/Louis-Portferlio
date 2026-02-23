"use client"

import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/BackgroundElements"

const skillCategories = [
  {
    id: "frontend",
    icon: "🖥️",
    headline: "Frontend & UX Architecture",
    description:
      "Architect performant, accessible web experiences using SSR and modern component patterns. I eliminate UI complexity inherited from legacy systems — shipping interfaces users actually want to use.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vite"],
    accent: "from-sky-400/20 to-blue-600/10",
    border: "border-sky-500/30",
    tagColor: "bg-sky-500/15 text-sky-300 border border-sky-500/30",
    iconBg: "bg-sky-500/10",
  },
  {
    id: "backend",
    icon: "⚙️",
    headline: "Backend & System Engineering",
    description:
      "Design non-blocking, event-driven API layers that stay lean under load. I refactor monolithic endpoints into composable services capable of handling high concurrency without sacrificing reliability.",
    tech: ["Node.js", "Express", "TypeScript"],
    accent: "from-violet-400/20 to-purple-600/10",
    border: "border-violet-500/30",
    tagColor: "bg-violet-500/15 text-violet-300 border border-violet-500/30",
    iconBg: "bg-violet-500/10",
  },
  {
    id: "database",
    icon: "🗄️",
    headline: "Database & Performance Optimization",
    description:
      "Turn slow, costly queries into precision instruments — achieving up to 40× speed gains through strategic indexing, query rewriting, and dynamic dual-DB routing between legacy and modern systems without downtime.",
    tech: ["MySQL", "Oracle Database"],
    accent: "from-amber-400/20 to-yellow-600/10",
    border: "border-amber-500/30",
    tagColor: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
    iconBg: "bg-amber-500/10",
  },
  {
    id: "devops",
    icon: "🔒",
    headline: "DevOps & Security Standards",
    description:
      "Engineer zero-downtime deployment pipelines with process management and reverse proxy configuration. Enforce strict RBAC policies that protect sensitive routes and ensure only the right identities reach the right resources.",
    tech: ["Nginx", "PM2", "Docker", "Linux (Ubuntu)"],
    accent: "from-emerald-400/20 to-green-600/10",
    border: "border-emerald-500/30",
    tagColor: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
    iconBg: "bg-emerald-500/10",
  },
]

const toolsArsenal = [
  {
    label: "Languages",
    icon: "{ }",
    color: "text-rose-400",
    divider: "border-rose-500/25",
    pillColor: "bg-rose-500/10 text-rose-300 border border-rose-500/20 hover:bg-rose-500/20",
    items: ["TypeScript", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3", "PHP", "Python"],
  },
  {
    label: "Frontend",
    icon: "◈",
    color: "text-sky-400",
    divider: "border-sky-500/25",
    pillColor: "bg-sky-500/10 text-sky-300 border border-sky-500/20 hover:bg-sky-500/20",
    items: ["Next.js", "React", "Tailwind CSS", "Vite", "Zustand / Redux", "Responsive Design"],
  },
  {
    label: "Backend",
    icon: "⬡",
    color: "text-violet-400",
    divider: "border-violet-500/25",
    pillColor: "bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20",
    items: ["Node.js", "Express.js", "RESTful API Design", "JWT / Authentication", "RBAC", "PHP", "Laravel", "NestJS"],
  },
  {
    label: "Database",
    icon: "◉",
    color: "text-amber-400",
    divider: "border-amber-500/25",
    pillColor: "bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/20",
    items: ["MySQL", "Oracle Database", "Query Optimization", "Database Design", "SQL/NoSQL", "MongoDB", "PostgreSQL", "NoSQL"],
  },
  {
    label: "DevOps & Tools",
    icon: "⬢",
    color: "text-emerald-400",
    divider: "border-emerald-500/25",
    pillColor: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20",
    items: ["Docker", "Nginx", "PM2", "Linux (Ubuntu)", "Git / GitHub", "Postman", "Figma", "CI/CD"],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center bg-[#0a0a14] text-white px-6 py-24 relative overflow-hidden"
    >
      {/* Background particles */}
      <ParticlesBackground color="rgba(139, 92, 246, 0.25)" count={25} speed={0.25} />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      {/* Section heading */}
      <motion.div
        className="w-full text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Skills &amp; Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          From pixel-perfect interfaces to rock-solid infrastructure — here&apos;s how I engineer
          systems that scale, perform, and endure.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
            whileHover={{
              y: -6,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className={`relative group rounded-2xl border ${category.border} bg-gradient-to-br ${category.accent} backdrop-blur-sm p-7 flex flex-col gap-5 overflow-hidden cursor-default`}
          >
            {/* Hover shimmer overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.03] rounded-2xl pointer-events-none" />

            {/* Top row: icon + headline */}
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-12 h-12 ${category.iconBg} rounded-xl flex items-center justify-center text-2xl border ${category.border}`}>
                {category.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight tracking-tight">
                  {category.headline}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {category.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-1">
              {category.tech.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-medium px-3 py-1 rounded-full ${category.tagColor} tracking-wide`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Tech Stack & Tools Arsenal ── */}
      <motion.div
        className="max-w-6xl w-full mt-14 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true, margin: "-40px" }}
      >
        {/* Sub-heading */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
            Tech Stack &amp; Tools Arsenal
          </h3>
          <p className="text-gray-500 text-sm tracking-wide">
            Every tool I reach for — organised for recruiters, technical leads, and curious minds.
          </p>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* 5-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {toolsArsenal.map((group, groupIdx) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: groupIdx * 0.08 }}
              viewport={{ once: true }}
              className={`flex flex-col gap-3 border-t-2 ${group.divider} pt-4`}
            >
              {/* Column header */}
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-base font-bold leading-none ${group.color}`}>
                  {group.icon}
                </span>
                <span className={`text-xs font-semibold uppercase tracking-widest ${group.color}`}>
                  {group.label}
                </span>
              </div>

              {/* Pill tags */}
              <div className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`inline-block text-xs font-medium px-2.5 py-1 rounded-md ${group.pillColor} transition-colors duration-200 cursor-default leading-snug`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-10" />
      </motion.div>

      {/* Bottom label */}
      <motion.p
        className="mt-10 text-xs text-gray-600 tracking-widest uppercase relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Continuously learning · Constantly shipping
      </motion.p>
    </section>
  )
}
