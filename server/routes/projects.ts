import { Hono } from "hono";

const projects = new Hono();

projects.get("/", (c) => c.text("Hello World"));

export default projects;
