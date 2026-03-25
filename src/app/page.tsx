import { Hero } from "@/components/home/hero"
import { TrustBar } from "@/components/home/trust-bar"
import { ClientLogos } from "@/components/home/client-logos"
import { ServicesGrid } from "@/components/home/services-grid"
import { WeBelieve } from "@/components/home/we-believe"
import { FeaturedWork } from "@/components/home/featured-work"
import { Stats } from "@/components/home/stats"
import { HowWeWork } from "@/components/home/how-we-work"
import { Testimonials } from "@/components/home/testimonials"
import { HowToStart } from "@/components/home/how-to-start"
import { CtaBanner } from "@/components/home/cta-banner"
import { Faq } from "@/components/home/faq"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ClientLogos />
      <ServicesGrid />
      <WeBelieve />
      <FeaturedWork />
      <Stats />
      <HowWeWork />
      <Testimonials />
      <HowToStart />
      <CtaBanner />
      <Faq />
    </>
  )
}
