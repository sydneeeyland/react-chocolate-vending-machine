// @desc Package
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @desc Styling
import "./App.css";

// @desc Pages
import Home from "./Pages/Products";

// @desc Layout
import Main from "./Layout/Main";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route element={<Main />}>
            <Route path="/products" element={<Home />}></Route>
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
