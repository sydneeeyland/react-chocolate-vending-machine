import React from 'react'
import { NavLink } from 'react-bootstrap'

function Wizard() {
  return (
    <React.Fragment>
      <section className="row col-12">
        <article className="col bg text-center">
          <NavLink>
            <h5>Wallet</h5>
          </NavLink>
        </article>
        <article className="col bg text-center">
          <NavLink> / </NavLink>
        </article>
        <article className="col bg text-center shrink-1">
          <NavLink>Choose</NavLink>
        </article>
        <article className="col bg text-center">
          <NavLink> / </NavLink>
        </article>
        <article className="col bg text-center">
          <NavLink>Dispense</NavLink>
        </article>
      </section>
    </React.Fragment>
  );
}

export default Wizard