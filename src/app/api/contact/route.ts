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
      message: "Online enquiry delivery is temporarily unavailable. Please contact info@adpf.ae or call +971 2 5821600."
    }, { status: 503 });
  }

  return NextResponse.json({
    message: "Online enquiry delivery is temporarily unavailable. Please contact info@adpf.ae or call +971 2 5821600."
  }, { status: 503 });
}
