import React, { useState } from 'react';
import mammoth from 'mammoth'; // DOCX parsing library

const DocumentReview = () => {
    const [documentText, setDocumentText] = useState('');
    const [foundClauses, setFoundClauses] = useState([]);
    const [error, setError] = useState(null);

    const legalClauses = [
        { clause: "Confidentiality", keywords: ["confidentiality", "non-disclosure", "proprietary information"] },
        { clause: "Indemnity", keywords: ["indemnity", "hold harmless", "indemnification"] },
        { clause: "Termination", keywords: ["termination", "cancel", "exit"] },
        { clause: "Force Majeure", keywords: ["force majeure", "act of God", "unforeseen events"] },
        { clause: "Governing Law", keywords: ["governing law", "jurisdiction", "applicable law"] },
        { clause: "Dispute Resolution", keywords: ["dispute resolution", "arbitration", "mediation"] },
        { clause: "Non-Compete", keywords: ["non-compete", "restrictive covenant", "competition"] },
        { clause: "Payment Terms", keywords: ["payment", "consideration", "remuneration"] },
        { clause: "Liability Limitation", keywords: ["limitation of liability", "liability cap", "exclusion of damages"] },
        { clause: "Intellectual Property", keywords: ["intellectual property", "IP rights", "ownership of work"] },
        { clause: "Severability", keywords: ["severability", "invalidity", "unenforceable"] },
        { clause: "Assignment", keywords: ["assignment", "transfer of rights", "delegation"] },
        { clause: "Entire Agreement", keywords: ["entire agreement", "complete agreement", "integrated agreement"] },
        { clause: "Warranties and Representations", keywords: ["warranties", "representations", "guarantees"] },
        { clause: "Notice", keywords: ["notice", "communication", "notification"] }
    ];

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = async (event) => {
            const fileBuffer = event.target.result;

            if (file.name.endsWith('.docx')) {
                try {
                    const result = await mammoth.extractRawText({ arrayBuffer: fileBuffer });
                    setDocumentText(result.value); // Extracted plain text from DOCX
                } catch (error) {
                    setError('Error reading DOCX file');
                }
            } else {
                setError('Unsupported file type. Please upload a DOCX file.');
            }
        };

        reader.readAsArrayBuffer(file);
    };

    const scanDocument = () => {
        if (!documentText) {
            setError("No document provided");
            return;
        }

        const found = legalClauses.filter(clause => {
            return clause.keywords.some(keyword => documentText.toLowerCase().includes(keyword.toLowerCase()));
        });

        setFoundClauses(found);
        setError(null);
    };

    const handleSubmit = async () => {
        scanDocument();
        // Future: Call backend for deeper analysis (e.g., ambiguous clauses)
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    Document Review Tool
                </div>
                <div className="card-body">
                    <textarea
                        value={documentText}
                        onChange={(e) => setDocumentText(e.target.value)}
                        placeholder="Paste your document text here..."
                        rows="10"
                        style={{ width: "100%" }}
                    />
                    <input type="file" onChange={handleFileUpload} />
                    <button className="btn btn-primary mt-3" onClick={handleSubmit}>Analyze Document</button>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {foundClauses.length > 0 && (
                        <div>
                            <h3>Found Clauses:</h3>
                            <ul>
                                {foundClauses.map((clause, index) => (
                                    <li key={index}>{clause.clause}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {foundClauses.length === 0 && documentText && !error && (
                        <p>No common legal clauses were found in the document.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DocumentReview;