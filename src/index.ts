import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger"
import { v0Controller } from "./v0";

const app = new Elysia()
.use(swagger())
.use(v0Controller)
.get("/", () => "Hello Elysia")
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app
