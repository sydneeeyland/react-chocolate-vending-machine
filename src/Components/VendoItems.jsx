import React from 'react'

function VendoItems({items}) {
    console.log(items);
    return (
        <React.Fragment>
            {
                items.map((x) => {
                    return (
                        <>
                            <div className='card'>
                                <img src='' className='card-img-top' alt='' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{x.name}</h5>
                                </div>
                            </div>
                        </>
                    )
                })
            }

            asd
        </React.Fragment>
    )
}

export default VendoItems