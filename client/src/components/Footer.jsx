import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} AI-Powered Code Reviewer. Created by Siyanda Burnham. All rights reserved.</p>
            <a href="https://github.com/SiyandaMaykiso/AI-Powered-Code-Reviewer" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/siyanda-burnham/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={styles.icon} />
            </a>
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
    link: {
        marginLeft: "15px",
        textDecoration: "none",
    },
    icon: {
        width: "24px",
        height: "24px",
        verticalAlign: "middle",
    },
};

export default Footer;
