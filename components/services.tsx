"use client"

import { ArrowUpRight, FileCheck, ClipboardCheck, Shield, Headphones } from "lucide-react"
import { MotionWrapper, StaggerContainer, StaggerItem } from "./motion-wrapper"

const serviceCategories = [
  {
    number: "01",
    title: "Gestión Regulatoria y Registros",
    description:
      "Servicios orientados a cumplir con la normativa alimentaria vigente, agilizando trámites y habilitaciones.",
    items: [
      "Gestión de Habilitaciones Municipales",
      "Gestión de GIP (Gestión de Identificación del Producto)",
      "Gestión de RNE (Registro Nacional de Establecimientos)",
      "Gestión de RNPA (Registro Nacional de Productos Alimenticios)",
      "Cálculo de Tabla Nutricional Teórica",
    ],
    icon: FileCheck,
    image: "/higienico-sanitario.jpeg",
  },
  {
    number: "02",
    title: "Sistemas de Inocuidad y Buenas Prácticas",
    description: "Enfocado en asegurar procesos seguros y estandarizados dentro del establecimiento.",
    items: [
      "Elaboración e Implementación del Manual de BPM",
      "Elaboración e implementación de Plan HACCP (Análisis de Peligros y Puntos Críticos de Control)",
      "PCQI Preventive Controls Qualified Individual (Individuo Calificado en Controles Preventivos)",
      "Diseño higiénico-sanitario",
      "Layout",
      "Gestión de proveedores",
      "Capacitaciones: BPM, Legislación General, Libre de Gluten",
      "Capacitaciones: Alérgenos, Lavado de manos",
      "Capacitaciones a medida",
      "Auditorías bromatológicas internas",
    ],
    icon: ClipboardCheck,
    image: "/auditoria.jpeg",
  },
  {
    number: "03",
    title: "Auditorías y Preparación para Certificaciones",
    description: "Servicios para garantizar que la empresa esté lista para inspecciones y auditorías externas.",
    items: ["Preparación para auditorías externas", "Acompañamiento durante auditorías externas"],
    icon: Shield,
    image: "/images/whatsapp-20image-202025-12-19-20at-2017.jpeg",
  },
  {
    number: "04",
    title: "Acompañamiento Técnico Especializado",
    description: "Un servicio más integral, pensado para empresas que necesitan soporte continuo.",
    items: ["Asesoramiento Técnico", "Dirección Técnica"],
    icon: Headphones,
    image: "/images/whatsapp-20image-202025-12-26-20at-2017.jpeg",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-gradient-to-b from-white to-[#D9F3FF]/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionWrapper className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-[#5A6C78] mb-4">Nuestros Servicios</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2A43] text-balance font-[family-name:var(--font-montserrat)]">
            Soluciones Integrales para tu Empresa Alimentaria
          </h2>
        </MotionWrapper>

        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {serviceCategories.map((category) => {
            const Icon = category.icon
            return (
              <StaggerItem key={category.number}>
                <div className="group relative bg-white border border-[#D9F3FF] rounded-2xl overflow-hidden hover:border-[#6ECFF6] hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A43]/60 to-transparent" />
                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#6ECFF6] flex items-center justify-center">
                        <Icon className="h-6 w-6 text-[#0A2A43]" />
                      </div>
                      <span className="text-white/80 font-mono text-sm">{category.number}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-[#0A2A43] text-balance font-[family-name:var(--font-montserrat)]">
                        {category.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-[#5A6C78] group-hover:text-[#6ECFF6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                    </div>

                    <p className="text-sm text-[#5A6C78] leading-relaxed mb-6">{category.description}</p>

                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#0A2A43]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#6ECFF6] mt-1.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
