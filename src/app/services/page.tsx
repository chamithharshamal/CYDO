import type { Metadata } from "next"
import Image from "next/image"
import { services } from "@/data/services"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { CtaBanner } from "@/components/home/cta-banner"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description: "End-to-end technology solutions tailored to your business goals. Web Development, Mobile Apps, Cloud Solutions, UI/UX Design, IT Consulting, DevOps.",
}

const serviceImages: Record<string, string> = {
  "web-development": "/images/services/web.png",
  "mobile-development": "/images/services/mobile.png",
  "cloud-solutions": "/images/services/cloud.png",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-purple-950/30 to-transparent py-20 md:py-28 lg:py-32">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple-600/8 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            badge="What We Offer"
            title="Our Services"
            subtitle="End-to-end technology solutions tailored to your business goals"
          />
        </div>
      </section>

      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="space-y-28 md:space-y-36">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={0.1}>
                <div
                  id={service.id}
                  className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20">
                        <service.icon className="h-7 w-7 text-purple-400" />
                      </div>
                      <span className="text-6xl font-bold text-muted-foreground/8">{service.number}</span>
                    </div>

                    <h3 className="text-2xl font-bold md:text-3xl">{service.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{service.description}</p>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs border border-border/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/5">
                      {serviceImages[service.id] ? (
                        <Image
                          src={serviceImages[service.id]}
                          alt={service.title}
                          width={600}
                          height={450}
                          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                          <service.icon className="h-20 w-20 text-purple-500/20" />
                        </div>
                      )}
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
