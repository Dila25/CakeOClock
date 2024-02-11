import React from 'react';
import Header from "../Header/Header";
import "./Payment.css";

function Payment() {
  return (
    <div>
      <div className="background">
        <Header/>
        <div className="payment-content">
          <h1 className="payment-heading">Payments</h1>
          <hr className="payment-hr" />
          <div className="payment-sections">


            <div className="payment-section-left">
              <label htmlFor="pickup" className="payment-label">
                <input type="radio" id="pickup" name="payment-method" className="payment-radio" />
                Pickup from Outlet
              </label>
              <br></br> <br></br>
              {/* Dropdown */}
              <select className="payment-dropdown">
                <option value="fixed">Fixed</option>
                <option value="variable">Variable</option>
              </select>
              <br></br> <br></br>
              <label htmlFor="home-delivery" className="payment-label">
                <input type="radio" id="home-delivery" name="payment-method" className="payment-radio" />
                Home Delivery
              </label>
              <br></br> <br></br>
              {/* Address Box */}
              <div className="payment-address-box">
                <p>No 59,<br />
                   Hapugala road,<br />
                   Wakwalla,<br />
                   Galle.<br />
                   0773084850</p>
                <a href="#" className="payment-edit-link">Edit</a>
              </div>
              <br></br> <br></br>
              {/* Date Picker */}
              <input type="date" id="payment-date" className="payment-date-input" />
              <br></br> <br></br>
              {/* Message Box Input */}
              <textarea id="payment-message" className="payment-message-input" placeholder="Enter your message..."></textarea>
            </div>





            <div className="payment-section-right">
              <div className="payment-form-box">
                <h2 className="payment-form-heading">Payment</h2>
                <hr className="payment-form-hr" /> <br></br><br></br>
                <label htmlFor="name" className="payment-form-label">Pay with:</label>
                <div className="payment-method-options">
                  <input type="radio" id="credit-card" name="payment-option" className="payment-method-radio" />
                  <label htmlFor="credit-card" className="payment-method-label"> Card</label>
                  <br />
                  <input type="radio" id="paypal" name="payment-option" className="payment-method-radio" />
                  <label htmlFor="paypal" className="payment-method-label">Bank</label>
                  <br />
                  <input type="radio" id="paypal" name="payment-option" className="payment-method-radio" />
                  <label htmlFor="paypal" className="payment-method-label">Transfer</label>
                  <br />
                  {/* Add more payment options as needed */}
                </div><br></br><br></br>
                <label htmlFor="name" className="payment-form-label">Name</label>
                <input type="text" id="name" className="payment-form-input" /><br></br><br></br>

                 <div className="payment-expiration-cvv">
                  <label htmlFor="expiration-date" className="payment-form-label">Expiration Date</label>
                  <input type="text" id="expiration-date" className="payment-form-input" />

                  <label htmlFor="cvv" className="payment-form-label">CVV</label>
                  <input type="text" id="cvv" className="payment-form-input" />
                </div><br></br><br></br>


                <div className="payment-save-confirmation">
                  <input type="radio" id="save-confirmation" name="save-confirmation" className="payment-save-radio" />
                  <label htmlFor="save-confirmation" className="payment-save-label">Save for future payments</label>
                </div>
                <button className="payment-button">Pay Now</button><br/>
                <div className="payment-description">
                    <p className="payment-description-text">
                      Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                    </p>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
