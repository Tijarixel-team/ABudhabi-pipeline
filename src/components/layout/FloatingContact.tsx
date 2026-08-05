import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function FloatingContact() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full border border-transparent bg-logo-bg px-5 py-3 text-sm font-bold text-white shadow-[var(--shadow)] transition hover:border-accent hover:bg-secondary md:inline-flex"
    >
      <MessageSquare aria-hidden size={18} />
      Enquiry
    </Link>
  );
}
