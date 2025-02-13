//import React from 'react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Add this import
import './Products.css';
import FraudImage from './FraudDetection.jpg';
import Budget from './budgeting.jpg';

const Products = () => {
  const navigate = useNavigate();  // Add this hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleDemoClick = (productTitle) => {
     
    
    if (productTitle === "Smart Budgeting") {
      window.location.href = " https://stsalesprediction-o0de926l0vn.streamlit.app/"; // Navigate to sales form for Smart Budgeting
    } else if (productTitle === "Fraud Detection") {
      window.location.href = "https://fraud-detection-app-krakxaitfyjrwoaa9435rj.streamlit.app/"; // Redirect to Streamlit app
    }
    else {
      navigate("/FraudDetectionForm"); // Default navigation for other products
    }
  };

  const products = [
    {
      title: "Fraud Detection",
      description: "Our cutting-edge Fraud Detection Model leverages advanced machine learning algorithms to analyze online transactions in real-time and determine whether a transaction is fraudulent or legitimate. By examining key transaction patterns, user behavior, and risk factors, our model helps safeguard businesses and customers from financial fraud.",
      imageUrl: FraudImage, 
      isReversed: false
    },
    {
      title: "Smart Budgeting",
      description: "It is designed to help small businesses analyze sales patterns, predict future sales, and optimize financial planning. It integrates machine learning models like Random Forest, Linear Regression, and K-Means Clustering to provide valuable insights into revenue trends, product performance, and sales forecasting.",
      imageUrl: Budget, 
      isReversed: true
    }
  ];

  return (
    <div className="container p-5 mt-5 " style = {{
      backgroundcolor : "#FEFBF3"}}>
        <div className="products-section">
        <h2 className='fs-3'><strong>FINVERSE </strong>Products</h2>
        <p className='mt-0 p-0 mb-5 fs-4'>Sleek, modern and intelligent AI-driven solutions</p>
        </div>
      {products.map((product, index) => (
        <div 
          key={index} 
          className={`product-container p-5 ${product.isReversed ? 'reversed' : ''}`}
        >
          <div className="product-content p-3">
            <img 
              src={product.imageUrl} 
              alt={product.title} 
              className="product-image"
            />
          </div>
          <div className="product-content description-content">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <div className="button-group">
              <button 
                className="demo-button"
                onClick={() => handleDemoClick(product.title)}  // Add this onClick handler
              >
                Try Demo
              </button>
            </div>
          </div>
        </div>
      ))}
    
    </div>
  );
};

export default Products;