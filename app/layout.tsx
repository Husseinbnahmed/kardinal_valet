import { Playfair_Display } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import type React from "react" // Import React

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "Kardinal - Premium Valet Services",
  description: "Luxury valet solutions for distinguished establishments",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}



import './globals.css'