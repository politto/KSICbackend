/*
  Warnings:

  - The primary key for the `ResponsibleHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `instrumentId` on the `ResponsibleHistory` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `responsiblePersonId` on the `ResponsibleHistory` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[instrumentId]` on the table `ResponsibleHistory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[responsiblePersonId]` on the table `ResponsibleHistory` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `ResponsibleHistory` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "ResponsibleHistory" DROP CONSTRAINT "ResponsibleHistory_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "ResponsibleHistory" DROP CONSTRAINT "ResponsibleHistory_responsiblePersonId_fkey";

-- AlterTable
ALTER TABLE "Instrument" ALTER COLUMN "questionSet" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ResponsibleHistory" DROP CONSTRAINT "ResponsibleHistory_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "instrumentId" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "responsiblePersonId" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "endDT" DROP NOT NULL,
ADD CONSTRAINT "ResponsibleHistory_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "ResponsibleHistory_instrumentId_key" ON "ResponsibleHistory"("instrumentId");

-- CreateIndex
CREATE UNIQUE INDEX "ResponsibleHistory_responsiblePersonId_key" ON "ResponsibleHistory"("responsiblePersonId");

-- AddForeignKey
ALTER TABLE "ResponsibleHistory" ADD CONSTRAINT "ResponsibleHistory_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResponsibleHistory" ADD CONSTRAINT "ResponsibleHistory_responsiblePersonId_fkey" FOREIGN KEY ("responsiblePersonId") REFERENCES "ResponsiblePerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
