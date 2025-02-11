import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = ({ onLogin }) => {
    const navigate = useNavigate();

    const handleLogin = (token) => {
        onLogin(token);
        navigate("/review"); 
    };

    const handleRegister = () => {
        navigate("/review");
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#f5f5f5",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    marginBottom: "20px",
                    color: "#1565c0",
                }}
            >
                Welcome to AI-Powered Code Reviewer!
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    color: "#555",
                    marginBottom: "30px",
                }}
            >
                Get instant feedback on your code with AI-powered analysis.
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: "20px",
                            borderRadius: "10px",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                marginBottom: "15px",
                                color: "#1565c0",
                            }}
                        >
                            Login
                        </Typography>
                        <Login onLogin={handleLogin} />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: "20px",
                            borderRadius: "10px",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                marginBottom: "15px",
                                color: "#1565c0",
                            }}
                        >
                            Register
                        </Typography>
                        <Register onRegister={handleRegister} />
                    </Paper>
                </Grid>
            </Grid>

            <Footer />
        </Box>
    );
};

export default Home;