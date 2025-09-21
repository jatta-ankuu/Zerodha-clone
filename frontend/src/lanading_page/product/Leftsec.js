import React from 'react';

function Leftsection({imgUrl, productName, productDescription,tryDemo,googlePlay,appStore}) {
    return ( 
       <div className='container mb-5'>
        <div className='row'>
            <div className='col'>
                <img  className='p-3' src={imgUrl} alt='Img not load'></img>
            </div>
            <div className='col text-center p-5'>
                <h3>{productName}</h3>
                <p className='p-3 fs-6'>{productDescription}</p>
                <div style={{marginBottom:"5px"}}>
                    <a style={{marginRight:"40px"}} href={tryDemo}>Try demo:-</a>
                <a href={tryDemo}>Try demo:-</a>
                </div>
                <div>
                     <a style={{marginRight:"40px"}} href={googlePlay}><img src='/assests\googlePlayBadge.svg'alt='Img not load'></img></a>
                <a href={appStore}><img src='\assests\appstoreBadge.svg'></img></a>
                </div> 
               
            </div>
        </div>
       </div>
     );
}

export default Leftsection;