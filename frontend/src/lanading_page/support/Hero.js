import React from 'react';
function Hero() {
    return ( 
       <div className='container-fluid mt-5 p-5 bhai'>
        <div className='row '>
            <div className='col-9 p-5'>
                <h3>Support portal</h3>
            </div>
            <div className='col-3 p-3'>
                <a href=''><h4>Track Tickets</h4></a>
            </div>
            <div className='col-5 p-5'>
                <h6>Search for an answer or browse help topics <br/> to create a ticket</h6>
                <div class="input-group mb-3">
              <input class="form-control fs-3" placeholder='eg.how do,I activate F&O' /></div>
             <a href=''>Track account opening   </a>
             <a href=''>Track segment activation   </a>
             <br/>
             <a href=''>Intraday margin   </a>
             <a href=''>Kite user manual </a>
            </div>
            <div className='col-2'></div>
             <div className='col-5'>
               <h4>Featured</h4>
               <br/>
               <ol>
                <li><a href=''>Current Takeover and Delisting - January 2024 </a></li>
                <br/>
                <li><a href=''>Latest Intraday laverages -Mis and CO</a></li>
               </ol>
               </div>
        </div>
       </div>
     );
}

export default Hero;