-- CreateEnum
CREATE TYPE "typeOfCust" AS ENUM ('inHouse', 'government', 'private');

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "proposition" VARCHAR(255) NOT NULL,
    "workplace" VARCHAR(255) NOT NULL,
    "career" VARCHAR(255) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);
