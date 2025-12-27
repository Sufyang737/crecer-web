"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react"

const articles = [
  {
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
    category: "Lorem",
    date: "15 Dic 2024",
    readTime: "5 min",
    image: "/business-article-professional-news.jpg",
  },
  {
    title: "Ut enim ad minim veniam quis nostrud exercitation",
    excerpt: "Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
    category: "Ipsum",
    date: "10 Dic 2024",
    readTime: "7 min",
    image: "/technology-innovation-modern.jpg",
  },
  {
    title: "Duis aute irure dolor in reprehenderit voluptate",
    excerpt: "Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.",
    category: "Dolor",
    date: "5 Dic 2024",
    readTime: "6 min",
    image: "/trends-future-professional.jpg",
  },
]

export function BlogPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-sm uppercase tracking-widest text-[#5A6C78] mb-4">Blog & Lorem</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0A2A43] text-balance font-[family-name:var(--font-montserrat)]">
              Ipsum dolor sit amet
            </h2>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group inline-flex items-center gap-2 text-[#0A2A43] font-medium hover:text-[#6ECFF6] transition-colors"
          >
            Lorem ipsum dolor
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-5">
                <div className="aspect-[3/2] overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <motion.div
                  className="absolute top-4 left-4"
                  animate={{ y: hoveredIndex === index ? 0 : -5, opacity: hoveredIndex === index ? 1 : 0.8 }}
                >
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#0A2A43]">
                    {article.category}
                  </span>
                </motion.div>
                <motion.div
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredIndex === index ? 1 : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-[#0A2A43]" />
                </motion.div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs text-[#5A6C78]">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#0A2A43] group-hover:text-[#6ECFF6] transition-colors line-clamp-2 font-[family-name:var(--font-montserrat)]">
                  {article.title}
                </h3>
                <p className="text-sm text-[#5A6C78] line-clamp-2">{article.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
