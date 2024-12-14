-- CreateTable
CREATE TABLE "CartTable" (
    "id" SERIAL NOT NULL,
    "jewelName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "CartTable_pkey" PRIMARY KEY ("id")
);
