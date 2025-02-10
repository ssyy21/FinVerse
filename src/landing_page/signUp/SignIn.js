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

    try {
      // Send login request to the backend
      const response = await axios.post("http://localhost:3002/api/auth/login", {
        email,
        password,
      });

      // Save the JWT token in local storage
      localStorage.setItem("token", response.data.token);

      // Redirect to the profile page
      navigate("/profile");
    } catch (err) {
      setError("Invalid email or password");
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="signin-container al" style={{ backgroundColor: "#FEFBF3" }}>
      <div className="signin-box">
        <div className="signin-content">
          <h1>To get started, please Sign in</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                id="password"
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

          <button className="google-button">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt=""
            />
            Continue with Google
          </button>

          <p className="signup-text">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="signup-link"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}