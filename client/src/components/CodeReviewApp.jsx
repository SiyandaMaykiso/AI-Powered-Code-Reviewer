import React, { useState } from "react";
import CodeInput from "./CodeInput";
import CodeReviewDisplay from "./CodeReviewDisplay";
import ReviewHistory from "./ReviewHistory";

const CodeReviewApp = () => {
    const [review, setReview] = useState(null);

    return (
        <div>
            <h1>AI-Powered Code Reviewer</h1>
            <CodeInput setReview={setReview} />
            {review && <CodeReviewDisplay review={review} />}
            <ReviewHistory />
        </div>
    );
};

export default CodeReviewApp;