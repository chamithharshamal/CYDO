"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { cn } from "@/lib/utils"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 3000)
    return () => clearInterval(interval)
  }, [next, isAutoPlaying])

  const getCardStyles = (index: number) => {
    const total = testimonials.length
    const diff = (index - activeIndex + total) % total

    if (diff === 0) {
      return {
        isActive: true,
        isSide: false,
        position: 0,
        zIndex: 30,
        scale: 1,
        opacity: 1,
        blur: 0,
      }
    }

    if (diff === 1 || diff === total - 1) {
      const isRight = diff === 1
      return {
        isActive: false,
        isSide: true,
        position: isRight ? 1 : -1,
        zIndex: 20,
        scale: 0.8,
        opacity: 0.5,
        blur: 4,
      }
    }

    return {
      isActive: false,
      isSide: false,
      position: diff > total / 2 ? -2 : 2,
      zIndex: 10,
      scale: 0.6,
      opacity: 0,
      blur: 12,
    }
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Real feedback from industry leaders who trust our expertise."
        />

        <div className="relative mt-16 h-[400px] w-full items-center justify-center overflow-visible">
          <div className="flex h-full w-full items-center justify-center">
            <AnimatePresence mode="popLayout">
              {testimonials.map((t, i) => {
                const styles = getCardStyles(i)
                return (
                  <motion.div
                    key={i}
                    initial={false}
                    animate={{
                      x: `${styles.position * 58}%`,
                      scale: styles.scale,
                      opacity: styles.opacity,
                      zIndex: styles.zIndex,
                      filter: `blur(${styles.blur}px)`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 30,
                    }}
                    className={cn(
                      "absolute w-full max-w-[400px] cursor-pointer",
                      styles.isActive ? "pointer-events-auto" : "pointer-events-none"
                    )}
                    onClick={() => setActiveIndex(i)}
                  >
                    <Card className={cn(
                      "group relative border-white/5 bg-white/[0.01] backdrop-blur-3xl transition-all duration-700",
                      styles.isActive ? "border-indigo-500/40 shadow-[0_0_50px_rgba(99,102,241,0.15)] ring-1 ring-white/10" : "border-white/5 grayscale-[0.5]"
                    )}>
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between">
                          <Quote className={cn(
                            "h-10 w-10 transition-colors duration-500",
                            styles.isActive ? "text-indigo-400/40" : "text-white/10"
                          )} />
                          <div className={cn(
                            "flex gap-0.5 transition-opacity duration-500",
                            styles.isActive ? "opacity-100" : "opacity-30"
                          )}>
                            {Array.from({ length: t.rating }).map((_, j) => (
                              <Star key={j} className={cn(
                                "h-4 w-4 fill-indigo-500 text-indigo-500",
                                j === 4 && "opacity-50"
                              )} />
                            ))}
                          </div>
                        </div>

                        <p className={cn(
                          "mt-6 text-sm md:text-base italic leading-relaxed transition-colors duration-500 line-clamp-4",
                          styles.isActive ? "text-white/90" : "text-white/40"
                        )}>
                          &ldquo;{t.text}&rdquo;
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                          <div className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-full text-base font-black transition-all duration-500",
                            styles.isActive 
                              ? "bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]" 
                              : "bg-white/5 text-white/20"
                          )}>
                            {t.author.charAt(0)}
                          </div>
                          <div>
                            <p className={cn(
                              "text-sm font-bold tracking-tight transition-colors duration-500",
                              styles.isActive ? "text-white" : "text-white/30"
                            )}>
                              {t.author}
                            </p>
                            <p className={cn(
                              "text-xs font-medium transition-colors duration-500",
                              styles.isActive ? "text-indigo-400/80" : "text-white/20"
                            )}>
                              {t.role}, {t.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Progress Bar (Center Card only) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i)
                  setIsAutoPlaying(false)
                }}
                className="group relative h-2 w-8 overflow-hidden rounded-full bg-white/10"
              >
                {activeIndex === i && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 3, ease: "linear" }}
                    className="absolute inset-0 origin-left bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Side Gradients for fading depth */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-40 hidden md:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-40 hidden md:block" />
        </div>
      </div>
    </section>
  )
}
