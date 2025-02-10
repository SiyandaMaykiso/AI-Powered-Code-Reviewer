import React, { useState } from "react"; import { submitCodeForReview } from "../api";

const CodeInput = ({ setReview }) => { const [code, setCode] = useState(""); const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const token = localStorage.getItem("token");
            const response = await submitCodeForReview(code, token);
            setReview(response.review);
        } catch (error) {
            console.error("Error submitting code for review:", error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="code-input-container">
            <h2>Submit Code for Review</h2>
            <textarea
                rows="5"
                placeholder="Paste your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="code-textarea"
            />
            <button onClick={handleSubmit} disabled={loading} className="submit-button">
                {loading ? "Reviewing..." : "Submit Code"}
            </button>
        </div>
    );
};

export default CodeInput;