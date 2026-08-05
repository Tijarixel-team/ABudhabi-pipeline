"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import { products } from "@/content/products";
import { contactSchema, type ContactFormValues } from "@/lib/contactSchema";

const enquiryTypes = ["Request a quote", "Technical enquiry", "Catalogue request", "Project support", "General enquiry"];
type FormStatus = { kind: "success" | "error"; message: string } | null;

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setFocus
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", country: "", enquiryType: "", productInterest: "", projectDetails: "", consent: false }
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const body = await response.json().catch(() => ({ message: "We could not process the response. Please try again or contact us directly." })) as { message: string };
      setStatus({ kind: response.ok ? "success" : "error", message: body.message });
      if (response.ok) reset();
    } catch {
      setStatus({ kind: "error", message: "We could not send your enquiry. Please try again, email info@adpf.ae or call +971 2 5821600." });
    }
  }

  const onInvalid = (fieldErrors: FieldErrors<ContactFormValues>) => {
    const firstError = Object.keys(fieldErrors)[0] as keyof ContactFormValues | undefined;
    if (firstError) setFocus(firstError);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="rounded-[var(--radius)] bg-white p-6 shadow-[var(--shadow)] sm:p-10" noValidate>
      <div className="max-w-2xl">
        <h2 className="text-3xl font-normal text-primary">Tell us about your requirement.</h2>
        <p className="mt-3 leading-7 text-muted">Fields marked required help us direct your enquiry. Additional project details can be shared after first contact.</p>
      </div>
      <div className="hidden" aria-hidden><label>Website <input tabIndex={-1} autoComplete="off" {...register("website")} /></label></div>

      <div className="mt-9 grid gap-6 md:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name?.message}><input id="name" autoComplete="name" {...register("name")} className="field" aria-required="true" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} /></Field>
        <Field id="company" label="Company" error={errors.company?.message}><input id="company" autoComplete="organization" {...register("company")} className="field" /></Field>
        <Field id="email" label="Email" required error={errors.email?.message}><input id="email" type="email" inputMode="email" autoComplete="email" {...register("email")} className="field" aria-required="true" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} /></Field>
        <Field id="phone" label="Phone" error={errors.phone?.message}><input id="phone" type="tel" inputMode="tel" autoComplete="tel" {...register("phone")} className="field" /></Field>
        <Field id="enquiryType" label="Enquiry type" required error={errors.enquiryType?.message}><select id="enquiryType" {...register("enquiryType")} className="field" aria-required="true" aria-invalid={Boolean(errors.enquiryType)} aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}><option value="">Select an enquiry type</option>{enquiryTypes.map((type) => <option key={type}>{type}</option>)}</select></Field>
        <Field id="productInterest" label="Product interest" error={errors.productInterest?.message}><select id="productInterest" {...register("productInterest")} className="field"><option value="">Not sure yet</option>{products.map((product) => <option key={product.slug}>{product.name}</option>)}</select></Field>
        <Field id="projectDetails" label="Application or project details" required error={errors.projectDetails?.message} className="md:col-span-2"><textarea id="projectDetails" {...register("projectDetails")} rows={5} className="field resize-y" aria-required="true" aria-invalid={Boolean(errors.projectDetails)} aria-describedby={errors.projectDetails ? "projectDetails-error" : "projectDetails-help"} /><span id="projectDetails-help" className="mt-2 block text-xs leading-5 text-muted">Include the application, location and known service conditions.</span></Field>
      </div>

      <label className="mt-7 flex gap-3 text-sm leading-6 text-muted">
        <input type="checkbox" {...register("consent")} className="mt-1 size-5 shrink-0 accent-primary" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} />
        I consent to ADPF reviewing this enquiry and contacting me about the request.
      </label>
      {errors.consent ? <p id="consent-error" className="mt-2 text-sm font-semibold text-red-700">{errors.consent.message}</p> : null}

      <button type="submit" disabled={isSubmitting} className="cta-button cta-button--light group mt-8 inline-flex min-h-12 items-center gap-4 rounded-full py-1.5 pl-6 pr-1.5 font-bold disabled:cursor-wait disabled:opacity-60">
        <span>{isSubmitting ? "Sending enquiry…" : "Send enquiry"}</span><span className="cta-button__icon inline-flex size-9 items-center justify-center rounded-full"><Send aria-hidden size={16} /></span>
      </button>

      {status ? <div className={`mt-6 flex items-start gap-3 rounded-[12px] p-4 text-sm font-semibold leading-6 ${status.kind === "success" ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"}`} role={status.kind === "error" ? "alert" : "status"}>{status.kind === "success" ? <CheckCircle2 aria-hidden className="mt-0.5 shrink-0" size={18} /> : <AlertCircle aria-hidden className="mt-0.5 shrink-0" size={18} />}{status.message}</div> : null}

      <style jsx>{`
        .field { margin-top: .6rem; min-height: 3.25rem; width: 100%; border-radius: 12px; border: 1px solid rgba(36, 87, 117, .28); background: white; padding: .8rem .9rem; color: hsl(var(--foreground)); transition: border-color 180ms ease, box-shadow 180ms ease; }
        .field:hover { border-color: rgba(36, 87, 117, .52); }
        .field:focus { border-color: hsl(var(--secondary)); box-shadow: 0 0 0 3px rgba(36, 87, 117, .12); outline: none; }
        .field[aria-invalid="true"] { border-color: rgb(185 28 28); }
      `}</style>
    </form>
  );
}

function Field({ id, label, required = false, error, children, className }: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode; className?: string }) {
  return <div className={className}><label className="text-sm font-bold text-primary" htmlFor={id}>{label}{required ? <span className="ml-1 text-red-700" aria-hidden>*</span> : <span className="ml-2 font-normal text-muted">Optional</span>}</label>{children}{error ? <span id={`${id}-error`} className="mt-2 block text-sm font-semibold text-red-700">{error}</span> : null}</div>;
}
