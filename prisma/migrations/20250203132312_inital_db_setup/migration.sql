-- CreateEnum
CREATE TYPE "InstrumentAvalibility" AS ENUM ('AVAILABLE', 'UNAVAILABLE', 'NOT_READY_FOR_USE');

-- CreateTable
CREATE TABLE "Instrument" (
    "id" TEXT NOT NULL,
    "isScientistRequred" BOOLEAN NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "typeOfInstrument" VARCHAR(255) NOT NULL,
    "detail" VARCHAR(255) NOT NULL,
    "avalibility" "InstrumentAvalibility" NOT NULL,
    "picLink" VARCHAR(255) NOT NULL,
    "questionSet" TEXT NOT NULL,
    "application" TEXT NOT NULL,
    "documentLinkPath" TEXT NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceDetail" (
    "id" TEXT NOT NULL,
    "standardPriceForPublicOrg" DOUBLE PRECISION NOT NULL,
    "standardPriceForPrivateOrg" DOUBLE PRECISION NOT NULL,
    "standardPriceForInternal" DOUBLE PRECISION NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "unitCount" VARCHAR(6) NOT NULL,

    CONSTRAINT "ServiceDetail_pkey" PRIMARY KEY ("id")
);
