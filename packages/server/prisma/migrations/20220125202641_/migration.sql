/*
  Warnings:

  - You are about to drop the column `reviewData` on the `Car` table. All the data in the column will be lost.
  - Added the required column `reviewDate` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "reviewData",
ADD COLUMN     "reviewDate" TIMESTAMP(3) NOT NULL;
