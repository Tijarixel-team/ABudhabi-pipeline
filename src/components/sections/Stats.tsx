import { StaggerItem, StaggerReveal } from "@/components/animations/ScrollReveal";

export function Stats() {
  const proof = [
    { title: "Since 1981", text: "Four decades of composite pipe manufacturing experience." },
    { title: "UAE manufacturing", text: "Production presence in Abu Dhabi and Dubai." },
    { title: "Engineered production", text: "Dual helical and continuous filament winding methods." },
    { title: "In-house quality control", text: "Short- and long-term testing capability." }
  ];

  return (
    <section className="hidden bg-white md:block">
      <StaggerReveal className="section-shell grid border-b border-secondary/15 md:grid-cols-2 lg:grid-cols-4">
        {proof.map((item) => (
          <StaggerItem key={item.title} className="border-secondary/15 py-8 sm:px-6 sm:first:pl-0 sm:[&:nth-child(odd)]:border-r lg:border-r lg:first:pl-0 lg:last:border-r-0">
            <p className="font-serif text-xl text-primary">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
