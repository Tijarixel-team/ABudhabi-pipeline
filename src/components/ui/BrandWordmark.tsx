import Image from "next/image";
import { cn } from "@/lib/utils";
import { company } from "@/config/company";

export function BrandWordmark({
  size = "standard",
  align = "left",
  hideText = false,
  className
}: {
  size?: "compact" | "standard" | "display";
  align?: "left" | "center";
  hideText?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-fit items-center",
        size === "compact" ? "gap-2 sm:gap-2.5" : size === "display" ? "gap-3 sm:gap-5" : "gap-3 sm:gap-4",
        align === "center" && "mx-auto",
        className
      )}
      aria-label={size === "compact" ? `${company.nameArabic}. ${company.legalName}` : `${company.nameArabic}. ${company.legalName}. ${company.productDescriptor}`}
    >
      <Image
        src="/images/brand/adpf-logo-transparent.png"
        alt=""
        width={211}
        height={169}
        priority={size === "compact"}
        className={cn(
          "shrink-0 object-contain",
          size === "compact" && "h-9 w-auto sm:h-11",
          size === "standard" && "h-[52px] w-auto sm:h-[68px]",
          size === "display" && "h-[72px] w-auto sm:h-28"
        )}
      />
      <div
        className={cn(
          "origin-left font-sans text-white transition-[opacity,transform,clip-path,filter] ease-[cubic-bezier(0.16,1,0.3,1)]",
          align === "center" && "text-left",
          hideText
            ? "-translate-x-5 opacity-0 blur-[1.5px] duration-700 [clip-path:inset(0_100%_0_0)]"
            : "translate-x-0 opacity-100 blur-0 duration-500 [clip-path:inset(0_0_0_0)]"
        )}
      >
        <p lang="ar" dir="rtl" className={cn("font-semibold leading-none text-white/82", size === "compact" ? "text-left text-[8px] sm:text-[10px]" : size === "display" ? "text-xs sm:text-base" : "text-[10px] sm:text-xs")}>
          {company.nameArabic}
        </p>
        <p className={cn("mt-1 whitespace-nowrap font-bold leading-none tracking-[-0.02em]", size === "compact" ? "text-[9px] sm:text-xs" : size === "display" ? "text-xl sm:text-3xl" : "text-base sm:text-xl")}>
          {company.legalName}
        </p>
        {size !== "compact" ? <p className={cn("mt-1.5 whitespace-nowrap font-medium leading-none text-white/58", size === "display" ? "text-[8px] tracking-[0.06em] sm:text-xs sm:tracking-[0.08em]" : "text-[7px] tracking-[0.04em] sm:text-[9px] sm:tracking-[0.06em]")}>{company.productDescriptor}</p> : null}
      </div>
    </div>
  );
}
