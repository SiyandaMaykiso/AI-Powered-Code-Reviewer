import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Grid, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser, registerUser } from "../api";

const Home = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      const response = await loginUser(credentials.username, credentials.password);
      if (response.token) {
        login(response.token);
        navigate("/review");
      } else {
        console.error("Login failed: ", response.error);
      }
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await registerUser(credentials.username, credentials.password);
      if (response.token) {
        login(response.token);
        navigate("/review");
      } else {
        console.error("Registration failed: ", response.error);
      }
    } catch (error) {
      console.error("Registration error: ", error);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", textAlign: "center", padding: "20px", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#1565c0" }}>Welcome to AI-Powered Code Reviewer!</Typography>
      <Typography variant="subtitle1" sx={{ color: "#555", marginBottom: "30px" }}>Get instant feedback on your code with AI-powered analysis.</Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={4} sx={{ padding: "30px 20px", borderRadius: "15px" }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1565c0", mb: 3 }}>Login</Typography>
              <TextField fullWidth label="Username" variant="outlined" margin="dense" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} sx={{ mb: 2 }} />
              <TextField fullWidth label="Password" type="password" variant="outlined" margin="dense" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} sx={{ mb: 2 }} />
              <Button fullWidth variant="contained" sx={{ mt: 2, backgroundColor: "#1565c0", color: "#fff", py: 1.5, borderRadius: "8px" }} onClick={handleLogin}>Login</Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={4} sx={{ padding: "30px 20px", borderRadius: "15px" }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1565c0", mb: 3 }}>Register</Typography>
              <TextField fullWidth label="Username" variant="outlined" margin="dense" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} sx={{ mb: 2 }} />
              <TextField fullWidth label="Password" type="password" variant="outlined" margin="dense" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} sx={{ mb: 2 }} />
              <Button fullWidth variant="contained" sx={{ mt: 2, backgroundColor: "#1565c0", color: "#fff", py: 1.5, borderRadius: "8px" }} onClick={handleRegister}>Register</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;