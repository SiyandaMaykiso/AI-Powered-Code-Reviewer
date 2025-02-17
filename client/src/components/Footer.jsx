import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <footer style={{
            textAlign: "center",
            padding: "10px",
            marginTop: isHomePage ? "30px" : "auto", // Move closer only on home page
            backgroundColor: "#f5f5f5",
            color: "#333",
            fontSize: "15px",
            boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)"
        }}>
            <p>&copy; {new Date().getFullYear()} AI-Powered Code Reviewer. Created by Siyanda Burnham. All rights reserved.</p>
            <a href="https://github.com/SiyandaBurnham/AI-Powered-Code-Reviewer" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "15px", textDecoration: "none" }}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={{ width: "24px", height: "24px", verticalAlign: "middle" }} />
            </a>
            <a href="https://www.linkedin.com/in/siyanda-burnham/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "15px", textDecoration: "none" }}>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: "24px", height: "24px", verticalAlign: "middle" }} />
            </a>
        </footer>
    );
};

export default Footer;