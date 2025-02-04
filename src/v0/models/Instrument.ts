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
    isScientistRequired: t.Boolean(),
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

//example
// {
//   "id": "cm6qp0pol0002vmnkcg6if2v9",
//   "isScientistRequired": true,
//   "name": "SCP - 079",
//   "typeOfInstrument": "Euclid",
//   "detail" : "Old AI within 80s computer",
//   "avalibility": "AVAILABLE",
//   "picLink": "https://static.wikia.nocookie.net/roblox-scp-roleplay-game/images/2/20/SCP-079.png/revision/latest?cb=20230117021950",
//   "questionSet": "<h1>NO question</h1> <label for=\"isSCPPersonnel\">Are you SCP foundation's personnel?</label><select name=\"isSCPPersonnel\"><option value =\"y\">yes</option><option value =\"n\">no</option></select>",
//   "application": "educational",
//   "documentLinkPath": "https://scp-wiki.wikidot.com/scp-079",
//   "isDeleted": false
// }