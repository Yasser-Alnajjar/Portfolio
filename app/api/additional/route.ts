import { NextResponse } from "next/server";
import { supabase } from "@lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase.from("additional_skills").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
