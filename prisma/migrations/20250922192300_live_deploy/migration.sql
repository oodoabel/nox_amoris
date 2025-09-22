/*
  Warnings:

  - A unique constraint covering the columns `[candidateId,userId,categoryId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Vote_candidateId_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Vote_candidateId_userId_categoryId_key" ON "public"."Vote"("candidateId", "userId", "categoryId");
