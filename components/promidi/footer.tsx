"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function PromidiFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref}>
      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-[#f8921f] to-[#e07f10] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Pronto para colocar sua marca em movimento?
            </h2>

            <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
              Vamos criar experiências que conectam, engajam e geram resultados 
              reais para o seu negócio.
            </p>

            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-[#f8921f] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-xl"
            >
              <MessageCircle size={20} />
              Falar com o Comercial
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="bg-[#102b6e] py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/promidi" className="inline-flex items-center h-9 md:h-10">
              <Image
                src="/promidi/logo.png"
                alt="Promidi"
                width={480}
                height={132}
                className="h-full w-auto"
              />
            </Link>

            {/* Copyright */}
            <p className="text-white/60 text-sm">
              &copy; Promidi 2026. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
