/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Candidate` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Candidate` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vote` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `candidate` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voterEmail` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Candidate" DROP CONSTRAINT "Candidate_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Vote" DROP CONSTRAINT "Vote_candidateId_fkey";

-- AlterTable
ALTER TABLE "public"."Candidate" DROP COLUMN "categoryId",
DROP COLUMN "name",
ADD COLUMN     "candidate" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "totalVotes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "voterEmail" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Category";

-- DropTable
DROP TABLE "public"."Vote";
