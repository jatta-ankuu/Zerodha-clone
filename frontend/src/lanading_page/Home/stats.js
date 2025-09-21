import React from 'react';
function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
            <div className='col-6 '>
                <h1 className='mb-5'>Trust with Confidence</h1>
                <h2 className='fs-4'>Custumer 1st Always</h2>
                <p className='text-muted'>That's why 1.3+ crore custumer trust Zerodha with 3.5+lakh crore worth of equity investment</p>
                <h2 className='fs-4'>No spam No gimmicks</h2>
                <p className='text-muted'>No gimmicks ,spam,"gamification",or annoying push notification High quality apps that you use at your pace,the way you like</p>
                <h2 className='fs-4'>The Zerodha Universe</h2>
                <p className='text-muted'>Not just the app , but the ecosystem,Our investment in 30+ fintech startup offers you tailored service specific to you need</p>
                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted'>With initiative like Nudge and Kill Switch , We don't just facilitate transaction, but actively help you to better with your money </p>
            </div>
            <div className='col-6 '>
                <img style={{width:"90%"}} src='assests\ecosystem.png' alt='Img not load'></img>
        <div className='p-5 text-center' >
            <a style={{textDecoration:"none", marginRight:"1.5rem"}} href=''>Explore the product:-</a>
                <a style={{textDecoration:"none"}} href=''>Try Kite demo:-</a>
        </div>
            </div>
            </div>
        </div>
     );
}

export default Stats;