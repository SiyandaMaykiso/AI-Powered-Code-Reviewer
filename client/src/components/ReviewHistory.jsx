import React, { useEffect, useState } from "react";
import { getReviewHistory } from "../api";
import { Box, Card, CardContent, CircularProgress, Typography, Grid } from "@mui/material";

const ReviewHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Unauthorized: No token found. Please log in.");
                setLoading(false);
                return;
            }

            try {
                const response = await getReviewHistory(token);

                if (response.error) {
                    throw new Error(response.error);
                }

                setHistory(response.reviewHistory || []);
            } catch (err) {
                setError(err.message || "Failed to load review history.");
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    return (
        <Box sx={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1565c0", mb: 3, textAlign: "center" }}>
                Review History
            </Typography>

            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Typography color="error" sx={{ textAlign: "center" }}>{error}</Typography>
            ) : history.length === 0 ? (
                <Typography sx={{ textAlign: "center", color: "#555" }}>No past reviews yet.</Typography>
            ) : (
                <Grid container spacing={3}>
                    {history.map((entry, index) => (
                        <Grid item xs={12} key={index}>
                            <Card elevation={3} sx={{ borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1565c0" }}>
                                        Submitted Code:
                                    </Typography>
                                    <Box sx={{
                                        backgroundColor: "#eee",
                                        padding: "10px",
                                        borderRadius: "5px",
                                        fontFamily: "monospace",
                                        overflowX: "auto",
                                    }}>
                                        <pre>{entry.code}</pre>
                                    </Box>

                                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1565c0", mt: 2 }}>
                                        AI Review:
                                    </Typography>
                                    <Box sx={{
                                        backgroundColor: "#e3f2fd",
                                        padding: "10px",
                                        borderRadius: "5px",
                                        fontFamily: "monospace",
                                        overflowX: "auto",
                                    }}>
                                        <pre>{entry.review}</pre>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default ReviewHistory;