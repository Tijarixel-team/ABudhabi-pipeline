import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function FloatingContact() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-primary shadow-[var(--shadow)] transition hover:bg-white md:inline-flex"
    >
      <MessageSquare aria-hidden size={18} />
      Enquiry
    </Link>
  );
}
