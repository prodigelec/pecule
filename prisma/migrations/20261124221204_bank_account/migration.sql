/*
  Warnings:

  - Added the required column `accountId` to the `Import` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Operation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Import_importedAt_idx";

-- DropIndex
DROP INDEX "Operation_date_idx";

-- AlterTable
ALTER TABLE "Import" ADD COLUMN     "accountId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Operation" ADD COLUMN     "accountId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "BankAccount" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bankName" TEXT NOT NULL DEFAULT 'La Banque Postale',
    "accountLast4" TEXT NOT NULL,
    "openingBalanceCents" INTEGER NOT NULL,
    "openingBalanceDate" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Import_accountId_importedAt_idx" ON "Import"("accountId", "importedAt");

-- CreateIndex
CREATE INDEX "Operation_accountId_date_idx" ON "Operation"("accountId", "date");

-- AddForeignKey
ALTER TABLE "Operation" ADD CONSTRAINT "Operation_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "BankAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Import" ADD CONSTRAINT "Import_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "BankAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;
