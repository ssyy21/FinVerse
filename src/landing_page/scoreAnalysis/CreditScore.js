// import React, { useState } from "react";
// import "./CreditScore.css";

// const CreditScore = () => {
//   const [inputs, setInputs] = useState({
//     annualIncome: 50000,
//     outstandingDebt: 200,
//     creditMix: 1,
//     paymentOfMinAmount: 2,
//     interestRate: 10,
//     numOfLoan: 2,
//     numCreditCard: 0,
//     creditHistoryAge: 100,
//   });

//   const [result, setResult] = useState("");

//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: Number(e.target.value) });
//   };

//   const calculateScore = () => {
//     let score = 
//       (inputs.annualIncome / 1000) - 
//       (inputs.outstandingDebt / 50) + 
//       inputs.creditMix * 10 + 
//       (inputs.paymentOfMinAmount * 5) - 
//       (inputs.interestRate / 2) + 
//       (inputs.numOfLoan * 2) + 
//       (inputs.numCreditCard * 3) + 
//       (inputs.creditHistoryAge / 5);

//     if (score > 80) setResult("very good");
//     else if (score > 50) setResult("good");
//     else setResult("poor");
//   };

//   return (
//     <div className="credit-calculator">
//       <h2>Credit Score Calculator</h2>
//       <div className="form">
//         {Object.keys(inputs).map((key) => (
//           <div key={key} className="input-group">
//             <label>{key.replace(/([A-Z])/g, " $1")}</label>
//             <input
//               type="number"
//               name={key}
//               value={inputs[key]}
//               onChange={handleChange}
//             />
//           </div>
//         ))}
//       </div>
//       <button className="calculate-btn" onClick={calculateScore}>
//         Calculate Score
//       </button>
//       {result && <div className="result">Credit Score: {result}</div>}
//     </div>
//   );
// };

// export default CreditScore;
import React, { useState } from "react";
import "./CreditScore.css";
import Img from "./formimg.jpg";
const CreditScore = () => {
  const [inputs, setInputs] = useState({
    annualIncome: 50000,
    outstandingDebt: 200,
    creditMix: 1,
    paymentOfMinAmount: 2,
    interestRate: 10,
    numOfLoan: 2,
    numCreditCard: 0,
    creditHistoryAge: 100,
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: Number(e.target.value) });
  };

  const calculateScore = () => {
    let score = 
      (inputs.annualIncome / 1000) - 
      (inputs.outstandingDebt / 50) + 
      inputs.creditMix * 10 + 
      (inputs.paymentOfMinAmount * 5) - 
      (inputs.interestRate / 2) + 
      (inputs.numOfLoan * 2) + 
      (inputs.numCreditCard * 3) + 
      (inputs.creditHistoryAge / 5);

    if (score > 80) setResult("Very Good");
    else if (score > 50) setResult("Good");
    else setResult("Poor");
  };

  const formatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <div className="page-container">
      <div className="image-section">
        <img src= {Img} alt="Credit card payment" />
      </div>
      <div className="form-section">
      <div className="credit-calculator">
        <h2>Credit Score Calculator</h2>
      <div className="form">
        {Object.keys(inputs).map((key) => (
          <div key={key} className="input-group">
            <label>{formatLabel(key)}</label>
            <input
              type="number"
              name={key}
              value={inputs[key]}
              onChange={handleChange}
              placeholder={`Enter ${formatLabel(key)}`}
            />
          </div>
        ))}
      </div>
      <button className="calculate-btn" onClick={calculateScore}>
        Calculate Score
      </button>
      {result && <div className="result">Credit Score: {result}</div>}
    </div>
    </div>
    </div>
    
  );
};

export default CreditScore;