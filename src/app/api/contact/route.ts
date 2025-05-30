// app/api/contact/route.ts
export const runtime = "nodejs"; // Ensure it's not Edge

import { db, admin } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message, website, recaptchaToken } = await request.json();

    // Honeypot field to trap bots
    if (website?.trim()) {
      console.warn("Bot detected via honeypot");
      return NextResponse.json({ message: "Bot submission ignored." }, { status: 200 });
    }


    // Validate inputs
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    // Build doc
    const docData = {
      name: typeof name === "string" ? name.trim() : "Anonymous",
      email: email.trim(),
      message: typeof message === "string" ? message.trim() : "",
      recaptchaToken: typeof recaptchaToken === "string" ? recaptchaToken.trim() : "",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection("contacts").add(docData);

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Server error. Please try again later." }, { status: 500 });
  }
}









