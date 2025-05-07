"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

// Animated particles background
export const ParticlesBackground = ({
  color = "rgba(255, 255, 255, 0.3)",
  count = 50,
  speed = 0.5,
  size = 2,
  maxSize = 4,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create particles
    const particles: {
      x: number
      y: number
      radius: number
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (maxSize - size) + size,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = color.replace(")", `, ${particle.opacity})`)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [color, count, speed, size, maxSize])

  return <canvas ref={canvasRef} className={`absolute inset-0 -z-20 ${className}`} />
}

// Animated gradient background
export const GradientBackground = ({ colors = ["#4a00e0", "#8e2de2"], speed = 10, className = "", opacity = 0.15 }) => {
  return (
    <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -inset-[100px] rounded-full blur-3xl"
        animate={{
          background: [
            `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 100%)`,
            `radial-gradient(circle, ${colors[1]} 0%, ${colors[0]} 100%)`,
            `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 100%)`,
          ],
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: speed,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{ opacity }}
      />
    </div>
  )
}

// Grid background
export const GridBackground = ({ className = "", opacity = 0.05, size = 30, color = "rgba(255, 255, 255, 0.3)" }) => {
  return (
    <div
      className={`absolute inset-0 -z-20 ${className}`}
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        opacity,
      }}
    />
  )
}

// Noise texture overlay
export const NoiseOverlay = ({ opacity = 0.03, className = "" }) => {
  return (
    <div
      className={`absolute inset-0 -z-10 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity,
      }}
    />
  )
}

// Floating shapes background
export const FloatingShapes = ({ className = "", count = 15, colors = ["#FFD700", "#FF8C00", "#FF4500"] }) => {
  const shapes = Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: Math.random() > 0.5 ? "circle" : "square",
  }))

  return (
    <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.shape === "circle" ? "rounded-full" : "rounded-md"}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            backgroundColor: shape.color,
            opacity: 0.1,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: shape.duration,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  )
}

// Star field background
export const StarField = ({ className = "", count = 100, twinkleSpeed = 3 }) => {
  const stars = Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 2 + twinkleSpeed,
  }))

  return (
    <div className={`absolute inset-0 -z-20 ${className}`}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
}
