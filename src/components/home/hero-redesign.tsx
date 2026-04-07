"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { ArrowRight, PieChart, ShieldCheck, Sparkles, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

function FloatingBadge({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 + delay, duration: 0.8 }}
      className={cn(
        "absolute z-40 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl shadow-purple-500/10",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

function MagnetButton({ children, href, primary = false }: { children: React.ReactNode, href: string, primary?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    x.set(distanceX * 0.3)
    y.set(distanceY * 0.3)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-all duration-300",
        primary
          ? "bg-purple-600 text-white shadow-xl shadow-purple-500/20 hover:bg-purple-500 hover:scale-105"
          : "bg-white/5 text-white border border-white/10 hover:bg-white/10 backdrop-blur-md"
      )}
    >
      {children}
    </motion.a>
  )
}

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const speed = isDeleting ? 30 : 60

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index]

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1))
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1))
        if (displayText === "") {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, index, texts, speed])

  return (
    <div className="flex items-center text-sm md:text-base font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-xl">
      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {displayText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-1 h-4 w-[2px] bg-purple-400"
      />
    </div>
  )
}

export function HeroRedesign() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.1
    }
  }, [])

  const { scrollY } = useScroll()
  const yContent = useTransform(scrollY, [0, 500], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#030303] flex items-center justify-center mt-12 md:mt-16 pt-10"
    >
      {/* 1. Background Layer (Video, Image & Aura) */}
      <div className="absolute inset-0 z-0">
        {/* The Video Background */}
        <motion.div
          style={{
            scale: 1.25,
            x: mousePosition.x * 20,
            y: mousePosition.y * 20
          }}
          className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onPlay={() => {
              if (videoRef.current) videoRef.current.playbackRate = 1.1
            }}
            className="h-full w-full object-cover"
            style={{
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
            }}
          >
            <source src="/videos/bg.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Dynamic Aura Blobs */}
        <motion.div
          animate={{ x: mousePosition.x * 60, y: mousePosition.y * 60 }}
          className="absolute -top-[10%] -left-[5%] h-[60vw] w-[60vw] rounded-full bg-purple-600/10 blur-[140px]"
        />
        <motion.div
          animate={{ x: mousePosition.x * -40, y: mousePosition.y * -40 }}
          className="absolute -bottom-[10%] -right-[5%] h-[60vw] w-[60vw] rounded-full bg-pink-600/10 blur-[140px]"
        />

        {/* Grid Floor Overlay */}
        <div className="absolute bottom-0 left-0 h-[40vh] w-full perspective-[1000px] overflow-hidden opacity-30">
          <div
            className="absolute inset-0 origin-bottom [transform:rotateX(60deg)] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"
            style={{ maskImage: 'linear-gradient(to top, black, transparent)' }}
          />
        </div>
      </div>

      {/* 2. Top-level Floating Badges (Edges) */}
      <div className="absolute inset-0 z-40 pointer-events-none hidden md:block">
        <FloatingBadge className="top-1/4 left-[5%]" delay={0.2}>
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-emerald-400" />
            <div className="text-left"><p className="text-xs font-bold text-white tracking-widest">UPTIME</p><p className="text-sm text-emerald-400/80">99.99%</p></div>
          </div>
        </FloatingBadge>
        <FloatingBadge className="top-1/3 right-[5%]" delay={0.4}>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-purple-400" />
            <div className="text-left"><p className="text-xs font-bold text-white tracking-widest">SECURITY</p><p className="text-sm text-purple-400/80">Enterprise</p></div>
          </div>
        </FloatingBadge>
        <FloatingBadge className="bottom-1/4 left-[8%]" delay={0.6}>
          <div className="flex items-center gap-3">
            <PieChart className="h-5 w-5 text-purple-400" />
            <div className="text-left"><p className="text-xs font-bold text-white tracking-widest">SCALE</p><p className="text-sm text-purple-400/80">Global Native</p></div>
          </div>
        </FloatingBadge>
      </div>

      {/* 3. Text Overlay Layer */}
      <motion.div
        style={{ y: yContent, opacity, scale }}
        className="relative z-20 mx-auto max-w-7xl px-4 text-center md:px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-balance text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Engineering <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[size:200%_auto] animate-gradient drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            The Next Frontier
          </span>
        </motion.h1>

        <div className="mt-8 h-8 md:h-10 flex justify-center items-center">
          <TypewriterText
            texts={[
              "Architecting Future-Proof Platforms",
              "Engineering Elite Digital Products",
              "Crafting Next-Gen User Experiences"
            ]}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/70 md:text-lg font-medium tracking-tight"
        >
          We architect robust, scalable digital infrastructures for visionaries.
          The core engine for your next-generation cloud native applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-6"
        >
          <MagnetButton href="/contact" primary>
            Start Your Vision
            <ArrowRight className="h-4 w-4" />
          </MagnetButton>
          <MagnetButton href="/portfolio">
            Explore Craft
          </MagnetButton>
        </motion.div>
      </motion.div>

      {/* 4. Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent z-30" />
    </section>
  )
}
