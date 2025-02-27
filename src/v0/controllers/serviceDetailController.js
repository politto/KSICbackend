import Elysia from "elysia";
import { getAll as getAllFromServ, getById as getByIdFromServ, create as createFromServ, update as updateFromServ, logicalDelete as logicalDeleteFromServ } from "../services/ServiceDetailServ";
export const serviceDetailController = new Elysia({ prefix: "/serviceDetail" })
    .get("/getAll", async () => {
    return await getAllFromServ();
})
    .get("/getById", async (req) => {
    return await getByIdFromServ(req.query.id, req.query.instrumentId);
})
    .post("/create", async (req) => {
    return await createFromServ(req.body);
})
    .put("/update", async (req) => {
    return await updateFromServ(req.params.id, req.params.instrumentId, req.body);
})
    .delete("/logicalDelete", async (req) => {
    return await logicalDeleteFromServ(req.params.id, req.params.instrumentId);
});
