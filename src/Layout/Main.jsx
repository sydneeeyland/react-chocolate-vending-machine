// @desc Package
import React from 'react'

// @desc Rendering Pages
import { Outlet } from 'react-router-dom'

// @desc Components
import Wizard from '../Components/Wizard';
import Wallet from '../Overlay/Wallet';

function Main() {
  return (
    <React.Fragment>
      <nav>
        <article className="fixed-top bg-gray py-2">
          <div className="container-fluid">
            <div className="container">
              <Wizard />
            </div>
          </div>
        </article>
      </nav>

      <main id="content" className="pt-5rem text-center">
        <Outlet />
      </main>

      <footer className="fixed-bottom">
        <Wallet />
      </footer>
    </React.Fragment>
  );
}

export default Main