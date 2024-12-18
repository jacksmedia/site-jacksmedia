---
sidebar_position: 5
---

# ChatGPT Backend Scaffold

## What and why

Generative AI can provide data transformations and act as the backend for applications. OpenAI's ChatGPT is the current market leader and a good place to start learning how to build apps around Gen AI.

Meta's [ReactJS](https://react.dev/) provides an industry standard way of designing websites and webapps, so I'll offer this frontend code in React-- you can of course adapt it to Angular, Vue, Svelte, or any other library or framework that is built around JavaScript.

![API-key-demo-1](./key-demo1.png)

![API-key-demo-2](./key-demo2.png)

## Baseline Template

```js
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/chat', async (req, res) => {
    const { prompt } = req.body;
    
    try {
        const response = await client.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }]
        });

        const botReply = response.choices[0].message.content;
        res.json({ reply: botReply });
    } catch (error) {
        console.error('Error in OpenAI API call:', error);
        res.status(500).json({ error: 'Error communicating with the bot' });
    }
});

module.exports = app;
```

## Things to Note:

- you will need to [create a free account with ChatGPT](https://platform.openai.com/signup) to enable this level of custom utility

- the code above simply queries the ChatGPT service for a chat connection; it is extensible for many features, to include reviewing documents as seen in our demo [Paralegal Document Review app](https://jacks.media/docreview)

- this is the first half of a 2-part project: the backend code is described in the next guide

### Check back here soon for the backend code!
