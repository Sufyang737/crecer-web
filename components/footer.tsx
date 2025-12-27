import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  servicios: [
    { name: "Auditorías y Preparación para Certificaciones", href: "#servicios" },
    { name: "Acompañamiento Técnico Especializado", href: "#servicios" },
    { name: "Sistemas de Inocuidad y Buenas Prácticas", href: "#servicios" },
    { name: "Gestión Regulatoria y Registros", href: "#servicios" },
  ],
  empresa: [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ],
  contacto: [
    { name: "Rosario, Argentina", href: "#contacto" },
    { name: "+54 9 341 355-1704", href: "tel:+5493413551704" },
    { name: "contacto@crecerconsultora.com.ar", href: "mailto:contacto@crecerconsultora.com.ar" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#D9F3FF]/30 border-t border-[#D9F3FF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-crecer-transparent.png"
                alt="Crecer Consultora"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-[#5A6C78] leading-relaxed">
              La calidad e inocuidad alimentaria es nuestra prioridad.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-[#0A2A43] mb-4 font-[family-name:var(--font-montserrat)]">
              Servicios
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[#5A6C78] hover:text-[#0A2A43] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-[#0A2A43] mb-4 font-[family-name:var(--font-montserrat)]">
                  Empresa
                </h3>
                <ul className="space-y-3">
                  {footerLinks.empresa.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-[#5A6C78] hover:text-[#0A2A43] transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#0A2A43] mb-4 font-[family-name:var(--font-montserrat)]">
                  Contacto
                </h3>
                <ul className="space-y-3">
                  {footerLinks.contacto.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-[#5A6C78] hover:text-[#0A2A43] transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#D9F3FF] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#5A6C78]">© 2025 Crecer Consultora. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-[#5A6C78] hover:text-[#0A2A43] transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-[#5A6C78] hover:text-[#0A2A43] transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
