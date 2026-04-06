"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import Image from "next/image"

export function WeBelieve() {
  return (
    <section className="relative py-28 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 mb-6">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-sm font-medium tracking-wide text-purple-300">
                  Our Philosophy
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl text-white">
                The future belongs to businesses that embrace <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">technology.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
                We exist to make that journey simple, powerful, and beautiful. By combining engineering excellence with high-end design, we build intelligent systems that scale and redefine industry standards.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10">
                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-200">Engineering Excellence</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10">
                    <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-200">High-end Design</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="order-1 lg:order-2">
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-square w-full max-w-lg mx-auto md:max-w-none md:aspect-[4/3] lg:aspect-square group rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5">
                  <Image
                    src="/images/philosophy_tech.png"
                    alt="Our Philosophy - Future Technology"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Glass overlay effect */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
