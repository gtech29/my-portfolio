// app/api/contact/route.ts
export const runtime = "nodejs";

import { db, admin } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message, website, recaptchaToken } = await request.json();

    // Honeypot field for bots
    if (website?.trim()) {
      console.warn("Bot detected via honeypot");
      return NextResponse.json({ message: "Bot submission ignored." }, { status: 403 });
    }

    // Validate required inputs
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    if (!recaptchaToken || typeof recaptchaToken !== "string") {
      return NextResponse.json({ error: "Missing CAPTCHA token." }, { status: 400 });
    }

    // ✅ reCAPTCHA verification with Google
    const captchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const captchaData = await captchaRes.json();

    if (!captchaData.success || captchaData.score < 0.5) {
      console.warn("Failed reCAPTCHA:", captchaData);
      return NextResponse.json({ error: "Failed CAPTCHA verification." }, { status: 403 });
    }

    // Store in Firestore
    const docData = {
      name: typeof name === "string" ? name.trim() : "Anonymous",
      email: email.trim(),
      message: typeof message === "string" ? message.trim() : "",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection("contacts").add(docData);

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Server error. Please try again later." }, { status: 500 });
  }
}
