"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { AnimatedCounter } from "@/components/shared/animated-counter"
import { stats } from "@/data/stats"

export function Stats() {
  return (
    <section className="bg-gradient-to-br from-purple-950/50 to-pink-950/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-5xl font-bold md:text-6xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
