//MY CODE

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();
  
  // State for form inputs
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (!user.password) {
      setError("Password is required");
      return;
  }
  };

 

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const res = await axios.post("https://finverse-backend-mc6c.onrender.com/signup", user);
      alert(res.data.message);
      navigate("/signin"); // Redirect to sign-in page after signup
    } catch (err) {
      console.error(err);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container" style={{ backgroundColor: "#FEFBF3" }}>
      <div className="signup-wrapper">
        <h1 className="signup-title">Sign up</h1>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <div className="input-group">
              <label className="input-label">First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Your first name"
                className="input-field"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Your last name"
                className="input-field"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="input-field"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input-field"
              onChange={handleChange}
              required
            />
          </div>


          {error && <p className="error-message">{error}</p>} {/* Display errors if any */}

          <button type="submit" className="continue-button">
            Continue
          </button>

          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-text">
              <span>OR</span>
            </div>
          </div>

          {/* <button type="button" className="google-button">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt=""
              className="google-icon"
            />
            Continue with Google
          </button> */}

          <p className="signin-text">
            Already have an account?{" "}
            <button onClick={() => navigate("/signin")} className="signin-link">
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
