import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Cart from "./Components/Cart/Cart";
import ProductList from "./Components/ProductList/ProductList";
import Payment from "./Components/Payment/Payment";
import Products from "./Components/Products/Products";
import Request from "./Components/Request/Request";

function App() {
  return (
    <div>
      
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productlist" element={<ProductList/>} />  
          <Route path="/request" element={<Request />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
