"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clapperboard, Megaphone, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Clapperboard,
    title: "PRODUÇÃO",
    description: "Planejamento e execução de ações, campanhas e experiências de marca. Realizamos eventos sociais e corporativos, congressos, feiras, festivais, labels e shows."
  },
  {
    icon: Megaphone,
    title: "PROMOÇÃO",
    description: "Estratégias promocionais para lançamento, positivação e fortalecimento de produtos e serviços. Desenvolvemos ativações, ações de promo, captação de leads e entrega de brindes."
  },
  {
    icon: BarChart3,
    title: "MÍDIA",
    description: "Planejamento e gestão de mídia integrada para potencializar alcance, presença e resultados. Contamos com assessoria de imprensa, videomaker, estrategista digital de conteúdo, formadores de opinião e tráfego pago."
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,107,0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Nossos Serviços
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Soluções completas para sua{" "}
            <span className="text-primary">marca crescer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos um ecossistema integrado de serviços para transformar sua comunicação em resultados.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-sm p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Title */}
                <h3 
                  className="text-xl font-bold mb-4 text-foreground tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
