"use server";

import prisma from "@/lib/prisma";
import { TResponse } from "./auth";
import { Category } from "@/generated/prisma";

export const vote = async (
  userId: string,
  votes: Record<string, string>
): Promise<TResponse> => {
  try {
    const cast = Object.entries(votes).map(([categoryId, candidateId]) => {
      return prisma.vote.create({
        data: { candidateId, userId, categoryId },
      });
    });
    const response = await Promise.allSettled(cast);

    console.log({ votes, response });

    const failed = response.filter((r) => r.status == "rejected");

    if (failed.length > 0) throw new Error("Failed to process vote");

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
