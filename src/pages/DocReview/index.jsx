import React, { useState } from 'react';
import mammoth from 'mammoth'; // DOCX parsing library

const DocumentReview = () => {
    const [documentText, setDocumentText] = useState('');
    const [foundClauses, setFoundClauses] = useState([]);
    const [foundAmbiguities, setFoundAmbiguities] = useState([]);
    const [missingMandatories, setMissingMandatories] = useState([]);
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

    const ambiguousTerms = ["reasonable efforts", "promptly", "as soon as possible", "significant", "substantial"];
    const mandatoryClauses = ["confidentiality", "non-disclosure", "indemnity", "governing law", "severability"];

    // Modified extractKeywords function
    function extractKeywords(text) {
        const foundClauses = legalClauses.filter(clause =>
            clause.keywords.some(keyword => text.toLowerCase().includes(keyword.toLowerCase()))
        );
        const foundAmbiguities = ambiguousTerms.filter(term =>
            text.toLowerCase().includes(term.toLowerCase())
        );
        const missingMandatories = mandatoryClauses.filter(mandatory =>
            !text.toLowerCase().includes(mandatory.toLowerCase())
        );

        return { foundClauses, foundAmbiguities, missingMandatories };
    }


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
                
        const { foundClauses, foundAmbiguities, missingMandatories } = extractKeywords(documentText);
        
        setFoundClauses(foundClauses);
        setFoundAmbiguities(foundAmbiguities);
        setMissingMandatories(missingMandatories);
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
                    <h1 className='hero__subtitle'>
                        &nbsp;Contract Document Review Tool
                    </h1>
                </div>
                <div className="card-body">
                    <div className=''>
                        Paste plain text or upload a DOCX file.
                        This app will scan it for common legal clauses!
                    </div>
                    <textarea
                        value={documentText}
                        onChange={(e) => setDocumentText(e.target.value)}
                        placeholder="Paste your document text here..."
                        rows="10"
                        style={{ width: "100%" }}
                    />
                    <input type="file" onChange={handleFileUpload} text="Choose DOCX File" />
                    <button className="btn btn-primary" onClick={handleSubmit}>Analyze Document</button>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {foundClauses.length > 0 && (
                        <div>
                            <h3>Found Clauses:</h3>
                            <ul className="list-group">
                                {foundClauses.map((clause, index) => (
                                    <li key={index}>
                                        <div style={{ color: 'green' }}>
                                        {clause.clause}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {foundAmbiguities.length > 0 && (
                        <div>
                            <h3>Ambiguous Terms Found:</h3>
                            <ul className="list-group">
                                {foundAmbiguities.map((term, index) => (
                                    <li key={index}>
                                        <div style={{ color: 'orange' }}>
                                        {term}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {missingMandatories.length > 0 && (
                        <div>
                            <h3>Missing Mandatory Clauses:</h3>
                            <ul className="list-group">
                                {missingMandatories.map((clause, index) => (
                                    <li key={index}>
                                        <div style={{ color: 'red' }}>
                                        {clause}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
            </div>
            <div className="container my-5">
                <h3>&nbsp;</h3>
                <h3>This app is powered by ChatGPT, using a custom API on Vercel.</h3>
            </div>
        </div>
    );
};

export default DocumentReview;