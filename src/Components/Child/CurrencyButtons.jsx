// @desc Package
import React from 'react'

// @desc Dummy data
import Denomination from '../../Data/Denomination.json';

function CurrencyButtons({testingdata}) {

  return (
    <React.Fragment>
      <section className="align-items-center pt-4">
        {Denomination.currency.map((x) => (
          <button
            key={x.id}
            className="btn btn-success rounded-circle mx-4 py-2"
            value={x.value}
            onClick={(e) => testingdata(e.target.value)}
          >
            {x.name}
          </button>
        ))}
      </section>
    </React.Fragment>
  );
}

export default CurrencyButtons