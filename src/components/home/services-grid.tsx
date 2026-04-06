"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  motion, 
  useMotionTemplate, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/data/services"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

function SpotlightCard({ service, index, span }: { service: any, index: number, span: string }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring configuration for premium, weighted feel
  const springConfig = { stiffness: 150, damping: 20 }
  const xSpring = useSpring(mouseX, springConfig)
  const ySpring = useSpring(mouseY, springConfig)

  // Transform mouse position to rotation
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-7deg", "7deg"])
  
  const isAI = service.id === "ai-ml"

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    
    // Normalize coordinates from -0.5 to 0.5
    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5
    
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <ScrollReveal delay={index * 0.1} className={span}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full transition-all duration-500 will-change-transform"
      >
        <Card 
          className="relative h-full overflow-hidden border-white/5 bg-white/[0.01] backdrop-blur-3xl transition-all duration-500 group-hover:border-indigo-500/40 group-hover:bg-white/[0.02] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Spotlight Effect - now follows surface */}
          <motion.div
            className="pointer-events-none absolute -inset-px z-30 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  600px circle at ${(xSpring.get() + 0.5) * 100}% ${(ySpring.get() + 0.5) * 100}%,
                  rgba(99, 102, 241, 0.15),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 z-10 opacity-[0.02] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />

          {/* Background Image with Precise Overlay */}
          <div className="absolute inset-0 z-0" style={{ transform: "translateZ(-20px)" }}>
            {service.image && (
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-5 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-20"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/95 via-background/60 to-transparent" />
          </div>

          <CardContent className="relative z-20 flex h-full flex-col justify-between p-5" style={{ transformStyle: "preserve-3d" }}>
            <div style={{ transform: "translateZ(40px)" }}>
              <div className="flex items-center justify-between mb-3" style={{ transform: "translateZ(50px)" }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 backdrop-blur-2xl transition-all duration-500 group-hover:bg-indigo-500 group-hover:text-white group-hover:rotate-[360deg] group-hover:scale-110">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="text-3xl font-black tracking-tighter text-white/[0.02] group-hover:text-white/[0.05] transition-colors">
                  {service.number}
                </span>
              </div>

              <h3 className="text-lg font-black tracking-tight text-white mb-1.5 md:text-xl group-hover:text-indigo-400 transition-colors" style={{ transform: "translateZ(30px)" }}>
                {service.title}
                {isAI && (
                  <span className="ml-2 inline-flex items-center rounded-full bg-indigo-500/10 px-2 py-0.5 text-[8px] font-bold text-indigo-400 border border-indigo-500/20">
                    NEW
                  </span>
                )}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors line-clamp-2 mb-3" style={{ transform: "translateZ(20px)" }}>
                {service.description}
              </p>

              <ul className="space-y-1 mb-3" style={{ transform: "translateZ(20px)" }}>
                {service.features.slice(0, 2).map((feature: string) => (
                  <li key={feature} className="flex items-center gap-2 text-[10px] text-white/40 font-medium group-hover:text-white/60 transition-colors">
                    <CheckCircle2 className="h-3 w-3 text-indigo-500/50 group-hover:text-indigo-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4" style={{ transform: "translateZ(30px)" }}>
              <div className="flex items-center gap-3">
                {service.logoSlugs.slice(0, 4).map((slug: string) => (
                  <div key={slug} className="relative group/logo">
                    <img
                      src={`https://cdn.simpleicons.org/${slug}/ffffff`}
                      alt={`${slug} logo`}
                      className="h-5 w-5 opacity-30 grayscale transition-all duration-500 group-hover/logo:scale-110 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'none';
                        e.currentTarget.src = `https://cdn.simpleicons.org/${slug}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) invert(1) opacity(0.3)';
                        e.currentTarget.src = `https://cdn.simpleicons.org/${slug}/ffffff`;
                      }}
                    />
                  </div>
                ))}
              </div>

              <Link
                href={`/services#${service.id}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-xl transition-all duration-300 hover:bg-indigo-600 hover:border-indigo-400 hover:scale-110"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
          
          {/* Border Flash on Hover */}
          <div className="absolute inset-0 z-30 pointer-events-none rounded-xl border border-white/0 transition-all duration-700 group-hover:border-indigo-500/20 group-hover:bg-indigo-500/[0.01]" />
        </Card>
      </motion.div>
    </ScrollReveal>
  )
}

export function ServicesGrid() {
  const getBentoSpan = (id: string, index: number) => {
    // Bento Logic for 6 items in a 6-column grid:
    // Row 1: Web (4) | Mobile (2) -> 4:2 ratio (66/33)
    // Row 2: Cloud (3) | AI-ML (3)  <-- Equal Size (50/50)
    // Row 3: UI-UX (4) | DevOps (2) -> 4:2 ratio (66/33)
    switch (id) {
      case "web-development": return "md:col-span-4 md:row-span-1"
      case "mobile-development": return "md:col-span-2 md:row-span-1"
      case "cloud-solutions": return "md:col-span-3 md:row-span-1"
      case "ai-ml": return "md:col-span-3 md:row-span-1"
      case "ui-ux-design": return "md:col-span-4 md:row-span-1"
      case "devops": return "md:col-span-2 md:row-span-1"
      default: return "md:col-span-2 md:row-span-1"
    }
  }

  return (
    <section className="py-16 md:py-20 relative overflow-hidden" id="services">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Expertise"
          title="Our Specialties"
          subtitle="Engineering excellence with a focus on modern scalable architectures."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[minmax(200px,auto)] pb-10">
          {services.map((service, i) => (
            <SpotlightCard 
              key={service.id} 
              service={service} 
              index={i} 
              span={getBentoSpan(service.id, i)} 
            />
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/services" 
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/5 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
          </Link>
        </div>
      </div>
    </section>
  )
}
