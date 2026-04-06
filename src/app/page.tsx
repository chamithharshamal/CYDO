import { HeroRedesign } from "@/components/home/hero-redesign"
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
      <HeroRedesign />
      <WeBelieve />
      <ServicesGrid />
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
