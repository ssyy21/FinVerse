import React, { useState } from 'react';
import './FraudDetectionForm.css';
import image from "./Fraud.jpg";


const FraudDetectionForm = () => {
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    account: '',
    customer: '',
    suspision: '',
    merchant: '',
    tran_cat: '',
    amount: '',
    anamoly: false,
    tran_data: '',
    tran_rec: null,
    LastLogin: ''
  });

 







  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked :  value
    }));
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const updatedFormData = {
      ...formData,
      amount: parseFloat(formData.amount), // Ensuring it's a number
      anamoly: formData.anamoly ? true : false, // Explicit boolean
    };

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }
      const responseData = await response.json();  // Fix: Assign response to a variable
      console.log(responseData); // Debugging: Check what the API returns

      if (responseData && responseData.fraud_status) {
        setResult(responseData.fraud_status); // Fix: Ensure correct field name
      } else {
        setResult("Unknown"); // Handle unexpected API response
      }
      
    } catch (error) {
      console.error("Error:", error);
      setResult(null); // Display error message
    }
  };

  //     const data = await response.json();
  //     console.log("API Response:", data);
  //     setResult(data.fraud_status); // Store API response in state
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
//   try {
//     // Replace 'http://localhost:8000/predict' with your actual FastAPI endpoint
//     const response = await fetch('http://127.0.0.1:8000/docs', {
//       method: 'POST',
//       body: formDataToSend // Sending FormData to backend
//     });

//     if (!response.ok) {
//       throw new Error('Failed to submit form');
//     }

//     const result = await response.json();
//     console.log('Response from API:', result);
//     alert('Form submitted successfully!'); // Display success message

//   } catch (error) {
//     console.error('Error:', error);
//     alert('Error submitting form'); // Display error message
//   }
// };

  return (
    <div className="fraud-detection-container p-5 mt-5 mb-5">
      <div className="image-section">
        <img src={image} alt="Fraud Detection" className="form-image" />
      </div>
      
      <div className="form-section">
        <h2>Fraud Detection Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="account">Account Number</label>
            <input
              type="text"
              id="account"
              name="account"
              value={formData.account}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="customer">Customer ID</label>
            <input
              type="text"
              id="customer"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="suspision">Suspicious Activity</label>
            <select
              id="suspision"
              name="suspision"
              value={formData.suspision}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="merchant">Merchant ID</label>
            <input
              type="text"
              id="merchant"
              name="merchant"
              value={formData.merchant}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="account">Transaction Category</label>
            <input
              type="text"
              id="tran_cat"
              name="tran_cat"
              value={formData.tran_cat}
              onChange={handleChange}
              required
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="tran_cat">Transaction Category</label>
            <select
              id="tran_cat"
              name="tran_cat"
              value={formData.tran_cat}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
              <option value="transfer">Transfer</option>
            </select>
          </div> */}

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              step="0.01"
              required
            />
          </div>

          <div className="form-group checkbox-group">
            <label htmlFor="anamoly">
              <input
                type="checkbox"
                id="anamoly"
                name="anamoly"
                checked={formData.anamoly}
                onChange={handleChange}
              />
              Anomalous Transaction
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="tran_data">Transaction Date</label>
            <input
              type="date"
              id="tran_data"
              name="tran_data"
              value={formData.tran_data}
              onChange={handleChange}
              required
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="tran_rec">Transaction Receipt</label>
            <input
              type="file"
              id="tran_rec"
              name="tran_rec"
              onChange={handleChange}
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div> */}

          {/* <div className="form-group">
            <label htmlFor="LastLogin">Last Login Date</label>
            <input
              type="date"
              id="LastLogin"
              name="LastLogin"
              value={formData.LastLogin}
              onChange={handleChange}
              required
            />
          </div> */}

          <button type="submit" className="submit-button">
            Submit Form
          </button>
        </form>
 {/* Display result after submission */}
 {result !== null && (
          <div className="result-section">
            <h3>Fraud Status:</h3>
            <p className={result === "Fraud" ? "fraud-text" : "safe-text"}>
              {result === "Fraud" ? "🚨 Fraud Detected!" : "✅ No Fraud Detected"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FraudDetectionForm;