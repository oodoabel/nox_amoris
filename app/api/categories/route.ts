// app/api/categories/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // custom Prisma client import

// GET all categories with their candidates
export async function GET() {
  try {
    const categories = await prisma.category
      .findMany
      //     {
      //   include: {
      //     candidates: true, // fetch candidates
      //   },
      // }
      ();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
