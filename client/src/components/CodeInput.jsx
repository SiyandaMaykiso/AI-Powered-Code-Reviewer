import React, { useState } from "react";
import { submitCodeForReview } from "../api";

const CodeInput = ({ setReview }) => {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Authentication required. Please log in.");
                setLoading(false);
                return;
            }

            if (!code.trim()) {
                setError("Code input cannot be empty.");
                setLoading(false);
                return;
            }

            const response = await submitCodeForReview(code, token);

            if (response.error) {
                setError(response.error);
            } else {
                setReview(response.review);
            }
        } catch (err) {
            setError("Error submitting code for review. Please try again.");
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
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default CodeInput;