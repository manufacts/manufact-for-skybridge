import { McpServer } from "skybridge/server";
import { z } from "zod";

const server = new McpServer(
  {
    name: "mcp-detect-skybridge",
    version: "0.1.0",
    description: "Smoke-test fixture for Skybridge framework detection (MCP Apps).",
  },
  { capabilities: {} },
)
  .registerTool(
    {
      name: "echo",
      description: "Echo the input back as text.",
      inputSchema: { text: z.string().describe("Text to echo") },
    },
    async ({ text }) => ({
      content: [{ type: "text", text }],
      isError: false,
    }),
  )
  .registerTool(
    {
      name: "greet_widget",
      description: "Greet someone and render a Skybridge view.",
      inputSchema: { name: z.string().describe("Name to greet") },
      view: {
        component: "greet",
        description: "Greeting card View",
      },
    },
    async ({ name }) => ({
      structuredContent: { name },
      content: [{ type: "text", text: `Hello, ${name}!` }],
      isError: false,
    }),
  );

if (process.env.NODE_ENV === "production") {
  const { default: manifest } = await import("./vite-manifest.js");
  server.setViteManifest(manifest);
}

export default await server.run();

export type AppType = typeof server;
