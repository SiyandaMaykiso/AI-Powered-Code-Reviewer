import React, { useState } from "react";
import { submitCodeForReview } from "../api";
import { CircularProgress, Box, Button, TextField, Typography } from "@mui/material";

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
        <Box sx={{ maxWidth: "600px", margin: "auto", textAlign: "center", mt: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#1565c0" }}>
                Submit Code for Review
            </Typography>

            <TextField
                fullWidth
                multiline
                rows={5}
                placeholder="Paste your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
                variant="outlined"
                sx={{ mb: 2, backgroundColor: "#f9f9f9", borderRadius: "5px" }}
            />

            <Box sx={{ position: "relative", display: "inline-block" }}>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "#1565c0", color: "#fff", px: 3 }}
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Submit Code"}
                </Button>
                {loading && (
                    <CircularProgress
                        size={24}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            marginTop: "-12px",
                            marginLeft: "-12px",
                        }}
                    />
                )}
            </Box>

            {error && <Typography sx={{ color: "red", mt: 2 }}>{error}</Typography>}
        </Box>
    );
};

export default CodeInput;