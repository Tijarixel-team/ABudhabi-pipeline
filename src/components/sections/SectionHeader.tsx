import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function SectionHeader({
  title,
  text,
  inverse = false,
  className,
  animate = false
}: {
  eyebrow?: string;
  title: string;
  text: string;
  inverse?: boolean;
  className?: string;
  animate?: boolean;
}) {
  const heading = <h2 className={cn("text-4xl font-normal leading-[1.08] sm:text-5xl", inverse ? "text-white" : "text-primary")}>{title}</h2>;
  const paragraph = <p className={cn("mt-5 max-w-[68ch] text-base leading-8", inverse ? "text-white/72" : "text-muted")}>{text}</p>;

  return (
    <div className={cn("max-w-3xl", className)}>
      {animate ? <ScrollReveal>{heading}</ScrollReveal> : heading}
      {animate ? <ScrollReveal variant="softFade" delay={0.08}>{paragraph}</ScrollReveal> : paragraph}
    </div>
  );
}
