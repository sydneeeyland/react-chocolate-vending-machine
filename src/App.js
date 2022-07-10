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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
