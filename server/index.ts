import { Hono } from "hono";
import { projects } from "./routes/base";

const api = new Hono();
api.basePath("/api");
api.route("/projects", projects.default);

export type HonoRoutes = typeof api;
export default {
  port: 5174,
  fetch: api.fetch,
};
