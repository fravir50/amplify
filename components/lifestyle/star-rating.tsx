import { cn } from "@/lib/utils"

export function StarRating({
  value,
  size = "sm",
  className,
}: {
  value: number
  size?: "sm" | "md"
  className?: string
}) {
  const full = Math.round(value)
  const px = size === "md" ? "h-4 w-4" : "h-3.5 w-3.5"
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${value} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn(px, i < full ? "text-[#C9A96E]" : "text-white/20")}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9 5.06 16.71l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </span>
  )
}
