import "@/index.css";

import { useToolInfo } from "../helpers.js";

export default function Greet() {
  const { input, output } = useToolInfo<"greet_widget">();
  const name = (output as { name?: string } | undefined)?.name ?? input?.name;

  return (
    <div className="container">
      <div className="card">
        <h1>{name ? `Hello, ${name}!` : "Greeting view loaded."}</h1>
        <p>Greeting widget served by mcp-detect-skybridge.</p>
      </div>
    </div>
  );
}
