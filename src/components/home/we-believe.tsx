"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"

export function WeBelieve() {
  return (
    <section className="py-28 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <ScrollReveal>
          <span className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            Our Philosophy
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            The future belongs to businesses that embrace technology. We exist to make that journey{" "}
            <span className="gradient-text">simple, powerful, and beautiful.</span>
          </h2>
        </ScrollReveal>
      </div>
    </section>
  )
}
