// @desc Package
import React from 'react'

// @desc Compiled Images
import { ChocolateBar, Insert, Tap } from '../Assets';

function Instruction() {
  return (
    <React.Fragment>
      <article className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col text-center">
        <img src={Insert} height="95" width="95" className="img-fluid" />
        <p className="pt-2 fw-bold">
          <span className="num-circle mx-2">1</span>
          <span>Insert coins or a dollar.</span>
        </p>
      </article>
      <article className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col text-center">
        <img src={Tap} height="95" width="95" />
        <p className="pt-2 fw-bold">
          <span className="num-circle mx-2">2</span>
          <span>Choose your favorite Vegan Chocolate bar.</span>
        </p>
      </article>
      <article className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col text-center">
        <img src={ChocolateBar} height="95" width="95" />
        <p className="pt-2 fw-bold">
          <span className="num-circle mx-2">3</span>
          <span>Enjoy your vegan chocolate bar before it melts.</span>
        </p>
      </article>
    </React.Fragment>
  );
}

export default Instruction