"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Separator } from "@/components/ui/separator"
import { Star, Award, ShieldCheck, Lock } from "lucide-react"

const items = [
  { icon: Star, value: "5.0 Rating", label: "on Clutch" },
  { icon: Award, value: "Awards", label: "Honorable Mention" },
  { icon: ShieldCheck, value: "ISO 27001", label: "Certified" },
  { icon: Lock, value: "SOC 2", label: "Compliant" },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary/50">
      <ScrollReveal>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-8 md:justify-between md:gap-0 md:px-6 lg:px-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && <Separator orientation="vertical" className="hidden h-10 md:block" />}
              <div className="flex items-center gap-3 px-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                  <item.icon className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
