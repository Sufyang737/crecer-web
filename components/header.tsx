"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("Inicio")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl border-b border-[#D9F3FF]/50 shadow-sm ${scrolled ? "py-3" : "py-5"}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#inicio" className="relative z-10 group">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/logo-crecer-transparent.png"
                alt="Crecer Consultora"
                width={280}
                height={80}
                className="h-16 w-auto"
              />
            </motion.div>
          </a>

          {/* Center Navigation - Pill Style */}
          <motion.div
            className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 bg-white border border-[#D9F3FF] shadow-md`}
            layout
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className="relative px-5 py-2.5 text-sm font-medium transition-colors"
              >
                {activeLink === item.name && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-[#6ECFF6] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors ${
                    activeLink === item.name ? "text-[#0A2A43]" : "text-[#5A6C78] hover:text-[#0A2A43]"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#contacto"
              className="group relative overflow-hidden px-6 py-3 rounded-full bg-[#0A2A43] text-white text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contactar
                <motion.span initial={{ x: 0, y: 0 }} whileHover={{ x: 3, y: -3 }} transition={{ duration: 0.2 }}>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-[#6ECFF6]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                exit={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            className="md:hidden relative z-10 p-2 rounded-xl bg-white border border-[#D9F3FF] shadow-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 text-[#0A2A43]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 text-[#0A2A43]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-white/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center">
              <nav className="flex flex-col items-center gap-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      className="group relative block py-3 px-8"
                      onClick={() => {
                        setActiveLink(item.name)
                        setMobileMenuOpen(false)
                      }}
                    >
                      <span className="text-4xl font-light tracking-tight text-[#0A2A43]">{item.name}</span>
                      <motion.div
                        className="absolute bottom-2 left-8 right-8 h-[2px] bg-[#6ECFF6] origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-12"
              >
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6ECFF6] text-[#0A2A43] text-lg font-medium"
                >
                  Contactar
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#6ECFF6]"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
