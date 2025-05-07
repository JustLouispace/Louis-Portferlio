"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Louis1images from "@/assets/images/Louis1-images.jpg"
import grainImage from "@/assets/images/grain.jpg"
import StarIcon from "@/assets/icons/star.svg"
import { HeroOrbit } from "@/components/HeroOrbit"
import { ScrollButtons } from "@/components/ScrollBtn"

// Memoize the star orbits to prevent re-renders
const StarBackground = () => {
  return useMemo(
    () => (
      <>
        {/* Pulsing rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[620, 820, 1020, 1220].map((size, i) => (
            <div
              key={i}
              className={`absolute rounded-full border border-white/10 animate-pulse`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Animated star orbits */}
        {/* Large outer stars */}
        <HeroOrbit size={1200} rotation={-45} duration={120} pulse>
          <StarIcon className="size-28 text-yellow-300/80 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={1300} rotation={25} duration={150} reverse>
          <StarIcon className="size-20 text-yellow-300/60" />
        </HeroOrbit>

        {/* Medium stars */}
        <HeroOrbit size={800} rotation={-15} duration={90} twinkle>
          <StarIcon className="size-16 text-yellow-300/70" />
        </HeroOrbit>
        <HeroOrbit size={900} rotation={45} duration={110} reverse twinkle>
          <StarIcon className="size-12 text-yellow-300/50" />
        </HeroOrbit>
        <HeroOrbit size={1000} rotation={-25} duration={130}>
          <StarIcon className="size-14 text-yellow-300/40" />
        </HeroOrbit>
        <HeroOrbit size={1000} rotation={-50} duration={45}>
          <StarIcon className="size-14 text-yellow-300/40" />
        </HeroOrbit>

        {/* Small stars */}
        <HeroOrbit size={400} rotation={15} duration={80} reverse twinkle>
          <StarIcon className="size-8 text-yellow-300/30" />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={-35} duration={100} twinkle>
          <StarIcon className="size-10 text-yellow-300/40" />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={55} duration={70} reverse>
          <StarIcon className="size-6 text-yellow-300/20" />
        </HeroOrbit>

        {/* Additional small twinkling stars */}
        {Array.from({ length: 12 }).map((_, i) => (
          <HeroOrbit
            key={`small-${i}`}
            size={300 + Math.random() * 1000}
            rotation={Math.random() * 360}
            duration={80 + Math.random() * 100}
            reverse={Math.random() > 0.5}
            twinkle
          >
            <StarIcon
              className={`size-${Math.floor(4 + Math.random() * 6)} text-yellow-300/${Math.floor(10 + Math.random() * 30)}`}
            />
          </HeroOrbit>
        ))}
      </>
    ),
    [],
  )
}

export const HeroSection = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const texts = ["Hi, my name is Louis", "I'm a Full Stack Developer", "Welcome to my portfolio"]

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % texts.length
      const fullText = texts[current]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, texts])

  return (
    <section
      id="home"
      className="py-32 md:py-48 lg:py-60 bg-gradient-to-b from-yellow-950 to-gray-950 relative z-0 overflow-x-clip"
    >
      {/* Grain background */}
      <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>

      {/* Star background - now memoized */}
      <StarBackground />

      {/* Content */}
      <div className="container z-10 relative">
        <div className="flex flex-col items-center">
          <motion.div
            className="w-36 h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={Louis1images || "/placeholder.svg"}
              alt="Person peeking from behind laptop"
              layout="fill"
              objectFit="cover"
              className="rounded-full size-10 border-4 border-white/90 shadow-[0_0_30px_rgba(72,187,255,0.6)] animate-float"
            />
          </motion.div>
          <motion.div
            className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg mt-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-green-500 size-2.5 rounded-full animate-pulse-fast"></div>
            <div className="text-sm font-medium">Available for New Projects</div>
          </motion.div>
        </div>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-6 tracking-wide h-20 md:h-28 flex items-center justify-center">
            <span>{text}</span>
            <span className="ml-1.5 h-8 md:h-10 w-1 bg-yellow-300 animate-pulse-fast"></span>
          </h1>
          <p className="mt-6 text-center text-white/80 md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed">
            I&apos;m a passionate full-stack developer specializing in creating responsive, user-friendly web applications.
            With expertise in React, Node.js, and modern frameworks, I bring ideas to life through clean, efficient
            code.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <ScrollButtons />
        </motion.div>
      </div>
    </section>
  )
}
