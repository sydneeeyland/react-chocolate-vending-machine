import React from 'react'

function Coins() {
  return (
    <React.Fragment>
      <main className='container-fluid'>
        <section className='container d-flex gap-3'>
          <button className='btn btn-primary'>10c</button>
          <button className='btn btn-primary'>20c</button>
          <button className='btn btn-primary'>50c</button>
          <button className='btn btn-primary'>$1</button>
          <button className='btn btn-primary'>$2</button>
        </section>
      </main>
    </React.Fragment>
  )
}

export default Coins