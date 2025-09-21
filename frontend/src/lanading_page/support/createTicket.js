import React from 'react';

function CreateTicket() {
    return ( <>
    <div className='container mt-5'>
        <div className='row  p-4'>
            <h3>To create a ticket, select a relavent topic</h3>
            <div className='col-4 mt-5 mb-5 p-5'>
                <h4 className='mb-5'><i class="fa-solid fa-circle-plus"></i>Account opening</h4>
                <a style={{textDecoration:"none"}} href=''>Online Account Opening</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Offline Account Opening</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Company, Partnership and HUF Account Opening</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>NRI Account Opening</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Charges at Zerodha</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Zerodha IDFC FIRST Bank 3-in-1 Account</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Getting Started</a>
            </div>
            <div className='col-4 mt-5  p-5'>
                <h4 className='mb-5'><i class="fa-solid fa-user"></i>Zerodha account</h4>
                   <a style={{textDecoration:"none"}} href=''>Login Credentials</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Account Modification and Segment Addition</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>DP ID and bank details</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Your Profile</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Transfer and conversion of shares</a>
            </div>
            <div className='col-4 mt-5  p-5'>
                <h4 className='mb-5'><i class="fa-solid fa-signal"></i>Your Zerodha Account</h4>
                 <a style={{textDecoration:"none"}} href=''>Margin/leverage, Product and Order types</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Kite Web and Mobile</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Trading FAQs</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Sentinel</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Kite API</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Pi and other platform</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Stockreports+</a>
                 <br/><br/>
                <a style={{textDecoration:"none"}} href=''>GTT</a>
            </div>
             <div className='col-4 mt-2  p-5'>
                <h4 className='mb-5'><i class="fa-solid fa-book"></i>Funds</h4>
                 <a style={{textDecoration:"none"}} href=''>Adding Funds</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Fund Withdrawal</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>eMandates</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Adding Bank Accounts</a>
            </div>
             <div className='col-4 mt-2  p-5'>
                <h4 className='mb-5'><i class="fa-solid fa-circle-notch"></i>Console</h4>
                 <a style={{textDecoration:"none"}} href=''>Reports</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Ledger</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Portfolio</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>IPO</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Referral Program</a>
            </div>
             <div className='col-4 mt-2  p-5'>
                <h4 className='mb-5'><i class="fa-solid fa-circle"></i>Coin</h4>
                 <a style={{textDecoration:"none"}} href=''>Understanding Mutual Funds</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>About Coin</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Buying and Selling</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Starting an SIP</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Managing your Portfolio</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Coin App</a>
                <br/><br/>
                <a style={{textDecoration:"none"}} href=''>Moving to Coin</a>
            </div>
        </div>
    </div>
    </> );
}

export default CreateTicket;