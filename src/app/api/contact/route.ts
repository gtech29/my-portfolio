import { NextResponse } from "next/server";
import validator from "validator";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Adjust this if your path is different


// In-memory rate limit map: IP => timestamp
const RATE_LIMIT = new Map<string, number>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("cf-connecting-ip") || "unknown";
  const now = Date.now();
  const lastRequest = RATE_LIMIT.get(ip);

  //  Rate limiting: 1 request per 60 seconds
  if (lastRequest && now - lastRequest < 60_000) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  RATE_LIMIT.set(ip, now);

  try {
    const { name, email, message, website } = await request.json();
  
    if (website && website.trim() !== "") {
      console.warn("Honeypot triggered by suspicious submission:", { ip, website });
      return NextResponse.json({ error: "Honeypot triggered. Bot blocked." }, { status: 400 });
    }
  
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
  
    if (!validator.isEmail(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }
  
    const cleanName = validator.escape(name.trim());
    const cleanEmail = validator.normalizeEmail(email) || "";
    const cleanMessage = validator.escape(message.trim());
  
    // 🔥 Save to Firestore
    await addDoc(collection(db, "contacts"), {
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
      timestamp: serverTimestamp(),
      ip,
    });
  
    return NextResponse.json({ success: true, message: "Message received." }, { status: 200 });
  
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to process request." }, { status: 500 });
  }
  
}
