import { describe, test, expect } from "vitest";
import projects from "#routes/projects.ts";

describe("Projects", () => {
  test("GET /", async () => {
    const res = await projects.request("/");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello World");
  });
});
