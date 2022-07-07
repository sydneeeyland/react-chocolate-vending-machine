import React from 'react'

function Drawer({items}) {
    return (
      <React.Fragment>
        <div
          key={items.id}
          className="col-xxl-3 col-xl-3 col-lg-4 col-md-5 pb-4"
        >
          <a key={items.id} className="text-decoration-none text-dark" href="/">
            <div className="card shadow-sm">
              <div className="text-center">
                <img
                  src={items.image}
                  className="img-fluid"
                  width="200rem"
                  height="150rem"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                <h6>{items.description}</h6>
              </div>
              <div className="card-footer">
                <section className="row col-xxl-12">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 px-3 py-2">
                    <img src={items.categoryLogo} height="30" />
                    <span className="fw-bold px-1 py-1">{items.category}</span>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <section className="float-end">
                      <article className="d-flex gap-1">
                        <h4 className='pt-1'>$</h4>
                        <p className="pricing">{items.price}</p>
                      </article>
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </a>
        </div>
      </React.Fragment>
    );
}

export default Drawer