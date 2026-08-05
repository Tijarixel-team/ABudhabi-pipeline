import { cn } from "@/lib/utils";

export function SectionHeader({
  title,
  text,
  inverse = false,
  className
}: {
  eyebrow?: string;
  title: string;
  text: string;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2 className={cn("text-4xl font-normal leading-[1.08] sm:text-5xl", inverse ? "text-white" : "text-primary")}>{title}</h2>
      <p className={cn("mt-5 max-w-[68ch] text-base leading-8", inverse ? "text-white/72" : "text-muted")}>{text}</p>
    </div>
  );
}
