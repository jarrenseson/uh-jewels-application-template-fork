/*
  Warnings:

  - Added the required column `owner` to the `Jewels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jewels" ADD COLUMN     "owner" TEXT NOT NULL;
