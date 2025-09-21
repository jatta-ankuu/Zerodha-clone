import React from 'react';
function Pricing() {
    return ( 
       <div className='container p-4' style={{marginTop:"-4rem"}}>
        <div className='row p-3'>
            <div className='col-4'>
                <h1 className='mb-4'>Unbeatable Pricing</h1>
                <p>We poineered the concet of discount broking and price transparency in india. Flat fees and no hidden charges</p>
                 <a style={{textDecoration:"none"}} href=''>See Pricing:-</a>
            </div>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className='row'>
                    <div className='col border p-3'>
                        <h1 className='mb-3'>₹0</h1>
                        <p>Free equity delivery <br/> direct mutual funds</p>
                    </div>
                    <div className='col border p-3'>
                        <h1 className='mb-3'>₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Pricing;