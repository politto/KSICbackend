import { ResponsiblePerson } from '@prisma/client';
import {
    getAll as getAllFromServ,
    getById as getByIdFromServ,
    create as createFromServ,
    update as updateFromServ,
    logicalDelete as logicalDeleteFromServ
} from '../services/ResponsiblePersonServ';

import Elysia from 'elysia';

export const ResponsiblePersonController = new Elysia({ prefix: "/responsiblePerson" })
    .get("/getAll", async () => {
        return await getAllFromServ();
    })
    .get("/getById", async (req: { query: { id: string; }; }) => {
        return await getByIdFromServ(req.query.id);
    })
    .post("/create", async (req: { body: any; }) => {
        return await createFromServ(req.body);
    })
    .post("/createMany", async (req: { body: Omit<ResponsiblePerson, "id">[]; }) => {
        return await createFromServ(req.body);
    })
    .put("/update", async (req: { query: { id: string; }; body: any; }) => {
        return await updateFromServ(req.query.id, req.body);
    })
    .delete("/logicalDelete", async (req: { query: { id: string; }; }) => {
        return await logicalDeleteFromServ(req.query.id);
    })