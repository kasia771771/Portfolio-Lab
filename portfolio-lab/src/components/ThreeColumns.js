import React from 'react'

export default function ThreeColumns() {
    
    return (
        <div className='three-columns'>   
            <div className='three-columns-wrapper container'>
                <div className='single-column'>
                    <h2 className="col-count">
                        {10}
                    </h2>
                    <p className='col-title'>
                        oddanych worków
                    </p>
                    <p className='col-description'>
                        Lorem ipsum dolor sit amet, consectetur adipisc
                        Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className='single-column'>
                    <h2 className='col-count'>
                        {5}
                    </h2>
                    <p className='col-title'>
                        wspartych organizacji
                    </p>
                    <p className='col-description'>
                        Lorem ipsum dolor sit amet, consectetur adipisc
                        Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className='single-column'>
                    <h2 className="col-count">
                        {7}
                    </h2>
                    <p className='col-title'>
                        zorganizowanych zbiórek
                    </p>
                    <p className='col-description'>
                        Lorem ipsum dolor sit amet, consectetur adipisc
                        Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
            </div>
        </div>
    )
}