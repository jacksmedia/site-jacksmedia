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
