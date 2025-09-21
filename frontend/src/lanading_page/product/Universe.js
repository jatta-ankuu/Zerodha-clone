import React from 'react';
function Universal() {
    return (  
        <div className='container'>
            <div className='row text-center p-5'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and  investment experience even further with our partner platform</p>
                <div className='col-4 mb-3 p-5'>
                    <img style={{width:"90%"}} src='/assests\smallcaseLogo.png' alt='Img not load'></img>
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 mb-3 p-5'>
                    <img style={{width:"90%"}}  src='\assests\streakLogo.png' alt='Img not load'></img>
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-4 mb-3 p-5'>
                    <img style={{width:"90%"}}  src='\assests\sensibullLogo.svg' alt='Img not load'></img>
                    <p className='text-small text-muted'>Option trading platform</p>
                </div>
                <div className='col-4 mb-3 p-5'>
                    <img style={{width:"90%"}}  src='\assests\zerodhaFundhouse.png' alt='Img not load'></img>
                    <p className='text-small text-muted'> Asset management</p>
                </div>
                <div className='col-4 mb-3 p-5'>
                    <img style={{width:"90%"}}  src='\assests\goldenpiLogo.png' alt='Img not load'></img>
                    <p className='text-small text-muted'>Bond tradin platform</p>
                </div>
                <div className='col-4 mb-3 p-5'>
                    <img style={{width:"90%"}}  src='\assests\dittoLogo.png' alt='Img not load'></img>
                    <p className='text-small text-muted'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary' style={{width:"20%", margin:"0 auto"}}>Sign-up Now</button>
            </div>
        </div>
    );
}

export default Universal;