import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CodeReviewApp from "./components/CodeReviewApp";
import Login from "./components/Login";
import Register from "./components/Register";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page with Login & Register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<CodeReviewApp />} />  {/* Protected App Page */}
      </Routes>
    </Router>
  );
};

export default AppRouter;