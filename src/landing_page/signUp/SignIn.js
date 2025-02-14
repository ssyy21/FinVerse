//MY CODE

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignIn.css";


export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    try {
      const response = await axios.post("https://finverse-backend-mc6c.onrender.com/login", {
        email,
        password,
      });
      console.log("Login Response:", response.data); // Debugging

      if (response.data?.success && response.data?.token) {
        
        // Securely store token (preferably in sessionStorage)
        sessionStorage.setItem("token", response.data.token);
        navigate("/products");


        
        // Redirect to the profile/dashboard page
        
      } else {
        setError(response.data?.message || "Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message ||
        "Login failed. Please check your credentials and try again."
      );
    }
  };




  return (
    <div className="signin-container" style={{ backgroundColor: "#FEFBF3" }}>
      <div className="signin-box">
        <div className="signin-content">
          <h1>To get started, please Sign in</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="primary-button">
              Continue
            </button>
          </form>

          <div className="divider">
            <div className="divider-line"></div>
            <span>OR</span>
            <div className="divider-line"></div>
          </div>

          {/* <button className="google-button">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Icon"
            />
            Continue with Google
          </button> */}

          <p className="signup-text">
            Don't have an account?{" "}
            <button onClick={() => navigate("/signup")} className="signup-link">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
