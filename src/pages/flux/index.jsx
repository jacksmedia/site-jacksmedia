import React, { useState } from 'react';

const CoverLetterAdjuster = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [boilerplate, setBoilerplate] = useState(
        "Dear Hiring Manager,\n\nI am a passionate and skilled software developer with a commitment to excellence..."
    );
    const [adjustedCoverLetter, setAdjustedCoverLetter] = useState('');
    const [error, setError] = useState(null);

    const adjustCoverLetter = async () => {
        try {
            const response = await fetch("https://chat-backend-mu-six.vercel.app/api/coverletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    job_description: jobDescription,
                    boilerplate: boilerplate,
                }),
            });
            if (!response.ok) {
              console.error("Response status:", response.status);
              throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
    
            const data = await response.json();
            setAdjustedCoverLetter(data.cover_letter);

            if (response.ok) {
                setAdjustedCoverLetter(data.cover_letter);
                setError(null);
            } else {
                setError(data.error || "An error occurred while adjusting the cover letter.");
                setAdjustedCoverLetter('');
            }
        } catch (error) {
            setError("An error occurred. Please check your input or try again later.");
            console.error("Error:", error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <h2 className="card-header bg-primary text-white">
                    Cover Letter Adjuster
                </h2>
                <div className="card-body">
                    <div className="form-group mb-3">
                        <label>Job Description</label>
                        <textarea
                            className="form-control"
                            placeholder="Paste the job description here..."
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            rows="5"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Boilerplate Cover Letter</label>
                        <textarea
                            className="form-control"
                            placeholder="Enter your base cover letter here..."
                            value={boilerplate}
                            onChange={(e) => setBoilerplate(e.target.value)}
                            rows="5"
                        />
                    </div>
                    <button className="btn btn-primary" onClick={adjustCoverLetter}>
                        Generate Adjusted Cover Letter
                    </button>

                    {error && (
                        <div className="alert alert-danger mt-3">
                            {error}
                        </div>
                    )}

                    {adjustedCoverLetter && (
                        <div className="mt-4">
                            <h5>Adjusted Cover Letter</h5>
                            <textarea
                                className="form-control"
                                value={adjustedCoverLetter}
                                readOnly
                                rows="10"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoverLetterAdjuster;
