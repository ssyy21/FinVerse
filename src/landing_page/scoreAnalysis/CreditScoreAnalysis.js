import React from 'react';
import './CreditScoreAnalysis.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faCreditCard, faLightbulb} from '@fortawesome/free-solid-svg-icons';
import creditImg from "./creditimage.jpg";
const CreditScoreAnalysis = () => {

        const navigate = useNavigate(); 
      
        const handleClick = () => {
            navigate("/CreditScore"); 
        };

  return (
    <div className="credit-score-container">
      <div className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              
              <h1 className="text-white mb-4">
                Master Your Credit<br />Score Journey
              </h1>
              
              <p className="text-white-75 mb-4">
                Understanding your credit score has never been easier. Get 
                real-time insights and personalized recommendations to 
                improve your financial health.
              </p>
              
              <button className="btn btn-light px-4 py-2" onClick={handleClick}>
                Begin Your Credit Score Analysis 
                <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </div>
            
            <div className="col-lg-6">
              <div className="hero-image-container">
                <img 
                  src= {creditImg}
                  alt="Credit Score Analysis"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-card p-4 bg-white rounded shadow-sm">
                <div className="feature-icon mb-3 bg-light p-2 rounded">
                  <FontAwesomeIcon icon={faCalculator} className="text-primary" />
                </div>
                <h3 className="h5 mb-3"><strong>How to improve Credit Score</strong></h3>
                <p className="text-muted">
                    1. Pay bills on time to maintain a good payment history.<br></br>
                    2. Keep credit utilization below 30% for better scores. <br></br> 
                    3. Avoid frequent loan or credit card applications.  <br></br>
                    4. Maintain old accounts to increase credit history.  <br></br>
                    5. Clear outstanding dues to remove negative remarks.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="feature-card p-4 bg-white rounded shadow-sm">
                <div className="feature-icon mb-3 bg-light p-2 rounded">
                  <FontAwesomeIcon icon={faLightbulb} className="text-primary" />
                </div>
                <h3 className="h5 mb-3"><strong>Advantages of Improved Credit Score</strong></h3>
                <p className="text-muted">
                    1. Easier loan approvals with better interest rates.  <br></br>
                    2. Higher credit limits for increased financial flexibility.  <br></br>
                    3. Faster approvals for credit cards and mortgages.<br></br>
                    4. Lower insurance premiums in some cases.  <br></br>
                    5. Better chances of renting a house or apartment.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="feature-card p-4 bg-white rounded shadow-sm">
                <div className="feature-icon mb-3 bg-light p-2 rounded">
                  <FontAwesomeIcon icon={faCreditCard} className="text-primary" />
                </div>
                <h3 className="h5 mb-3"><strong>Credit Score Mistakes to Avoid</strong></h3>
                <p className="text-muted">
                    1. Missing or late payments can significantly reduce your score.   <br></br>
                    2. Maxing out credit cards increases utilization and harms your score.   <br></br>
                    3. Applying for too many credits quickly lowers your score.   <br></br>
                    4. Closing old accounts shortens history and reduces credit.   <br></br>
                    
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditScoreAnalysis;