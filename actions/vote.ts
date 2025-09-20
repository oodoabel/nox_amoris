"use server";

import prisma from "@/lib/prisma";
import { TResponse } from "./auth";
import { Category } from "@/generated/prisma";
import { cookies } from "next/headers";

export const vote = async (
  votes: Record<string, string>
): Promise<TResponse> => {
  try {
    const userId = (await cookies()).get("session")?.value!;
    console.log({ userId, votes });

    // Use a single, non-interactive transaction for all creates to avoid interactive tx timeouts
    const operations = Object.entries(votes).map(([categoryId, candidateId]) =>
      prisma.vote.create({ data: { candidateId, userId, categoryId } })
    );

    await prisma.$transaction(operations, {
      timeout: 15000, // increase timeout to reduce "Transaction already closed" errors
      maxWait: 10000, // wait up to 10s for a connection from the pool
    });

    return {
      status: "success",
      code: 201,
      message: "Voting successful",
    };
  } catch (error: any) {
    return {
      status: "error",
      code: 500,
      message: error.message || "Failed to process vote",
    };
  }
};

export async function allCategories(): Promise<Category[] | null> {
  const categories = await prisma.category.findMany({
    include: { candidates: true },
  });

  console.log({ categories });

  if (!categories) return null;

  return categories;
}
