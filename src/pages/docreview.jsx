import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import mammoth from 'mammoth'; // Does .docx parsing
import { pdfjs, getDocument } from 'pdfjs-dist';

(async () => { 
    // Dynamically import the PDF worker
    try {
        const workerSrc = await import('/pdf.worker.min.js');
        pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
    } catch (error) {
        console.error("Error loading PDF worker:", error);
    }
})();

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

const DocumentReview = () => {
    const [documentText, setDocumentText] = useState('');
    const [foundClauses, setFoundClauses] = useState([]);
    const [error, setError] = useState(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = async (event) => {
            const fileBuffer = event.target.result;
            
            if (file.name.endsWith('.docx')) {
                try {
                    const result = await mammoth.extractRawText({ arrayBuffer: fileBuffer });
                    setDocumentText(result.value); // Extracted plain text from .docx
                } catch (error) {
                    setError('Error reading .docx file');
                }
            } else if (file.name.endsWith('.pdf')) {
                try {
                    const pdfText = await extractTextFromPDF(fileBuffer);
                    setDocumentText(pdfText);  // Extracted plain text from .pdf
                } catch (error) {
                    setError('Error reading PDF file');
                }
            } else {
                setError('Unsupported file type. Please upload a .docx or .pdf file.');
            }
        };

        reader.readAsArrayBuffer(file);
    };

    const extractTextFromPDF = async (pdfBuffer) => {
        const pdf = await getDocument({ data: pdfBuffer }).promise;
        let extractedText = '';

        // Extract text from each page
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item) => item.str).join(' ');
            extractedText += pageText + '\n';
        }

        return extractedText;
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
        // Future steps: Call the backend for more in-depth analysis like ambiguous clauses or missing sections.
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
