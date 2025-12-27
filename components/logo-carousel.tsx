"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "Lorem", initial: "LO" },
  { name: "Ipsum", initial: "IP" },
  { name: "Dolor", initial: "DO" },
  { name: "Sit Amet", initial: "SA" },
  { name: "Consectetur", initial: "CO" },
  { name: "Adipiscing", initial: "AD" },
  { name: "Elit Sed", initial: "ES" },
  { name: "Tempor", initial: "TE" },
]

export function LogoCarousel() {
  return (
    <section className="py-16 border-b border-[#D9F3FF] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <p className="text-center text-sm text-[#5A6C78] uppercase tracking-widest">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 rounded-lg bg-[#D9F3FF]/50 flex items-center justify-center group hover:bg-[#D9F3FF] transition-colors"
            >
              <span className="text-2xl font-bold text-[#5A6C78]/50 group-hover:text-[#0A2A43] transition-colors">
                {logo.initial}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
