"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Megaphone, BarChart3, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Calendar,
    title: "Live Marketing & Eventos",
    description: "Criação e execução de feiras, congressos, convenções, shows e eventos corporativos que geram experiências únicas e memoráveis.",
    features: ["Feiras e Congressos", "Eventos Corporativos", "Shows e Lançamentos"]
  },
  {
    icon: Megaphone,
    title: "Brand Activation",
    description: "Ações promocionais, lançamentos de produtos e estratégias de captação de leads que colocam sua marca em contato direto com o público.",
    features: ["Ações Promocionais", "Lançamentos", "Captação de Leads"]
  },
  {
    icon: BarChart3,
    title: "Mídia & Amplificação",
    description: "Estratégias de conteúdo e mídia integrada para amplificar o alcance das suas ações e alcançar o público certo no momento certo.",
    features: ["Mídia Digital", "Conteúdo Estratégico", "Amplificação Social"]
  }
]

export function PromidiServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicos" className="py-24 bg-[#F8F9FA]" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#f8921f] font-semibold text-sm uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#102b6e] mt-4 mb-6">
            O que fazemos de melhor
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Soluções completas de live marketing e eventos para transformar a 
            forma como sua marca se conecta com o público.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f8921f]/10 to-[#f8921f]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-[#f8921f]" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-[#102b6e] mb-4 flex items-center gap-2">
                {service.title}
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#f8921f]" />
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#1F2937]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f8921f]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
