"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Leaf, Network, Fingerprint, CheckCircle2 } from "lucide-react"

const differentials = [
  {
    icon: Brain,
    title: "Inteligência Híbrida",
    description: "A fusão perfeita entre criatividade artística e visão estratégica baseada em dados."
  },
  {
    icon: Leaf,
    title: "Sustentabilidade Real",
    description: "Transformamos sustentabilidade e responsabilidade social em estratégia de negócio."
  },
  {
    icon: Network,
    title: "Ecossistema Proprietário",
    description: "Acesso direto a um hub exclusivo de especialistas e parceiros de mídia."
  },
  {
    icon: Fingerprint,
    title: "Personalização Radical",
    description: "Desenhamos soluções sob medida para a maturidade da sua marca, fugindo de fórmulas prontas."
  }
]

export function Differentials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Diferenciais
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Por que escolher a{" "}
            <span className="text-primary">NP?</span>
          </h2>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="h-full flex gap-5 p-6 lg:p-8 bg-card border border-border rounded-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                {/* Check Icon */}
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <h3 
                      className="text-lg font-bold text-foreground"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
