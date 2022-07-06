// @desc Package
import React from 'react'

// @desc Components
import Coins from '../Components/Coins';
import VendoItems from '../Components/VendoItems';

function Home() {

    const items = [
        { name: 'Caramel', price: '2.50' }, 
        { name: 'Hazelnut', price: '3.10' },
        { name: 'Organic Raw', price: '2.00' }
    ]

    return (
        <React.Fragment>
            <main className='container-fluid mt-3'>
                <article className='container'>

                    <section className='d-flex justify-content-center align-items-center'>
                        <h1>Chocolate Vending Machine</h1>
                    </section>

                    <section>
                        <VendoItems items={items} />
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