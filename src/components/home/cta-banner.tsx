"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { ArrowRight, Sparkles } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-950/50 backdrop-blur-xl p-8 md:p-16 lg:p-24 shadow-2xl">
            
            {/* Dark theme sophisticated glow effects */}
            <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-indigo-500/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] translate-y-1/2 -translate-x-1/3 rounded-full bg-violet-500/10 blur-[120px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950/80 pointer-events-none" />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} />

            <div className="relative text-center max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Let&apos;s Build Together
              </div>
              
              <h2 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Ready to Start Your
                <br className="hidden sm:block" />
                <span className="gradient-text"> Next Project?</span>
              </h2>
              
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
                Stop compromising on your digital presence. Let&apos;s discuss your vision and engineer an extraordinary solution that drives real business growth.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-indigo-600 px-8 text-base font-semibold text-white transition-all hover:bg-indigo-700 hover:ring-4 hover:ring-indigo-500/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:animate-shimmer" />
                </Link>
                
                <Link
                  href="/portfolio"
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full border-2 border-border/50 bg-transparent px-8 text-base font-medium text-foreground transition-all hover:bg-white/5 hover:border-white/20"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
