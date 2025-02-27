import { getAll as getAllFromServ, getById as getByIdFromServ, create as createFromServ, update as updateFromServ, logicalDelete as logicalDeleteFromServ } from '../services/ResponsiblePersonServ';
import Elysia from 'elysia';
export const ResponsiblePersonController = new Elysia({ prefix: "/responsiblePerson" })
    .get("/getAll", async () => {
    return await getAllFromServ();
})
    .get("/getById", async (req) => {
    return await getByIdFromServ(req.query.id);
})
    .post("/create", async (req) => {
    return await createFromServ(req.body);
})
    .put("/update", async (req) => {
    return await updateFromServ(req.query.id, req.body);
})
    .delete("/logicalDelete", async (req) => {
    return await logicalDeleteFromServ(req.query.id);
});
