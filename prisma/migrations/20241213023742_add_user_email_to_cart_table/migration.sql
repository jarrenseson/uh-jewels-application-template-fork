/*
  Warnings:

  - A unique constraint covering the columns `[userEmail]` on the table `CartTable` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `CartTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartTable" ADD COLUMN     "userEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CartTable_userEmail_key" ON "CartTable"("userEmail");
