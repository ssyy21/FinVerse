import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

function LogIn() {
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
      {/* Directly render the SignIn component (no extra Router) */}
      <SignIn />
    </div>
  );
}

export default LogIn;