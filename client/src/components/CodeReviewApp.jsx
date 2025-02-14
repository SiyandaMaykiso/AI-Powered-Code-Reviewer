import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import CodeInput from "./CodeInput";
import CodeReviewDisplay from "./CodeReviewDisplay";

const CodeReviewApp = () => {
    const [review, setReview] = useState(null);
    const navigate = useNavigate();  // ✅ Hook to handle navigation

    return (
        <div>
            <h1>AI-Powered Code Reviewer</h1>
            <CodeInput setReview={setReview} />
            {review && (
                <>
                    <CodeReviewDisplay review={review} />
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate("/history")}  // ✅ Navigates to history
                        >
                            View History
                        </Button>
                    </Box>
                </>
            )}
        </div>
    );
};

export default CodeReviewApp;