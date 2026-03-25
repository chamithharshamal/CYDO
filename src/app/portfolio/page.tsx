"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SectionHeading } from "@/components/shared/section-heading"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects } from "@/data/projects"
import { ArrowRight } from "lucide-react"

const categories = ["All", "Web", "Mobile", "Cloud"]

const projectImages: Record<string, string> = {
  "fintech-analytics-dashboard": "/images/portfolio/fintech.png",
  "healthcare-telemedicine-app": "/images/portfolio/healthcare.png",
  "ecommerce-marketplace": "/images/portfolio/ecommerce.png",
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-violet-950/30 to-transparent py-20 md:py-28 lg:py-32">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-violet-600/8 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            badge="Portfolio"
            title="Our Work"
            subtitle="Every project is a story of collaboration, innovation, and impact"
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 flex justify-center">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="bg-secondary">
                {categories.map((cat) => (
                  <TabsTrigger key={cat} value={cat} className="text-sm">
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.1}>
                <Link href={`/portfolio/${project.slug}`}>
                  <Card className="group h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5">
                    <div className="relative aspect-video overflow-hidden">
                      {projectImages[project.slug] ? (
                        <Image
                          src={projectImages[project.slug]}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-indigo-600/20 to-violet-600/20 flex items-center justify-center">
                          <span className="text-lg font-semibold text-white/40">{project.title}</span>
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
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{project.client}</span>
                        <span>•</span>
                        <span>{project.industry}</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
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
        </div>
      </section>
    </>
  )
}
