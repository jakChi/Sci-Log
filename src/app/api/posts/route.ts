import { NextResponse } from "next/server";
import { getAllPosts } from "@/src/lib/api";

export async function GET() {
  const posts = getAllPosts();
  return NextResponse.json(posts);
}