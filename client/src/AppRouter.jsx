import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CodeReviewApp from "./components/CodeReviewApp.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CodeReviewApp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;