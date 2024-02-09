import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div>
      <Header/>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
