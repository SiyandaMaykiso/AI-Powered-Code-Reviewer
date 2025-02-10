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
    try {
        const response = await fetch(`${API_URL}/review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ code }),
        });

        return await response.json();
    } catch (error) {
        return { error: "Failed to submit code for review" };
    }
};

export const getReviewHistory = async (token) => {
    try {
        const response = await fetch(`${API_URL}/review/history`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return await response.json();
    } catch (error) {
        return { error: "Failed to fetch review history" };
    }
};