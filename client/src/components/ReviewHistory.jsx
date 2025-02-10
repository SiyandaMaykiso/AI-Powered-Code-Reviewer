import React, { useEffect, useState } from "react";
import { getReviewHistory } from "../api";

const ReviewHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await getReviewHistory(token);
                setHistory(response.reviewHistory || []);
            } catch (err) {
                setError("Failed to load review history.");
            } finally {
                setLoading(false);
            }
        };
        fetchHistory();
    }, []);

    return (
        <div className="review-history-container">
            <h2>Review History</h2>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="error-message">{error}</p>
            ) : history.length === 0 ? (
                <p>No past reviews yet.</p>
            ) : (
                <ul className="review-list">
                    {history.map((entry, index) => (
                        <li key={index} className="review-entry">
                            <div className="code-section">
                                <strong>Submitted Code:</strong>
                                <pre className="code-block">{entry.code}</pre>
                            </div>
                            <div className="review-section">
                                <strong>AI Review:</strong>
                                <pre className="review-text">{entry.review}</pre>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReviewHistory;