import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Proxy API for LLM webhook
app.post('/api/generate-brief', async (req, res) => {
  const { primaryKeyword, secondaryKeywords, targetWordCount } = req.body;

  try {
    const response = await fetch('https://usegrowthaic.app.n8n.cloud/webhook/content-brief-generator', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ primaryKeyword, secondaryKeywords, targetWordCount }),
    });

    const json = await response.json();
    const brief = Array.isArray(json) ? json[0] : json;
    res.json(brief);
  } catch (error) {
    console.error('Webhook error:', error.message);
    res.status(500).json({ error: 'Failed to generate brief' });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
