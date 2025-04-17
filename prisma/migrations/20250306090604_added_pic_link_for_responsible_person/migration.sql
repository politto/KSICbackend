/*
  Warnings:

  - Added the required column `picLink` to the `ResponsiblePerson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ResponsiblePerson" ADD COLUMN     "picLink" VARCHAR(255) NOT NULL;
