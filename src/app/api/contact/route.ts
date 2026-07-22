import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contactSchema";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ message: "Please correct the highlighted form fields." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: "Spam detected." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({
      message:
        "Your enquiry passed validation. Email delivery is not configured yet, so no message was sent. Add an email provider in src/app/api/contact/route.ts before launch."
    });
  }

  return NextResponse.json({
    message: "Email provider credentials are present. Connect the selected provider implementation before launch."
  });
}
