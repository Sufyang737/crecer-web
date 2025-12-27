"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Linkedin, Mail, ArrowUpRight } from "lucide-react"

const team = [
  {
    name: "Lorem Ipsum",
    role: "Dolor Sit Amet",
    bio: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/professional-man-suit-headshot-business.jpg",
  },
  {
    name: "Amet Consectetur",
    role: "Adipiscing Elit",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    image: "/professional-woman-headshot-business.png",
  },
  {
    name: "Sed Tempor",
    role: "Incididunt Labore",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    image: "/professional-man-business-headshot.jpg",
  },
  {
    name: "Dolor Magna",
    role: "Aliqua Veniam",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    image: "/professional-woman-portrait.png",
  },
]

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-[#D9F3FF]/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[#5A6C78] mb-4">Lorem ipsum</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0A2A43] text-balance mb-6 font-[family-name:var(--font-montserrat)]">
            Dolor sit amet consectetur
          </h2>
          <p className="text-[#5A6C78] text-lg">
            Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white border border-[#D9F3FF]">
                <div className="aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#0A2A43]/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <motion.p
                        className="text-white text-sm leading-relaxed mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : 10,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {member.bio}
                      </motion.p>
                      <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : 10,
                        }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Linkedin className="w-4 h-4 text-white" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Mail className="w-4 h-4 text-white" />
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-[#0A2A43] font-[family-name:var(--font-montserrat)]">
                        {member.name}
                      </h3>
                      <p className="text-sm text-[#5A6C78]">{member.role}</p>
                    </div>
                    <motion.div animate={{ rotate: hoveredIndex === index ? 45 : 0 }} transition={{ duration: 0.3 }}>
                      <ArrowUpRight className="w-5 h-5 text-[#5A6C78]" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
