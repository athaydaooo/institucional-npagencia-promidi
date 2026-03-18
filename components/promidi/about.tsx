"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Users, Zap } from "lucide-react"

export function PromidiAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Target,
      title: "Estratégia",
      description: "Planejamento focado em resultados"
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Conexões memoráveis com o público"
    },
    {
      icon: Zap,
      title: "Execução",
      description: "Entrega impecável de ponta a ponta"
    }
  ]

  return (
    <section id="quem-somos" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#102b6e]/10 flex items-center justify-center">
                    <Users size={40} className="text-[#102b6e]" />
                  </div>
                  <p className="text-[#6B7280]">Equipe em ação</p>
                </div>
              </div>
            </div>

            {/* Accent Shape */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f8921f]/10 rounded-3xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#f8921f] font-semibold text-sm uppercase tracking-wider">
              Quem Somos
            </span>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#102b6e] mt-4 mb-6 text-balance">
              Sua marca no centro da ação.
            </h2>

            <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
              Atuamos de ponta a ponta em campanhas de promoção e eventos corporativos, 
              unindo criatividade, logística impecável e inteligência de dados para 
              entregar experiências que realmente conectam marcas e pessoas.
            </p>

            <p className="text-[#6B7280] leading-relaxed mb-8">
              Nossa equipe multidisciplinar trabalha desde o conceito criativo até a 
              execução final, garantindo que cada detalhe esteja alinhado com os 
              objetivos estratégicos da sua marca.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f8921f]/10 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                    <feature.icon size={24} className="text-[#f8921f]" />
                  </div>
                  <h3 className="font-semibold text-[#102b6e] mb-1">{feature.title}</h3>
                  <p className="text-sm text-[#6B7280]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
