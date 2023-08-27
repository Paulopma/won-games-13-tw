import Header from '@/components/Header'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'A sua loja de games online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} bg-bg-dark`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
