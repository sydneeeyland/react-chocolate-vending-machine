import React from 'react'
import { NavLink } from "react-router-dom";

function Wizard() {
  return (
    <React.Fragment>
      <section className="row col-12">
        <article className="col bg text-center shrink-1">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-danger" : "text-dark"
            }
          >
            <h5>Choose Product</h5>
          </NavLink>
        </article>
        <article className="col bg text-center">
          <NavLink to="/"> / </NavLink>
        </article>
        <article className="col bg text-center">
          <NavLink
            to="/dispense"
            className={({ isActive }) =>
              isActive ? "text-danger" : "text-dark"
            }
          >
            Dispense
          </NavLink>
        </article>
      </section>
    </React.Fragment>
  );
}

export default Wizard