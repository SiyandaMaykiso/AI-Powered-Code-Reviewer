import React from "react";
import { Box, Typography, Card, CardContent, Grid, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"; // ✅ Ensure Footer is imported

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
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
        {/* Login Form */}
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={4} sx={{ padding: "20px", borderRadius: "10px" }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1565c0" }}>
                Login
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: "#1565c0", color: "#fff" }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

                {/* Registration Form */}
                <Grid item xs={12} sm={6} md={4}>
          <Card elevation={4} sx={{ padding: "20px", borderRadius: "10px" }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1565c0" }}>
                Register
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: "#1565c0", color: "#fff" }}
                  onClick={handleRegister}
                >
                  Register
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer (Placed right after Registration Form) */}
      <Box sx={{ width: "100%", mt: 4 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;