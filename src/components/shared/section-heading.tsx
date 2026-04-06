interface Props {
  badge?: string
  title: string
  subtitle?: string
  align?: "center" | "left"
}

export function SectionHeading({ badge, title, subtitle, align = "center" }: Props) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      {badge && (
        <span className="inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300 mb-4 border border-purple-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
