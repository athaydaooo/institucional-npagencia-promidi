"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Image as ImageIcon } from "lucide-react"

const clients = [
  "Jeep", "FIAT", "CARAS", "Seara", "Aviva", "Hot Park", "Fogo de Chão", "RAM"
]

const teamPhotos = [
  { aspect: "aspect-[4/3]", size: "col-span-2 row-span-1" },
  { aspect: "aspect-square", size: "col-span-1 row-span-1" },
  { aspect: "aspect-[3/4]", size: "col-span-1 row-span-2" },
  { aspect: "aspect-[4/3]", size: "col-span-2 row-span-1" },
  { aspect: "aspect-square", size: "col-span-1 row-span-1" },
  { aspect: "aspect-[4/3]", size: "col-span-1 row-span-1" },
]

export function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="clientes" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Clientes
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Presença Estratégica &{" "}
            <span className="text-primary">Nosso Time em Ação</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Com atuação consolidada no mercado nacional e mais de 50 marcas atendidas, possuímos bases em Brasília, Goiânia e São Paulo, entregando agilidade na ponta e consistência no todo.
          </p>
        </motion.div>

        {/* Infinite Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 overflow-hidden"
        >
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
            
            {/* Marquee Track */}
            <div className="flex animate-marquee">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="flex-shrink-0 mx-8 px-8 py-6 bg-card border border-border rounded-sm flex items-center justify-center min-w-[180px] hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary/50" />
                    <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                      {client}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Photos - Masonry Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 
            className="text-xl font-bold mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Nosso time em ação
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {teamPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`${photo.size} bg-card border border-border rounded-sm overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group`}
              >
                <div className="w-full h-full bg-gradient-to-br from-secondary via-secondary/80 to-secondary/50 flex flex-col items-center justify-center text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors">
                  <ImageIcon className="w-10 h-10 mb-2" />
                  <span className="text-xs">Foto do time</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  )
}
