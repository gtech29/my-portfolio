import { NextResponse } from "next/server";
import validator from "validator";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

// In-memory rate limit map: IP => timestamp
// const RATE_LIMIT = new Map<string, number>();
// const RATE_LIMIT_WINDOW = 60_000; // 60 seconds

export async function POST(request: Request) {
  // const ip =
  //   request.headers.get("x-forwarded-for") ||
  //   request.headers.get("cf-connecting-ip") ||
  //   "unknown";

  // const now = Date.now();
  // const lastRequest = RATE_LIMIT.get(ip);

  // if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW) {
  //   return NextResponse.json(
  //     { error: "Too many requests. Please try again later." },
  //     { status: 429 }
  //   );
  // }

  // RATE_LIMIT.set(ip, now);

  try {
    const body = await request.json();
    const { name, email, message,  } = body; //add later when live : website

    // Honeypot check
    // if (website?.trim()) {
    //   console.warn("Honeypot triggered by suspicious submission:", { ip, website }); 
    //   return NextResponse.json(
    //     { error: "Honeypot triggered. Bot blocked." },
    //     { status: 400 }
    //   );
    // }

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Email validation
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    const cleanName = validator.escape(name.trim());
    const cleanEmail = validator.normalizeEmail(email) || "";
    const cleanMessage = validator.escape(message.trim());

    // Save to Firestore
    await addDoc(collection(db, "contacts"), {
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
      timestamp: serverTimestamp(),
      // ip,
    });

    return NextResponse.json(
      { success: true, message: "Message received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}

// Optional: block GET requests to this endpoint with 405
export async function GET() {
  return NextResponse.json(
    { error: "GET is not supported on this endpoint. Use POST." },
    { status: 405 }
  );
}
