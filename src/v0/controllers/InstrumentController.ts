import Elysia from 'elysia';
import {
    getAll as getAllFromServ,
    getByIdWithResponsiblePerson as getByIdWithResponsiblePersonFromServ,
    create as createFromServ,
    createMany as createManyFromServ,
    createWithNewResponsibleHistory as createWithNewResponsibleHistoryFromServ,
    createNewResponsibleHistory as createNewResponsibleHistoryFromServ,
    update as updateFromServ,
    updateQuestionSet as updateQuestionSetFromServ,
    logicalDelete as logicalDeleteFromServ
} from '../services/InstrumentServ';

export const InstrumentController = new Elysia({ prefix: "/instrument" })

    
    .get("/", async () => {
        return await getAllFromServ();
    })
    .get("/getByIdWithResponsiblePerson/:id", async (req) => {
        console.log(req.params.id);
        
        return await getByIdWithResponsiblePersonFromServ(req.params.id);
    })

    .post("/", async (req: { body: any; }) => {
        return await createFromServ(req.body);
    })

    .post("/createMany", async (req: { body: any; }) => {
        return await createManyFromServ(req.body);
    })

    .post("/createWithNewResponsibleHistory", async (req: { body: any; }) => {
        return await createWithNewResponsibleHistoryFromServ(req.body.instrument, req.body.responsiblePersonId);
    })

    .post("/createNewResponsibleHistory/:responsiblePersonId/:instrumentId", async (req) => {
        return await createNewResponsibleHistoryFromServ(req.params.responsiblePersonId, req.params.instrumentId);
    })

    .put("/update", async (req: { query: { id: string; }; body: any; }) => {
        return await updateFromServ(req.query.id, req.body);
    })
    .put("/updateQuestionSet", async (req: { query: { id: string; }; body: any; }) => {
        return await updateQuestionSetFromServ(req.query.id, req.body);
    })
    .put("/logicalDelete", async (req: { query: { id: string; }; }) => {
        return await logicalDeleteFromServ(req.query.id);
    })