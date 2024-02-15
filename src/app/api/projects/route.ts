import { projects } from "@/data/projects";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(projects);
}
