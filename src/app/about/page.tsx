import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { team } from "@/data/team"
import { Lightbulb, Shield, Eye, Users } from "lucide-react"
import { LinkedinIcon, XIcon, GithubIcon } from "@/components/shared/social-icons"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about CYDO, our mission, values, and the talented team behind our digital solutions.",
}

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We embrace new technologies and creative solutions to solve complex problems." },
  { icon: Shield, title: "Reliability", description: "We deliver on promises with consistent quality and transparent communication." },
  { icon: Eye, title: "Transparency", description: "We believe in open, honest partnerships where clients are always in the loop." },
  { icon: Users, title: "Collaboration", description: "We work as an extension of your team, ensuring shared goals drive every decision." },
]

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: LinkedinIcon,
  twitter: XIcon,
  github: GithubIcon,
}

export default function AboutPage() {
  return (
    <>
      {/* Full-width hero image section - Trina Solar inspired */}
      <section className="relative overflow-hidden">
        <div className="relative h-[40vh] md:h-[50vh] lg:h-[55vh]">
          <Image
            src="/images/about-team.png"
            alt="CYDO Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-background" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                About Us
              </span>
              <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                About <span className="gradient-text">CYDO</span>
              </h1>
              <p className="mt-4 text-lg text-white/80">Engineering digital excellence since 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                CYDO was founded in Colombo, Sri Lanka, with a simple mission: to help businesses
                harness the power of technology. What started as a small team of passionate developers
                has grown into a full-service digital agency serving clients across 15+ countries.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We combine deep technical expertise with a genuine understanding of business needs.
                Every line of code we write, every pixel we design, is driven by our commitment to
                creating solutions that make a real impact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values section */}
      <section className="border-y border-border bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="Our Values" subtitle="The principles that guide everything we do" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <Card className="group h-full border-border/50 bg-card text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5">
                  <CardContent className="p-8">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 transition-colors group-hover:bg-purple-500/20">
                      <value.icon className="h-7 w-7 text-purple-400" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="Meet the Team" subtitle="The talented people behind CYDO" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <Card className="group h-full border-border/50 bg-card text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30">
                  <CardContent className="p-8">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-2xl font-bold text-purple-400 border border-purple-500/20 transition-all group-hover:shadow-lg group-hover:shadow-purple-500/10">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-purple-400">{member.role}</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
                    <div className="mt-4 flex justify-center gap-2">
                      {Object.entries({ linkedin: member.linkedin, twitter: member.twitter, github: member.github }).map(
                        ([key, url]) => {
                          const Icon = socialIcons[key]
                          return (
                            <a
                              key={key}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/5"
                            >
                              <Icon className="h-3.5 w-3.5" />
                            </a>
                          )
                        }
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sri Lanka */}
      <section className="border-t border-border bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <ScrollReveal>
            <SectionHeading
              badge="Global Reach"
              title="Why Sri Lanka?"
              subtitle="World-class talent at competitive rates"
            />
            <p className="text-base leading-relaxed text-muted-foreground">
              Sri Lanka is home to a thriving tech ecosystem with highly skilled engineers and designers.
              Our location allows us to offer premium quality at globally competitive rates, with overlap
              across US, UK, European, Australian, and Middle Eastern time zones. We combine local
              talent with international standards to deliver exceptional results for clients worldwide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-center md:p-16">
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-white md:text-4xl">Want to Join Our Team?</h2>
                <p className="mt-4 text-lg text-purple-100">We&apos;re always looking for talented people who share our passion for technology.</p>
                <div className="mt-8">
                  <Link href="/contact" className="inline-flex h-12 items-center rounded-full bg-white px-8 text-base font-semibold text-purple-700 transition-all hover:bg-gray-100 hover:shadow-xl hover:shadow-white/20">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
