"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CTAFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/90 to-primary/80" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary-foreground/10 rotate-45" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-primary-foreground text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Faça parte do nosso portfólio.
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Estamos prontos para construir uma parceria estratégica com a sua marca.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-background hover:bg-background/90 text-primary font-bold text-lg px-10 py-7 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <a
                  href="https://wa.me/5561995593912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Fale com nosso time!
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <Image
                src="/np-agencia/logo.png"
                alt="NP Agência"
                width={124}
                height={32}
                className="h-7 w-auto"
              />
            </a>
            
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2026 NP Agência. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
