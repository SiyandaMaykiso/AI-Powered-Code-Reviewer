import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Switch } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#f5f5f5" : "#1e1e1e"; 
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  return (
    <AppBar 
      position="fixed"
      sx={{
        backgroundColor: darkMode ? "#1e1e1e" : "#1565c0",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            '&:hover': {
              color: darkMode ? "#90caf9" : "#bbdefb",
              textShadow: "0px 4px 15px rgba(0,0,0,0.2)",
            },
          }}
        >
          AI-Powered Code Reviewer
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Switch checked={darkMode} onChange={toggleTheme} color="default" />
          <Typography sx={{ ml: 1, color: "white", fontSize: "0.875rem" }}>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ '&:hover': { backgroundColor: darkMode ? "#333" : "#0d47a1", color: "#fff" } }}>Home</Button>
          {isAuthenticated && (
            <>
              <Button color="inherit" component={Link} to="/review" sx={{ '&:hover': { backgroundColor: darkMode ? "#333" : "#0d47a1", color: "#fff" } }}>Review</Button>
              <Button color="inherit" component={Link} to="/history" sx={{ '&:hover': { backgroundColor: darkMode ? "#333" : "#0d47a1", color: "#fff" } }}>History</Button>
              <Button color="inherit" onClick={handleLogout} sx={{ '&:hover': { backgroundColor: darkMode ? "#333" : "#0d47a1", color: "#fff" } }}>Logout</Button>
            </>
          )}
               </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;