import Elysia from "elysia";
import {
    getAll as getAllFromServ,
    getById as getByIdFromServ,
    create as createFromServ,
    update as updateFromServ,
    logicalDelete as logicalDeleteFromServ
} from "../services/ServiceDetailServ";
import { ServiceDetail } from "@prisma/client";

export const serviceDetailController = new Elysia({ prefix: "/serviceDetail" })
    .get("/getAll", async () => {
        return await getAllFromServ();
    })
    .get("/getById", async (req: { query: { id: string; instrumentId: string }; }) => {
        return await getByIdFromServ(req.query.id, req.query.instrumentId);
    })
    .post("/create", async (req: { body: ServiceDetail; }) => {
        return await createFromServ(req.body);
    })
    .put("/update", async (req: { params: { id: string; instrumentId: string }; body: ServiceDetail; }) => {
        return await updateFromServ(req.params.id, req.params.instrumentId, req.body);
    })
    .delete("/logicalDelete", async (req: { params: { id: string; instrumentId: string }; }) => {
        return await logicalDeleteFromServ(req.params.id, req.params.instrumentId);
    })
    
