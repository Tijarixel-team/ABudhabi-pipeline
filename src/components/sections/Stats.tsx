import { company } from "@/config/company";
import { Counter } from "@/components/animations/Counter";

export function Stats() {
  return (
    <section className="bg-white py-10">
      <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {company.stats.map((stat) => (
          <div key={stat.label} className="border-l border-secondary/20 pl-5">
            <p className="text-3xl font-semibold text-primary"><Counter value={stat.value} suffix={stat.suffix} /></p>
            <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
            <p className="mt-1 text-xs leading-5 text-muted">{stat.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
