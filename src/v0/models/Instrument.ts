import { t } from 'elysia'


// model Instrument {
//     id          String   @id @default(cuid())
//     isScientistRequred Boolean
//     name        String   @db.VarChar(255)
//     typeOfInstrument String   @db.VarChar(255)
//     detail     String   @db.VarChar(255)
//     avalibility InstrumentAvalibility
//     picLink     String   @db.VarChar(255)
//     questionSet String  //free length string
//     application String
//     documentLinkPath String
//   }
//   
//   enum InstrumentAvalibility {
//     AVAILABLE
//     UNAVAILABLE
//     NOT_READY_FOR_USE
//   }

export const InstrumentDto = t.Object({
    id: t.String(),
    isScientistRequred: t.Boolean(),
    name: t.String(),
    typeOfInstrument: t.String(),
    detail: t.String(),
    avalibility: t.Enum({
        AVAILABLE: "AVAILABLE",
        UNAVAILABLE: "UNAVAILABLE",
        NOT_READY_FOR_USE: "NOT_READY_FOR_USE",
    }),
    picLink: t.String(),
    questionSet: t.String(),
    application: t.String(),
    documentLinkPath: t.String(),
});