"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        {/* Video Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Agência 360º
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Estratégia, criatividade e{" "}
            <span className="text-primary">conexão.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl lg:mx-0 mx-auto text-pretty"
          >
            Somos uma agência 360º especializada em conectar marcas e pessoas através de inteligência estratégica e experiências memoráveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
            >
              <a
                href="https://wa.me/5561995593912"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Fale com nossos especialistas
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:border-primary/50 text-foreground font-medium text-base px-8 py-6 transition-all duration-300 hover:bg-secondary/50"
              hidden={true}
            >
              <Play className="w-5 h-5 mr-2" />
              Ver showreel
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
