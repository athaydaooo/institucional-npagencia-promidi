import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { Montserrat, Inter, Poppins, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers()
  const currentHost = (requestHeaders.get('x-current-host') || requestHeaders.get('host') || '').split(':')[0]

  const isPromidiHost = currentHost.includes('promidi.com.br');

  const isNpAgenciaHost = currentHost.includes('npagencia.info');

  const isPromidiPath = (requestHeaders.get('x-current-path') || '').startsWith('/promidi');

  const hasHost = isPromidiHost || isNpAgenciaHost;

  const faviconPath = hasHost ? 
    (isPromidiHost ? '/promidi/logo.png' : '/np-agencia/logo.png') :
    (isPromidiPath ? '/promidi/logo.png' : '/np-agencia/logo.png');

  return {
    title: 'NP Agência | Estratégia, Criatividade e Conexão',
    description: 'Somos uma agência 360º especializada em conectar marcas e pessoas através de inteligência estratégica e experiências memoráveis.',
    generator: 'v0.app',
    icons: {
      icon: faviconPath,
      shortcut: faviconPath,
      apple: faviconPath,
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${montserrat.variable} ${inter.variable} ${poppins.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
