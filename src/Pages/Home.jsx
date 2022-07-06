// @desc Package
import React from 'react'

// @desc Components
import Coins from '../Components/Coins';

function Home() {
  return (
    <React.Fragment>
        <main className='container-fluid mt-3'>
            <section className='container'>
                <h1>Testing</h1>
                <Coins />
            </section>
        </main>
    </React.Fragment>
  )
}

export default Home