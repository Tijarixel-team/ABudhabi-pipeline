import { cn } from "@/lib/utils";
import { company } from "@/config/company";

export function BrandWordmark({
  size = "standard",
  align = "left",
  className
}: {
  size?: "compact" | "standard" | "display";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-fit font-sans text-white",
        align === "center" && "text-center",
        className
      )}
      aria-label={size === "compact" ? `${company.nameArabic}. ${company.legalName}` : `${company.nameArabic}. ${company.legalName}. ${company.productDescriptor}`}
    >
      <p lang="ar" dir="rtl" className={cn("font-semibold leading-none text-white/82", size === "compact" ? "text-left text-[13px]" : size === "display" ? "text-sm sm:text-base" : "text-xs")}>
        {company.nameArabic}
      </p>
      <p className={cn("mt-1 whitespace-nowrap font-bold leading-none tracking-[-0.02em]", size === "compact" ? "text-[14px] sm:text-[15px]" : size === "display" ? "text-2xl sm:text-3xl" : "text-xl")}>
        {company.legalName}
      </p>
      {size !== "compact" ? <p className={cn("mt-1.5 whitespace-nowrap font-medium leading-none text-white/58", size === "display" ? "text-[10px] tracking-[0.08em] sm:text-xs" : "text-[9px] tracking-[0.06em]")}>{company.productDescriptor}</p> : null}
    </div>
  );
}
