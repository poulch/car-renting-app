/*
  Warnings:

  - Added the required column `brand` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insuranceData` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reqistrationNumber` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviewData` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vin` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "insuranceData" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "reqistrationNumber" TEXT NOT NULL,
ADD COLUMN     "reviewData" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "vin" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "pesel" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
