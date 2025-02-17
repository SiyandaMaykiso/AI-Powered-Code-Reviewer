import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CodeReviewApp from "./components/CodeReviewApp";
import Login from "./components/Login";
import Register from "./components/Register";
import ReviewHistory from "./components/ReviewHistory";
import { useAuth } from "./context/AuthContext"; 

const AppRouter = () => {
  const { isAuthenticated, logout } = useAuth(); 

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={logout} />
      <Box sx={{ marginTop: "10vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/review" element={<CodeReviewApp />} />
          <Route path="/history" element={<ReviewHistory />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default AppRouter;
