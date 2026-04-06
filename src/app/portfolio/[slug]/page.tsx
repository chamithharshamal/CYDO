import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { projects } from "@/data/projects"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import { ArrowLeft, ArrowRight, Quote } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  if (projectIndex === -1) notFound()

  const project = projects[projectIndex]
  const prev = projectIndex > 0 ? projects[projectIndex - 1] : null
  const next = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>

            <Badge className="bg-purple-500/10 text-purple-400">{project.category}</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
              <span className="text-xl font-medium text-white/30">{project.title}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Client", value: project.client },
                { label: "Industry", value: project.industry },
                { label: "Timeline", value: project.timeline },
                { label: "Role", value: project.role },
              ].map((meta) => (
                <Card key={meta.label} className="border-border bg-card">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground">{meta.label}</p>
                    <p className="mt-1 text-sm font-semibold">{meta.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-16 space-y-12">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold">The Challenge</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.challenge}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold">Our Solution</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.solution}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold">Results</h2>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {project.results.map((result) => (
                    <Card key={result.label} className="border-border bg-card text-center">
                      <CardContent className="p-6">
                        <p className="text-3xl font-bold text-purple-400">{result.metric}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{result.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold">Technologies</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {project.testimonial && (
              <ScrollReveal>
                <Card className="border-border bg-card">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-purple-500/20" />
                    <p className="mt-4 text-base italic leading-relaxed text-muted-foreground">
                      &ldquo;{project.testimonial.text}&rdquo;
                    </p>
                    <p className="mt-4 text-sm font-semibold">
                      — {project.testimonial.author}, {project.testimonial.role}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )}
          </div>

          <ScrollReveal>
            <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
              {prev ? (
                <Link href={`/portfolio/${prev.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" />
                  {prev.title}
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/portfolio/${next.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  {next.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : <div />}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-center">
              <h2 className="text-2xl font-bold text-white">Start Your Project</h2>
              <p className="mt-2 text-purple-100">Let&apos;s build something amazing together.</p>
              <Link href="/contact" className="mt-6 inline-flex h-9 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-purple-700 transition-colors hover:bg-gray-100">
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
