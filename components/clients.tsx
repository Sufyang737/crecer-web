"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Lorem Ipsum",
    role: "Dolor Sit Amet",
    company: "Consectetur Ltd",
    rating: 5,
    image: "/professional-woman-portrait-business.png",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Amet Dolor",
    role: "Adipiscing",
    company: "Elit Corp",
    rating: 5,
    image: "/professional-man-portrait-business.png",
  },
  {
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Sed Tempor",
    role: "Incididunt",
    company: "Labore Inc",
    rating: 5,
    image: "/testimonial-person-3.png",
  },
]

export function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="clientes" className="py-24 lg:py-32 bg-[#D9F3FF]/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[#5A6C78] mb-4">Testimonios</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0A2A43] text-balance font-[family-name:var(--font-montserrat)]">
            Lorem ipsum dolor sit
          </h2>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#D9F3FF] relative">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-[#6ECFF6]/20" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#6ECFF6] text-[#6ECFF6]" />
                      ))}
                    </div>
                    <p className="text-xl lg:text-2xl text-[#0A2A43] leading-relaxed mb-8">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-[#0A2A43]">{testimonial.author}</p>
                        <p className="text-sm text-[#5A6C78]">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-[#D9F3FF] flex items-center justify-center hover:bg-[#D9F3FF] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#0A2A43]" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#6ECFF6]" : "bg-[#D9F3FF]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-[#D9F3FF] flex items-center justify-center hover:bg-[#D9F3FF] transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#0A2A43]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
