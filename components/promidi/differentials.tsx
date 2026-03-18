"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Layers, TrendingUp, Zap } from "lucide-react"

const differentials = [
  {
    icon: Layers,
    title: "Execução de Ponta a Ponta",
    description: "Do briefing à entrega final, cuidamos de cada etapa do projeto com excelência e atenção aos detalhes."
  },
  {
    icon: TrendingUp,
    title: "Foco em Conversão",
    description: "Cada ação é pensada para gerar resultados mensuráveis e impacto real nos objetivos do seu negócio."
  },
  {
    icon: Zap,
    title: "Agilidade e Adaptação",
    description: "Nossa estrutura permite respostas rápidas às mudanças do mercado e às necessidades específicas de cada cliente."
  }
]

export function PromidiDifferentials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="diferenciais" className="py-24 bg-[#102b6e] relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f8921f] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#f8921f] font-semibold text-sm uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            Por que escolher a Promidi?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Nossa metodologia e compromisso com resultados nos tornam o parceiro 
            ideal para suas estratégias de live marketing.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#f8921f] flex items-center justify-center mb-6">
                <item.icon size={32} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-white mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Eventos Realizados" },
            { value: "50+", label: "Marcas Atendidas" },
            { value: "98%", label: "Satisfação" },
            { value: "10+", label: "Anos de Experiência" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-[#f8921f]">
                {stat.value}
              </p>
              <p className="text-white/60 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
