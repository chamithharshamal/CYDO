"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, ArrowRight, TrendingUp } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

const clients = [
  "PayLanka", "MediConnect", "ShopCeylon", "SwiftShip", "EduLanka", "TaskFlow",
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 grid-pattern" />

      {/* Ambient glow effects */}
      <div className="absolute -top-40 right-[-20%] h-[600px] w-[600px] rounded-full bg-indigo-600/8 blur-[120px]" />
      <div className="absolute -bottom-40 left-[-10%] h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="visible"
              className="mt-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Engineering
              <br />
              Digital{" "}
              <span className="gradient-text">Excellence</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              We build powerful web applications, mobile apps, and cloud solutions
              that drive growth for startups and enterprises worldwide.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/portfolio" className={buttonVariants({ size: "lg", className: "rounded-full bg-indigo-600 px-8 text-base font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-500/25" })}>
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full border-border/60 px-8 text-base hover:bg-white/5 hover:border-indigo-500/40" })}>
                Start a Project
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate="visible"
              className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
            </motion.div>
          </div>

          {/* Right: Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-600/20 to-violet-600/20 blur-2xl" />
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-indigo-500/10">
                <Image
                  src="/images/hero-dashboard.png"
                  alt="CYDO Dashboard Preview"
                  width={700}
                  height={500}
                  className="w-full object-cover"
                  priority
                />
                {/* Glassmorphism overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-medium text-white/80">Real-time analytics dashboard</span>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-card/80 backdrop-blur-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                    <TrendingUp className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">99.9% Uptime</p>
                    <p className="text-xs text-muted-foreground">Across all projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <ArrowDown className="h-4 w-4 animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  )
}
