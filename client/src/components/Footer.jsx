import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} AI-Powered Code Reviewer. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: "center",
        padding: "10px",
        marginTop: "20px",
        backgroundColor: "#f5f5f5",
        color: "#333",
        fontSize: "14px",
    },
};

export default Footer;