// @desc Package
import React from "react";

// @desc Helper 
import { MakePurchase } from '../Service/Helper';

function Drawer({ items }) {
  const Purchase = (id) => {
    MakePurchase(id);
  };
  return (
    <React.Fragment>
      <div
        key={items ? items.id : ''}
        className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 pb-4"
        data-testid={items ? ('product-' + items.id) : ''}
      >
        <a
          key={items ? items.id : ''}
          className="text-decoration-none text-dark"
          href="#"
          onClick={() => Purchase(items.id)}
        >
          <div className="card shadow-sm">
            <div className="text-center">
              <img
                src={ items ? items.image : ''}
                className="img-fluid"
                width="200"
                height="150"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{items ? items.title : ''}</h5>
              <h6>{items ? items.description : ''}</h6>
            </div>
            <div className="card-footer">
              <section className="row col-xxl-12">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col mx-auto py-2">
                  <img src={items ? items.categoryLogo : ''} height="30" data-testid={items ? ('img-' + items.id) : ''} />
                  <span className="fw-bold px-1 py-1">{items ? items.category : ''}</span>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col mx-auto">
                  <section className="float-end">
                    <article className="d-flex gap-1">
                      <h4 className="pt-1">$</h4>
                      <p className="pricing">{items ? items.price : ''}</p>
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

export default Drawer;
