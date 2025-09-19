/*
  Warnings:

  - You are about to drop the `Candidate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Candidate";

-- CreateTable
CREATE TABLE "public"."Vote" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "voterEmail" TEXT NOT NULL,
    "candidate" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "totalVotes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Vote_category_idx" ON "public"."Vote"("category");

-- CreateIndex
CREATE INDEX "Vote_candidate_idx" ON "public"."Vote"("candidate");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_voterEmail_category_key" ON "public"."Vote"("voterEmail", "category");
