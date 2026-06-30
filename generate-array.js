const tools = [
  "ChatGPT", "Open Claw", "Claude Code", "Claude", "Gemini", "Make", "n8n", "OpenAI", 
  "Zapier", "GitHub", "Copilot", "DALL-E", "Lovable", "V0.dev", "Bolt", "Replit", 
  "Tempo", "Manus AI", "Emergent AI", "Cursor", "Windsurf", "Antigravity", "Codepilot", 
  "Perplexity", "Firebase Studio", "Rork", "Bubble", "Claude Design", "Google Stitch"
];

let arrayStr = "const AI_TOOLS: AiTool[] = [\n";
for (const t of tools) {
  const filename = t.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() + '.png';
  arrayStr += `  { name: "${t}", color: "#e5e7eb", bg: "#111111", icon: <img src="/icons/${filename}" alt="${t}" width={28} height={28} style={{ borderRadius: 4 }} /> },\n`;
}
arrayStr += "];\n";

const fs = require('fs');
fs.writeFileSync('d:/intensive-program/ai-tools-array.txt', arrayStr);
