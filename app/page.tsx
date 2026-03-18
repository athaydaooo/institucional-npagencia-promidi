import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Services } from "@/components/landing/services"
import { Differentials } from "@/components/landing/differentials"
import { Clients } from "@/components/landing/clients"
import { CTAFooter } from "@/components/landing/cta-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Clients />
      <CTAFooter />
    </main>
  )
}
