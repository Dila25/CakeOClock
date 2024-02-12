import React from 'react';
import Header from "../Header/Header";
import "./Request.css"; // Use the appropriate CSS file for your request page

function Request() {
  return (
    <div className="background">
      <Header/>
      <div className="payment-content">
          <h1 className="payment-heading">Bake your cake</h1>
          <hr className="payment-hr" />

        <div className="request-section-left">
          <label htmlFor="request-type" className="payment-label">Category</label>
          <select id="request-type" className="request-dropdown">
            <option value="fixed">Fixed</option>
            <option value="variable">Variable</option>
          </select>

          <input type="date" id="request-date" className="request-date-input" />

          <textarea id="request-message" className="request-message-input" placeholder="Enter your message..."></textarea>

          <input type="file" id="request-image" className="request-image-input" />
        </div>

        <div className="request-section-right">
          <div className="pickup-heading">
            
          </div>
          <div className="request-pickup-radio">
            <input type="radio" id="pickup-option" name="delivery-option" className="request-radio" />
            <label htmlFor="pickup-option" className="request-radio-label">Pickup from Outlet</label>
          </div>

          
          <select id="delivery-option" className="request-dropdown">
            <option value="fixed">Fixed</option>
            <option value="variable">Variable</option>
          </select>

          <div className="delivery-heading">
            
          </div>
          <div className="request-delivery-radio">
            <input type="radio" id="home-delivery" name="delivery-option" className="request-radio" />
            <label htmlFor="home-delivery" className="request-radio-label">Home Delivery</label>
          </div>

          <div className="request-address-box">
            <p>No 59,<br />
              Hapugala road,<br />
              Wakwalla,<br />
              Galle.<br />
              0773084850</p>
            <a href="#" className="request-edit-link">Edit</a>
          </div>

          <div className="contact-number-box">
            <p>Contact Numbers:<br />
              0773084850<br />
              0773084851</p>
          </div>
        </div>

        



      </div>
    </div>
  );
}

export default Request;
