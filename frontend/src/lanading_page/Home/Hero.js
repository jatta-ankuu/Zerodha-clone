import React from 'react';
import {Link} from 'react-router-dom';
function Hero() {
    return (
        <div className='container p-5 '>
            <div className='row text-center'>
                <img className='mt-5' src='assests/homeHero.png' alt='Opps.! Img not load'></img>
                <h1 className='mt-5'>Invest In Everything</h1>
                <p>Online plateform to invest in stock, derivatives ,mutual funds</p>
                <Link to="/sign-up"><button className='p-2 btn btn-primary' style={{width:"20%", margin:"0 auto"}}>Sign-up Now</button></Link>

            </div>
        </div>
     );
}

export default Hero;