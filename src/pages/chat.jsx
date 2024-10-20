import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported

const ChatBot = () => {
    useEffect(() => { document.body.style.backgroundColor = "#000"; },[]);
    
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);

    const sendMessage = async () => {
        if (!input) return;

        // Add user message to the chat history
        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);

        try {
            // Send the user input to the backend API
            const response = await axios.post('https://chat-backend-mu-six.vercel.app/chat', {
                prompt: input
            });

            // Add bot response to the chat history
            setMessages([...newMessages, { role: 'bot', content: response.data.reply }]);
            setError(null);
        } catch (error) {
            setError('Error communicating with the bot.');
        }

        setInput(''); // Clear input field
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    Chat with our Bot 🤖 (courtesy of OpenAI & vercel)
                </div>
                <div className="card-body">
                    <div className="chat-history mb-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                        {messages.map((message, index) => (
                            <div key={index} className={`message mb-2 ${message.role === 'user' ? 'text-end' : 'text-start'}`}>
                                <div className={`alert ${message.role === 'user' ? 'alert-primary' : 'alert-secondary'}`}>
                                    {message.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                        />
                        <button className="btn btn-primary" onClick={sendMessage}>Send</button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
