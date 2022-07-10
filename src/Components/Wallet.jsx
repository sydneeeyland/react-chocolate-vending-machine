// @desc Package
import React, { useEffect } from 'react'
import { useState } from 'react';
import CurrencyButtons from './Child/CurrencyButtons';

// @desc Component
import Instruction from './Instruction';

function Wallet() {
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const getBalance = localStorage.getItem("Balance");
    getBalance > 0 ? setBalance(parseFloat(getBalance).toFixed(2)) : 0;
  }, [balance]);

  const CurrentBalance = (value) => {
    let current = eval(parseFloat(balance) + parseFloat(value));
    localStorage.setItem('Balance', current);
    setBalance(current);
  }

  return (
    <React.Fragment>
      <section className="row col-xxl-12 px-4 py-4">
        <Instruction />
        <article className="row col-xxl-12">
          <div className="col-xxl-8 px-3 py-3">
            <div className="text-center">
              <span className="fw-bold">Deposit coins/dollar</span>
            </div>
            <div className="text-center">
              <CurrencyButtons CallBack={CurrentBalance} />
            </div>
          </div>
          <div className="col-xxl-4 px-3 py-3">
            <div className="text-center">
              <span className="fw-bold">Balance</span>
            </div>
            <div className="text-center pt-4">
              <span id='Balance' className="fw-bold">${parseFloat(balance).toFixed(2)}</span>
            </div>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
}

export default Wallet