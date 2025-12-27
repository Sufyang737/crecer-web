"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { MotionWrapper, StaggerContainer, StaggerItem } from "./motion-wrapper"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      content: <>Rosario, Argentina</>,
    },
    {
      icon: Phone,
      title: "Teléfonos",
      content: (
        <>
          +54 9 341 355-1704
          <br />
          +54 9 341 345-6699
        </>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: "contacto@crecerconsultora.com.ar",
    },
  ]

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-[#0A2A43] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <MotionWrapper direction="left">
            <p className="text-sm uppercase tracking-widest text-[#6ECFF6] mb-4">Contacto</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance font-[family-name:var(--font-montserrat)]">
              Comenzá a crecer con nosotros
            </h2>
            <p className="text-white/70 leading-relaxed mb-12">
              Contactanos hoy y descubrí cómo podemos ayudar a tu empresa a cumplir con todas las normativas y elevar
              tus estándares de calidad alimentaria.
            </p>

            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
              {contactInfo.map((info, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-4">
                    <info.icon className="h-5 w-5 text-[#6ECFF6] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{info.title}</p>
                      <p className="text-white/70">{info.content}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </MotionWrapper>

          <MotionWrapper direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                    Nombre *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm text-white/70 mb-2">
                  Empresa
                </label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none"
                  placeholder="Contanos cómo podemos ayudarte..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#6ECFF6] hover:bg-[#6ECFF6]/90 text-[#0A2A43] font-semibold"
              >
                Enviar Consulta
              </Button>
            </form>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
