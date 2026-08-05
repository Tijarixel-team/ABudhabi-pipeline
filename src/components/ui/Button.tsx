import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverted" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "cta-button group inline-flex min-h-12 items-center justify-center gap-4 whitespace-nowrap rounded-full py-1.5 pl-6 pr-1.5 text-sm font-bold focus-visible:outline-offset-4",
    (variant === "primary" || variant === "ghost") && "cta-button--light",
    (variant === "secondary" || variant === "inverted") && "cta-button--dark",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        <span className="cta-button__icon inline-flex size-9 items-center justify-center rounded-full"><ArrowRight aria-hidden size={16} /></span>
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      <span>{children}</span>
      <span className="cta-button__icon inline-flex size-9 items-center justify-center rounded-full"><ArrowRight aria-hidden size={16} /></span>
    </button>
  );
}
