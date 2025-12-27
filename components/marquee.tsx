"use client"

import { motion } from "framer-motion"

const phrases = [
  "Lorem Ipsum",
  "Dolor Sit",
  "Amet Consectetur",
  "Adipiscing",
  "Elit Sed",
  "Eiusmod Tempor",
  "Incididunt",
  "Labore",
]

export function Marquee() {
  return (
    <section className="py-8 bg-[#0A2A43] overflow-hidden">
      <div className="relative flex">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...phrases, ...phrases, ...phrases, ...phrases].map((phrase, index) => (
            <span key={index} className="text-white text-lg font-medium flex items-center gap-8">
              {phrase}
              <span className="w-2 h-2 rounded-full bg-[#6ECFF6]" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
