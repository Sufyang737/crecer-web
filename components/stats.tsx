"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { number: 8, suffix: "+", label: "Años de experiencia" },
  { number: 200, suffix: "+", label: "Empresas asesoradas" },
  { number: 100, suffix: "%", label: "Cumplimiento normativo" },
  { number: 50, suffix: "+", label: "Capacitaciones dictadas" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="border-b border-[#D9F3FF] bg-[#D9F3FF]/30">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="px-6 py-12 lg:py-20 border-r border-[#D9F3FF] last:border-r-0 md:[&:nth-child(2)]:border-r lg:[&:nth-child(2)]:border-r text-center lg:text-left"
            >
              <p className="text-4xl lg:text-6xl font-bold text-[#0A2A43] font-[family-name:var(--font-montserrat)]">
                <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm text-[#5A6C78]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
