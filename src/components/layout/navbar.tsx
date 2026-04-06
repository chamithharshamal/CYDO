"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={cn(
            "pointer-events-auto relative flex items-center justify-between rounded-full border border-white/10 bg-zinc-950/80 px-4 py-2.5 backdrop-blur-2xl transition-all duration-500 md:px-8 md:py-3",
            isScrolled ? "w-full max-w-4xl shadow-2xl shadow-indigo-500/10" : "w-full max-w-7xl border-white/5 bg-zinc-950/40 shadow-none"
          )}
        >
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <Image
              src="/images/branding/logo.jpg"
              alt="CYDO Logo"
              width={100}
              height={32}
              className="h-7 w-auto object-contain transition-all duration-300 md:h-8"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(null)}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  pathname === link.href ? "text-white" : "text-zinc-400 hover:text-white"
                )}
              >
                {hoveredPath === link.href && (
                  <motion.span
                    layoutId="navbar-hover"
                    className="absolute inset-0 z-0 rounded-full bg-white/10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                {pathname === link.href && (
                  <motion.span 
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-500"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link 
              href="/contact" 
              className={cn(
                "hidden items-center gap-2 rounded-full bg-indigo-600 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95 md:flex",
                isScrolled ? "shadow-lg shadow-indigo-500/20" : ""
              )}
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex flex-col bg-zinc-950 p-6 pt-32"
          >
            <div className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-4xl font-black tracking-tight transition-colors",
                      pathname === link.href ? "text-indigo-400" : "text-white/60 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-between rounded-2xl bg-indigo-600 p-6 text-xl font-bold text-white"
                >
                  Start Your Project
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </motion.div>
            </div>

            {/* Decor */}
            <div className="absolute bottom-12 left-6 right-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">CYDO ENGINEERING STUDIO</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
