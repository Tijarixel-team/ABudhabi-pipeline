import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="technical-grid bg-primary pt-40 text-white">
      <div className="section-shell min-h-[70vh] py-20">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">404</p>
        <h1 className="mt-4 max-w-2xl text-5xl font-semibold">This route is not in the pipework.</h1>
        <p className="mt-5 max-w-xl text-white/72">The page may have moved, or the content may be awaiting launch approval.</p>
        <div className="mt-8"><Button href="/">Return home</Button></div>
      </div>
    </section>
  );
}
