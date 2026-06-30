const fs = require('fs');
const https = require('https');
const path = require('path');

const tools = {
  "ChatGPT": "chatgpt.com",
  "Open Claw": "openai.com",
  "Claude Code": "claude.ai",
  "Claude": "claude.ai",
  "Gemini": "gemini.google.com",
  "Make": "make.com",
  "n8n": "n8n.io",
  "OpenAI": "openai.com",
  "Zapier": "zapier.com",
  "GitHub": "github.com",
  "Copilot": "copilot.microsoft.com",
  "DALL-E": "openai.com",
  "Lovable": "lovable.dev",
  "V0.dev": "v0.dev",
  "Bolt": "bolt.new",
  "Replit": "replit.com",
  "Tempo": "tempo.io",
  "Manus AI": "manus.im",
  "Emergent AI": "emergentai.com",
  "Cursor": "cursor.com",
  "Windsurf": "codeium.com",
  "Antigravity": "google.com",
  "Codepilot": "github.com",
  "Perplexity": "perplexity.ai",
  "Firebase Studio": "firebase.google.com",
  "Rork": "rork.ai",
  "Bubble": "bubble.io",
  "Claude Design": "anthropic.com",
  "Google Stitch": "google.com"
};

const downloadIcon = (name, domain) => {
  return new Promise((resolve) => {
    const url = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`;
    const dest = path.join(__dirname, 'public', 'icons', `${name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}.png`);
    
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${name}`);
          resolve(true);
        });
      } else {
        console.log(`❌ Failed: ${name} (${res.statusCode})`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`❌ Error: ${name}`, err.message);
      resolve(false);
    });
  });
};

async function run() {
  for (const [name, domain] of Object.entries(tools)) {
    await downloadIcon(name, domain);
  }
}

run();
