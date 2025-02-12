import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CodeReviewApp from "./components/CodeReviewApp";
import Login from "./components/Login";
import Register from "./components/Register";
import ReviewHistory from "./components/ReviewHistory";

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ✅ Check localStorage on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Convert token existence to boolean
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      {/* ✅ Add margin-top so content doesn’t hide under the navbar */}
      <Box sx={{ marginTop: "10vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ✅ Protected Routes: Redirect if not logged in */}
          <Route
            path="/review"
            element={isAuthenticated ? <CodeReviewApp /> : <Navigate to="/login" />}
          />
          <Route
            path="/history"
            element={isAuthenticated ? <ReviewHistory /> : <Navigate to="/login" />}
          />
        </Routes>
      </Box>
    </Router>
  );
};

export default AppRouter;