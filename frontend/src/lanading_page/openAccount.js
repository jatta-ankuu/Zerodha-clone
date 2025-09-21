import React from 'react';
import {Link} from 'react-router-dom';
function OpenAccount() {
    return (
        <div className='container p-5 '>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha Account</h1>
                <p>Modern platform and app , ₹0 investements, and flat ₹20 intraday and F&O trades</p>
                <Link to="/sign-up"><button className='p-2 btn btn-primary' style={{width:"20%", margin:"0 auto"}}>Sign-up Now</button></Link>
            </div>
        </div>
    );
}

export default OpenAccount;