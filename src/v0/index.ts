import Elysia from "elysia";
import { serviceDetailController } from "./controllers/serviceDetailController";
import { InstrumentController } from "./controllers/InstrumentController";
import { ResponsiblePersonController } from "./controllers/ResponsiblePersonController";
import { StaffController } from "./controllers/StaffController";

export const v0Controller = new Elysia({ prefix: "/api/v0" })
    .use(serviceDetailController)
    .use(InstrumentController)
    .use(ResponsiblePersonController)
    .use(StaffController)
    .get("/", () => "Hello Elysia v0")
    .get("/health", () => "Healthy")
    .get("/version", () => "v0")
    