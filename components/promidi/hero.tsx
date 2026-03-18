"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

export function PromidiHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-[#F8F9FA] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#f8921f]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#102b6e]/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#102b6e 1px, transparent 1px), linear-gradient(90deg, #102b6e 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#102b6e]/10 text-[#102b6e] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Play size={14} className="fill-current" />
              Live Marketing & Eventos
            </motion.div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#102b6e] leading-tight mb-6 text-balance">
              Experiências que movem{" "}
              <span className="text-[#f8921f]">marcas e pessoas.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Somos uma agência criativa focada em Live Marketing, eventos e 
              ativações que transformam o relacionamento do público com a sua marca.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-[#f8921f] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e07f10] transition-all duration-200 shadow-lg shadow-[#f8921f]/30 hover:shadow-xl hover:shadow-[#f8921f]/40"
              >
                Vamos criar juntos
                <ArrowRight size={20} />
              </motion.a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#102b6e] px-8 py-4 rounded-xl font-semibold border-2 border-[#102b6e]/10 hover:border-[#102b6e]/30 transition-all duration-200"
              >
                Ver Serviços
              </a>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="aspect-square max-w-lg mx-auto rounded-3xl bg-gradient-to-br from-[#102b6e] to-[#1a3d8f] overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center p-12">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Play size={40} className="text-[#f8921f]" />
                    </div>
                    <p className="text-white/80 font-medium">Evento ao vivo</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f8921f]/10 flex items-center justify-center">
                    <span className="text-[#f8921f] text-xl">🎯</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#102b6e]">+500</p>
                    <p className="text-xs text-[#6B7280]">Eventos realizados</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#102b6e]/10 flex items-center justify-center">
                    <span className="text-[#102b6e] text-xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#102b6e]">98%</p>
                    <p className="text-xs text-[#6B7280]">Satisfação</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
