import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // TODO: Save to database or forward to email service here

  return NextResponse.json({ success: true, message: "Message received." }, { status: 200 });
}
