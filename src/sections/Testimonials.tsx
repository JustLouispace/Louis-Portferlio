"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png"
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png"
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png"
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png"
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png"
import grainImage from "@/assets/images/grain.jpg"

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Louis was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Louis was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Louis's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Louis is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Louis's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
]

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToTestimonial = (index: number) => {
    setActiveIndex(index)
    setAutoplay(false)
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <section
      id="testimonials"
      className="py-32 md:py-48 bg-gradient-to-b from-gray-850 to-gray-900 relative z-0 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>

      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here `&apos;`s what people are saying about working with me. I pride myself on delivering exceptional results and
            building lasting relationships.
          </p>
        </motion.div>

        <div className="relative">
          {/* Large quote icon */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-gray-700/20 z-0">
            <FaQuoteRight size={120} />
          </div>

          {/* Testimonial carousel */}
          <div className="relative z-10 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-xl max-w-4xl mx-auto">
            <div className="relative overflow-hidden min-h-[300px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col items-center text-center"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : activeIndex > index ? -100 : 100,
                    pointerEvents: activeIndex === index ? "auto" : "none",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-yellow-400/80 mb-6"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <img
                      src={testimonial.avatar.src || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.blockquote
                    className="text-lg md:text-xl text-gray-200 italic mb-6 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {testimonial.text}
                  </motion.blockquote>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                    <p className="text-yellow-400">{testimonial.position}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-700/50 hover:bg-yellow-500/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft size={24} />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeIndex === index ? "bg-yellow-400 w-6" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-700/50 hover:bg-yellow-500/80 transition-colors"
                aria-label="Next testimonial"
              >
                <FaChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
