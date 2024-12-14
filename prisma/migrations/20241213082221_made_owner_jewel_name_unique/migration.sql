/*
  Warnings:

  - A unique constraint covering the columns `[owner,jewelName]` on the table `CartItems` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CartItems_owner_jewelName_key" ON "CartItems"("owner", "jewelName");
