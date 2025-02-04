import Elysia from 'elysia';
import {
    getAll as getAllFromServ,
    getByIdWithResponsiblePerson as getByIdWithResponsiblePersonFromServ,
    create as createFromServ,
    update as updateFromServ,
    updateQuestionSet as updateQuestionSetFromServ,
    logicalDelete as logicalDeleteFromServ
} from '../services/InstrumentServ';

export const InstrumentController = new Elysia({ prefix: "/instrument" })

    .get("/getAll", async () => {
        return await getAllFromServ();
    })
    .get("/getByIdWithResponsiblePerson", async (req: { query: { id: string; }; }) => {
        return await getByIdWithResponsiblePersonFromServ(req.query.id);
    })

    .post("/create", async (req: { body: any; }) => {
        return await createFromServ(req.body);
    })

    .post("/createWithNewResponsibleHistory", async (req: { body: any; }) => {
        return await createFromServ(req.body);
    })

    .post("/createNewResponsibleHistory", async (req: { body: any; }) => {
        return await createFromServ(req.body);
    })

    .put("/update", async (req: { query: { id: string; }; body: any; }) => {
        return await updateFromServ(req.query.id, req.body);
    })
    .put("/updateQuestionSet", async (req: { query: { id: string; }; body: any; }) => {
        return await updateQuestionSetFromServ(req.query.id, req.body);
    })
    .delete("/logicalDelete", async (req: { query: { id: string; }; }) => {
        return await logicalDeleteFromServ(req.query.id);
    })