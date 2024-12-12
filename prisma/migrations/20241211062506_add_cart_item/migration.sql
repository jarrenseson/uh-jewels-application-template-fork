/*
  Warnings:

  - You are about to drop the `_CartProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CartProducts" DROP CONSTRAINT "_CartProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CartProducts" DROP CONSTRAINT "_CartProducts_B_fkey";

-- DropTable
DROP TABLE "_CartProducts";

-- CreateTable
CREATE TABLE "CartItem" (
    "id" SERIAL NOT NULL,
    "cartId" INTEGER NOT NULL,
    "jewelId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartId_jewelId_key" ON "CartItem"("cartId", "jewelId");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_jewelId_fkey" FOREIGN KEY ("jewelId") REFERENCES "Jewels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
