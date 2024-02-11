import React from 'react';
import Header from "../Header/Header";
import Logo from "../Header/img/logo.png";
import "./SignUp.css";

function SingUp() {
  return (
    <div>

      
<div className="background">
        <Header/>
    <div className="login-container">
  
        
        <div className="login-box">
          <img src={Logo} alt="Logo" className="login-logo" />
          <h2 className="login-heading">Sign Up</h2>
          
            <div className="login-form-group">
            
            <form className="signup-form">
              <table className="signup-table">
                <tbody>
                  <tr>
                    <td>
                      <div className="signup-form-group">
                        <label htmlFor="first-name" className="signup-label">First Name</label>
                        <input type="text" id="first-name" placeholder="First Name" className="signup-form-input" />
                      </div>
                    </td>
                    <td>
                      <div className="signup-form-group">
                        <label htmlFor="last-name" className="signup-label">Last Name</label>
                        <input type="text" id="last-name" placeholder="Last Name" className="signup-form-input" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="signup-form-group">
                        <label htmlFor="location" className="signup-label">Location</label>
                        <input type="text" id="location" placeholder="Location" className="signup-form-input" />
                      </div>
                    </td>
                    <td>
                      <div className="signup-form-group">
                        <label htmlFor="contact-number" className="signup-label">Contact No</label>
                        <input type="text" id="contact-number" placeholder="Contact Number" className="signup-form-input" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="signup-form-group">
                        <label htmlFor="username" className="signup-label">Username/Email</label>
                        <input type="text" id="username" placeholder="Username" className="signup-form-input" />
                      </div>
                    </td>
                    <td>
                      <div className="signup-form-group">
                        <label htmlFor="password" className="signup-label">Password</label>
                        <input type="password" id="password" placeholder="Password" className="signup-form-input" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='signup-btn'>
            <button type="submit" className="login-button">Create</button>
            </div>
            </form>



           
            </div>
          
        </div>
      </div>
    </div>



    </div>
  )
}

export default SingUp