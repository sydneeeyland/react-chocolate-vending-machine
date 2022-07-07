// @desc Package
import React from 'react'

// @desc Components
import Drawer from '../Components/Drawer';

// @desc Dummy data
import Data from '../Data/Dummy.json';

function Home() {
    return (
      <React.Fragment>
        <main className="container-fluid">
            <article className="container">
                <div className="row col-xxl-12">
                    { Data.chocobar.map(x => <Drawer items={(x)} key={x.id} />) }
                </div>
            </article>
        </main>
      </React.Fragment>
    );
}

export default Home