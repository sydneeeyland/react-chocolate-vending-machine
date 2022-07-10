// @desc Package
import React from 'react'

// @desc Rendering Pages
import { Outlet } from 'react-router-dom'

// @desc Components
import Wallet from '../Components/Wallet';

function Main() {
  return (
    <React.Fragment>
      <main id="content" className="pt-5rem text-center">
        <section className="container-fluid">
          <article className="container">
            <Outlet />
          </article>
        </section>
      </main>

      <section className="container-fluid bg-gray">
        <article className="container">
          <Wallet />
        </article>
      </section>
    </React.Fragment>
  );
}

export default Main