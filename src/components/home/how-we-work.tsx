"use client"

import { SectionHeading } from "@/components/shared/section-heading"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Search, Palette, Zap, Rocket, TrendingUp } from "lucide-react"

const stages = [
  { number: "01", icon: Search, title: "Discover", description: "We dive deep into your business goals, users, and market to define a clear product strategy and roadmap." },
  { number: "02", icon: Palette, title: "Design", description: "We craft intuitive interfaces and seamless user experiences, backed by rapid prototyping and testing." },
  { number: "03", icon: Zap, title: "Develop", description: "We build with modern frameworks, clean code, and best practices to ensure your product is fast and scalable." },
  { number: "04", icon: Rocket, title: "Launch", description: "We handle the deployment process, conduct rigorous QA testing, and ensure everything works flawlessly." },
  { number: "05", icon: TrendingUp, title: "Scale", description: "Post-launch, we monitor analytics, optimize performance, and iterate on features to help you grow continuously." },
]

export function HowWeWork() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          
          {/* Left: Sticky Content */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 z-10">
              <SectionHeading
                badge="Our Process"
                title="How We Work"
                subtitle="A proven methodology that delivers exceptional results from concept to scale."
                align="left"
              />
              
              <div className="mt-8 hidden lg:block relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/10 to-violet-500/10 blur-xl" />
                <div className="h-[280px] w-full rounded-2xl border border-white/5 bg-card/40 backdrop-blur-md flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
                  <div className="relative flex flex-col items-center gap-4 text-center">
                    <Rocket className="h-16 w-16 text-indigo-400" />
                    <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Iterative Process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scrolling Content */}
          <div className="lg:col-span-7">
            <div className="relative border-l-2 border-border/50 pl-8 md:pl-12 ml-4 md:ml-6 space-y-16 md:space-y-24">
              {stages.map((stage, i) => (
                <ScrollReveal key={stage.number} delay={0.1}>
                  <div className="relative">
                    {/* Timeline Node */}
                    <div className="absolute -left-[51px] md:-left-[67px] top-0 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-indigo-500/10 text-indigo-400 shadow-sm transition-transform duration-500 hover:scale-110 hover:bg-indigo-500 hover:text-white">
                      <stage.icon className="h-5 w-5" />
                    </div>

                    <div className="group rounded-2xl border border-border/50 bg-card/30 p-8 pt-10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card/80 hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-500/30">
                      <span className="absolute right-6 top-6 text-7xl font-black text-muted-foreground/5 transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-indigo-500/10">
                        {stage.number}
                      </span>
                      
                      <h3 className="text-2xl font-bold tracking-tight text-foreground relative z-10">{stage.title}</h3>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground relative z-10 max-w-[85%]">
                         {stage.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
