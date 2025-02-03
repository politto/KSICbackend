/*
  Warnings:

  - Added the required column `isDeleted` to the `Instrument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDeleted` to the `ServiceDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Instrument" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "ServiceDetail" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL;
