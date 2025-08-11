import { NextResponse } from "next/server";
import { supabase } from "@lib/supabaseClient";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("about_me")
      .select("*")
      .order("type", { ascending: true })
      .order("order_index", { ascending: true });
    if (error) {
      return NextResponse.json(
        { data: null, error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ data, error: null }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { data: null, error: "Internal server error" },
      { status: 500 }
    );
  }
}
