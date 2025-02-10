import React from "react";

const CodeReviewDisplay = ({ review }) => {
    return (
        <div className="code-review-container">
            <h2>Code Review</h2>
            <pre className="code-review-text">
                {review ? review : "No review available yet. Submit code for analysis."}
            </pre>
        </div>
    );
};

export default CodeReviewDisplay;