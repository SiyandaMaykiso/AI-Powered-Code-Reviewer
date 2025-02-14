import React from "react";
import { Box, Card, CardContent, CircularProgress, Typography, Grid, Button } from "@mui/material";

const CodeReviewDisplay = ({ review }) => {
    return (
        <Box sx={{ maxWidth: "800px", margin: "auto", mt: 4 }}>
            <Card elevation={4} sx={{ borderRadius: "10px", backgroundColor: "#f9f9f9", padding: "10px" }}>
                <CardContent>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", color: "#1565c0", mb: 2, textAlign: "center" }}
                    >
                        AI Code Review
                    </Typography>

                    <pre
                        className="code-review-text"
                        style={{
                            backgroundColor: "#e3f2fd",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            overflowX: "auto",
                            maxWidth: "100%",
                        }}
                    >
                        {review ? review : "No review available yet. Submit code for analysis."}
                    </pre>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CodeReviewDisplay;