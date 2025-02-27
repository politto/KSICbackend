import Elysia from 'elysia';
import { getAll as getAllFromServ, getByIdWithResponsiblePerson as getByIdWithResponsiblePersonFromServ, create as createFromServ, createWithNewResponsibleHistory as createWithNewResponsibleHistoryFromServ, createNewResponsibleHistory as createNewResponsibleHistoryFromServ, update as updateFromServ, updateQuestionSet as updateQuestionSetFromServ, logicalDelete as logicalDeleteFromServ } from '../services/InstrumentServ';
export const InstrumentController = new Elysia({ prefix: "/instrument" })
    .get("/getAll", async () => {
    return await getAllFromServ();
})
    .get("/getByIdWithResponsiblePerson/:id", async (req) => {
    console.log(req.params.id);
    return await getByIdWithResponsiblePersonFromServ(req.params.id);
})
    .post("/create", async (req) => {
    return await createFromServ(req.body);
})
    .post("/createWithNewResponsibleHistory", async (req) => {
    return await createWithNewResponsibleHistoryFromServ(req.body.instrument, req.body.responsiblePersonId);
})
    .post("/createNewResponsibleHistory/:responsiblePersonId/:instrumentId", async (req) => {
    return await createNewResponsibleHistoryFromServ(req.params.responsiblePersonId, req.params.instrumentId);
})
    .put("/update", async (req) => {
    return await updateFromServ(req.query.id, req.body);
})
    .put("/updateQuestionSet", async (req) => {
    return await updateQuestionSetFromServ(req.query.id, req.body);
})
    .put("/logicalDelete", async (req) => {
    return await logicalDeleteFromServ(req.query.id);
});
