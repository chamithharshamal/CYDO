import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AnnouncementBar } from "@/components/layout/announcement-bar"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "CYDO — Engineering Digital Excellence",
    template: "%s | CYDO",
  },
  description:
    "We build powerful web applications, mobile apps, and cloud solutions that drive growth for startups and enterprises in Sri Lanka and beyond.",
  openGraph: {
    title: "CYDO — Engineering Digital Excellence",
    description:
      "We build powerful web applications, mobile apps, and cloud solutions that drive growth for startups and enterprises in Sri Lanka and beyond.",
    url: "https://cydo.com",
    siteName: "CYDO",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <AnnouncementBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
