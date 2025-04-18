import Elysia from "elysia";
import { InstrumentController } from "./InstrumentController";
import { Instrument } from "@prisma/client";
import { beforeEach, describe, it, expect } from "bun:test";
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
app.use(InstrumentController)

const api = treaty(app);


describe("InstrumentController", () => {
    let createdInstrument: Instrument;

    it("should create a new instrument", async () => {
        const newInstrument: Omit<Instrument, 'id'> = {
            isScientistRequired: true,
            name: "SCP - 096",
            spec: "80s",
            typeOfInstrument: "Euclid",
            detail: "Shy Guy",
            avalibility: "AVAILABLE",
            picLink: "https://static.wikia.nocookie.net/roblox-scp-roleplay-game/images/2/20/SCP-096.png/revision/latest?cb=20230117021950",
            questionSet: "<h1>NO question</h1> <label for=\"isSCPPersonnel\">Are you SCP foundation's personnel?</label><select name=\"isSCPPersonnel\"><option value =\"y\">yes</option><option value =\"n\">no</option></select>",
            application: "educational",
            documentLinkPath: "https://scp-wiki.wikidot.com/scp-096",
            isDeleted: false
        };

        const response = await app.handle(new Request('http://localhost:3000/instrument/', {
            method: 'POST',
            body: JSON.stringify(newInstrument)
        }))
        console.log(response.text());
        
        const result = await response.json();
        expect(response.status).toBe(201);
        
        createdInstrument = result;
    });

});
   