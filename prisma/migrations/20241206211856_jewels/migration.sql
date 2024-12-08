/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Jewels` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_jewelId_fkey";

-- AlterTable
ALTER TABLE "Jewels" ADD COLUMN     "description" TEXT NOT NULL;

-- DropTable
DROP TABLE "Cart";
