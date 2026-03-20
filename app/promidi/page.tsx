import type { Metadata } from "next"
import { PromidiHeader } from "@/components/promidi/header"
import { PromidiHero } from "@/components/promidi/hero"
import { PromidiAbout } from "@/components/promidi/about"
import { PromidiServices } from "@/components/promidi/services"
import { PromidiDifferentials } from "@/components/promidi/differentials"
import { PromidiFooter } from "@/components/promidi/footer"

export const metadata: Metadata = {
  title: "Promidi | Experiências que Movem Marcas e Pessoas",
  description: "Somos uma agência criativa focada em Live Marketing, eventos e ativações que transformam o relacionamento do público com a sua marca.",
}

export default function PromidiPage() {
  return (
    <div className="theme-promidi min-h-screen bg-white text-[#1F2937]">
      <PromidiHeader />
      <main >
        <PromidiHero />
        <PromidiAbout />
        <PromidiServices />
        <PromidiDifferentials />
      </main>
      <PromidiFooter />
    </div>
  )
}
