"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { products } from "@/content/products";
import { contactSchema, type ContactFormValues } from "@/lib/contactSchema";

const enquiryTypes = ["Request a quote", "Technical enquiry", "Catalogue request", "Project support", "General enquiry"];

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { consent: false }
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus(null);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const body = (await response.json()) as { message: string };
    setStatus(body.message);
    if (response.ok) reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-[var(--radius)] border border-secondary/15 bg-white p-5 shadow-sm sm:p-8" noValidate>
      <div className="hidden" aria-hidden>
        <label>Website <input tabIndex={-1} autoComplete="off" {...register("website")} /></label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}><input {...register("name")} className="field" /></Field>
        <Field label="Company" error={errors.company?.message}><input {...register("company")} className="field" /></Field>
        <Field label="Email" error={errors.email?.message}><input type="email" {...register("email")} className="field" /></Field>
        <Field label="Phone" error={errors.phone?.message}><input {...register("phone")} className="field" /></Field>
        <Field label="Country" error={errors.country?.message}><input {...register("country")} className="field" /></Field>
        <Field label="Enquiry type" error={errors.enquiryType?.message}>
          <select {...register("enquiryType")} className="field"><option value="">Select</option>{enquiryTypes.map((type) => <option key={type}>{type}</option>)}</select>
        </Field>
        <Field label="Product interest" error={errors.productInterest?.message}>
          <select {...register("productInterest")} className="field"><option value="">Select</option>{products.map((product) => <option key={product.slug}>{product.name}</option>)}</select>
        </Field>
        <div className="md:col-span-2">
          <label className="text-sm font-semibold text-primary" htmlFor="file-upload">File upload</label>
          <input id="file-upload" type="file" className="field mt-2" aria-describedby="file-help" />
          <p id="file-help" className="mt-2 text-xs text-muted">Frontend-only file picker. Add backend storage before accepting attachments in production.</p>
        </div>
        <Field label="Project details" error={errors.projectDetails?.message} className="md:col-span-2">
          <textarea {...register("projectDetails")} rows={6} className="field resize-y" />
        </Field>
      </div>
      <label className="mt-6 flex gap-3 text-sm leading-6 text-muted">
        <input type="checkbox" {...register("consent")} className="mt-1 size-4" />
        I consent to ADPF reviewing this enquiry and contacting me about the request.
      </label>
      {errors.consent ? <p className="mt-2 text-sm font-semibold text-red-700">{errors.consent.message}</p> : null}
      <button type="submit" disabled={isSubmitting} className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-[var(--radius)] bg-primary px-6 py-3 font-bold text-white transition hover:bg-secondary disabled:opacity-60">
        {isSubmitting ? "Reviewing..." : "Submit enquiry"} <Send aria-hidden size={18} />
      </button>
      {status ? <p className="mt-5 rounded-[var(--radius)] bg-secondary/10 p-4 text-sm font-semibold text-primary" role="status">{status}</p> : null}
      <style jsx>{`
        .field {
          margin-top: 0.5rem;
          min-height: 3rem;
          width: 100%;
          border-radius: var(--radius);
          border: 1px solid rgba(36, 87, 117, 0.24);
          background: white;
          padding: 0.75rem;
          color: hsl(var(--foreground));
        }
      `}</style>
    </form>
  );
}

function Field({ label, error, children, className }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={className}>
      <span className="text-sm font-semibold text-primary">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm font-semibold text-red-700">{error}</span> : null}
    </label>
  );
}
