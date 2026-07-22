export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
      {children}
    </span>
  );
}
