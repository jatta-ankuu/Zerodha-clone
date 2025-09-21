import React from 'react';
 function Award () {
    return ( <>
    <div className='container p-5 mt-5'>
      <div className='row'>
         <div className='col-6 p-5'>
            <img src='assests/largestBroker.svg' alt='Broker Img no load'></img>
         </div>
         <div className='col-6 p-5 mt-5'>
            <h1>Largest Stock Broker in India</h1>
            <p>2+ millioin  Zerodha client contribute to over 15% of all the volume in India daily trading & investing in :
            </p>
            <div className='row mt-5'>
               <div className='col-6'>
                  <ul>
                     <li><p>Future & Option</p></li>
                      <li><p>Comodity derivatives</p></li>
                       <li><p>Currency derivatives</p></li>
                  </ul>
               </div>
               <div className='col-6'>
                  <ul>
                     <li><p>Stock & IPOs</p></li>
                      <li><p>Direct mutual funds</p></li>
                       <li><p>Brand and Govt.</p></li>
                  </ul>
               </div>
            </div>
            <img style={{width:"90%"}} src='assests\pressLogos.png' alt='Img not load'></img>
         </div>
      </div>
    </div>
    </> );
 }
 
 export default Award;