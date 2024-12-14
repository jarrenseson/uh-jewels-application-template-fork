/*
  Warnings:

  - You are about to drop the column `price` on the `CartTable` table. All the data in the column will be lost.
  - The `jewelName` column on the `CartTable` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `quantity` column on the `CartTable` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CartTable" DROP COLUMN "price",
DROP COLUMN "jewelName",
ADD COLUMN     "jewelName" TEXT[],
DROP COLUMN "quantity",
ADD COLUMN     "quantity" INTEGER[];
