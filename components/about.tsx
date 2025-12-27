"use client"

import { CheckCircle2 } from "lucide-react"
import { MotionWrapper, StaggerContainer, StaggerItem } from "./motion-wrapper"

const features = [
  "Agilidad en cumplimiento normativo y trámites",
  "Acompañamiento personalizado durante todo el proceso",
  "Experiencia técnica especializada en el sector alimentario",
  "Fortalecimiento de estándares de calidad y equipos",
]

export function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-[#D9F3FF]/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <MotionWrapper direction="left" className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://ecoembesempleo.es/web/app/uploads/2023/12/post-empleo-cultura-empresarial.jpg"
                alt="Equipo Crecer Consultora"
                className="w-full h-full object-cover"
              />
            </div>
            <MotionWrapper
              delay={0.4}
              className="absolute -bottom-6 -right-6 bg-[#6ECFF6] text-[#0A2A43] p-6 rounded-lg hidden md:block"
            >
              <p className="text-4xl font-bold font-[family-name:var(--font-montserrat)]">100%</p>
              <p className="text-sm">Compromiso</p>
            </MotionWrapper>
          </MotionWrapper>

          <div>
            <MotionWrapper direction="right">
              <p className="text-sm uppercase tracking-widest text-[#5A6C78] mb-4">Sobre Nosotros</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2A43] mb-6 text-balance font-[family-name:var(--font-montserrat)]">
                Estás acompañado todo el año
              </h2>
              <p className="text-[#5A6C78] leading-relaxed mb-8">
                En Crecer Consultora entendemos los desafíos del sector alimentario. Nuestro enfoque combina
                conocimiento técnico profundo con un servicio cercano y personalizado. Desde la gestión de
                habilitaciones hasta la implementación de sistemas de calidad, estamos a tu lado en cada paso del
                camino.
              </p>
            </MotionWrapper>

            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <li className="flex items-center gap-3 list-none">
                    <CheckCircle2 className="h-5 w-5 text-[#6ECFF6] flex-shrink-0" />
                    <span className="text-[#0A2A43]">{feature}</span>
                  </li>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
