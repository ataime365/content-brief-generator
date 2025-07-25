# LLM-Powered Content Brief Generator

## Objective
A simple JavaScript web app to generate SEO content briefs using an n8n webhook that connects to an LLM backend.

## Features
- User input form for content brief generation
- POSTs to n8n webhook: https://usegrowthaic.app.n8n.cloud/webhook/content-brief-generator
- Displays structured LLM response
- Uses TailwindCSS for layout and styling

## Setup Instructions

### 1. Clone the repository
```
git clone https://github.com/ataime365/content-brief-generator.git
cd content-brief-generator
```

### 2. Initialize repository & Install dependencies
```
npm init -y
npm install express body-parser cors node-fetch dotenv
```

### 3. Run the server
```
node server.js
```

### 4. Open in browser
Visit `http://localhost:3001`

### 5. n8n
Import the n8n json into your n8n and use your Perplexity and Openai Key to Authenticate

### 6. Change the webhook url
In your .env file use your n8n webhook production url


## Development Notes
- Webhook integration requires no authentication
- Asynchronous fetch handles data submission and response parsing
- Frontend built with plain JS + TailwindCSS for rapid UI


