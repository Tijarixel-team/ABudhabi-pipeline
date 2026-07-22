import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  company: z.string().min(2, "Enter your company name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(6, "Enter a phone number."),
  country: z.string().min(2, "Enter your country."),
  enquiryType: z.string().min(1, "Select an enquiry type."),
  productInterest: z.string().min(1, "Select a product interest."),
  projectDetails: z.string().min(20, "Add at least 20 characters about your project."),
  consent: z.boolean().refine((value) => value, "Consent is required."),
  website: z.string().max(0, "Spam detected.").optional()
});

export type ContactFormValues = z.infer<typeof contactSchema>;
