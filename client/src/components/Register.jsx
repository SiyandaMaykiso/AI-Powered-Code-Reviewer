import React, { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await registerUser(username, password);
            if (response.error) {
                setError(response.error);
            } else {
                localStorage.setItem("token", response.token); 
                navigate("/review"); 
            }
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
