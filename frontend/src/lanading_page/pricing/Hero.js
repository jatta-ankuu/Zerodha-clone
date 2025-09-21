import React from 'react';

function Hero() {
    return ( 
       <div className='container p-5'>
        <div className='row '>
            <div className='text-center border-bottom mb-5'>
            <h2 >Pricing</h2>
            <p >Free eqitity investment and flat ₹20 trady and F&O trades</p>
            </div>
            <div className='col  '>
                <img src='\assests\pricingMF.svg' alt='Img not load'></img>
                <h3>Free equity delivered</h3>
                <p className="text-muted">All equity delivery(NSE,BSE),are absolutely free-- ₹0 Brokerage</p>
            </div>
            <div className='col'>
                <img src='\assests\intradayTrades.svg' alt='Img not load' ></img>
                <h3>Intraday and F&O Trades</h3>
                <p className="text-muted">Flat Rs.20 or 0.03%(whichever is lower) per executed order on intraday trades across equity,currency, and commodity trades</p>
            </div>
            <div className='col'>
                <img src='\assests\pricingMF.svg' alt='Img not load'></img>
                <h3 className="text-center">Free directives</h3>
                <p className="text-muted  text-center">All direct mutual funds</p>
            </div>
        </div>
       </div>
     );
}

export default Hero;