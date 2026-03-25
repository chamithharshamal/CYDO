"use client"

import { SectionHeading } from "@/components/shared/section-heading"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { MessageSquare, FileText, Wrench, Rocket } from "lucide-react"

const steps = [
  { number: "01", icon: MessageSquare, title: "Share Your Idea", description: "Tell us about your project, goals, and timeline. We listen actively and align." },
  { number: "02", icon: FileText, title: "Get a Proposal", description: "Receive a detailed plan containing scope, technology stack, and pricing." },
  { number: "03", icon: Wrench, title: "We Build", description: "Our team designs and develops your solution in iterative sprints." },
  { number: "04", icon: Rocket, title: "Launch & Grow", description: "Go live with absolute confidence. We provide ongoing support and maintenance." },
]

export function HowToStart() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-zinc-950/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get Started"
          title="Your Journey Begins Here"
          subtitle="From idea to launch in 4 transparent steps. No hidden fees, no surprises."
        />

        <div className="mt-20 md:mt-24 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-10 left-[10%] w-[80%] h-[2px] bg-border/50 hidden md:block" />
          {/* Glowing Progress Line */}
          <div className="absolute top-10 left-[10%] w-[15%] h-[2px] bg-gradient-to-r from-indigo-500 to-violet-500 hidden md:block animate-pulse" />

          {/* Connecting Line (Mobile) */}
          <div className="absolute top-10 bottom-10 left-[2.5rem] w-[2px] bg-border/50 md:hidden" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 lg:gap-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="relative z-10 flex flex-row md:flex-col gap-6 md:gap-8 group">
                  {/* Step Node */}
                  <div className="relative shrink-0 md:mx-auto">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/5 bg-card/60 backdrop-blur-md shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 group-hover:shadow-indigo-500/20">
                       <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white shadow-lg ring-4 ring-background transition-transform duration-500 group-hover:scale-110">
                         {step.number}
                       </span>
                       <step.icon className="h-8 w-8 text-indigo-400 transition-colors duration-500 group-hover:text-indigo-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:text-center pt-2 md:pt-0">
                    <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-indigo-400">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
