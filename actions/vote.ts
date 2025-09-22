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

    if (!userId) {
      return {
        status: "failed",
        code: 401,
        message: "Unauthorized: No session",
      };
    }
    console.log({ userId, votes });

    // Use a single, non-interactive transaction for all creates to avoid interactive tx timeouts
    const operations = Object.entries(votes).map(([categoryId, candidateId]) =>
      prisma.vote.create({ data: { candidateId, userId, categoryId } })
    );

    await prisma.$transaction(operations);

    (await cookies()).delete("session");

    return {
      status: "success",
      code: 201,
      message: "Voting successful",
    };
  } catch (error: any) {
    console.error("Error in vote function:", error);
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

  if (!categories) return null;

  return categories;
}

// Aggregated results: categories with candidates and their vote counts
export type ResultCandidate = {
  id: string;
  name: string;
  image?: string | null;
  votes: number;
};

export type ResultCategory = {
  id: string;
  name: string;
  candidates: ResultCandidate[];
};

export async function allResults(): Promise<TResponse> {
  const isAuthorized = (await cookies()).get("admin")?.value === "true";
  if (!isAuthorized) {
    return {
      status: "failed",
      code: 401,
      message: "Unauthorized request",
    };
  }

  const cats = await prisma.category.findMany({
    include: {
      candidates: {
        include: { _count: { select: { votes: true } } },
      },
    },
    orderBy: { name: "asc" },
  });

  const response = cats.map((c) => ({
    id: c.id,
    name: c.name,
    candidates: c.candidates.map((cd) => ({
      id: cd.id,
      name: cd.name,
      image: cd.image ?? null,
      votes: (cd as any)._count?.votes ?? 0,
    })),
  }));

  return {
    status: "success",
    code: 200,
    data: response,
  };
}
