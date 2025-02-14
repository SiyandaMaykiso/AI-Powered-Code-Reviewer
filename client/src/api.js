const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        return await response.json();
    } catch (error) {
        return { error: "Failed to connect to the server" };
    }
};

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        return await response.json();
    } catch (error) {
        return { error: "Failed to connect to the server" };
    }
};

export const submitCodeForReview = async (code, token) => {
    if (!token) {
        console.error("Missing authentication token!");
        return { error: "Unauthorized: No token provided." };
    }

    try {
        const response = await fetch(`${API_URL}/review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ code }),  // Ensure correct JSON body format
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error submitting code for review:", error);
        return { error: "Failed to submit code for review" };
    }
};

export const getReviewHistory = async (token) => {
    if (!token) {
        console.error("Missing authentication token!");
        return { error: "Unauthorized: No token provided." };
    }

    try {
        const response = await fetch(`${API_URL}/review/history`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching review history:", error);
        return { error: "Failed to fetch review history" };
    }
};