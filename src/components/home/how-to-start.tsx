"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { MessageSquare, FileText, Wrench, Rocket, ChevronDown } from "lucide-react"

const steps = [
  { 
    number: "01", 
    icon: MessageSquare, 
    title: "Share Your Vision", 
    description: "Start with a conversation. We dive deep into your project's soul, understanding every nuance of your business goals and technical needs. No generic forms—just humans talking about elite engineering.",
    color: "from-blue-500/20 to-indigo-500/20",
    glow: "bg-blue-500/5"
  },
  { 
    number: "02", 
    icon: FileText, 
    title: "The Blueprint", 
    description: "Our architects draft a comprehensive roadmap. You'll receive a transparent, battle-tested plan covering architecture, tech stack choice, and a milestone-driven timeline. Precision from the start.",
    color: "from-indigo-500/20 to-violet-500/20",
    glow: "bg-indigo-500/5"
  },
  { 
    number: "03", 
    icon: Wrench, 
    title: "Elite Engineering", 
    description: "Our team iterates in high-frequency sprints. We don't just write code; we engineer value. You see progress in real-time on our staging environments. Continuous integration meets absolute quality.",
    color: "from-violet-500/20 to-purple-500/20",
    glow: "bg-violet-500/5"
  },
  { 
    number: "04", 
    icon: Rocket, 
    title: "The Big Launch", 
    description: "Go live with total peace of mind. We handle the orchestration, monitoring, and final hardening. Post-launch, we scale with you, ensuring your journey only goes up. 24/7 support is our standard.",
    color: "from-purple-500/20 to-pink-500/20",
    glow: "bg-purple-500/5"
  },
]

function StepCard({ step, isEven }: { step: any, isEven: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-xl transition-colors duration-700 hover:border-indigo-500/20 group relative overflow-hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] ${!isEven && 'md:text-right'}`}
    >
      {/* Inner Glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${step.glow}`} />
      
      {/* Scanning Line */}
      <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-[400px] transition-all duration-1000 ease-linear pointer-events-none -translate-y-[100px]" />

      <div style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-black tracking-tight text-white mb-3 group-hover:text-indigo-400 transition-colors">
          {step.title}
        </h3>
      </div>
      <div style={{ transform: "translateZ(20px)" }}>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </div>
      
      <div style={{ transform: "translateZ(40px)" }} className={`mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-indigo-400 tracking-wider uppercase ${!isEven && 'md:flex-row-reverse'}`}>
        <span>Phase {step.number}</span>
        <div className="h-px w-6 bg-indigo-500/30" />
      </div>
    </motion.div>
  )
}

function MagneticOrb({ icon: Icon }: { icon: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX * 0.3); // Magnetic pull
    y.set(mouseY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative p-4 -m-4" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Pulsing Aura */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute inset-4 bg-indigo-500/30 rounded-full blur-[20px] pointer-events-none"
      />
      
      <motion.div 
        style={{ x: mouseXSpring, y: mouseYSpring }}
        className={`flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_10px_40px_rgba(0,0,0,0.5)] transition-colors duration-700 hover:border-indigo-500 group cursor-pointer z-10 relative`}
      >
        <Icon className="h-7 w-7 text-white transition-transform duration-500 group-hover:scale-110" />
        
        {/* Inner Energy Core */}
        <div className="absolute inset-1.5 rounded-full border border-indigo-500/20 animate-pulse pointer-events-none" />
      </motion.div>
    </div>
  )
}


export function HowToStart() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section ref={containerRef} className="py-20 md:py-28 relative overflow-hidden bg-zinc-950/20">
      {/* Background Neural Glows */}
      <div className="absolute top-1/4 -left-24 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Journey"
          title="Your Journey Begins Here"
          subtitle="A transparent, data-driven process designed to move your vision from idea to impact."
        />

        <div className="mt-16 md:mt-20 relative">
          {/* Central Animated Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.03] -translate-x-1/2 hidden md:block overflow-hidden rounded-full">
            <motion.div 
              style={{ scaleY: pathLength }}
              className="w-full h-full bg-gradient-to-b from-indigo-500 to-violet-500 origin-top shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            />
            {/* Tracer particle */}
            <motion.div
              animate={{ top: ["-10%", "110%"] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="absolute left-1/2 w-[4px] h-[40px] bg-white -translate-x-1/2 rounded-full blur-[2px] shadow-[0_0_20px_rgba(255,255,255,1)]"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={step.number} className="relative">
                  {/* Background Number */}
                  <div 
                    className={`absolute hidden md:block text-[7rem] font-black tracking-tighter text-white/[0.02] -z-10 select-none ${isEven ? 'right-0' : 'left-0'}`}
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  >
                    {step.number}
                  </div>

                  <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Box */}
                    <div className="flex-1 w-full text-left" style={{ perspective: "1000px" }}>
                      <ScrollReveal direction={isEven ? "right" : "left"}>
                         <StepCard step={step} isEven={isEven} />
                      </ScrollReveal>
                    </div>

                    {/* Step Orb Node */}
                    <div className="relative z-20 shrink-0">
                      <ScrollReveal delay={0.2}>
                          <MagneticOrb icon={step.icon} />
                      </ScrollReveal>
                    </div>

                    {/* Empty Space for Zig-Zag */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Journey Indicator */}
          <div className="mt-16 md:mt-24 flex flex-col items-center justify-center">
             <motion.div 
               animate={{ y: [0, 8, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:bg-indigo-500/20 transition-colors"
             >
                <ChevronDown className="h-5 w-5" />
             </motion.div>
             <p className="mt-3 text-[9px] font-black tracking-widest text-white/20 uppercase">End of Journey</p>
          </div>
        </div>
      </div>
    </section>
  )
}

