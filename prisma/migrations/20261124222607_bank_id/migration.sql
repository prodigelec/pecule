/*
  Warnings:

  - Added the required column `bankId` to the `BankAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BankAccount" ADD COLUMN     "bankId" TEXT NOT NULL,
ALTER COLUMN "bankName" DROP DEFAULT;
