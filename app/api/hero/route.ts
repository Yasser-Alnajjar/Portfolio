import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@lib/supabaseClient";

export async function GET() {
  try {
    const { data, error } = await supabase.from("hero").select("*");

    if (error) {
      return NextResponse.json(
        { data: null, error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ data, error: null });
  } catch (error) {
    return NextResponse.json(
      { data: null, error: "Internal server error" },
      { status: 500 }
    );
  }
}
