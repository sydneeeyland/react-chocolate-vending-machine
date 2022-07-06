// @desc Package
import React from 'react'

// @desc Components
import Coins from '../Components/Coins';

function Home() {
  return (
    <React.Fragment>
        <main className='container-fluid mt-3'>
            <article className='container'>
                <section className='d-flex justify-content-center align-items-center'>
                    <h1>Chocolate Vending Machine</h1>
                </section>
                <section>
                    <Coins />
                </section>
                
            </article>
        </main>
    </React.Fragment>
  )
}

export default Home