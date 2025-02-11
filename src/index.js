import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Homepage from './landing_page/home/Homepage';
import Products from './landing_page/product/Products';
import TableauDashboard from "./landing_page/viewAnalytics/TableauDashboard";
// import Pricing from './landing_page/pricing/Pricing';
// import LearningCenter from './landing_page/learning_center/Learning_center';
import About from './landing_page/about/About';
import NotFound from './landing_page/NotFound';
import SignUp from "./landing_page/signUp/SignUp";
import SignIn from "./landing_page/signUp/SignIn";
import LogIn from './landing_page/signUp/LogIn';
import FraudDetectionForm from "./landing_page/product/FraudDetectionForm";
import BudgetingForm from "./landing_page/product/BudgetingForm";
import reportWebVitals from './reportWebVitals'; // Ensure this file exists

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        {/* <Route path="/learning-center" element={<LearningCenter />} /> */}
        <Route path="/About" element={<About />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} /> 
        <Route path="/fraud-detection-form" element={<FraudDetectionForm />} />
        <Route path="/budgeting-form" element={<BudgetingForm />} /> 
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/TableauDashboard" element={<TableauDashboard />} />
        <Route path="FraudDetectionForm" element={<FraudDetectionForm />} />
        <Route path="BudgetingForm " element={<BudgetingForm  />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// Measure performance
reportWebVitals();// import React, {useState} from 'react';
// 
// 
// 
// import reportWebVitals from './reportWebVitals';
// 
// 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
