---
sidebar_position: 5
---

# ChatGPT Powered Apps

## What and why

Generative AI can provide data transformations and act as the backend for applications. OpenAI's ChatGPT is the current market leader and a good place to start learning how to build apps around Gen AI.

Meta's [ReactJS](https://react.dev/) provides an industry standard way of designing websites and webapps, so I'll offer this frontend code in React-- you can of course adapt it to Angular, Vue, Svelte, or any other library or framework that is built around JavaScript.

## Baseline Template

```jsx
import React, { useState } from 'react';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input) return;

        // Add user message to the chat history
        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);

        // Send the user input to the backend API
        const response = await fetch('https://your-backend-api-url.com/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: input }),
        });
        const data = await response.json();

        // Add bot response to the chat history
        setMessages([...newMessages, { role: 'bot', content: data.reply }]);
        setInput(''); // Clear input field
    };

    return (
        <div className="chatbot-container">
            <div className="chat-history">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.role}`}>
                        <span>{message.content}</span>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatBot;
```

## Things to Note:

- you will need to [create a free account with ChatGPT](https://platform.openai.com/signup) to enable this level of custom utility

- the code above simply queries the ChatGPT service for a chat connection; it is extensible for many features, to include reviewing documents as seen in our demo [Paralegal Document Review app](https://jacks.media/docreview)

- this is the first half of a 2-part project: the backend code is described in the next guide

### Check back here soon for the backend code!
