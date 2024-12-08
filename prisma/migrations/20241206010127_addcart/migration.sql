-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "jewelId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_jewelId_fkey" FOREIGN KEY ("jewelId") REFERENCES "Jewels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
