import { NextResponse } from "next/server";
import { signIn } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const result = await signIn(email, password);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      user: result.user,
      message: "Successfully authenticated session (Community Edition)",
    });
  } catch (_err) {
    return NextResponse.json(
      { error: "Invalid JSON request payload" },
      { status: 400 }
    );
  }
}
