/*
  Warnings:

  - The primary key for the `ServiceDetail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ServiceDetail` table. All the data in the column will be lost.
  - Added the required column `instrumentId` to the `ServiceDetail` table without a default value. This is not possible if the table is not empty.
  - The required column `serviceId` was added to the `ServiceDetail` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "ServiceDetail" DROP CONSTRAINT "ServiceDetail_pkey",
DROP COLUMN "id",
ADD COLUMN     "instrumentId" VARCHAR(255) NOT NULL,
ADD COLUMN     "serviceId" TEXT NOT NULL,
ADD CONSTRAINT "ServiceDetail_pkey" PRIMARY KEY ("serviceId", "instrumentId");

-- CreateTable
CREATE TABLE "ResponsibleHistory" (
    "instrumentId" TEXT NOT NULL,
    "responsiblePersonId" TEXT NOT NULL,
    "startDT" TIMESTAMP(3) NOT NULL,
    "endDT" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResponsibleHistory_pkey" PRIMARY KEY ("instrumentId","responsiblePersonId","startDT")
);

-- CreateTable
CREATE TABLE "ResponsiblePerson" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "propositionalTitle" VARCHAR(255) NOT NULL,
    "isResigned" BOOLEAN NOT NULL,

    CONSTRAINT "ResponsiblePerson_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServiceDetail" ADD CONSTRAINT "ServiceDetail_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
