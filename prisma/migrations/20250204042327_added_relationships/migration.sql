-- AddForeignKey
ALTER TABLE "ResponsibleHistory" ADD CONSTRAINT "ResponsibleHistory_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResponsibleHistory" ADD CONSTRAINT "ResponsibleHistory_responsiblePersonId_fkey" FOREIGN KEY ("responsiblePersonId") REFERENCES "ResponsiblePerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
