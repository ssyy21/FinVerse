//MY CODE

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

function LogIn() {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up
  const navigate = useNavigate();

  return (
    <div 
      className='container-fluid p-0'
      style={{
        backgroundColor: '#FEFBF3', 
        height: '100vh', 
        width: '100vw', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}
    >
      {isSignUp ? <SignUp /> : <SignIn />}
      
      {/* Toggle Button */}
      <button 
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "8px 16px",
          backgroundColor: " #1a5892",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? "Already have an account? Sign In" : "New user? Sign Up"}
      </button>
    </div>
  );
}

export default LogIn;



