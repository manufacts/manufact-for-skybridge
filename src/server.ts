import { McpServer } from "skybridge/server";
import { z } from "zod";

const server = new McpServer({ name: "mcp-detect-skybridge", version: "0.0.1" }, {})
  .registerTool(
    {
      name: "greeting",
      description: "Greet someone by name (skybridge framework smoke test).",
      inputSchema: { name: z.string() },
      view: { component: "greeting" },
    },
    async ({ name }) => ({ structuredContent: { message: `Hello, ${name}!` } }),
  );

export default server;
