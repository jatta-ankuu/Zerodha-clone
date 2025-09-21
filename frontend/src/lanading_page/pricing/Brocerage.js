import React from 'react';

function Bro() {
    return ( 
      <div className='container mt-5 border-top'>
        <div className='row p-4'>
        <div className='col-8'>
          <a style={{textDecoration:"none"}} href=""><h3 >Brokerage calculator</h3></a>
            <li><p className='text-muted'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</p></li>
             <li><p className='text-muted'>Digital contract notes will be sent via e-mail.</p></li>
              <li><p className='text-muted'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</p></li>
               <li><p className='text-muted'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</p></li>
                <li><p className='text-muted'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</p></li>
                <li><p className='text-muted'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p></li>
        </div>
        <div className='col-4'>
            <a style={{textDecoration:"none"}} href=""><h3 >List of charges</h3></a>
        </div>
                </div>

      </div>
     );
}

export default Bro;