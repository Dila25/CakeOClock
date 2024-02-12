import React from "react";
import Header from "../Header/Header";
import Logo from "../Header/img/logo.png";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="background">
        <Header />
        <div className="login-container">
          <div className="login-box">
            <img src={Logo} alt="Logo" className="login-logo" />
            <h2 className="login-heading">Log in</h2>
            <form className="login-form">
              <div className="login-form-group">
                <label htmlFor="email" className="login-label">
                  USER NAME/ EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="login-form-input"
                />
              </div>
              <div className="login-form-group">
                <label htmlFor="password" className="login-label">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="login-form-input"
                />
              </div>
              <a href="/Forgotpass" className="login-forgot-password">
                Forgot Your Password?
              </a>
              <div className="login-btn">
                <button type="submit" className="login-button">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
