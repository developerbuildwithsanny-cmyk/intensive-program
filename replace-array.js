const fs = require('fs');
const content = fs.readFileSync('d:/intensive-program/src/app/page.tsx', 'utf8');
const lines = content.split('\n');

const startIdx = lines.findIndex(l => l.startsWith('const AI_TOOLS: AiTool[] = ['));
const endIdx = lines.findIndex((l, i) => i > startIdx && l.startsWith('];'));

const arrayStr = fs.readFileSync('d:/intensive-program/ai-tools-array.txt', 'utf8');

const newLines = [
  ...lines.slice(0, startIdx),
  arrayStr.trim(),
  ...lines.slice(endIdx + 1)
];

fs.writeFileSync('d:/intensive-program/src/app/page.tsx', newLines.join('\n'));
console.log('Replaced AI_TOOLS array successfully.');
