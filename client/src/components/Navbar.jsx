import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar 
      position="fixed"
      sx={{
        backgroundColor: "#1565c0",
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
              color: "#bbdefb",
              textShadow: "0px 4px 15px rgba(0,0,0,0.2)",
            },
          }}
        >
          AI-Powered Code Reviewer
        </Typography>

        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              '&:hover': {
                backgroundColor: "#0d47a1",
                color: "#fff",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
              },
            }}
          >
            Home
          </Button>
          {isAuthenticated && (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/review"
                sx={{
                  '&:hover': {
                    backgroundColor: "#0d47a1",
                    color: "#fff",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                  },
                }}
              >
                Review
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/history"
                sx={{
                  '&:hover': {
                    backgroundColor: "#0d47a1",
                    color: "#fff",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                  },
                }}
              >
                History
              </Button>
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{
                  '&:hover': {
                    backgroundColor: "#0d47a1",
                    color: "#fff",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                  },
                }}
              >
                Logout
              </Button>
            </>
          )}
          {!isAuthenticated && (
            <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={{
                '&:hover': {
                  backgroundColor: "#0d47a1",
                  color: "#fff",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                },
              }}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
