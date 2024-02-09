import React from "react";
import "./header.css";
import Logo from "./img/logo.png";
function Header() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" className="cakelogo" />
        </div>
        <div className="nav-names">
          <a href="/" className="nav-item" >Home</a>
          <a href="/" className="nav-item">Cake</a>
          <a href="/" className="nav-item">About</a>
          <a href="/" className="nav-item">Contact</a>
        </div>
        <div className="cart-icon">Cart Icon</div>
      </div>
    </div>
  );
}

export default Header;
