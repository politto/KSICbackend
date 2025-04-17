/*
  Warnings:

  - Added the required column `spec` to the `Instrument` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Instrument" ADD COLUMN     "spec" VARCHAR(255) NOT NULL;
