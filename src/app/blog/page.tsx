import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tutorials, and updates from the CYDO team.",
}

const categoryImages: Record<string, string> = {
  Engineering: "/images/blog/engineering.png",
  Design: "/images/blog/design.png",
  Cloud: "/images/blog/cloud.png",
  Mobile: "/images/blog/engineering.png",
  DevOps: "/images/blog/cloud.png",
}

const posts = [
  {
    title: "Why Next.js 14 is a Game-Changer for Web Development",
    excerpt: "Explore the new features in Next.js 14 and how they can improve your application performance and developer experience.",
    category: "Engineering",
    date: "Dec 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "Designing for Accessibility: A Practical Guide",
    excerpt: "Learn how to build inclusive digital experiences that work for everyone, including users with disabilities.",
    category: "Design",
    date: "Dec 8, 2024",
    readTime: "7 min read",
  },
  {
    title: "Cloud Cost Optimization: Save 40% on AWS Bills",
    excerpt: "Practical strategies for reducing your cloud infrastructure costs without sacrificing performance or reliability.",
    category: "Cloud",
    date: "Nov 28, 2024",
    readTime: "6 min read",
  },
  {
    title: "Building Scalable Mobile Apps with React Native",
    excerpt: "Best practices for building cross-platform mobile applications that perform like native apps.",
    category: "Mobile",
    date: "Nov 20, 2024",
    readTime: "8 min read",
  },
  {
    title: "The ROI of Good UI/UX Design",
    excerpt: "How investing in user experience design can dramatically improve conversion rates and customer satisfaction.",
    category: "Design",
    date: "Nov 12, 2024",
    readTime: "4 min read",
  },
  {
    title: "DevOps in 2025: Trends and Predictions",
    excerpt: "A look ahead at the tools, practices, and methodologies that will shape DevOps and CI/CD pipelines.",
    category: "DevOps",
    date: "Nov 5, 2024",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-indigo-950/30 to-transparent py-20 md:py-28 lg:py-32">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-indigo-600/8 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            badge="Our Blog"
            title="Insights & Updates"
            subtitle="Thoughts, tutorials, and industry perspectives from our team"
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Featured post (first one, large) */}
          <ScrollReveal>
            <Link href="#" className="group block">
              <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5">
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <Image
                    src={categoryImages[posts[0].category]}
                    alt={posts[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20">
                      {posts[0].category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{posts[0].readTime}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold leading-snug group-hover:text-indigo-400 transition-colors md:text-3xl">
                    {posts[0].title}
                  </h2>
                  <p className="mt-4 text-base text-muted-foreground">{posts[0].excerpt}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-400">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">{posts[0].date}</p>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Grid of remaining posts */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href="#">
                  <Card className="group h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={categoryImages[post.category]}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-indigo-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                      <p className="mt-4 text-xs text-muted-foreground">{post.date}</p>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
