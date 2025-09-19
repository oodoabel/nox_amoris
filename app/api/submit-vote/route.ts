import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();
interface Vote {
  candidate: string;
  category: string;
  totalVotes: number;
}

export async function POST(req: NextRequest) {
  const { votes }: { votes: Vote[] } = await req.json();

  const created = [];
  for (const nom of votes) {
    try {
      // Use upsert to update if exists, create if not
      const newNom = await prisma.vote.upsert({
        // where: {
        //   candidate_category: {
        //     // This assumes you have a unique constraint on nominee + category
        //     candidate: nom.nominee,
        //     category: nom.category,
        //   },
        // },
        update: {
          totalVotes: {
            increment: 1, // Increase existing quantity
          },
        },
        create: {
          candidate: nom.candidate,
          category: nom.category,
          totalVotes: 1,
        },
      });
      created.push(newNom);
    } catch (error) {
      console.error(`Failed to process nomination for ${nom.nominee}:`, error);
    }
  }
}
