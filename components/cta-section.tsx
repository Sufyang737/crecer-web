"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6ECFF6]/10 via-transparent to-[#D9F3FF]/30" />
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#6ECFF6]/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#6ECFF6]/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-[#6ECFF6] mb-4">Lorem ipsum</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0A2A43] text-balance mb-6 font-[family-name:var(--font-montserrat)]">
              Dolor sit amet consectetur adipiscing?
            </h2>
            <p className="text-lg text-[#5A6C78] mb-8">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 bg-[#0A2A43] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0A2A43]/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Lorem ipsum dolor
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="tel:+34934567890"
                className="inline-flex items-center justify-center gap-2 border border-[#D9F3FF] px-8 py-4 rounded-full font-medium hover:bg-[#D9F3FF] transition-colors text-[#0A2A43]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4" />
                Sit amet
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#D9F3FF] shadow-lg">
              <h3 className="text-xl font-semibold text-[#0A2A43] mb-6 font-[family-name:var(--font-montserrat)]">
                Lorem ipsum
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#D9F3FF]/50 hover:bg-[#D9F3FF] transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-[#6ECFF6]/20 flex items-center justify-center group-hover:bg-[#6ECFF6]/30 transition-colors">
                    <Phone className="w-5 h-5 text-[#0A2A43]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#5A6C78]">Dolor</p>
                    <p className="font-medium text-[#0A2A43]">+34 93 456 78 90</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#D9F3FF]/50 hover:bg-[#D9F3FF] transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-[#6ECFF6]/20 flex items-center justify-center group-hover:bg-[#6ECFF6]/30 transition-colors">
                    <Mail className="w-5 h-5 text-[#0A2A43]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#5A6C78]">Email</p>
                    <p className="font-medium text-[#0A2A43]">info@lorem.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[#D9F3FF]">
                <p className="text-sm text-[#5A6C78] text-center">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
