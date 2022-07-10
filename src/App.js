// @desc Package
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @desc Pages
import Products from "./Pages/Products";

// @desc Layout
import Main from "./Layout/Main";
import Dispense from "./Pages/Dispense";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/dispense" element={<Dispense />} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
