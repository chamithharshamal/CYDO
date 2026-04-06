"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { LinkedinIcon, XIcon, GithubIcon, InstagramIcon } from "@/components/shared/social-icons"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // handle error silently
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Get in Touch"
          subtitle="Have a project in mind? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch">
          {/* Left Column: Contact Form */}
          <ScrollReveal>
            {submitted ? (
              <Card className="h-full border-border bg-card/50 backdrop-blur-sm flex items-center justify-center min-h-[500px]">
                <CardContent className="flex flex-col items-center justify-center p-12 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">Message Sent!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-2xl font-semibold text-foreground mb-8">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" name="name" required placeholder="Your name" className="bg-background/50 border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" required placeholder="you@company.com" className="bg-background/50 border-border" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Your company name" className="bg-background/50 border-border" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select name="projectType">
                        <SelectTrigger className="bg-background/50 border-border">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="mobile">Mobile App</SelectItem>
                          <SelectItem value="cloud">Cloud Solutions</SelectItem>
                          <SelectItem value="design">UI/UX Design</SelectItem>
                          <SelectItem value="consulting">IT Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="bg-background/50 border-border resize-none"
                      />
                    </div>

                    <Button type="submit" disabled={loading} className="w-full h-12 rounded-full bg-purple-600 font-semibold text-white hover:bg-purple-700 transition-all">
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </ScrollReveal>

          {/* Right Column: Contact Info Container */}
          <ScrollReveal delay={0.2} className="h-full">
            <Card className="h-full relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">

              {/* Background glow for the contact info card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <CardContent className="flex flex-col h-full p-8 md:p-10 relative z-10">
                <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 flex-1">
                  {[
                    { icon: Mail, label: "Email", value: "hello@cydo.com", href: "mailto:hello@cydo.com" },
                    { icon: Phone, label: "Phone", value: "+94 11 234 5678", href: "tel:+94112345678" },
                    { icon: MessageCircle, label: "WhatsApp", value: "+94 77 123 4567", href: "https://wa.me/94771234567" },
                    { icon: Clock, label: "Working Hours", value: "Mon – Fri, 9AM – 6PM (IST)", href: null },
                    { icon: MapPin, label: "Address", value: "123 Galle Road, Colombo 03, Sri Lanka", href: null, colSpan: "sm:col-span-2 lg:col-span-1 xl:col-span-2" },
                  ].map((info) => (
                    <div key={info.label} className={`flex items-start gap-4 ${info.colSpan || ''}`}>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-1 block text-sm text-muted-foreground hover:text-purple-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links at the bottom of the card */}
                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="font-medium text-foreground mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    {[
                      { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn", hover: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]" },
                      { icon: XIcon, href: "https://twitter.com", label: "X", hover: "hover:bg-white hover:text-black hover:border-white" },
                      { icon: GithubIcon, href: "https://github.com", label: "GitHub", hover: "hover:bg-[#333] hover:text-white hover:border-[#333]" },
                      { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram", hover: "hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/50 text-muted-foreground transition-all duration-300 ${social.hover}`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Full Width Map Section below the two columns */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-border/50 bg-secondary/50 backdrop-blur-sm shadow-xl p-2 relative h-[300px] md:h-[400px]">
            <div className="absolute inset-2 rounded-[1.75rem] overflow-hidden bg-zinc-900 border border-white/5 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585975416!2d79.7738029519139!3d6.92192257608849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
              
              {/* Floating Badge */}
              
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
