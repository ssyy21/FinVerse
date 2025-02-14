import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const EmailSignup = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleRedirect = () => {
    navigate("/login"); // Change "/signin" to your actual login route
  };
  return (
    <div className="flex justify-center items-center py-10"
    >
      <div className="p-4 rounded-lg flex items-center">
        <input
          type="email"
          placeholder="Enter your email..."
          className="px-4 py-2 w-72 rounded-l-lg focus:outline-none text-gray-700 mr-4 mt-4"
          style={{ padding: "12px" ,width : '55%' , marginRight: "20px" ,  fontSize: "1rem", borderRadius: "8px 8px 8px 8px"}}
        />

        <Link to="/signin">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded-r-lg ml-4" style={{width : '25%' , backgroundColor: '#2973B2', borderRadius: "8px 8px 8px 8px"}}>
          Get Started
        </button>
        </Link>
      </div>
    </div>
  
    
 
  );
};

export default EmailSignup;