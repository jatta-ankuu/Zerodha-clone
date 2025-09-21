import React from 'react';
function Rightsecton({imgUrl, productName, productDescription,tryDemo,googlePlay,appStore}) {
    return ( 
         <div className='container mt-5'>
        <div className='row '>
            <div className='col text-center mt-5'>
                <h3>{productName}</h3>
                <p className='fs-6 mt-5'>{productDescription}</p>
                    <a href={tryDemo}>Learn more:-</a>
            </div>
            <div className='col'>
                <img   src={imgUrl} alt='Img not load'></img>
            </div>
        </div>
       </div>
     );
}

export default Rightsecton;