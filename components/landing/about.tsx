"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Target, TrendingUp } from "lucide-react"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="quem-somos" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Quem Somos
            </span>
            
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Muito mais que uma agência.{" "}
              <span className="text-primary">Um ecossistema de especialistas.</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Mais do que prestadores de serviço, atuamos como parceiros de negócio. Entendemos seus desafios para transformar objetivos em ações que geram impacto real, visibilidade e valor de marca.
              </p>
              <p>
                Acreditamos que o futuro dos negócios exige responsabilidade. Nossa meta é transformar sua comunicação em um ativo valioso de reputação e crescimento sustentável, construindo verdadeiros legados.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-3xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>50+</span>
                </div>
                <p className="text-sm text-muted-foreground">Marcas atendidas</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-3xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>3</span>
                </div>
                <p className="text-sm text-muted-foreground">Bases no Brasil</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-3xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>360°</span>
                </div>
                <p className="text-sm text-muted-foreground">Soluções integradas</p>
              </div>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm bg-gradient-to-br from-secondary via-secondary/80 to-secondary/50 relative overflow-hidden border border-border">
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-primary/50" />
                </div>
                <Image
                  src="/np-agencia/teampic.jpg"
                  alt="Sobre Nós"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover opacity-50"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-primary/20 rounded-sm" />
              <div className="absolute bottom-4 left-4 w-32 h-32 border border-primary/20 rounded-sm" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-sm shadow-2xl">
              <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>10+</p>
              <p className="text-sm opacity-90">Anos de mercado</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
