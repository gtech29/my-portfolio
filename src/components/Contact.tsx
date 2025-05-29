import { NextResponse } from "next/server";
import validator from "validator";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

// In-memory rate limit map: IP => timestamp
// const RATE_LIMIT = new Map<string, number>();

// Helper to add timeout to async operations
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Operation timed out")), ms)
    ),
  ]);
}

export async function POST(request: Request) {
  // const ip =
  //   request.headers.get("x-forwarded-for") ||
  //   request.headers.get("cf-connecting-ip") ||
  //   "unknown";
  // const now = Date.now();
  // const lastRequest = RATE_LIMIT.get(ip);

  
  // if (lastRequest && now - lastRequest < 60_000) {
  //   return NextResponse.json(
  //     { error: "Too many requests. Please try again later." },
  //     { status: 429 }
  //   );
  // }

  // RATE_LIMIT.set(ip, now);

  try {
    const { name, email, message, website } = await request.json();

    // Honeypot check
    if (website && website.trim() !== "") {
      console.warn("Honeypot triggered:", { ip, website });
      return NextResponse.json(
        { error: "Honeypot triggered. Bot blocked." },
        { status: 400 }
      );
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    const cleanName = validator.escape(name.trim());
    const cleanEmail = validator.normalizeEmail(email) || "";
    const cleanMessage = validator.escape(message.trim());

    // Firestore save with timeout (8 seconds)
    await withTimeout(
      addDoc(collection(db, "contacts"), {
        name: cleanName,
        email: cleanEmail,
        message: cleanMessage,
        timestamp: serverTimestamp(),
        ip,
      }),
      8000
    );

    return NextResponse.json(
      { success: true, message: "Message received." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error);
    if (error.message === "Operation timed out") {
      return NextResponse.json(
        { error: "Server took too long to respond. Please try again later." },
        { status: 504 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}
