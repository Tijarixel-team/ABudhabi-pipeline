import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius)] px-5 py-3 text-sm font-semibold transition",
    variant === "primary" && "bg-accent text-primary hover:bg-white",
    variant === "secondary" && "border border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary",
    variant === "ghost" && "text-primary hover:text-secondary",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowRight aria-hidden size={18} />
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
      <ArrowRight aria-hidden size={18} />
    </button>
  );
}
