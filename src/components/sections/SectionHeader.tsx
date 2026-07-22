import { Badge } from "@/components/ui/Badge";

export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-semibold tracking-normal text-primary sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-muted">{text}</p>
    </div>
  );
}
