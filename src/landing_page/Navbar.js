import React from "react";
import { Link } from "react-router-dom";
import Finverse from "./Finverse.png";
function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg border-bottom p-3" style={{ backgroundColor: "#2973B2", color: 'white' }}>
        <div className="container-fluid ml-2">
          <Link className="navbar-brand text-white" to="/Homepage">
          <img
            src={Finverse}
            alt="Finverse Logo"
            className="h-10 w-auto"
            style={{ height: "40px", width: "auto" }}
          />
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 d-flex align-items-center" style={{ gap: "15px"}}>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Homepage">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/TableauDashBoard">View Analytics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/LogIn"
                >SignUp</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
