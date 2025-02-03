import Elysia from "elysia";
import { serviceDetailController } from "./controllers/serviceDetailController";

export const v0Controller = new Elysia({ prefix: "/api/v0" })
    .use(serviceDetailController)
    .get("/", () => "Hello Elysia v0")
    .get("/health", () => "Healthy")
    .get("/version", () => "v0")
    