/*
  Warnings:

  - You are about to drop the `CartTable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CartTable";

-- CreateTable
CREATE TABLE "CartItems" (
    "id" SERIAL NOT NULL,
    "owner" TEXT NOT NULL,
    "jewelName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "CartItems_pkey" PRIMARY KEY ("id")
);
