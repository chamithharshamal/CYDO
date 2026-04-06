"use client"

import Image from "next/image"
import Link from "next/link"
import { SectionHeading } from "@/components/shared/section-heading"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { ArrowRight } from "lucide-react"

const featured = projects.slice(0, 3)

const projectImages: Record<string, string> = {
  "fintech-analytics-dashboard": "/images/portfolio/fintech.png",
  "healthcare-telemedicine-app": "/images/portfolio/healthcare.png",
  "ecommerce-marketplace": "/images/portfolio/ecommerce.png",
}

export function FeaturedWork() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Our Work"
          title="Featured Projects"
          subtitle="Ambitious work for ambitious brands"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
              <Link href={`/portfolio/${project.slug}`}>
                <Card className="group h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5">
                  <div className="relative aspect-video overflow-hidden">
                    {projectImages[project.slug] ? (
                      <Image
                        src={projectImages[project.slug]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-indigo-600/20 to-violet-600/20 flex items-center justify-center">
                        <span className="text-lg font-semibold text-white/60">{project.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                      <span className="flex items-center gap-2 text-sm font-medium text-white">
                        View Case Study <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20">
                      {project.category}
                    </Badge>
                    <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    {project.testimonial && (
                      <p className="mt-4 border-l-2 border-indigo-500/30 pl-3 text-xs italic text-muted-foreground">
                        &ldquo;{project.testimonial.text.substring(0, 80)}...&rdquo;
                        <br />
                        <span className="not-italic font-medium text-foreground/70">— {project.testimonial.author}</span>
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio" className={buttonVariants({ variant: "outline", className: "rounded-full border-border/60 px-8 hover:bg-white/5 hover:border-indigo-500/40" })}>
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
