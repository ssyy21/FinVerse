import React, { useState } from 'react';
import './BudgetingForm.css';
import image from "./budget.jpg"
const BudgetingForm = () => {
  const [formData, setFormData] = useState({
    product_type: '',
    net_quantity: '',
    gross_sales: '',
    discounts: '',
    returns: '',
    total_net_sales: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const calculateNetSales = () => {
    const grossSales = parseFloat(formData.gross_sales) || 0;
    const discounts = parseFloat(formData.discounts) || 0;
    const returns = parseFloat(formData.returns) || 0;
    return (grossSales - discounts - returns).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      total_net_sales: calculateNetSales()
    };
    console.log('Form submitted:', finalData);
    // Add your form submission logic here
  };

  return (
    <div className="p-5 mb-3" style={{backgroundcolor : "#FEFBF3"}}>
    <div className="sales-page-container p-5 mt-5 mb-5">
      {/* Left side - Image */}
      <div className="image-container">
        <img
          src= {image}
          alt="Analytics Dashboard"
          className="dashboard-image"
        />
      </div>

      {/* Right side - Form */}
      <div className="form-container">
        <form onSubmit={handleSubmit} className="sales-form">
          <h2 className="form-title">Sales Data Entry</h2>

          {/* Product Type */}
          <div className="form-group">
            <label className="form-label">
              Product Type
            </label>
            <input
              type="text"
              name="product_type"
              value={formData.product_type}
              onChange={handleInputChange}
              placeholder='Product Category/ Product Name'
              className="form-input"
              required
            />
          </div>

          {/* Net Quantity */}
          <div className="form-group">
            <label className="form-label">
              Net Quantity
            </label>
            <input
              type="number"
              name="net_quantity"
              value={formData.net_quantity}
              onChange={handleInputChange}
              placeholder='For example:Number of Units Sold'
              className="form-input"
              required
            />
          </div>

          {/* Gross Sales */}
          <div className="form-group">
            <label className="form-label">
              Gross Sales
            </label>
            <input
              type="number"
              step="0.01"
              name="gross_sales"
              value={formData.gross_sales}
              onChange={handleInputChange}
              placeholder='For example: Total Revenue Before Discounts'
              className="form-input"
              required
            />
          </div>

          {/* Discounts */}
          <div className="form-group">
            <label className="form-label">
              Discounts
            </label>
            <input
              type="number"
              step="0.01"
              name="discounts"
              value={formData.discounts}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          {/* Returns */}
          <div className="form-group">
            <label className="form-label">
              Returns
            </label>
            <input
              type="number"
              step="0.01"
              name="returns"
              value={formData.returns}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          {/* Total Net Sales (Calculated) */}
          <div className="form-group">
            <label className="form-label">
              Total Net Sales
            </label>
            <input
              type="number"
              step="0.01"
              value={calculateNetSales()}
              className="form-input disabled"
              disabled
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default BudgetingForm;