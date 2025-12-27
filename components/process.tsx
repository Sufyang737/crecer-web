"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FileSearch, ClipboardCheck, Cog, Award } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Lorem",
    description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    icon: FileSearch,
    details: ["Ipsum dolor", "Sit amet", "Consectetur"],
  },
  {
    number: "02",
    title: "Ipsum",
    description: "Ut enim ad minim veniam quis nostrud exercitation ullamco.",
    icon: ClipboardCheck,
    details: ["Adipiscing", "Elit tempor", "Incididunt"],
  },
  {
    number: "03",
    title: "Dolor",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    icon: Cog,
    details: ["Labore et", "Dolore magna", "Aliqua enim"],
  },
  {
    number: "04",
    title: "Sit Amet",
    description: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    icon: Award,
    details: ["Veniam quis", "Nostrud", "Exercitation"],
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-[#0A2A43] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-[#6ECFF6] mb-4">Lorem ipsum</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white text-balance font-[family-name:var(--font-montserrat)]">
            Dolor sit amet
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Progress Line */}
          <div className="absolute top-24 left-0 right-0 h-px bg-white/20 hidden lg:block" />
          <motion.div
            className="absolute top-24 left-0 h-px bg-[#6ECFF6] hidden lg:block"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Step Number Circle */}
                  <motion.div
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 relative z-10"
                    animate={{
                      scale: activeStep === index ? 1.1 : 1,
                      backgroundColor: activeStep === index ? "#6ECFF6" : "#FFFFFF",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className={`text-sm font-bold transition-colors duration-300 ${
                        activeStep === index ? "text-[#0A2A43]" : "text-[#0A2A43]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </motion.div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-[#6ECFF6]" />
                      <h3 className="text-xl font-semibold text-white font-[family-name:var(--font-montserrat)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>

                    {/* Expandable Details */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: activeStep === index ? "auto" : 0,
                        opacity: activeStep === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 pt-4 border-t border-white/20">
                        {step.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{
                              x: activeStep === index ? 0 : -10,
                              opacity: activeStep === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-center gap-2 text-sm text-white/60"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6ECFF6]" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
