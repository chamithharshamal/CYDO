import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { LinkedinIcon, XIcon, GithubIcon, InstagramIcon } from "@/components/shared/social-icons"
import { Separator } from "@/components/ui/separator"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/services#web-development", label: "Web Development" },
  { href: "/services#mobile-development", label: "Mobile Apps" },
  { href: "/services#cloud-solutions", label: "Cloud Solutions" },
  { href: "/services#ui-ux-design", label: "UI/UX Design" },
  { href: "/services#it-consulting", label: "IT Consulting" },
  { href: "/services#devops", label: "DevOps" },
]

const socials = [
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: XIcon, href: "https://twitter.com", label: "X" },
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/branding/logo.jpg" 
                alt="CYDO Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm font-medium text-muted-foreground">Engineering Digital Excellence</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We build powerful web applications, mobile apps, and cloud solutions for startups and enterprises worldwide.
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-indigo-500/50 hover:text-indigo-400"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="mailto:hello@cydo.com" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  hello@cydo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="tel:+94112345678" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  +94 11 234 5678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">123 Galle Road, Colombo 03</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Mon – Fri, 9AM – 6PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © 2025 CYDO. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
