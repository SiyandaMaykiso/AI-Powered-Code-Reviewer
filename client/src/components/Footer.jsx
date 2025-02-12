import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} AI-Powered Code Reviewer. Created by Siyanda Burnham. All rights reserved.</p>
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
        fontSize: "15px",
    },
};

export default Footer;