"use client"

import Link from "next/link"
import { SectionHeading } from "@/components/shared/section-heading"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { services } from "@/data/services"

export function ServicesGrid() {
  const getBentoSpan = (index: number) => {
    switch (index) {
      case 0: return "md:col-span-2 md:row-span-1" // Wide
      case 1: return "md:col-span-1 md:row-span-1" // Square
      case 2: return "md:col-span-1 md:row-span-1" // Square
      case 3: return "md:col-span-2 md:row-span-1" // Wide
      case 4: return "md:col-span-2 md:row-span-1" // Wide
      case 5: return "md:col-span-1 md:row-span-1" // Square
      default: return "md:col-span-1"
    }
  }

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="What We Do"
          subtitle="End-to-end technology solutions tailored to your business goals"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(280px,auto)] pb-10">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1} className={getBentoSpan(i)}>
              <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div className="absolute -right-4 -top-4 text-8xl font-black text-muted-foreground/5 transition-transform duration-500 group-hover:scale-110 group-hover:text-indigo-500/5">
                    {service.number}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 backdrop-blur-md transition-colors group-hover:bg-indigo-500 group-hover:text-white">
                      <service.icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 flex items-end justify-between">
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-secondary/50 px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 3 && (
                        <span className="rounded-md bg-secondary/50 px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
                          +{service.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 transition-all hover:bg-indigo-500 hover:text-white"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:ml-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
