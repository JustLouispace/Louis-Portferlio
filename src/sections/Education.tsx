"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGraduationCap, FaSchool } from "react-icons/fa"
import EducationImage1 from "@/assets/images/education1.jpg"
import BangsaphanWitthaya from "@/assets/images/BangsaphanWitthaya.jpeg"
import { NoiseOverlay } from "@/components/BackgroundElements"
import { useEffect, useRef } from "react"

export const Education = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Dynamic background animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 2 // Make taller to cover the section
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create connected nodes effect
    const nodes: {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      color: string
    }[] = []

    // Create nodes with education-themed colors
    const colors = [
      "rgba(255, 215, 0, 0.5)", // Gold
      "rgba(70, 130, 180, 0.5)", // Steel Blue
      "rgba(147, 112, 219, 0.5)", // Medium Purple
      "rgba(60, 179, 113, 0.5)", // Medium Sea Green
    ]

    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas with a gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(0, 0, 0, 1)")
      gradient.addColorStop(0.5, "rgba(20, 20, 30, 1)")
      gradient.addColorStop(1, "rgba(30, 30, 40, 1)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()
      })

      // Draw connections between nodes
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw floating education symbols
      drawEducationSymbols(ctx, canvas)

      requestAnimationFrame(animate)
    }

    // Education symbols
    const symbols = [
      { x: canvas.width * 0.1, y: canvas.height * 0.2, size: 30, type: "book", speed: 0.2, angle: 0 },
      { x: canvas.width * 0.8, y: canvas.height * 0.3, size: 40, type: "graduation", speed: 0.15, angle: 0 },
      { x: canvas.width * 0.3, y: canvas.height * 0.7, size: 25, type: "certificate", speed: 0.25, angle: 0 },
      { x: canvas.width * 0.7, y: canvas.height * 0.8, size: 35, type: "lightbulb", speed: 0.18, angle: 0 },
      { x: canvas.width * 0.5, y: canvas.height * 0.5, size: 45, type: "atom", speed: 0.1, angle: 0 },
    ]

    const drawEducationSymbols = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      symbols.forEach((symbol) => {
        // Update angle for floating effect
        symbol.angle += symbol.speed
        const floatY = Math.sin(symbol.angle) * 10

        ctx.save()
        ctx.translate(symbol.x, symbol.y + floatY)

        // Draw different education symbols
        ctx.fillStyle = "rgba(255, 215, 0, 0.15)"

        switch (symbol.type) {
          case "book":
            drawBook(ctx, symbol.size)
            break
          case "graduation":
            drawGraduation(ctx, symbol.size)
            break
          case "certificate":
            drawCertificate(ctx, symbol.size)
            break
          case "lightbulb":
            drawLightbulb(ctx, symbol.size)
            break
          case "atom":
            drawAtom(ctx, symbol.size)
            break
        }

        ctx.restore()
      })
    }

    // Symbol drawing functions
    const drawBook = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath()
      ctx.rect(-size / 2, -size / 4, size, size / 2)
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(-size / 2, -size / 4)
      ctx.lineTo(-size / 2, -size / 4 - size / 10)
      ctx.lineTo(size / 2, -size / 4 - size / 10)
      ctx.lineTo(size / 2, -size / 4)
      ctx.fillStyle = "rgba(255, 215, 0, 0.25)"
      ctx.fill()
    }

    const drawGraduation = (ctx: CanvasRenderingContext2D, size: number) => {
      // Graduation cap
      ctx.beginPath()
      ctx.moveTo(-size / 2, 0)
      ctx.lineTo(size / 2, 0)
      ctx.lineTo(0, -size / 2)
      ctx.closePath()
      ctx.fill()

      ctx.beginPath()
      ctx.rect(-size / 4, 0, size / 2, size / 6)
      ctx.fill()
    }

    const drawCertificate = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath()
      ctx.rect(-size / 2, -size / 3, size, (size * 2) / 3)
      ctx.fill()

      // Certificate ribbon
      ctx.beginPath()
      ctx.moveTo(-size / 6, size / 3)
      ctx.lineTo(-size / 3, size / 2)
      ctx.lineTo(-size / 6, size / 3)
      ctx.fillStyle = "rgba(255, 215, 0, 0.3)"
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(size / 6, size / 3)
      ctx.lineTo(size / 3, size / 2)
      ctx.lineTo(size / 6, size / 3)
      ctx.fill()
    }

    const drawLightbulb = (ctx: CanvasRenderingContext2D, size: number) => {
      // Bulb
      ctx.beginPath()
      ctx.arc(0, -size / 4, size / 3, 0, Math.PI * 2)
      ctx.fill()

      // Base
      ctx.beginPath()
      ctx.rect(-size / 6, size / 12, size / 3, size / 4)
      ctx.fill()
    }

    const drawAtom = (ctx: CanvasRenderingContext2D, size: number) => {
      // Nucleus
      ctx.beginPath()
      ctx.arc(0, 0, size / 6, 0, Math.PI * 2)
      ctx.fill()

      // Orbits
      ctx.beginPath()
      ctx.ellipse(0, 0, size / 2, size / 4, 0, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(255, 215, 0, 0.2)"
      ctx.stroke()

      ctx.beginPath()
      ctx.ellipse(0, 0, size / 2, size / 4, Math.PI / 2, 0, Math.PI * 2)
      ctx.stroke()
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  // Updated education items to show only university and high school
  const educationItems = [
    {
      id: 1,
      type: "university",
      icon: <FaGraduationCap className="text-yellow-400 text-2xl" />,
      title: "Bachelor's Degree in Applied Computer Science",
      institution: "King Mongkut's Institute of Technology Thonburi",
      period: "2021 - 2025",
      description:
        "Specialized in web development and software engineering with a focus on practical applications. Graduated with a GPA of 3.5/4.0.",
      highlights: [
        "Web Development & Design",
        "Database Systems & Management",
        "Software Engineering Principles",
        "User Interface/UX Design",
        "Artificial Intelligence & Machine Learning",
        "Mobile Application Development",
      ],
      image: EducationImage1,
      achievements: [
        "2nd Place - National Software Contest (NSC) 2024",
        "Dean's List for Academic Excellence (2021-2023)",
        "Best Project Award - Senior Project Exhibition",
      ],
    },
    {
      id: 2,
      type: "highschool",
      icon: <FaSchool className="text-blue-400 text-2xl" />,
      title: "High School BangsaphanWitthaya - Science-Mathematics Program",
      institution: "Bangsaphan Witthaya School",
      period: "2016 - 2021",
      description:
        "Completed the Science-Mathematics program with distinction, focusing on mathematics, physics, chemistry, and computer science courses to build a strong foundation for my university studies.",
      highlights: [
        "Advanced Mathematics",
        "Physics & Chemistry",
        "Computer Programming",
        "English Language",
        "Scientific Research Methods",
        "Critical Thinking & Problem Solving",
      ],
      image: BangsaphanWitthaya,
      achievements: [
        "Top 10% of Graduating Class",
        "School Representative for Regional Science Competition",
        "Computer Club President",
        "Perfect Attendance Award",
      ],
    },
  ]

  return (
    <section id="education" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Dynamic canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-20" />

      {/* Animated light beams */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-[500px] bg-gradient-to-b from-yellow-500/0 via-yellow-500/20 to-yellow-500/0"
          animate={{
            height: ["500px", "800px", "500px"],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            transform: "rotate(15deg)",
            filter: "blur(8px)",
          }}
        />

        <motion.div
          className="absolute top-1/4 right-1/3 w-1 h-[600px] bg-gradient-to-b from-blue-500/0 via-blue-500/15 to-blue-500/0"
          animate={{
            height: ["600px", "900px", "600px"],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            delay: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            transform: "rotate(-20deg)",
            filter: "blur(10px)",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <NoiseOverlay opacity={0.03} />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My academic journey that has shaped my knowledge, skills, and passion for technology and innovation.
          </p>
        </motion.div>

        {/* New card-based layout for two education items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Decorative elements */}
              <div
                className={`absolute -z-10 top-0 right-0 w-full h-full rounded-2xl opacity-10 bg-gradient-to-br ${
                  index === 0
                    ? "from-yellow-500/30 to-amber-700/30 rotate-1"
                    : "from-blue-500/30 to-indigo-700/30 -rotate-1"
                }`}
              ></div>
              <div
                className={`absolute -z-10 top-2 left-2 w-full h-full rounded-2xl opacity-10 bg-gradient-to-tr ${
                  index === 0
                    ? "from-amber-700/30 to-yellow-500/30 -rotate-1"
                    : "from-indigo-700/30 to-blue-500/30 rotate-1"
                }`}
              ></div>

              {/* Main card */}
              <motion.div
                className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl h-full"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              >
                {/* Header with image */}
                <div className="relative mb-6 overflow-hidden rounded-lg h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.institution}
                    className="w-full h-full object-cover"
                    width={600}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        index === 0 ? "bg-yellow-500/80 text-gray-900" : "bg-blue-500/80 text-white"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Institution info */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-4 rounded-full ${index === 0 ? "bg-yellow-500/20" : "bg-blue-500/20"} flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className={index === 0 ? "text-yellow-400" : "text-blue-400"}>{item.institution}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{item.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Subjects:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {item.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className={`px-3 py-2 rounded-lg ${
                          index === 0 ? "bg-yellow-500/10" : "bg-blue-500/10"
                        } flex items-center`}
                      >
                        <span className={`mr-2 text-xs ${index === 0 ? "text-yellow-400" : "text-blue-400"}`}>•</span>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-400 italic">
            Education is not the learning of facts, but the training of the mind to think.
          </p>
          <p className="text-gray-500 mt-2">- Albert Einstein</p>
        </motion.div>
      </div>
    </section>
  )
}
