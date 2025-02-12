import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CodeReviewApp from "./components/CodeReviewApp";
import Login from "./components/Login";
import Register from "./components/Register";
import ReviewHistory from "./components/ReviewHistory";

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
          <Route path="/review" element={<CodeReviewApp />} />
          <Route path="/history" element={<ReviewHistory />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default AppRouter;